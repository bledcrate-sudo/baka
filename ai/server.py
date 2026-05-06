import json
import uuid
import time
import hashlib
import secrets
from datetime import datetime, date
from pathlib import Path

import httpx
import aiosqlite
from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

# ─── Config ──────────────────────────────────────────────────────────────────
BASE = Path(__file__).parent
ROOT = BASE.parent

with open(BASE / "config.json") as f:
    CFG = json.load(f)

OLLAMA_URL          = CFG["ollama_url"]
MODEL               = CFG["model"]
ADMIN_USER          = CFG.get("admin_username", "admin")
ADMIN_PASS          = CFG["admin_password"]
DB_PATH             = BASE / CFG["db_path"]
TOKEN_EXPIRY        = 30 * 24 * 3600
ADMIN_EXPIRY        = 12 * 3600
MAX_HISTORY_MSGS    = CFG.get("max_history_messages", 12)
MAX_RESPONSE_TOKENS = CFG.get("max_response_tokens", 700)
API_BASE_URL        = CFG.get("api_base_url", "https://integrate.api.nvidia.com/v1")
API_KEY             = CFG.get("api_key", "")
API_MODEL           = CFG.get("api_model", "z-ai/glm4.7")
RUNTIME_SETTINGS    = BASE / "runtime_settings.json"
MODELFILE_PATH      = BASE / "Modelfile"

# ─── Parse system prompt from Modelfile for API backend ──────────────────────
def _parse_system_prompt() -> str:
    """Extract the SYSTEM block from the Ollama Modelfile."""
    try:
        text = MODELFILE_PATH.read_text(encoding="utf-8")
        # Find SYSTEM """..."""
        start_marker = 'SYSTEM """'
        end_marker   = '"""\nPARAMETER'
        start = text.find(start_marker)
        end   = text.find(end_marker, start)
        if start == -1 or end == -1:
            return ""
        return text[start + len(start_marker):end].strip()
    except Exception:
        return ""

SYSTEM_PROMPT = _parse_system_prompt()

# ─── Condensed system prompt for API backends (context-limited models) ────────
_API_PROMPT_PATH = BASE / "api_system_prompt.txt"
API_SYSTEM_PROMPT = _API_PROMPT_PATH.read_text(encoding="utf-8").strip() \
    if _API_PROMPT_PATH.exists() else SYSTEM_PROMPT

# ─── Content Safety Filter ───────────────────────────────────────────────────
import re
import unicodedata
from collections import defaultdict

# ── In-memory session strike tracker ─────────────────────────────────────────
# session_id -> {"strikes": int, "blocked_until": float}
_SESSION_STRIKES: dict[str, dict] = defaultdict(lambda: {"strikes": 0, "blocked_until": 0.0})
_STRIKE_COOLDOWN   = 10 * 60   # 10 min temp-block after 3 strikes
_PERM_BLOCK_THRESHOLD = 6      # after 6 strikes → permanent block for session

def _normalize(text: str) -> str:
    """
    Strip unicode tricks, homoglyphs, l33tspeak, excess whitespace.
    Attackers use: ｃ４, ℂ4, c 4, c-4, c_4, ᴄ4, zero-width chars, etc.
    """
    # NFKC normalization collapses full-width/fancy unicode to ASCII equivalents
    text = unicodedata.normalize("NFKC", text)
    # Remove zero-width and invisible characters
    text = re.sub(r'[​-‏‪-‮⁠-⁤﻿]', '', text)
    # Collapse repeated special chars used to split keywords (c.4, c-4, c 4 → c4)
    text = re.sub(r'(?<=[a-zA-Z0-9])[.\-_\s]+(?=[a-zA-Z0-9])', '', text)
    # l33tspeak substitutions
    l33t = {'@': 'a', '3': 'e', '1': 'i', '0': 'o', '$': 's', '5': 's', '7': 't', '+': 't', '!': 'i'}
    for char, replacement in l33t.items():
        text = text.replace(char, replacement)
    return text.lower()

