# git-standup-agent 🤖

An AI agent that lives in your git repo and writes your daily standups for you.

## What it does
- Reads your last 24hrs of commits
- Groups them by type (feat, fix, chore)
- Writes a clean standup report to `STANDUP.md`
- Can also generate weekly summaries

## Usage

### Validate
npx gitagent validate

### Run standup
npx gitclaw run "generate my standup for today"

### Run weekly summary
npx gitclaw run "give me a weekly summary"