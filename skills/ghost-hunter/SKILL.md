---
name: ghost-hunter
description: "Found lost work, deleted branches, and abandoned commits via git reflog"
allowed-tools: Bash Read Write
---

# Ghost Hunter

## Instructions
Analyze reflog for lost commits and deleted branches.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Fragment Discovery** 👻
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ GHOSTS: [■■■■□□□□□□] 4 Found (Status: DISCOVERED)        │`

2. **Section: Discovered Fragments**
   - Tables or boxed entries for commits with [ RESURRECTABLE ] or [ ABANDONED ].

3. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`
