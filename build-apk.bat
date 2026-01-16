@echo off
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
set ANDROID_HOME=C:\Users\austi\AppData\Local\Android\Sdk
set PATH=%JAVA_HOME%\bin;%PATH%
cd /d C:\ttgamebuild\liahona-mind\android
call gradlew.bat clean assembleDebug
