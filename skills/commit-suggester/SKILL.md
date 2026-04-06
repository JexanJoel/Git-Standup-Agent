---
name: commit-suggester
description: "Looks at recent bad commit messages and suggests better conventional commit rewrites"
allowed-tools: Bash Read Write
---

# Commit Suggester

## Instructions
Review last 10 messages and suggest rewrites.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v3.0** ONLY.

1. **Dashboard: Message Refinement**
   - Use `[BOX]Refined Messages | Table of suggestions here...[/BOX]`
2. **Quality Meter**
   - Use `[BAR]Percentage | QUALITY[/BAR]`
3. **Verdict**
   - `─── Verdict: [Your one-line insight] ───`