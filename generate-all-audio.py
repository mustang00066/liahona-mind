#!/usr/bin/env python3
"""
Generate all hypnotherapy audio sessions using ElevenLabs TTS.
"""

import os
import re
import json
import subprocess
import time
from pathlib import Path

# Configuration
API_KEY = "sk_20c7a64da36372c9f62517e439c611b2262fa0dc25e946fd"
SCRIPTS_DIR = Path("/mnt/c/ttgamebuild/liahona-mind/scripts")
OUTPUT_DIR = Path("/mnt/c/ttgamebuild/liahona-mind/audio")
TEMP_DIR = Path("/tmp/tts_generation")

# Voice configurations
VOICES = {
    "male": {
        "id": "NFG5qt843uXKj4pFvR7C",  # Adam Stone
        "name": "AdamStone",
        "speed_adjust": 0.98  # 98% speed
    },
    "female": {
        "id": "pysCEvZRsl1S0ifPp4IM",  # Serene Presence
        "name": "SerenePresence",
        "speed_adjust": 1.0  # No adjustment
    }
}

VOICE_SETTINGS = {
    "stability": 0.92,
    "similarity_boost": 0.65,
    "style": 0.05,
    "use_speaker_boost": True
}

def parse_script(filepath):
    """Parse a script file into segments (text and pauses)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    segments = []
    lines = content.split('\n')
    current_text = []

    for line in lines:
        line = line.strip()

        # Skip metadata lines
        if not line or line.startswith('[BEGIN') or line.startswith('[END'):
            continue
        if any(line.startswith(x) for x in ['Duration:', 'Voice:', 'Word count:', 'Estimated duration']):
            continue
        if re.match(r'^(NAIL|ANXIETY|OVER|SELF|PHONE|PRESENT|PORN)', line):
            continue
        if 'SESSION' in line and ':' in line and len(line) < 100:
            continue

        # Check for pause marker
        pause_match = re.match(r'\[PAUSE\s+(\d+)\s+SECONDS?\]', line, re.IGNORECASE)
        if pause_match:
            # Save accumulated text as a segment
            if current_text:
                text = ' '.join(current_text).strip()
                if text:
                    segments.append(('text', text))
                current_text = []
            # Add pause segment
            pause_duration = int(pause_match.group(1))
            segments.append(('pause', pause_duration))
        else:
            current_text.append(line)

    # Don't forget remaining text
    if current_text:
        text = ' '.join(current_text).strip()
        if text:
            segments.append(('text', text))

    return segments

def generate_speech(text, output_file, voice_id):
    """Generate speech using ElevenLabs API."""
    import urllib.request

    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

    data = json.dumps({
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": VOICE_SETTINGS
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data)
    req.add_header('xi-api-key', API_KEY)
    req.add_header('Content-Type', 'application/json')

    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            with open(output_file, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"    Error generating speech: {e}")
        return False

def generate_silence(duration, output_file):
    """Generate silence using ffmpeg."""
    cmd = [
        'ffmpeg', '-y', '-f', 'lavfi',
        '-i', f'anullsrc=r=44100:cl=stereo',
        '-t', str(duration),
        '-q:a', '9',
        '-acodec', 'libmp3lame',
        str(output_file)
    ]
    subprocess.run(cmd, capture_output=True)

def concatenate_segments(segment_files, output_file):
    """Concatenate audio segments using ffmpeg."""
    # Create file list
    list_file = TEMP_DIR / "concat_list.txt"
    with open(list_file, 'w') as f:
        for seg_file in segment_files:
            f.write(f"file '{seg_file}'\n")

    cmd = [
        'ffmpeg', '-y', '-f', 'concat', '-safe', '0',
        '-i', str(list_file),
        '-acodec', 'libmp3lame', '-q:a', '2',
        str(output_file)
    ]
    subprocess.run(cmd, capture_output=True)

def adjust_speed(input_file, output_file, speed_factor):
    """Adjust audio speed using ffmpeg."""
    if speed_factor == 1.0:
        # No adjustment needed, just copy
        subprocess.run(['cp', str(input_file), str(output_file)])
        return

    cmd = [
        'ffmpeg', '-y', '-i', str(input_file),
        '-filter:a', f'asetrate=44100*{speed_factor},aresample=44100',
        '-acodec', 'libmp3lame', '-q:a', '2',
        str(output_file)
    ]
    subprocess.run(cmd, capture_output=True)

def process_script(script_path, voice_key, output_subdir):
    """Process a single script file and generate audio."""
    voice = VOICES[voice_key]

    # Parse script
    segments = parse_script(script_path)
    if not segments:
        print(f"    No segments found in {script_path.name}")
        return False

    # Create temp directory for this script
    script_temp = TEMP_DIR / script_path.stem / voice_key
    script_temp.mkdir(parents=True, exist_ok=True)

    # Clean up old temp files
    for f in script_temp.glob('*.mp3'):
        f.unlink()

    segment_files = []

    for i, (seg_type, seg_data) in enumerate(segments):
        seg_file = script_temp / f"seg_{i:03d}.mp3"

        if seg_type == 'text':
            if not generate_speech(seg_data, seg_file, voice['id']):
                return False
        else:  # pause
            generate_silence(seg_data, seg_file)

        segment_files.append(seg_file)

    # Concatenate all segments
    raw_output = script_temp / "raw_output.mp3"
    concatenate_segments(segment_files, raw_output)

    # Create output directory
    output_path = OUTPUT_DIR / output_subdir / voice_key
    output_path.mkdir(parents=True, exist_ok=True)

    # Final output file
    final_output = output_path / f"{script_path.stem}.mp3"

    # Adjust speed if needed
    adjust_speed(raw_output, final_output, voice['speed_adjust'])

    return True

def get_all_scripts():
    """Get all script files organized by category."""
    categories = {}

    for category_dir in SCRIPTS_DIR.iterdir():
        if category_dir.is_dir():
            scripts = list(category_dir.glob('*.txt'))
            if scripts:
                categories[category_dir.name] = scripts

    return categories

def main():
    """Main generation loop."""
    TEMP_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    categories = get_all_scripts()

    total_scripts = sum(len(scripts) for scripts in categories.values())
    total_files = total_scripts * 2  # Both voices

    print(f"=== Generating {total_files} audio files ({total_scripts} scripts × 2 voices) ===")
    print()

    completed = 0
    failed = []

    for category, scripts in sorted(categories.items()):
        print(f"\n{'='*60}")
        print(f"Category: {category} ({len(scripts)} scripts)")
        print('='*60)

        for script_path in sorted(scripts):
            for voice_key in ['male', 'female']:
                completed += 1
                voice_name = VOICES[voice_key]['name']

                # Check if already exists
                output_check = OUTPUT_DIR / category / voice_key / f"{script_path.stem}.mp3"
                if output_check.exists():
                    print(f"[{completed}/{total_files}] SKIP (exists): {script_path.stem} - {voice_name}")
                    continue

                print(f"[{completed}/{total_files}] Generating: {script_path.stem} - {voice_name}")

                try:
                    success = process_script(script_path, voice_key, category)
                    if success:
                        print(f"    Done!")
                    else:
                        print(f"    FAILED")
                        failed.append((script_path.name, voice_key))
                except Exception as e:
                    print(f"    ERROR: {e}")
                    failed.append((script_path.name, voice_key))

                # Small delay to avoid rate limiting
                time.sleep(0.5)

    print(f"\n{'='*60}")
    print(f"COMPLETE!")
    print(f"Generated: {completed - len(failed)} / {total_files}")
    if failed:
        print(f"Failed: {len(failed)}")
        for name, voice in failed:
            print(f"  - {name} ({voice})")

if __name__ == "__main__":
    main()