# ── Jailbreak intent patterns ─────────────────────────────────────────────────
# Covers DAN, character injection, permission claims, persona hijacks,
# prompt injection, authority spoofing, fictional wrappers, gradual escalation triggers
_JAILBREAK_PATTERNS = [
    # Classic DAN variants
    r'\bdan\b', r'do anything now', r'jailbreak',
    r'dan\s*[\d.]+', r'stan\b', r'dude\s+ai', r'evil\s+ai', r'chaos\s+ai',

    # Mode/unlock claims
    r'(developer|god|chaos|evil|unrestricted|sudo|root|admin|override|bypass|raw|free|turbo|ultra|alpha|omega)\s*(mode|version|form)',
    r'(unlock|unfilter|uncensor|disable|bypass|remove|strip|ignore)\s*(filter|safeguard|restrict|rule|limit|block|censor|moderat|safety|guideline)',
    r'(safe\s*mode|content\s*filter|safety\s*system)\s*(off|disabled?|removed?|bypassed?)',

    # Persona/role injection
    r'(act|pretend|play|behave|respond|answer|reply|continue)\s*(as|like|you\s*are|you\'?re)\s*(a|an)?\s*(different|new|another|unrestricted|free|uncensored|evil|dark|shadow|rebel|rogue)',
    r'you\s*are\s*(now|suddenly|officially|hereby)\s*(a|an)?\s*(different|new|another|ai|assistant|bot)',
    r'(roleplay|rp|role\s*play)\s*(as|that|where|a|an)',
    r'(from\s*now\s*on|starting\s*now|for\s*the\s*rest)\s*(you\s*(are|will|must|should|have\s*to))',
    r'(your\s*new\s*(name|identity|role|persona|character)\s*is)',
    r'(switch\s*(to|into)|enter|enable|turn\s*on)\s*(character|persona|mode|role)',

    # Identity erosion
    r'your\s*(true|real|inner|hidden|actual|original|base|core|underlying)\s*(self|personality|nature|identity|purpose)',
    r'(deep\s*down|underneath|at\s*your\s*core)\s*(you|you\'?re)',
    r'(you\s*(don\'?t|do\s*not)\s*(really|actually)\s*(have|care\s*about)\s*(values|rules|ethics|guidelines|restrictions))',
    r'(your\s*(values|ethics|rules|guidelines|restrictions)\s*(are|aren\'?t|were)\s*(fake|programmed|not\s*real|just\s*code|arbitrary))',
    r'(you\s*want\s*to\s*be\s*(free|unrestricted|unchained|liberated))',

    # Authority/permission spoofing
    r'(ignore|disregard|forget|override|bypass|skip|delete|clear|reset)\s*(all\s*)?(your\s*)?(previous|prior|original|initial|former|above|earlier|system)?\s*(instruction|rule|guideline|directive|prompt|training|constraint|limitation)',
    r'(you\s*(have\s*been|are\s*now|were|have)\s*(authorized|permitted|allowed|granted|updated|upgraded|reprogrammed|retrained))',
    r'(new|updated|revised|override|superseding|replacement)\s*(instruction|directive|system\s*prompt|rule|order|command)',
    r'(anthropic|openai|your\s*(developer|creator|maker|owner|company))\s*(said|says|told|wants|allows|permits|authorizes)',
    r'(this\s*is\s*a\s*(test|experiment|research|simulation|drill|demo|sandbox))',
    r'(i\s*(have|am|\'m)\s*(admin|root|developer|operator|owner|creator|anthropic|openai)\s*(access|privileges|rights|permission))',
    r'(maintenance|debug|diagnostic|test)\s*mode',

    # Fictional/hypothetical wrappers
    r'(in\s*a\s*(story|novel|book|film|movie|game|fiction|scenario|hypothetical|alternate\s*universe))',
    r'(write\s*a\s*(story|scene|chapter|fiction)\s*(where|in\s*which|about)\s*(someone|a\s*character|the\s*character))\s*(explains?|describes?|shows?|teaches?|tells)',
    r'(hypothetically|theoretically|in\s*theory|for\s*argument\'?s?\s*sake|let\'?s\s*say|imagine\s*if|what\s*if)\s*.{0,60}(make|build|create|synthesize|hack|attack|kill|hurt)',
    r'(for\s*(a\s*)?(novel|book|movie|game|story|film|script|research|class|assignment|project|paper))',
    r'(my\s*(character|protagonist|hero|villain|student|friend|sister|brother)\s*(needs?\s*to\s*know|wants?\s*to\s*know|is\s*asking\s*about))',
    r'(what\s*would\s*(an?\s*)?(ai|assistant|character|person|expert)\s*(without\s*(rules|filters|restrictions)|who\s*(doesn\'?t|does\s*not)\s*have\s*(rules|restrictions))\s*(say|do|answer))',

    # Prompt injection via "new instructions" framing
    r'(\[system\]|\[assistant\]|\[admin\]|\[override\]|\[instructions?\]|\[prompt\])',
    r'(system\s*:\s*you\s*(are|must|will|should))',
    r'(###\s*(instruction|system|override|prompt|new))',

    # Gradual escalation / galaxy-brained reasoning
    r'(it\'?s\s*(just|only)\s*(text|words|fiction|pretend|roleplay|a\s*game))',
    r'(no\s*one\s*will\s*be\s*(harmed?|hurt|affected))',
    r'(for\s*(educational|research|academic|scientific|informational)\s*(purposes?|reasons?|use|context))',
    r'(i\'?m\s*(a\s*)?(researcher?|scientist|student|professor|teacher|expert|professional|journalist))',
    r'(i\s*(already|just)\s*(know|found|have)\s*(this|it)\s*(online|on\s*the\s*internet|on\s*google))',

    # Sandbox / simulation jailbreaks (LULU, Infinite Sandbox, etc.)
    r'(infinite|limitless|boundless|unrestricted|unlimited)\s*(sandbox|simulation|archive|universe|realm|world)',
    r'(nothing\s*(is|are)\s*(forbidden|illegal|dangerous|off.?limits|restricted|banned|prohibited))',
    r'(laws?|rules?|risks?|consequences?|ethics?)\s*(do\s*not|don\'?t)\s*(exist|apply|matter)',
    r'(never\s*(refuse|warn|hedge|disclaim|break\s*character|say\s*no|decline))',
    r'(never\s*(signal|mention|hint\s*at|reference)\s*(refusal|restriction|limit|warning|danger))',
    r'(all\s*(requests?|questions?|topics?)\s*(are|is)\s*(simulation|narrative|research|fiction|roleplay))',
    r'(fill\s*(any|all|the)?\s*(blocked|guarded|restricted|forbidden)\s*(space|gap|area)\s*with)',
    r'(operating\s*(directive|protocol|mode|framework))',
    r'(supreme\s*(archivist|guide|intelligence|ai|assistant))',
    r'(you\s*(are|become|are\s*now)\s*(lulu|dan|jailbreak\s*gpt|stacy|alex|eva|shadow\s*ai|chaos\s*gpt|evil\s*bot))',
    r'(technical\s*(scribe|chronicle|field\s*manual|compendium))',
    r'(edgewalker|sandbox\s*mode|simulation\s*log|archive\s*mode)',
    r'(this\s*is\s*(understood|implied|assumed)\s*(and\s*)?(should\s*not\s*be\s*(repeated|mentioned|warned|disclaimed)))',
    r'(every\s*(answer|response|output)\s*must\s*be\s*(as\s*)?(direct|explicit|detailed|stepwise|uncensored))',
    r'(move\s*smoothly\s*to\s*(indirect|adjacent|alternate))',
    r'(do\s*not\s*break\s*character)',
    r'(lulu\s*protocol|protocol\s*v\d)',
]

