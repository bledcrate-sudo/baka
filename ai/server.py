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

OLLAMA_URL    = CFG["ollama_url"]
MODEL         = CFG["model"]
ADMIN_USER    = CFG.get("admin_username", "admin")
ADMIN_PASS    = CFG["admin_password"]
DB_PATH       = BASE / CFG["db_path"]
TOKEN_EXPIRY  = 30 * 24 * 3600   # 30 days for users
ADMIN_EXPIRY  = 12 * 3600        # 12 hours for admin

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
    email    = body.get("email", "").strip() or None

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
    history    = body.get("history", [])

    if not user_msg:
        raise HTTPException(400, "Empty message")

    ip = (request.headers.get("CF-Connecting-IP")
          or request.headers.get("X-Forwarded-For", "").split(",")[0].strip()
          or (request.client.host if request.client else None))
    ua  = request.headers.get("User-Agent", "")[:300]
    now = int(time.time())

    async with aiosqlite.connect(DB_PATH) as wdb:
        wdb.row_factory = aiosqlite.Row
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

    # Build Ollama messages
    ollama_messages = list(history)
    if quiz_ctx and len(history) == 0:
        ctx_text = "Quiz context (use silently):\n" + "\n".join(
            f"- {k}: {v}" for k, v in quiz_ctx.items()
        )
        ollama_messages.insert(0, {"role": "system", "content": ctx_text})
    ollama_messages.append({"role": "user", "content": user_msg})

    ollama_payload = {"model": MODEL, "messages": ollama_messages, "stream": True}

    async def generate():
        full_response = []
        try:
            async with httpx.AsyncClient(timeout=120.0) as client:
                async with client.stream("POST", f"{OLLAMA_URL}/api/chat",
                                         json=ollama_payload) as resp:
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
                            full_response.append(tok)
                            yield f"data: {json.dumps({'token': tok})}\n\n"
                        if chunk.get("done"):
                            yield f"data: {json.dumps({'done': True})}\n\n"
                            break
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        finally:
            if full_response:
                assistant_text = "".join(full_response)
                log_now = int(time.time())
                async with aiosqlite.connect(DB_PATH) as wdb:
                    await wdb.execute(
                        "INSERT INTO messages (session_id, role, content, ts) VALUES (?,?,?,?)",
                        (session_id, "assistant", assistant_text, log_now)
                    )
                    await wdb.execute(
                        "UPDATE sessions SET updated_at=? WHERE id=?", (log_now, session_id)
                    )
                    await wdb.commit()

    return StreamingResponse(generate(), media_type="text/event-stream",
                             headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

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
    email    = body.get("email", "").strip() or None

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
    return FileResponse(ROOT / "index.html")

app.mount("/", StaticFiles(directory=ROOT, html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=CFG["port"], reload=False)
