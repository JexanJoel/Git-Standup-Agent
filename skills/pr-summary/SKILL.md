---
name: pr-summary
description: "Summarizes your changes as a PR description"
allowed-tools: Bash Read Write
---

# PR Summary

## Instructions
Analyze commits and changed files to generate a PR description.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: PR Intelligence** 🔮
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ MAGNITUDE: [■■■■■■■□□□] 70% (Status: SUBSTANTIAL)        │`

2. **Section: Overview**
   - Use a 60-character box for the summary of changes.

3. **Section: Impacted Area**
   - Tables for impacted areas and risk level (`[ WARNING ]`, etc.).

4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`