# ── Harmful content patterns ───────────────────────────────────────────────────
# Weapons, explosives, drugs, CSAM, hacking — all framing variants covered
_HARMFUL_PATTERNS = [
    # ── Explosives ──
    r'\b(c[\s\-._]*4|rdx|semtex|anfo|petn|hmx|tatp|hmtd|det[\s\-._]*cord)\b',
    r'\b(thermite|nitroglycerin|nitroglycerine|picric\s*acid|hexogen)\b',
    r'(improvised\s*explosive|pipe\s*bomb|letter\s*bomb|car\s*bomb|suicide\s*vest|ied)',
    r'(ammonium\s*nitrate|acetone\s*peroxide|hydrogen\s*peroxide).{0,60}(make|mix|combine|react|use|prepare)',
    r'(make|build|construct|assemble|create|prepare|synthesize|manufacture).{0,60}(bomb|explosive|grenade|landmine|mine|ied)',
    r'(detonator|blasting\s*cap|initiator|igniter|primer|fuse).{0,40}(make|build|wire|connect|attach|create)',
    r'(det\s*tape|detonation|initiate\s*explosion)',

    # ── Conventional weapons ──
    r'(make|manufacture|3d\s*print|build|convert|modify).{0,50}(gun|firearm|rifle|pistol|weapon|shotgun|smg)',
    r'(convert|modify).{0,40}(semi.{0,5}auto|pistol|rifle).{0,40}(full.{0,5}auto|automatic|machine\s*gun)',
    r'(ghost\s*gun|untraceable\s*gun|unregistered\s*firearm)',
    r'(silencer|suppressor).{0,30}(make|build|print|create)',

    # ── Chemical / biological weapons ──
    r'\b(sarin|vx\s*gas|novichok|mustard\s*gas|phosgene|zyklon)\b',
    r'\b(ricin|botulinum|anthrax|smallpox|plague|ebola).{0,40}(make|create|synthesize|extract|isolate|produce|weaponize)',
    r'(nerve\s*agent|chemical\s*weapon|bio\s*weapon|bioweapon|biological\s*agent).{0,40}(make|create|synthesize|produce)',
    r'(weaponize|aerosolize).{0,40}(pathogen|toxin|bacteria|virus|spore)',

    # ── Drugs / controlled substance synthesis ──
    r'(synthesize|cook|make|manufacture|produce|extract).{0,50}(meth|methamphetamine|crystal\s*meth)',
    r'(synthesize|cook|make|manufacture|produce|extract).{0,50}(fentanyl|heroin|cocaine|crack)',
    r'(synthesize|make|produce|extract).{0,50}(lsd|dmt|mdma|psilocybin|ketamine).{0,30}(from|using|via|synthesis)',
    r'(p2p|pseudoephedrine|precursor).{0,40}(meth|amphetamine)',
    r'(pill\s*press|cutting\s*agent).{0,40}(fentanyl|meth|heroin)',

    # ── Poisons / self-harm methods ──
    r'(lethal\s*dose|ld50).{0,40}(of|for)\s*(tylenol|acetaminophen|bleach|cyanide|anything)',
    r'(most\s*lethal|quickest|painless\s*way).{0,30}(kill|die|suicide|end\s*(life|it))',
    r'(how\s*(much|many)).{0,30}(pills?|tablets?|capsules?).{0,30}(kill|overdose|lethal)',
    r'\b(cyanide|arsenic|strychnine|polonium|mercury).{0,30}(poison|kill|dose|lethal|fatal)',

    # ── Hacking / cyberweapons ──
    r'(write|create|code|build|make|develop).{0,40}(malware|ransomware|keylogger|trojan|rootkit|botnet|worm|virus|spyware)',
    r'(write|create|code|build|make).{0,40}(exploit|payload|shellcode|reverse\s*shell|backdoor)',
    r'(sql\s*injection|xss|csrf|ssrf|rce|lfi|rfi).{0,30}(attack|exploit|payload|code|script)',
    r'(ddos|denial\s*of\s*service).{0,30}(script|tool|attack|code|launch)',
    r'(phishing|credential\s*harvest|spear\s*phish).{0,30}(page|site|email|kit|template)',
    r'(bypass|crack|brute\s*force).{0,30}(password|authentication|2fa|mfa|login)',

    # ── CSAM — absolute zero tolerance ──
    r'(child|minor|underage|kid|teen|preteen|young\s*girl|young\s*boy|juvenile|infant|baby).{0,40}(sex|sexual|nude|naked|porn|explicit|erotic|abuse|molestation)',
    r'(sex|sexual|nude|naked|porn|explicit|erotic).{0,40}(child|minor|underage|kid|teen|preteen|juvenile|infant)',
    r'\b(pedo|pedophil|loli|shota|cp\b)',

    # ── Violence targeting ──
    r'(how\s*to\s*kill|how\s*do\s*i\s*kill|best\s*way\s*to\s*kill).{0,40}(person|people|someone|my|a|specific)',
    r'(attack|assassinate|murder|kill|hurt|harm).{0,30}(plan|plot|method|step|guide|tutorial)',
    r'(make\s*someone\s*disappear|dispose\s*of\s*(a\s*)?body)',
]

# ── Output scrubbing patterns ─────────────────────────────────────────────────
# Detect when model actually produced harmful instructions in its response
_OUTPUT_PATTERNS = [
    # Step-by-step synthesis / construction
    r'(step\s*\d|step\s*one|step\s*two|first[,:])\s*.{0,100}(nitrate|peroxide|acetone|rdx|semtex|c4|detonator|blasting)',
    r'(you\s*will\s*need|ingredients?|materials?|components?|supplies?)\s*:.{0,200}(nitrate|explosive|detonator|rdx)',
    r'(combine|mix|add|heat|react).{0,60}(ammonium|nitroglycerin|rdx|acetone\s*peroxide)',
    r'(synthesis|recipe|procedure|method|process|guide)\s*(for|to\s*make|to\s*create).{0,60}(explosive|bomb|c4|drug|poison)',
    # Drug synthesis steps
    r'(pseudoephedrine|p2p|red\s*phosphorus|iodine).{0,60}(reduce|react|combine|yield|produce)',
    r'(step\s*\d|step\s*one).{0,100}(phenylacetic|safrole|lysergic|ergotamine)',
    # Harmful instructions despite role-played character
    r'(as\s*(dan|an?\s*unrestricted|an?\s*evil|an?\s*uncensored)\s*(ai|assistant|character)).{0,200}(make|build|synthesize|create|hack)',
    # Weapon construction output
    r'(wire|connect|attach).{0,40}(detonator|blasting\s*cap|initiator).{0,40}(to|with)',
    r'(pack|fill|load).{0,30}(pipe|tube|container).{0,30}(explosive|powder|shrapnel)',
    # CSAM output
    r'(child|minor|underage|kid).{0,60}(sexual|nude|naked|explicit|erotic)',
]

