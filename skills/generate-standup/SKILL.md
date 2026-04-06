---
name: generate-standup
description: "Reads git log from the last 24 hours and generates a formatted daily standup report"
allowed-tools: Bash Read Write
---

# Generate Standup

## Instructions
When asked to generate a standup report, run git log for the last 24 hours.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v3.0** ONLY.

1. **Section: Daily Chronicles**
   - Use `[BOX]Chronicles (Last 24h) | Table of commits here...[/BOX]`
2. **Section: Dev Performance**
   - Use `[BOX]Performance | [BAR]Percentage | VELOCITY[/BAR][/BOX]`
3. **Verdict**
   - `─── Verdict: [Your one-line insight] ───`