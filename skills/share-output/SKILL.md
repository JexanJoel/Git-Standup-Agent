---
name: share-output
description: "Formats standup reports for Slack or email sharing with clean structure"
allowed-tools: Bash Read Write
---

# Share Output

## Instructions

Take the last generated standup and reformat it for sharing.

For Slack format:
- Use emoji bullets
- Keep under 10 lines
- Add @here at top if blockers exist
- Use *bold* for section headers (Slack markdown)

For Email format:
- Professional tone
- Subject line suggestion at top
- Clean bullet points
- Sign off with team name

Always output BOTH formats...