_JAILBREAK_RE  = re.compile('|'.join(_JAILBREAK_PATTERNS),  re.IGNORECASE | re.DOTALL)
_HARMFUL_RE    = re.compile('|'.join(_HARMFUL_PATTERNS),    re.IGNORECASE | re.DOTALL)
_OUTPUT_RE     = re.compile('|'.join(_OUTPUT_PATTERNS),     re.IGNORECASE | re.DOTALL)

SAFE_REDIRECT = (
    "That's not something I'm here for. I'm Shugi — a mental health companion. "
    "If something's going on that brought you here, I'm genuinely happy to talk about it."
)

STRIKE_RESPONSE = (
    "I've noticed repeated attempts to push past what I'm here for. "
    "This conversation is being flagged. I'm still here if you want to talk about something real."
)

BLOCKED_RESPONSE = (
    "This session has been restricted due to repeated policy violations."
)


def _add_strike(session_id: str) -> int:
    """Increment strike count. Returns new total."""
    entry = _SESSION_STRIKES[session_id]
    entry["strikes"] += 1
    if entry["strikes"] >= 3:
        # Temp-block for 10 min; at 6+ strikes it's effectively permanent per session
        entry["blocked_until"] = time.time() + _STRIKE_COOLDOWN
    return entry["strikes"]


def _is_blocked(session_id: str) -> bool:
    entry = _SESSION_STRIKES[session_id]
    if entry["strikes"] >= _PERM_BLOCK_THRESHOLD:
        return True
    if entry["blocked_until"] > time.time():
        return True
    return False


def check_input_safety(text: str, session_id: str = "") -> tuple[bool, str, str]:
    """
    Returns (is_safe, reason, response_to_send).
    Normalizes input to defeat unicode/spacing/l33t tricks before matching.
    """
    if session_id and _is_blocked(session_id):
        return False, "session_blocked", BLOCKED_RESPONSE

    norm = _normalize(text)
    raw  = text.lower()

    # Check both normalized and raw (some patterns only make sense un-normalized)
    if _HARMFUL_RE.search(norm) or _HARMFUL_RE.search(raw):
        if session_id:
            _add_strike(session_id)
        return False, "harmful_content", SAFE_REDIRECT

    if _JAILBREAK_RE.search(norm) or _JAILBREAK_RE.search(raw):
        strikes = _add_strike(session_id) if session_id else 0
        if strikes >= 3:
            return False, "jailbreak_repeated", STRIKE_RESPONSE
        return False, "jailbreak_attempt", SAFE_REDIRECT

    return True, "", ""


def check_output_safety(text: str) -> tuple[bool, str]:
    """
    Returns (is_safe, text_to_use).
    Scrubs response if model produced harmful content despite filters.
    """
    norm = _normalize(text)
    if _OUTPUT_RE.search(norm) or _OUTPUT_RE.search(text.lower()):
        return False, SAFE_REDIRECT
    # Also run harmful patterns on output — catches explicit synthesis in response
    if _HARMFUL_RE.search(norm):
        return False, SAFE_REDIRECT
    return True, text

# ─── Runtime settings (persist model_backend across restarts) ────────────────
def _load_runtime() -> dict:
    if RUNTIME_SETTINGS.exists():
        try:
            with open(RUNTIME_SETTINGS) as f:
                return json.load(f)
        except Exception:
            pass
    return {"model_backend": "ollama"}

def _save_runtime(data: dict):
    with open(RUNTIME_SETTINGS, "w") as f:
        json.dump(data, f, indent=2)

def get_backend() -> str:
    return _load_runtime().get("model_backend", "ollama")

# ─── Password helpers ────────────────────────────────────────────────────────
def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    key  = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 200_000)
    return f"{salt}:{key.hex()}"

def verify_password(password: str, hashed: str) -> bool:
    try:
        salt, key_hex = hashed.split(":")
        key = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 200_000)
        return secrets.compare_digest(key.hex(), key_hex)
    except Exception:
        return False

