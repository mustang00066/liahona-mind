#!/bin/bash

API_KEY="AIzaSyDD5MEfdoe47BDRGCug-n9i5hcr-qh2Fpc"
OUTPUT_DIR="/mnt/c/ttgamebuild/liahona-mind/voice-samples"

# Sample text - hypnotherapy style
SAMPLE_TEXT="Welcome back, Austin. Take a deep breath in, and release slowly. Allow your body to relax completely. You are safe here. You are at peace. As you listen to my voice, feel yourself drifting into a state of calm and tranquility."

# Function to generate audio sample
generate_sample() {
    local voice_name=$1
    local output_file=$2

    echo "Generating: $voice_name"

    # Create JSON request
    local json_request=$(cat <<EOF
{
  "input": {
    "text": "$SAMPLE_TEXT"
  },
  "voice": {
    "languageCode": "en-GB",
    "name": "$voice_name"
  },
  "audioConfig": {
    "audioEncoding": "MP3",
    "speakingRate": 0.9,
    "pitch": 0
  }
}
EOF
)

    # Call API and extract audio content
    local response=$(curl -s -X POST \
        "https://texttospeech.googleapis.com/v1/text:synthesize?key=$API_KEY" \
        -H "Content-Type: application/json" \
        -d "$json_request")

    # Extract base64 audio and decode to file
    echo "$response" | grep -o '"audioContent": "[^"]*"' | cut -d'"' -f4 | base64 -d > "$output_file"

    if [ -s "$output_file" ]; then
        echo "  Created: $output_file"
    else
        echo "  FAILED: $output_file"
        rm -f "$output_file"
    fi
}

echo "=== Generating Voice Samples ==="
echo ""

# Best Male Voices
echo "--- MALE VOICES (Best for Hypnotherapy) ---"
generate_sample "en-GB-Chirp3-HD-Achird" "$OUTPUT_DIR/MALE-Chirp3-HD-Achird.mp3"
generate_sample "en-GB-Chirp3-HD-Charon" "$OUTPUT_DIR/MALE-Chirp3-HD-Charon.mp3"
generate_sample "en-GB-Chirp3-HD-Fenrir" "$OUTPUT_DIR/MALE-Chirp3-HD-Fenrir.mp3"
generate_sample "en-GB-Chirp3-HD-Orus" "$OUTPUT_DIR/MALE-Chirp3-HD-Orus.mp3"
generate_sample "en-GB-Chirp3-HD-Puck" "$OUTPUT_DIR/MALE-Chirp3-HD-Puck.mp3"
generate_sample "en-GB-Chirp3-HD-Schedar" "$OUTPUT_DIR/MALE-Chirp3-HD-Schedar.mp3"
generate_sample "en-GB-Chirp3-HD-Umbriel" "$OUTPUT_DIR/MALE-Chirp3-HD-Umbriel.mp3"
generate_sample "en-GB-Studio-B" "$OUTPUT_DIR/MALE-Studio-B.mp3"
generate_sample "en-GB-Neural2-B" "$OUTPUT_DIR/MALE-Neural2-B.mp3"
generate_sample "en-GB-Neural2-D" "$OUTPUT_DIR/MALE-Neural2-D.mp3"
generate_sample "en-GB-Wavenet-B" "$OUTPUT_DIR/MALE-Wavenet-B.mp3"

echo ""

# Best Female Voices
echo "--- FEMALE VOICES (Best for Hypnotherapy) ---"
generate_sample "en-GB-Chirp3-HD-Aoede" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Aoede.mp3"
generate_sample "en-GB-Chirp3-HD-Kore" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Kore.mp3"
generate_sample "en-GB-Chirp3-HD-Leda" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Leda.mp3"
generate_sample "en-GB-Chirp3-HD-Zephyr" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Zephyr.mp3"
generate_sample "en-GB-Chirp3-HD-Despina" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Despina.mp3"
generate_sample "en-GB-Chirp3-HD-Gacrux" "$OUTPUT_DIR/FEMALE-Chirp3-HD-Gacrux.mp3"
generate_sample "en-GB-Studio-C" "$OUTPUT_DIR/FEMALE-Studio-C.mp3"
generate_sample "en-GB-Neural2-A" "$OUTPUT_DIR/FEMALE-Neural2-A.mp3"
generate_sample "en-GB-Neural2-C" "$OUTPUT_DIR/FEMALE-Neural2-C.mp3"
generate_sample "en-GB-Neural2-F" "$OUTPUT_DIR/FEMALE-Neural2-F.mp3"
generate_sample "en-GB-Wavenet-A" "$OUTPUT_DIR/FEMALE-Wavenet-A.mp3"

echo ""
echo "=== Done! ==="
echo "Samples saved to: $OUTPUT_DIR"
echo ""
echo "Listen to the samples and let me know which voices you prefer!"
