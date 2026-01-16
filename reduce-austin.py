#!/usr/bin/env python3
"""
Reduce "Austin" usage in hypnotherapy scripts.
Keep: first occurrence (welcome), last occurrence (closing), and optionally 1 in the middle.
Remove: all others.
"""

import os
import re
import glob

SCRIPTS_DIR = "/mnt/c/ttgamebuild/liahona-mind/scripts"

def reduce_austin(content):
    """Reduce Austin mentions to just intro, one middle, and closing."""

    # Find all Austin occurrences with their positions
    pattern = r'\bAustin\b'
    matches = list(re.finditer(pattern, content))

    if len(matches) <= 3:
        # Already 3 or fewer, leave as is
        return content, len(matches), len(matches)

    original_count = len(matches)

    # Keep first (welcome) and last (closing)
    keep_indices = {0, len(matches) - 1}

    # Optionally keep one in the middle (around 40-60% through)
    if len(matches) >= 5:
        middle_idx = len(matches) // 2
        keep_indices.add(middle_idx)

    # Build new content by removing unwanted Austin mentions
    new_content = content
    offset = 0

    for i, match in enumerate(matches):
        if i not in keep_indices:
            start = match.start() - offset
            end = match.end() - offset

            # Check context to remove cleanly
            before = new_content[max(0, start-2):start]
            after = new_content[end:end+2]

            # Remove ", Austin" or "Austin," or just "Austin"
            if before.endswith(", "):
                # ", Austin" -> ""
                new_content = new_content[:start-2] + new_content[end:]
                offset += (end - start + 2)
            elif after.startswith(", "):
                # "Austin, " -> ""
                new_content = new_content[:start] + new_content[end+2:]
                offset += (end - start + 2)
            elif after.startswith("."):
                # "Austin." - keep the period
                new_content = new_content[:start] + new_content[end:]
                offset += (end - start)
            else:
                # Just remove Austin
                new_content = new_content[:start] + new_content[end:]
                offset += (end - start)

    # Clean up any double spaces
    new_content = re.sub(r'  +', ' ', new_content)
    # Clean up space before punctuation
    new_content = re.sub(r' ([.,])', r'\1', new_content)

    new_count = len(re.findall(pattern, new_content))
    return new_content, original_count, new_count

def process_all_scripts():
    """Process all script files."""
    script_files = glob.glob(os.path.join(SCRIPTS_DIR, "**/*.txt"), recursive=True)

    total_original = 0
    total_new = 0

    for filepath in sorted(script_files):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content, orig_count, new_count = reduce_austin(content)

        total_original += orig_count
        total_new += new_count

        if orig_count != new_count:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"{os.path.basename(filepath)}: {orig_count} -> {new_count}")

    print(f"\nTotal: {total_original} -> {total_new} Austin mentions")

if __name__ == "__main__":
    process_all_scripts()