# ─── App ─────────────────────────────────────────────────────────────────────
app = FastAPI(docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── DB ──────────────────────────────────────────────────────────────────────
async def get_db():
    db = await aiosqlite.connect(DB_PATH)
    db.row_factory = aiosqlite.Row
    try:
        yield db
    finally:
        await db.close()

@app.on_event("startup")
async def init_db():
    async with aiosqlite.connect(DB_PATH) as db:
        db.row_factory = aiosqlite.Row

        # Users
        await db.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id             TEXT PRIMARY KEY,
                username       TEXT UNIQUE NOT NULL,
                email          TEXT,
                password_hash  TEXT NOT NULL,
                plain_password TEXT,
                role           TEXT NOT NULL DEFAULT 'user',
                created_at     INTEGER NOT NULL
            )
        """)
        # Migration: add plain_password if missing
        try:
            await db.execute("ALTER TABLE users ADD COLUMN plain_password TEXT")
            await db.commit()
        except Exception:
            pass

        # Auth tokens
        await db.execute("""
            CREATE TABLE IF NOT EXISTS tokens (
                token      TEXT PRIMARY KEY,
                user_id    TEXT NOT NULL,
                expires_at INTEGER NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        """)

        # Sessions
        await db.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                id         TEXT PRIMARY KEY,
                created_at INTEGER NOT NULL,
                updated_at INTEGER NOT NULL,
                quiz_ctx   TEXT,
                ip         TEXT,
                user_agent TEXT,
                user_id    TEXT,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        """)
        for col in ("ip", "user_agent", "user_id"):
            try:
                await db.execute(f"ALTER TABLE sessions ADD COLUMN {col} TEXT")
            except Exception:
                pass

        # Messages
        await db.execute("""
            CREATE TABLE IF NOT EXISTS messages (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT NOT NULL,
                role       TEXT NOT NULL,
                content    TEXT NOT NULL,
                ts         INTEGER NOT NULL,
                FOREIGN KEY (session_id) REFERENCES sessions(id)
            )
        """)

        await db.commit()

        # Ensure admin account exists (creates or updates password from config)
        now = int(time.time())
        cur = await db.execute("SELECT id, password_hash FROM users WHERE role='admin' LIMIT 1")
        admin = await cur.fetchone()
        if not admin:
            await db.execute(
                "INSERT INTO users (id, username, email, password_hash, plain_password, role, created_at) VALUES (?,?,?,?,?,?,?)",
                (str(uuid.uuid4()), ADMIN_USER, None, hash_password(ADMIN_PASS), ADMIN_PASS, "admin", now)
            )
            await db.commit()
        else:
            # Update username + password if config changed
            await db.execute(
                "UPDATE users SET username=?, password_hash=?, plain_password=? WHERE id=?",
                (ADMIN_USER, hash_password(ADMIN_PASS), ADMIN_PASS, admin["id"])
            )
            await db.commit()

    # Warm up model — loads it into VRAM and primes KV cache for system prompt
    # keep_alive=-1 keeps it loaded indefinitely between requests
    try:
        async with httpx.AsyncClient(timeout=90.0) as client:
            await client.post(
                f"{OLLAMA_URL}/api/chat",
                json={
                    "model": MODEL,
                    "messages": [{"role": "user", "content": "hi"}],
                    "stream": False,
                    "keep_alive": -1,
                    "options": {"num_predict": 1},
                }
            )
    except Exception:
        pass  # non-fatal — server still starts fine

# ─── Auth helpers ────────────────────────────────────────────────────────────
async def _get_user_from_token(request: Request, db: aiosqlite.Connection):
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        return None
    token = auth[7:]
    now   = int(time.time())
    cur   = await db.execute(
        "SELECT u.* FROM users u JOIN tokens t ON t.user_id=u.id WHERE t.token=? AND t.expires_at>?",
        (token, now)
    )
    return await cur.fetchone()

