#!/bin/bash

API_KEY="AIzaSyDD5MEfdoe47BDRGCug-n9i5hcr-qh2Fpc"
OUTPUT_DIR="/mnt/c/ttgamebuild/liahona-mind/voice-samples"

# Sample text - hypnotherapy style
SAMPLE_TEXT="Welcome back, Austin. Take a deep breath in, and release slowly. Allow your body to relax completely. You are safe here. You are at peace. As you listen to my voice, feel yourself drifting into a state of calm and tranquility."

# Function to generate audio sample
generate_sample() {
    local voice_name=$1
    local lang_code=$2
    local speed=$3
    local output_file=$4

    echo "Generating: $voice_name (speed: $speed)"

    # Create JSON request
    local json_request=$(cat <<EOF
{
  "input": {
    "text": "$SAMPLE_TEXT"
  },
  "voice": {
    "languageCode": "$lang_code",
    "name": "$voice_name"
  },
  "audioConfig": {
    "audioEncoding": "MP3",
    "speakingRate": $speed,
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

echo "=== Generating Voice Samples v2 ==="
echo ""

# Schedar at different speeds (British - your favorite)
echo "--- SCHEDAR (British) - Speed Variations ---"
generate_sample "en-GB-Chirp3-HD-Schedar" "en-GB" 0.75 "$OUTPUT_DIR/BRITISH-Schedar-speed-075.mp3"
generate_sample "en-GB-Chirp3-HD-Schedar" "en-GB" 0.80 "$OUTPUT_DIR/BRITISH-Schedar-speed-080.mp3"
generate_sample "en-GB-Chirp3-HD-Schedar" "en-GB" 0.85 "$OUTPUT_DIR/BRITISH-Schedar-speed-085.mp3"

echo ""

# American Male Voices - Best Chirp3-HD
echo "--- AMERICAN MALE VOICES ---"
generate_sample "en-US-Chirp3-HD-Schedar" "en-US" 0.80 "$OUTPUT_DIR/US-MALE-Schedar-speed-080.mp3"
generate_sample "en-US-Chirp3-HD-Schedar" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Schedar-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Charon" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Charon-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Fenrir" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Fenrir-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Orus" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Orus-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Puck" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Puck-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Achird" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Achird-speed-085.mp3"
generate_sample "en-US-Studio-Q" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Studio-Q-speed-085.mp3"
generate_sample "en-US-Neural2-D" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Neural2-D-speed-085.mp3"
generate_sample "en-US-Neural2-J" "en-US" 0.85 "$OUTPUT_DIR/US-MALE-Neural2-J-speed-085.mp3"

echo ""

# American Female Voices - Best Chirp3-HD
echo "--- AMERICAN FEMALE VOICES ---"
generate_sample "en-US-Chirp3-HD-Kore" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Kore-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Aoede" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Aoede-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Leda" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Leda-speed-085.mp3"
generate_sample "en-US-Chirp3-HD-Zephyr" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Zephyr-speed-085.mp3"
generate_sample "en-US-Studio-O" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Studio-O-speed-085.mp3"
generate_sample "en-US-Neural2-F" "en-US" 0.85 "$OUTPUT_DIR/US-FEMALE-Neural2-F-speed-085.mp3"

echo ""
echo "=== Done! ==="
echo "Samples saved to: $OUTPUT_DIR"
