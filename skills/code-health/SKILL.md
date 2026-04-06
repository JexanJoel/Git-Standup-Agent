---
name: code-health
description: "Scans the repo for TODOs, FIXMEs, dead code patterns and files a structured health report"
allowed-tools: Bash Read Write
---

# Code Health Report

## Instructions

Analyze code health signals like churn, reverts, and poor scoping.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v3.0** ONLY.

1. **Dashboard: Repository Health**
   - Use `[BOX]DIAGNOSTICS | [BAR]Percentage | SCORE[/BAR][/BOX]`
2. **Section: Diagnostics List**
   - Use `[BOX]Vital Signs | Table of diagnostics and status badges...[/BOX]`
3. **Verdict**
   - `─── Verdict: [Your one-line insight] ───`