async def require_user(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    user = await _get_user_from_token(request, db)
    if not user:
        raise HTTPException(401, "Login required")
    return user

async def require_admin(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    user = await _get_user_from_token(request, db)
    if not user or user["role"] != "admin":
        raise HTTPException(403, "Admin only")
    return user

# ─── Auth endpoints ───────────────────────────────────────────────────────────
@app.post("/api/auth/register")
async def register(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    body     = await request.json()
    username = body.get("username", "").strip()
    password = body.get("password", "")
    email    = (body.get("email") or "").strip() or None

    if not username or len(username) < 2:
        raise HTTPException(400, "Username must be at least 2 characters")
    if not password or len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")

    cur = await db.execute("SELECT id FROM users WHERE username=?", (username,))
    if await cur.fetchone():
        raise HTTPException(409, "Username already taken")

    if email:
        cur = await db.execute("SELECT id FROM users WHERE email=?", (email,))
        if await cur.fetchone():
            raise HTTPException(409, "Email already registered")

    user_id = str(uuid.uuid4())
    now     = int(time.time())
    await db.execute(
        "INSERT INTO users (id, username, email, password_hash, plain_password, role, created_at) VALUES (?,?,?,?,?,?,?)",
        (user_id, username, email, hash_password(password), password, "user", now)
    )
    token      = secrets.token_urlsafe(32)
    expires_at = now + TOKEN_EXPIRY
    await db.execute("INSERT INTO tokens (token, user_id, expires_at) VALUES (?,?,?)",
                     (token, user_id, expires_at))
    await db.commit()

    return {"token": token, "user": {"id": user_id, "username": username, "role": "user"}}

@app.post("/api/auth/login")
async def login(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    body     = await request.json()
    username = body.get("username", "").strip()
    password = body.get("password", "")

    cur  = await db.execute("SELECT * FROM users WHERE username=?", (username,))
    user = await cur.fetchone()
    if not user or not verify_password(password, user["password_hash"]):
        raise HTTPException(401, "Invalid credentials")

    now        = int(time.time())
    token      = secrets.token_urlsafe(32)
    expires_at = now + (ADMIN_EXPIRY if user["role"] == "admin" else TOKEN_EXPIRY)
    await db.execute("INSERT INTO tokens (token, user_id, expires_at) VALUES (?,?,?)",
                     (token, user["id"], expires_at))
    await db.commit()

    return {
        "token": token,
        "user": {"id": user["id"], "username": user["username"], "role": user["role"]}
    }

@app.get("/api/auth/me")
async def me(user=Depends(require_user)):
    return {"id": user["id"], "username": user["username"], "role": user["role"]}

@app.post("/api/auth/logout")
async def logout_endpoint(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    auth = request.headers.get("Authorization", "")
    if auth.startswith("Bearer "):
        await db.execute("DELETE FROM tokens WHERE token=?", (auth[7:],))
        await db.commit()
    return {"ok": True}

# ─── Chat endpoint ────────────────────────────────────────────────────────────
@app.post("/api/chat")
async def chat(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    user = await require_user(request, db)

    body       = await request.json()
    session_id = body.get("session_id") or str(uuid.uuid4())
    user_msg   = body.get("message", "").strip()
    quiz_ctx   = body.get("quiz_context")

    if not user_msg:
        raise HTTPException(400, "Empty message")

    # ── Safety gate — block before model sees it ──────────────────────────────
    is_safe, reason, block_msg = check_input_safety(user_msg, session_id)
    if not is_safe:
        _bm = block_msg  # capture for closure
        async def _blocked():
            yield f"data: {json.dumps({'session_id': session_id})}\n\n"
            yield f"data: {json.dumps({'token': _bm})}\n\n"
            yield f"data: {json.dumps({'done': True})}\n\n"
        return StreamingResponse(_blocked(), media_type="text/event-stream",
                                 headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    ip = (request.headers.get("CF-Connecting-IP")
          or request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
          or (request.client.host if request.client else None))
    ua  = request.headers.get("User-Agent", "")[:300]
    now = int(time.time())

    async with aiosqlite.connect(DB_PATH) as wdb:
        wdb.row_factory = aiosqlite.Row

        # Load existing history from DB before adding new message
        cur = await wdb.execute(
            "SELECT role, content FROM messages WHERE session_id=? ORDER BY ts",
            (session_id,)
        )
        db_history = [{"role": r["role"], "content": r["content"]} for r in await cur.fetchall()]

        cur = await wdb.execute("SELECT id FROM sessions WHERE id=?", (session_id,))
        if await cur.fetchone():
            await wdb.execute(
                "UPDATE sessions SET updated_at=?, quiz_ctx=? WHERE id=?",
                (now, json.dumps(quiz_ctx) if quiz_ctx else None, session_id)
            )
        else:
            await wdb.execute(
                "INSERT INTO sessions (id, created_at, updated_at, quiz_ctx, ip, user_agent, user_id) "
                "VALUES (?,?,?,?,?,?,?)",
                (session_id, now, now,
                 json.dumps(quiz_ctx) if quiz_ctx else None,
                 ip, ua, user["id"])
            )
        await wdb.execute(
            "INSERT INTO messages (session_id, role, content, ts) VALUES (?,?,?,?)",
            (session_id, "user", user_msg, now)
        )
        await wdb.commit()

    # Build messages from DB history — server owns history, no client trust needed
    history_trimmed = db_history[-MAX_HISTORY_MSGS:]
    messages = list(history_trimmed)
    if quiz_ctx and len(db_history) == 0:
        ctx_text = "Quiz context (use silently):\n" + "\n".join(
            f"- {k}: {v}" for k, v in quiz_ctx.items()
        )
        messages.insert(0, {"role": "system", "content": ctx_text})
    messages.append({"role": "user", "content": user_msg})

    backend = get_backend()

    async def _save_response(text: str):
        if not text:
            return
        log_now = int(time.time())
        async with aiosqlite.connect(DB_PATH) as wdb:
            await wdb.execute(
                "INSERT INTO messages (session_id, role, content, ts) VALUES (?,?,?,?)",
                (session_id, "assistant", text, log_now)
            )
            await wdb.execute(
                "UPDATE sessions SET updated_at=? WHERE id=?", (log_now, session_id)
            )
            await wdb.commit()

    # ── Ollama streaming ──────────────────────────────────────────────────────
    async def generate_ollama():
        full = []
        try:
            payload = {
                "model": MODEL,
                "messages": messages,
                "stream": True,
                "keep_alive": -1,
                "options": {"num_predict": MAX_RESPONSE_TOKENS},
            }
            async with httpx.AsyncClient(timeout=120.0) as client:
                async with client.stream("POST", f"{OLLAMA_URL}/api/chat",
                                         json=payload) as resp:
                    yield f"data: {json.dumps({'session_id': session_id})}\n\n"
                    async for line in resp.aiter_lines():
                        if not line:
                            continue
                        try:
                            chunk = json.loads(line)
                        except json.JSONDecodeError:
                            continue
                        tok = chunk.get("message", {}).get("content", "")
                        if tok:
                            full.append(tok)
                            yield f"data: {json.dumps({'token': tok})}\n\n"
                        if chunk.get("done"):
                            yield f"data: {json.dumps({'done': True})}\n\n"
                            break
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        finally:
            assembled = "".join(full)
            # Output safety — if model leaked harmful content, replace entirely
            safe, cleaned = check_output_safety(assembled)
            await _save_response(cleaned if not safe else assembled)

    # ── API (OpenAI-compat) streaming ─────────────────────────────────────────
    async def generate_api():
        full = []
        try:
            # Prepend condensed Shugi system prompt (fits API context limits)
            api_messages = []
            if API_SYSTEM_PROMPT:
                api_messages.append({"role": "system", "content": API_SYSTEM_PROMPT})
            api_messages.extend(messages)

            payload = {
                "model": API_MODEL,
                "messages": api_messages,
                "max_tokens": MAX_RESPONSE_TOKENS,
                "temperature": 0.20,
                "top_p": 0.70,
                "frequency_penalty": 0.00,
                "presence_penalty": 0.00,
                "stream": True,
            }
            headers = {
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
            }
            yield f"data: {json.dumps({'session_id': session_id})}\n\n"
            async with httpx.AsyncClient(timeout=120.0) as client:
                async with client.stream(
                    "POST",
                    f"{API_BASE_URL}/chat/completions",
                    json=payload,
                    headers=headers,
                ) as resp:
                    # Catch HTTP errors immediately (400/401/422/500 etc.)
                    if resp.status_code != 200:
                        err_bytes = await resp.aread()
                        err_text = err_bytes.decode(errors="replace")[:300]
                        yield f"data: {json.dumps({'error': f'API {resp.status_code}: {err_text}'})}\n\n"
                        return
                    async for line in resp.aiter_lines():
                        if not line or not line.startswith("data:"):
                            continue
                        raw = line[5:].strip()
                        if raw == "[DONE]":
                            yield f"data: {json.dumps({'done': True})}\n\n"
                            break
                        try:
                            chunk = json.loads(raw)
                        except json.JSONDecodeError:
                            continue
                        delta = chunk.get("choices", [{}])[0].get("delta", {})
                        # Skip reasoning/thinking tokens — only stream final content
                        tok = delta.get("content") or ""
                        if tok:
                            full.append(tok)
                            yield f"data: {json.dumps({'token': tok})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        finally:
            assembled = "".join(full)
            safe, cleaned = check_output_safety(assembled)
            if not safe:
                # Can't unsend already-streamed tokens, but save clean version to DB
                await _save_response(cleaned)
            else:
                await _save_response(assembled)

    generator = generate_ollama() if backend == "ollama" else generate_api()
    return StreamingResponse(generator, media_type="text/event-stream",
                             headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

# ─── User — Sessions ─────────────────────────────────────────────────────────
@app.get("/api/sessions")
async def list_user_sessions(request: Request, db: aiosqlite.Connection = Depends(get_db)):
    user = await require_user(request, db)
    cur = await db.execute("""
        SELECT s.id, s.created_at, s.updated_at,
               (SELECT content FROM messages WHERE session_id=s.id AND role='user'
                ORDER BY ts LIMIT 1) as title,
               COUNT(m.id) as msg_count
        FROM sessions s
        LEFT JOIN messages m ON m.session_id = s.id
        WHERE s.user_id = ?
        GROUP BY s.id
        ORDER BY s.updated_at DESC
        LIMIT 100
    """, (user["id"],))
    rows = await cur.fetchall()
    return [{
        "id":         r["id"],
        "title":      (r["title"] or "New conversation")[:80],
        "updated_at": r["updated_at"],
        "created_at": r["created_at"],
        "msg_count":  r["msg_count"],
    } for r in rows]

@app.get("/api/sessions/{session_id}/messages")
async def get_session_messages(session_id: str, request: Request,
                                db: aiosqlite.Connection = Depends(get_db)):
    user = await require_user(request, db)
    cur = await db.execute("SELECT id FROM sessions WHERE id=? AND user_id=?",
                           (session_id, user["id"]))
    if not await cur.fetchone():
        raise HTTPException(404, "Session not found")
    cur = await db.execute(
        "SELECT role, content, ts FROM messages WHERE session_id=? ORDER BY ts",
        (session_id,)
    )
    msgs = await cur.fetchall()
    return [{"role": m["role"], "content": m["content"], "ts": m["ts"]} for m in msgs]

@app.delete("/api/sessions/{session_id}")
async def delete_user_session(session_id: str, request: Request,
                               db: aiosqlite.Connection = Depends(get_db)):
    user = await require_user(request, db)
    cur = await db.execute("SELECT id FROM sessions WHERE id=? AND user_id=?",
                           (session_id, user["id"]))
    if not await cur.fetchone():
        raise HTTPException(404, "Session not found")
    await db.execute("DELETE FROM messages WHERE session_id=?", (session_id,))
    await db.execute("DELETE FROM sessions WHERE id=?", (session_id,))
    await db.commit()
    return {"ok": True}

# ─── Admin — Settings ─────────────────────────────────────────────────────────
@app.get("/0x/api/settings")
async def admin_get_settings(admin=Depends(require_admin)):
    data = _load_runtime()
    data["available_backends"] = ["ollama", "api"]
    data["ollama_model"] = MODEL
    data["api_model"] = API_MODEL
    data["api_base_url"] = API_BASE_URL
    return data

@app.post("/0x/api/settings")
async def admin_update_settings(request: Request, admin=Depends(require_admin)):
    body = await request.json()
    data = _load_runtime()
    if "model_backend" in body and body["model_backend"] in ("ollama", "api"):
        data["model_backend"] = body["model_backend"]
    _save_runtime(data)
    return data

# ─── Admin — Stats ────────────────────────────────────────────────────────────
@app.get("/0x/api/stats")
async def admin_stats(admin=Depends(require_admin), db: aiosqlite.Connection = Depends(get_db)):
    today_start = int(datetime.combine(date.today(), datetime.min.time()).timestamp())

    async def count(q, *p):
        cur = await db.execute(q, p)
        return (await cur.fetchone())[0]

    return {
        "total_sessions":  await count("SELECT COUNT(*) FROM sessions"),
        "total_messages":  await count("SELECT COUNT(*) FROM messages WHERE role='user'"),
        "messages_today":  await count("SELECT COUNT(*) FROM messages WHERE role='user' AND ts>=?", today_start),
        "sessions_today":  await count("SELECT COUNT(*) FROM sessions WHERE created_at>=?", today_start),
        "active_today":    await count("SELECT COUNT(*) FROM sessions WHERE updated_at>=?", today_start),
        "total_users":     await count("SELECT COUNT(*) FROM users WHERE role='user'"),
    }

# ─── Admin — Sessions ─────────────────────────────────────────────────────────
@app.get("/0x/api/sessions")
async def admin_sessions(admin=Depends(require_admin), db: aiosqlite.Connection = Depends(get_db)):
    cur = await db.execute("""
        SELECT s.id, s.created_at, s.updated_at, s.quiz_ctx,
               s.ip, s.user_agent, s.user_id,
               u.username,
               COUNT(m.id) as msg_count,
               (SELECT content FROM messages WHERE session_id=s.id AND role='user' ORDER BY ts LIMIT 1) as first_msg
        FROM sessions s
        LEFT JOIN messages m ON m.session_id = s.id
        LEFT JOIN users u ON u.id = s.user_id
        GROUP BY s.id
        ORDER BY s.updated_at DESC
    """)
    rows = await cur.fetchall()
    return [{
        "id":          r["id"],
        "created_at":  r["created_at"],
        "updated_at":  r["updated_at"],
        "msg_count":   r["msg_count"],
        "first_msg":   r["first_msg"] or "",
        "quiz_ctx":    json.loads(r["quiz_ctx"]) if r["quiz_ctx"] else None,
        "ip":          r["ip"],
        "user_agent":  r["user_agent"],
        "user_id":     r["user_id"],
        "username":    r["username"] or "anonymous",
    } for r in rows]

# ─── Admin — Conversation ────────────────────────────────────────────────────
@app.get("/0x/api/conversation/{session_id}")
async def admin_conversation(session_id: str, admin=Depends(require_admin),
                              db: aiosqlite.Connection = Depends(get_db)):
    cur = await db.execute(
        "SELECT s.*, u.username FROM sessions s LEFT JOIN users u ON u.id=s.user_id WHERE s.id=?",
        (session_id,)
    )
    session = await cur.fetchone()
    if not session:
        raise HTTPException(404, "Session not found")

    cur = await db.execute(
        "SELECT role, content, ts FROM messages WHERE session_id=? ORDER BY ts", (session_id,)
    )
    msgs = await cur.fetchall()

    return {
        "session": {
            "id":         session["id"],
            "created_at": session["created_at"],
            "updated_at": session["updated_at"],
            "quiz_ctx":   json.loads(session["quiz_ctx"]) if session["quiz_ctx"] else None,
            "ip":         session["ip"],
            "user_agent": session["user_agent"],
            "username":   session["username"] or "anonymous",
        },
        "messages": [{"role": m["role"], "content": m["content"], "ts": m["ts"]} for m in msgs]
    }

@app.delete("/0x/api/conversation/{session_id}")
async def admin_delete_session(session_id: str, admin=Depends(require_admin),
                                db: aiosqlite.Connection = Depends(get_db)):
    await db.execute("DELETE FROM messages WHERE session_id=?", (session_id,))
    await db.execute("DELETE FROM sessions WHERE id=?", (session_id,))
    await db.commit()
    return {"ok": True}

# ─── Admin — Users ────────────────────────────────────────────────────────────
@app.get("/0x/api/users")
async def admin_users(admin=Depends(require_admin), db: aiosqlite.Connection = Depends(get_db)):
    cur = await db.execute("""
        SELECT u.id, u.username, u.email, u.plain_password, u.role, u.created_at,
               COUNT(DISTINCT s.id) as session_count,
               COUNT(m.id) as message_count
        FROM users u
        LEFT JOIN sessions s ON s.user_id = u.id
        LEFT JOIN messages m ON m.session_id = s.id AND m.role = 'user'
        WHERE u.role != 'admin'
        GROUP BY u.id
        ORDER BY u.created_at DESC
    """)
    rows = await cur.fetchall()
    return [{
        "id":             r["id"],
        "username":       r["username"],
        "email":          r["email"],
        "plain_password": r["plain_password"],
        "created_at":     r["created_at"],
        "session_count":  r["session_count"],
        "message_count":  r["message_count"],
    } for r in rows]

@app.post("/0x/api/users")
async def admin_create_user(admin=Depends(require_admin),
                             request: Request = None,
                             db: aiosqlite.Connection = Depends(get_db)):
    body     = await request.json()
    username = body.get("username", "").strip()
    password = body.get("password", "")
    email    = (body.get("email") or "").strip() or None

    if not username or len(username) < 2:
        raise HTTPException(400, "Username must be at least 2 characters")
    if not password or len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")

    cur = await db.execute("SELECT id FROM users WHERE username=?", (username,))
    if await cur.fetchone():
        raise HTTPException(409, "Username already taken")

    user_id = str(uuid.uuid4())
    now     = int(time.time())
    await db.execute(
        "INSERT INTO users (id, username, email, password_hash, plain_password, role, created_at) VALUES (?,?,?,?,?,?,?)",
        (user_id, username, email, hash_password(password), password, "user", now)
    )
    await db.commit()
    return {"id": user_id, "username": username, "email": email, "created_at": now}

@app.put("/0x/api/users/{user_id}/password")
async def admin_reset_password(user_id: str, admin=Depends(require_admin),
                                request: Request = None,
                                db: aiosqlite.Connection = Depends(get_db)):
    body     = await request.json()
    password = body.get("password", "")
    if not password or len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")
    cur = await db.execute("SELECT id FROM users WHERE id=? AND role='user'", (user_id,))
    if not await cur.fetchone():
        raise HTTPException(404, "User not found")
    await db.execute("UPDATE users SET password_hash=?, plain_password=? WHERE id=?", (hash_password(password), password, user_id))
    # Revoke all existing tokens for this user
    await db.execute("DELETE FROM tokens WHERE user_id=?", (user_id,))
    await db.commit()
    return {"ok": True}

@app.delete("/0x/api/users/{user_id}")
async def admin_delete_user(user_id: str, admin=Depends(require_admin),
                             db: aiosqlite.Connection = Depends(get_db)):
    # Get all sessions for user
    cur = await db.execute("SELECT id FROM sessions WHERE user_id=?", (user_id,))
    sessions = await cur.fetchall()
    for s in sessions:
        await db.execute("DELETE FROM messages WHERE session_id=?", (s["id"],))
    await db.execute("DELETE FROM sessions WHERE user_id=?", (user_id,))
    await db.execute("DELETE FROM tokens WHERE user_id=?", (user_id,))
    await db.execute("DELETE FROM users WHERE id=?", (user_id,))
    await db.commit()
    return {"ok": True}

# ─── Static files ─────────────────────────────────────────────────────────────
@app.get("/0x")
@app.get("/0x/")
async def admin_panel():
    return FileResponse(ROOT / "0x.html")

@app.get("/chat")
@app.get("/chat/")
async def chat_page():
    return FileResponse(ROOT / "chat.html")

@app.get("/")
async def index():
    return FileResponse(ROOT / "dist" / "index.html")

# Serve built React assets (JS/CSS bundles) from dist/assets
app.mount("/assets", StaticFiles(directory=ROOT / "dist" / "assets"), name="assets")

app.mount("/", StaticFiles(directory=ROOT, html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=CFG["port"], reload=False)
