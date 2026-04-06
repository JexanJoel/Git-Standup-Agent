---
name: bus-factor
description: "Identifies single-owner files - knowledge risk analysis"
allowed-tools: Bash Read Write
---

# Bus Factor Report

## Instructions
Analyze file ownership to identify knowledge risk.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Knowledge Risk Overview** 🚨
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ RISK: [■■■■■■□□□□] Medium (Score: 2.5)                  │`

2. **Section: Single-Owner Fragments**
   - Tables for files owned by one person and their severity badge (`[ CRITICAL ]`, etc.).

3. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`