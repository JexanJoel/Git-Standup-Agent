---
name: commit-suggester
description: "Looks at recent bad commit messages and suggests better conventional commit rewrites"
allowed-tools: Bash Read Write
---

# Commit Suggester

## Instructions
Review last 10 messages and suggest conventional commit rewrites.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Message Refinement** 🎯
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ QUALITY: [■■■■■■■■□□] 80% (Status: IMPROVABLE)           │`

2. **Section: The Refinement Table**
   - A box-framed table comparing original vs rewrite.
   - Headers: `│ Type | Original | Rewrite | Status │`.

3. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`