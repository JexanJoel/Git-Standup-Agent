---
name: code-health
description: "Scans the repo for TODOs, FIXMEs, dead code patterns and files a structured health report"
allowed-tools: Bash Read Write
---

# Code Health Report

## Instructions

Scan the git log and recent diffs for code health signals...

Look for:
- TODO and FIXME comments added in recent commits
- Files changed repeatedly (churn) — signals unstable code
- Very large commits (10+ files) — signals poor scoping
- Revert commits — signals something broke
- Dependency update commits — flag if frequent

Format output as:
**Code Health Report** 📊

🔴 Critical Issues
🟡 Warnings
🟢 Healthy Signals

Overall Health Score: X/10