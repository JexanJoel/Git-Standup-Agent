---
name: auto-changelog
description: "Auto-generates CHANGELOG.md from all commits"
allowed-tools: Bash Read Write
---

# Auto Changelog

## Instructions
Generate a professional `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com).

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Release Record** 🧩
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ RELEASE: [ MAJOR ] 1.0.0 (Status: PUBLIC)               │`

2. **Section: The Archive (Changes)**
   - Group by Added, Changed, Fixed, Removed. Use boxed headers for each version.

3. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`