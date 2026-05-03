@echo off
setlocal

echo ══════════════════════════════════════════════
echo  Sage — Cloudflare Tunnel Setup (one-time)
echo ══════════════════════════════════════════════
echo.

REM ── Step 1: Login ──────────────────────────────
echo [1/3] Opening Cloudflare login in browser...
echo       Approve access when prompted.
echo.
cloudflared.exe tunnel login
if errorlevel 1 ( echo LOGIN FAILED & pause & exit /b 1 )

REM ── Step 2: Create tunnel ──────────────────────
echo.
echo [2/3] Creating tunnel named "sage"...
cloudflared.exe tunnel create sage > tunnel\tunnel-create.txt 2>&1
type tunnel\tunnel-create.txt

REM Extract tunnel ID from output
for /f "tokens=*" %%a in ('cloudflared.exe tunnel list ^| findstr "sage"') do set TUNNEL_LINE=%%a
for /f "tokens=1" %%a in ("%TUNNEL_LINE%") do set TUNNEL_ID=%%a

echo.
echo Tunnel ID: %TUNNEL_ID%

REM ── Step 3: Patch config.yml ──────────────────
echo.
echo [3/3] Updating tunnel\config.yml with tunnel ID...
powershell -Command "(Get-Content 'tunnel\config.yml') -replace 'TUNNEL_ID', '%TUNNEL_ID%' | Set-Content 'tunnel\config.yml'"

echo.
echo ══════════════════════════════════════════════
echo  NEXT STEPS:
echo ══════════════════════════════════════════════
echo.
echo  1. Buy a domain on Cloudflare (cloudflare.com/products/registrar)
echo     OR add any existing domain to Cloudflare
echo.
echo  2. Run this command to point your domain to the tunnel:
echo     cloudflared.exe tunnel route dns sage YOUR_SUBDOMAIN.YOURDOMAIN.COM
echo     Example: cloudflared.exe tunnel route dns sage sage.example.com
echo.
echo  3. Edit tunnel\config.yml and replace YOUR_DOMAIN with that same subdomain
echo.
echo  4. Run start.bat — your site will be live at that URL
echo.
pause
