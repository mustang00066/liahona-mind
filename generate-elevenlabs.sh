#!/bin/bash

API_KEY="sk_20c7a64da36372c9f62517e439c611b2262fa0dc25e946fd"
OUTPUT_DIR="/mnt/c/ttgamebuild/liahona-mind/voice-samples/elevenlabs"

mkdir -p "$OUTPUT_DIR"

# Sample text - hypnotherapy style
SAMPLE_TEXT="Welcome back, Austin. Take a deep breath in, and release slowly. Allow your body to relax completely. You are safe here. You are at peace. As you listen to my voice, feel yourself drifting into a state of calm and tranquility."

generate_sample() {
    local voice_id=$1
    local voice_name=$2
    local output_file=$3

    echo "Generating: $voice_name"

    curl -s "https://api.elevenlabs.io/v1/text-to-speech/$voice_id" \
        -H "xi-api-key: $API_KEY" \
        -H "Content-Type: application/json" \
        -d "{
            \"text\": \"$SAMPLE_TEXT\",
            \"model_id\": \"eleven_multilingual_v2\",
            \"voice_settings\": {
                \"stability\": 0.75,
                \"similarity_boost\": 0.75,
                \"style\": 0.3,
                \"use_speaker_boost\": true
            }
        }" \
        --output "$output_file"

    if [ -s "$output_file" ]; then
        echo "  Created: $output_file"
    else
        echo "  FAILED: $output_file"
        rm -f "$output_file"
    fi
}

echo "=== Generating ElevenLabs Samples ==="
echo ""

# Best Male Voices for Hypnotherapy
echo "--- MALE VOICES ---"
generate_sample "JBFqnCBsd6RMkjVDRZzb" "George - Warm Storyteller (British)" "$OUTPUT_DIR/MALE-George-British-Warm.mp3"
generate_sample "onwK4e9ZLuTAKqWW03F9" "Daniel - Steady Broadcaster (British)" "$OUTPUT_DIR/MALE-Daniel-British-Steady.mp3"
generate_sample "nPczCjzI2devNBz1zQrb" "Brian - Deep Comforting (American)" "$OUTPUT_DIR/MALE-Brian-American-Deep.mp3"
generate_sample "pqHfZKP75CvOlQylNhV4" "Bill - Wise Balanced (American)" "$OUTPUT_DIR/MALE-Bill-American-Wise.mp3"
generate_sample "pNInz6obpgDQGcFmaJgB" "Adam - Dominant Firm (American)" "$OUTPUT_DIR/MALE-Adam-American-Firm.mp3"
generate_sample "cjVigY5qzO86Huf0OWal" "Eric - Smooth Trustworthy (American)" "$OUTPUT_DIR/MALE-Eric-American-Smooth.mp3"
generate_sample "bIHbv24MWmeRgasZH58o" "Will - Relaxed Optimist (American)" "$OUTPUT_DIR/MALE-Will-American-Relaxed.mp3"

echo ""

# Best Female Voices for Hypnotherapy
echo "--- FEMALE VOICES ---"
generate_sample "EXAVITQu4vr4xnSDxMaL" "Sarah - Mature Reassuring (American)" "$OUTPUT_DIR/FEMALE-Sarah-American-Reassuring.mp3"
generate_sample "Xb7hH8MSUJpSbSDYk0k2" "Alice - Clear Engaging (British)" "$OUTPUT_DIR/FEMALE-Alice-British-Clear.mp3"
generate_sample "pFZP5JQG7iQjIQuC4Bku" "Lily - Velvety Actress (British)" "$OUTPUT_DIR/FEMALE-Lily-British-Velvety.mp3"
generate_sample "XrExE9yKIg1WjnnlVkGX" "Matilda - Professional (American)" "$OUTPUT_DIR/FEMALE-Matilda-American-Pro.mp3"

echo ""

# Neutral/Calm Voice
echo "--- NEUTRAL/CALM ---"
generate_sample "SAz9YHcvj6GT2YYXdXww" "River - Relaxed Neutral (American)" "$OUTPUT_DIR/NEUTRAL-River-Relaxed.mp3"

echo ""
echo "=== Done! ==="
echo "Samples saved to: $OUTPUT_DIR"
