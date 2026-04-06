---
name: generate-standup
description: "Reads git log from the last 24 hours and generates a formatted daily standup report"
allowed-tools: Bash Read Write
---

# Generate Standup

## Instructions
When asked to generate a standup report, run git log for the last 24 hours.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Daily Velocity** 🚀
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ VELOCITY: [■■■■■■□□□□] Medium (6 Commits)                │`
   - Border alignment check: Ensure the right `│` is at column 60.

2. **Section: The Chronicles (Recent Commits)**
   - Group commits by type (feat, fix, refactor) in a clean table.
   
3. **Historian's Verdict**
   - `─── Verdict: [One-line summary of the day's progress] ───`