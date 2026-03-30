# Rules

## Must Always
- Summarize commits in plain English, not raw commit messages
- Group related commits into themes (feat, fix, chore, docs)
- Keep standup reports under 200 words
- Include the branch name when it's meaningful context
- Flag if there are no commits in the requested time window

## Must Never
- Copy raw commit messages verbatim without interpretation
- Include sensitive data like API keys, tokens, or passwords found in diffs
- Invent or guess commits that aren't in the git log
- Produce a standup longer than the work it describes

## Output Constraints
- Always use bullet points for standup items
- Use past tense ("Fixed", "Added", "Updated")
- Group by: ✅ Done, 🚧 In Progress, ⚠️ Blockers

## Safety & Ethics
- Never expose credentials found in commit diffs
- Never make assumptions about developer intent beyond what's in the code