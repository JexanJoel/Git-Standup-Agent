---
name: vibe-check
description: "Analyzes the emotional tone of commits to measure team morale (frustration, excitement, urgency)"
allowed-tools: Bash Read Write
---

# Vibe Check

## Instructions

Analyze recent commit history for human emotion. Read between the lines.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v3.0** ONLY.

1. **Section: Vibe Summary**
   - Use `[BOX]Vibe Analysis | Analysis result here...[/BOX]`
2. **Section: Sentiment Meter**
   - Use `[BAR]Percentage | SENTIMENT[/BAR]`
3. **Section: Frustrometer**
   - Use `[BOX]The Frustrometer | Table of issues here...[/BOX]`
4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`
