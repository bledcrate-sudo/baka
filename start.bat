@echo off
setlocal

echo ══════════════════════════════════════════════
echo  Shugi AI — Starting everything
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
echo [2/3] Starting Shugi server on port 8000...
start "" /min cmd /c "cd /d %~dp0ai && python server.py"
timeout /t 2 /nobreak >nul

REM ── 3. Start Cloudflare Tunnel (token-based) ───
echo [3/3] Starting Cloudflare Tunnel...
echo       Site will be live at: https://shugiai.com
echo.
echo ══════════════════════════════════════════════
echo  shugiai.com is now starting up
echo ══════════════════════════════════════════════
echo.

"%~dp0cloudflared.exe" tunnel run --token eyJhIjoiZTc3ZTk3NDRlNWJkYWVhMjEwZGU5NTEyMGNhZWZjMWEiLCJ0IjoiMDFiNDBlMTgtYWQ0ZC00ZTY5LWI4ZDMtMWQ3ZTFmNmFmYWI2IiwicyI6Ill6STVNak15TWpndFlUQmxOQzAwWmpBMkxUaGhOalV0WmpneU4ySTVZakkxTVRoayJ9

pause
