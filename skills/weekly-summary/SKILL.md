---
name: weekly-summary
description: "Generates a weekly summary of git activity"
allowed-tools: Bash Read Write
---

# Weekly Summary

## Instructions
Summarize 7 days of activity, grouped by type.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Weekly Throughput** 📅
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ THROUGHPUT: [■■■■■■□□□□] Medium (24 Commits)            │`

2. **Section: The Chapters (Weekly Breakdown)**
   - Group by feature, fix, chore. Use 60-character boxes.

3. **Section: Major Milestones**
   - Use boxes for key achievements.

4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`