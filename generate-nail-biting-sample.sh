#!/bin/bash

API_KEY="sk_20c7a64da36372c9f62517e439c611b2262fa0dc25e946fd"
VOICE_ID="NFG5qt843uXKj4pFvR7C"  # Adam Stone
OUTPUT_DIR="/mnt/c/ttgamebuild/liahona-mind/voice-samples/elevenlabs"
TEMP_DIR="/tmp/tts_segments"

mkdir -p "$TEMP_DIR"
rm -f "$TEMP_DIR"/*.mp3 "$TEMP_DIR"/*.wav

# Function to generate audio segment
generate_segment() {
    local text="$1"
    local output_file="$2"

    curl -s "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
        -H "xi-api-key: $API_KEY" \
        -H "Content-Type: application/json" \
        -d "{
            \"text\": \"$text\",
            \"model_id\": \"eleven_multilingual_v2\",
            \"voice_settings\": {
                \"stability\": 0.92,
                \"similarity_boost\": 0.65,
                \"style\": 0.05,
                \"use_speaker_boost\": true
            }
        }" \
        --output "$output_file"

    echo "  Generated: $(basename $output_file)"
}

# Function to generate silence
generate_silence() {
    local duration=$1
    local output_file=$2
    ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=stereo -t "$duration" -q:a 9 -acodec libmp3lame "$output_file" 2>/dev/null
    echo "  Silence: ${duration}s"
}

echo "=== Generating Nail Biting 2-Minute Sample ==="
echo ""

# Segment 1
echo "Segment 1..."
generate_segment "Welcome, Austin. Find a comfortable position now, whether sitting or lying down. Allow your body to settle into stillness. This is your time for healing and transformation." "$TEMP_DIR/seg01.mp3"

echo "Pause 3s..."
generate_silence 3 "$TEMP_DIR/pause01.mp3"

# Segment 2
echo "Segment 2..."
generate_segment "Take a moment to congratulate yourself for being here. By choosing to address this habit, you are taking an important step toward greater self-mastery." "$TEMP_DIR/seg02.mp3"

echo "Pause 3s..."
generate_silence 3 "$TEMP_DIR/pause02.mp3"

# Segment 3
echo "Segment 3..."
generate_segment "Let us begin with breath. Take a deep breath in through your nose, Austin... filling your lungs completely... and exhale slowly through your mouth, releasing any tension you carry." "$TEMP_DIR/seg03.mp3"

echo "Pause 5s..."
generate_silence 5 "$TEMP_DIR/pause03.mp3"

# Segment 4
echo "Segment 4..."
generate_segment "Another breath in... breathing in peace and calm... and release, feeling your shoulders drop and soften." "$TEMP_DIR/seg04.mp3"

echo "Pause 5s..."
generate_silence 5 "$TEMP_DIR/pause04.mp3"

# Segment 5
echo "Segment 5..."
generate_segment "One more deep breath, Austin... and as you exhale, allow your eyes to close and give yourself permission to relax completely." "$TEMP_DIR/seg05.mp3"

echo "Pause 5s..."
generate_silence 5 "$TEMP_DIR/pause05.mp3"

# Segment 6
echo "Segment 6..."
generate_segment "Now, let relaxation begin at the top of your head. Imagine a warm, golden light touching the crown of your head, bringing deep peace wherever it flows. Feel this warmth spreading across your scalp, dissolving any tightness." "$TEMP_DIR/seg06.mp3"

echo "Pause 4s..."
generate_silence 4 "$TEMP_DIR/pause06.mp3"

# Segment 7
echo "Segment 7..."
generate_segment "This healing light flows down across your forehead, smoothing away any lines of tension. It moves around your eyes, relaxing the tiny muscles there. Down across your cheeks, your jaw, letting your jaw go slack and loose." "$TEMP_DIR/seg07.mp3"

echo "Pause 4s..."
generate_silence 4 "$TEMP_DIR/pause07.mp3"

# Segment 8
echo "Segment 8..."
generate_segment "The warmth flows down your neck now, Austin, releasing any stiffness. Into your shoulders, those places where we so often carry our burdens. Let your shoulders drop completely." "$TEMP_DIR/seg08.mp3"

echo "Pause 4s..."
generate_silence 4 "$TEMP_DIR/pause08.mp3"

# Segment 9
echo "Segment 9..."
generate_segment "Your entire body is now deeply relaxed. You are safe here. You are at peace." "$TEMP_DIR/seg09.mp3"

echo ""
echo "=== Concatenating segments ==="

# Create file list for ffmpeg
cat > "$TEMP_DIR/filelist.txt" << EOF
file 'seg01.mp3'
file 'pause01.mp3'
file 'seg02.mp3'
file 'pause02.mp3'
file 'seg03.mp3'
file 'pause03.mp3'
file 'seg04.mp3'
file 'pause04.mp3'
file 'seg05.mp3'
file 'pause05.mp3'
file 'seg06.mp3'
file 'pause06.mp3'
file 'seg07.mp3'
file 'pause07.mp3'
file 'seg08.mp3'
file 'pause08.mp3'
file 'seg09.mp3'
EOF

# Concatenate all segments
cd "$TEMP_DIR"
ffmpeg -y -f concat -safe 0 -i filelist.txt -acodec libmp3lame -q:a 2 "$OUTPUT_DIR/NailBiting-2min-SLOWER-AdamStone.mp3" 2>/dev/null

echo ""
echo "=== Done! ==="
ls -lah "$OUTPUT_DIR/NailBiting-2min-SLOWER-AdamStone.mp3"
