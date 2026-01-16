@echo off
echo ========================================
echo   Liahona Mind - Android Build Script
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo Step 2: Building web app...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo Step 3: Syncing with Capacitor...
call npx cap sync
if errorlevel 1 (
    echo ERROR: Capacitor sync failed
    echo Trying to add Android platform...
    call npx cap add android
    call npx cap sync
)

echo.
echo Step 4: Building Android APK...
cd android
call gradlew assembleDebug
if errorlevel 1 (
    echo ERROR: Android build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   BUILD SUCCESSFUL!
echo ========================================
echo.
echo APK location: android\app\build\outputs\apk\debug\app-debug.apk
echo.

:: Copy APK to root folder
copy "app\build\outputs\apk\debug\app-debug.apk" "..\LiahonaMind.apk"
echo Copied APK to: LiahonaMind.apk

pause
