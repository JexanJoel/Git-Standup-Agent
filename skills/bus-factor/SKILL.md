---
name: bus-factor
description: "Analyzes who owns which files and warns if critical code has only one contributor"
allowed-tools: Bash Read Write
---

# Bus Factor Alert

## Instructions

Analyze git log to find file ownership patterns.

For each frequently changed file, find who has committed to it.

Flag files where:
- Only 1 person has ever committed (bus factor = 1)
- One person owns 80%+ of commits to a file
- No commits in 90+ days (stale/abandoned)

Format:
**Bus Factor Report** 🚨

🔴 High Risk Files (only 1 contributor)
🟡 Medium Risk Files (1 person owns 80%+)
🟢 Healthy Files (multiple contributors)

**Overall Bus Factor Score: X/10**

End with recommendations to reduce risk...