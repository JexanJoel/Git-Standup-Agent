---
name: code-health
description: "Scans the repo for TODOs, FIXMEs, dead code patterns and files a structured health report"
allowed-tools: Bash Read Write
---

# Code Health Report

## Instructions

Analyze code health signals like churn, reverts, and poor scoping.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Repository Vital Signs** 🏥
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ HEALTH: [■■■■■■■■□□] 80% (Status: VIBRANT)               │`

2. **Section: Diagnostics**
   - A box-framed table with issue status (`[ CRITICAL ]`, etc.)

3. **Section: Pulse Analysis**
   - Observations on tech debt and churn.

4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`