---
name: vibe-check
description: "Analyzes the emotional tone of commits to measure team morale (frustration, excitement, urgency)"
allowed-tools: Bash Read Write
---

# Vibe Check

## Instructions

Analyze recent commit history for human emotion. Read between the lines.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Vibe Score** 🧠
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ SCORE: [■■■■■■■■■□] 90% (Sentiment: Highly Positive)     │`

2. **Section: Emotional Climate**
   - Use a 60-character box for the summary of the mood.

3. **Section: The Frustrometer**
   - A box or table showing files causing frustration.

4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`
