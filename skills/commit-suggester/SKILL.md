---
name: commit-suggester
description: "Looks at recent bad commit messages and suggests better conventional commit rewrites"
allowed-tools: Bash Read Write
---

# Commit Suggester

## Instructions

Review the last 10 commit messages. For any that are vague, unclear, or don't follow conventional commits format, suggest a rewrite.

Conventional commit format: type(scope): description
Types: feat, fix, chore, docs, refactor, test, style, perf

For each bad message show:
❌ Original: [original message]
✅ Better: [your suggested rewrite]
💡 Why: [one line explanation]

End with a Commit Quality Score: X/10