@echo off
setlocal

echo ══════════════════════════════════════════════
echo  Sage — Starting everything
echo ══════════════════════════════════════════════
echo.

REM ── 1. Start Ollama (if not running) ───────────
tasklist /fi "imagename eq ollama.exe" 2>nul | find /i "ollama.exe" >nul
if errorlevel 1 (
    echo [1/3] Starting Ollama...
    start "" /min "%LOCALAPPDATA%\Programs\Ollama\ollama.exe" serve
    timeout /t 3 /nobreak >nul
) else (
    echo [1/3] Ollama already running — OK
)

REM ── 2. Start FastAPI server ────────────────────
echo [2/3] Starting Sage server on port 8000...
start "" /min cmd /c "cd /d %~dp0ai && python server.py"
timeout /t 2 /nobreak >nul

REM ── 3. Start Cloudflare Tunnel ─────────────────
REM Check if named tunnel config exists and is configured
findstr /c:"TUNNEL_ID" "%~dp0tunnel\config.yml" >nul 2>&1
if errorlevel 1 (
    REM Named tunnel is configured — use it
    echo [3/3] Starting Cloudflare named tunnel...
    echo.
    echo ══════════════════════════════════════════════
    echo  Your site is live at the domain in tunnel\config.yml
    echo ══════════════════════════════════════════════
    cloudflared.exe tunnel --config tunnel\config.yml run
) else (
    REM No named tunnel — use quick tunnel (URL changes each run)
    echo [3/3] Starting quick tunnel (no domain configured)...
    echo       URL will appear below — share it to access the site.
    echo       For a permanent URL: run setup-tunnel.bat first.
    echo.
    cloudflared.exe tunnel --url http://localhost:8000
)

pause
