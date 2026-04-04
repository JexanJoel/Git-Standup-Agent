<div align="center">

<h1>🤖 Git Standup Agent</h1>

<p><strong>Your git repo has a memory. Now it can speak.</strong></p>

<p><em>Point it at any repo - local or public GitHub URL - and get instant intelligence.</em></p>

<br/>

<!-- BADGES -->
<div align="center">
<table>
  <tr>
    <td align="center"><a href="https://github.com/JexanJoel/Git-Standup-Agent"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a></td>
    <td align="center"><a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge"/></a></td>
    <td align="center"><a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/🤝-Contributing-4f46e5?style=for-the-badge&labelColor=1e1b4b&color=4f46e5"/></a></td>
    <td align="center"><a href="https://hackculture.in"><img src="https://img.shields.io/badge/GitAgent_Hackathon_2026-6366f1?style=for-the-badge"/></a></td>
    <td align="center"><a href="https://github.com/sponsors/JexanJoel"><img src="https://img.shields.io/badge/💖%20Sponsor%20Me-e11d48?style=for-the-badge"/></a></td>
  </tr>
</table>
</div>

<br/>

</div>

---

## 🧠 What is this?

`git-standup-agent` is an AI agent that **lives inside your git repository** - defined using the [gitagent open standard](https://github.com/open-gitagent/gitagent). It reads your commit history and turns raw git data into useful, human-readable intelligence.

**What makes it different?** Just paste any public GitHub URL at startup and the agent clones it, analyzes it, and lets you run all 10 commands on it - without ever leaving your terminal. No dashboards. No cloud sync. No third-party services. Just clone and run.

> *"Stop copying commit hashes into Slack. Let your repo speak for itself."*

---

---

## 📚 Table of Contents

- [What is this?](#-what-is-this)
- [Features](#-features)
- [Demo](#-demo)
- [Screenshots](#-screenshots)
- [Quick Start](#-quick-start)
- [Commands](#-commands)
- [How It Works](#-how-it-works)
- [Configuration](#-configuration)
- [Built With](#-built-with)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

<div align="center">

| Command | What it does | Output |
|---|---|---|
| `standup` | Daily standup from last 24hrs of commits | `STANDUP.md` |
| `weekly summary` | 7-day digest grouped by type | `WEEKLY.md` |
| `roast me` 🔥 | Brutally honest commit review | `ROAST.md` |
| `health report` 📊 | Code health scan - TODOs, churn, debt | `HEALTH.md` |
| `suggest commits` 🎯 | Rewrites bad commit messages | `COMMIT-SUGGESTIONS.md` |
| `share` 📧 | Formats standup for Slack & email | `SHARE.md` |
| `pr summary` 🔮 | Summarizes your changes as a PR description | `PR-SUMMARY.md` |
| `streak` ⏰ | Tracks your commit streak like GitHub | `STREAK.md` |
| `changelog` 🧩 | Auto-generates `CHANGELOG.md` from all commits | `CHANGELOG.md` |
| `bus factor` 🚨 | Identifies single-owner files - knowledge risk | `BUS-FACTOR.md` |

</div>

---

## 🎬 Demo

> Click the thumbnail below to watch the full demo.

<p align="center">
  <a href="https://youtu.be/bzZDHZADn84">
    <img src="./assets/demo-thumbnail.png" alt="Git Standup Agent - Full Demo (2 mins)" width="100%" />
  </a>
</p>

---

## 📸 Screenshots

### 🔗 Repo Selection - Local or Any Public GitHub URL

At startup, the agent asks for a repo. Press Enter to use your local repo, or paste any public GitHub URL to analyze it instantly. The agent auto-clones it, reads the git history, and loads the command menu with live repo stats.

<p align="center">
  <img src="./assets/repo-select.png" alt="Git Standup Agent - Repo selection screen" width="100%" />
</p>

---

### 📋 Standup - Daily Progress Report

Turn your last 24 hours of commits into a clean daily standup, grouped by feature, fix, and chore. Perfect for sharing in team channels without manually digging through git history.

<p align="center">
  <img src="./assets/standup.png" alt="Git Standup Agent - Daily standup output" width="100%" />
</p>

---

### 📅 Weekly Summary - 7-Day Digest

Get a full week of work summarized into a readable digest, grouped by type - features shipped, bugs fixed, and maintenance done. A simple way to review what actually got done.

<p align="center">
  <img src="./assets/weekly-summary.png" alt="Git Standup Agent - Weekly summary output" width="100%" />
</p>

---

### 🔥 Roast Me - Brutal Commit Review

Get a brutally honest, funny AI review of your commit habits. Flags vague messages, lazy WIP commits, missing prefixes, and more - with a score out of 10 and one genuine compliment.

<p align="center">
  <img src="./assets/roast-me.png" alt="Git Standup Agent - Roast me output" width="100%" />
</p>

---

### 📊 Health Report - Code Health Scan

Scan your repository for TODOs, FIXMEs, high-churn files, revert commits, and tech debt signals. Get a structured report with 🔴 Critical, 🟡 Warning, and 🟢 Healthy sections - plus an overall health score.

<p align="center">
  <img src="./assets/health-report.png" alt="Git Standup Agent - Health report output" width="100%" />
</p>

---

### 🎯 Suggest Commits - Better Commit Messages

Reviews your last 10 commit messages and rewrites any that are vague, lazy, or don't follow conventional commit format. Shows the original, the rewrite, and why it's better - with a Commit Quality Score.

<p align="center">
  <img src="./assets/suggest-commits.png" alt="Git Standup Agent - Commit suggester output" width="100%" />
</p>

---

### 📧 Share - Slack & Email Ready

Takes your last standup and reformats it into two ready-to-paste formats - a Slack message with emoji and bold headers, and a professional email with subject line and sign-off.

<p align="center">
  <img src="./assets/share.png" alt="Git Standup Agent - Share output for Slack and email" width="100%" />
</p>

---

### 🔮 PR Summary - Auto PR Description

Analyzes your recent commits and changed files to generate a polished pull request description - what changed, why it changed, files affected, risks, and a suggested PR title.

<p align="center">
  <img src="./assets/pr-summary.png" alt="Git Standup Agent - PR summary output" width="100%" />
</p>

---

### ⏰ Streak Tracker - GitHub-Style Commit Streaks

Calculates your current commit streak, longest streak ever, most productive day of the week, most active time of day, and this week vs last week commit velocity. Ends with a motivational message.

<p align="center">
  <img src="./assets/streak.png" alt="Git Standup Agent - Streak tracker output" width="100%" />
</p>

---

### 🧩 Auto Changelog - CHANGELOG.md Generator

Reads your entire commit history and generates a professional `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com) format - grouped by version or month, with Added, Changed, Fixed, and Removed sections.

<p align="center">
  <img src="./assets/changelog.png" alt="Git Standup Agent - Auto changelog output" width="100%" />
</p>

---

### 🚨 Bus Factor - Knowledge Risk Analysis

Identifies files that only one contributor has ever touched. Flags 🔴 high-risk files (single owner), 🟡 medium-risk (one person owns 80%+), and 🟢 healthy files - with an overall Bus Factor Score and recommendations.

<p align="center">
  <img src="./assets/bus-factor.png" alt="Git Standup Agent - Bus factor report" width="100%" />
</p>

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- A free [Groq API key](https://console.groq.com) *(takes 2 minutes, no card needed)*

### Installation

```bash
# 1. Clone the agent
git clone https://github.com/JexanJoel/Git-Standup-Agent.git
cd Git-Standup-Agent

# 2. Install dependencies
npm install

# 3. Add your API key
echo "GROQ_API_KEY=your_key_here" > .env

# 4. Run
node index.js
```

At startup, you'll see:

```
┌─────────────────────────────────────────────────────────┐
│              git-standup-agent                          │
├─────────────────────────────────────────────────────────┤
│  Enter a public GitHub repo URL to analyze it,          │
│  or press Enter to use the current local repo.          │
└─────────────────────────────────────────────────────────┘

🔗 Repo URL (or Enter to skip): https://github.com/expressjs/express

⏳ Cloning...
✅ Cloned successfully! Analyzing: express
```

Then the full command menu loads with live repo stats and you're ready to go.

### Running via gitclaw SDK

```bash
# Install gitclaw
npm install -g gitclaw

# Run directly with a prompt
gitclaw --dir . --model groq:llama-3.3-70b-versatile "generate my standup for today"
gitclaw --dir . --model groq:llama-3.3-70b-versatile "roast my recent commits"
gitclaw --dir . --model groq:llama-3.3-70b-versatile "give me a health report"
```

### Validate the agent spec

```bash
# Install gitagent CLI
npm install -g @shreyaskapale/gitagent

# Validate
npx @shreyaskapale/gitagent validate
npx @shreyaskapale/gitagent info
npx @shreyaskapale/gitagent export --format system-prompt
```

Expected output:
```
✓ agent.yaml - valid
✓ SOUL.md - valid
✓ tools/git-log.yaml - valid
✓ skills/ - valid
✓ Validation passed (0 warnings)
```

---

## 🤖 Commands

<div align="center">
<table>
<tr>
<td align="center" width="33%"><a href="#-standup--daily-progress-report"><img src="https://img.shields.io/badge/📋_STANDUP-534AB7?style=for-the-badge&logoColor=EEEDFE"/></a><br/><sub>Daily standup from last 24hrs → <code>STANDUP.md</code></sub></td>
<td align="center" width="33%"><a href="#-weekly-summary--7-day-digest"><img src="https://img.shields.io/badge/📅_WEEKLY_SUMMARY-534AB7?style=for-the-badge"/></a><br/><sub>7-day digest grouped by type → <code>WEEKLY.md</code></sub></td>
<td align="center" width="33%"><a href="#-roast-me--brutal-commit-review"><img src="https://img.shields.io/badge/🔥_ROAST_ME-A32D2D?style=for-the-badge"/></a><br/><sub>Brutally honest commit review → <code>ROAST.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#-health-report--code-health-scan"><img src="https://img.shields.io/badge/📊_HEALTH_REPORT-0F6E56?style=for-the-badge"/></a><br/><sub>TODOs, churn, tech debt → <code>HEALTH.md</code></sub></td>
<td align="center"><a href="#-suggest-commits--better-commit-messages"><img src="https://img.shields.io/badge/✏️_SUGGEST_COMMITS-185FA5?style=for-the-badge"/></a><br/><sub>Rewrites bad commit messages → <code>COMMIT-SUGGESTIONS.md</code></sub></td>
<td align="center"><a href="#-share--slack--email-ready"><img src="https://img.shields.io/badge/📧_SHARE-993556?style=for-the-badge"/></a><br/><sub>Formats standup for Slack & email → <code>SHARE.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#-pr-summary--auto-pr-description"><img src="https://img.shields.io/badge/🔮_PR_SUMMARY-185FA5?style=for-the-badge"/></a><br/><sub>PR description from your changes → <code>PR-SUMMARY.md</code></sub></td>
<td align="center"><a href="#-streak-tracker--github-style-commit-streaks"><img src="https://img.shields.io/badge/⏰_STREAK-854F0B?style=for-the-badge"/></a><br/><sub>GitHub-style commit streak → <code>STREAK.md</code></sub></td>
<td align="center"><a href="#-auto-changelog--changelogmd-generator"><img src="https://img.shields.io/badge/🧩_CHANGELOG-3B6D11?style=for-the-badge"/></a><br/><sub>Auto-generate changelog → <code>CHANGELOG.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#-bus-factor--knowledge-risk-analysis"><img src="https://img.shields.io/badge/🚨_BUS_FACTOR-A32D2D?style=for-the-badge"/></a><br/><sub>Single-owner file risk → <code>BUS-FACTOR.md</code></sub></td>
<td align="center"><img src="https://img.shields.io/badge/ℹ️_HELP-5F5E5A?style=for-the-badge"/><br/><sub>Show command menu</sub></td>
<td align="center"><img src="https://img.shields.io/badge/✕_EXIT-5F5E5A?style=for-the-badge"/><br/><sub>Quit the agent</sub></td>
</tr>
</table>
</div>

> ```
> You: standup
> ```

---

## 🏗️ How It Works

```mermaid
flowchart TD
    START["🔗 Startup\nEnter GitHub URL or local path"]:::start

    R1["📁 Local Repo\n(current dir)"]:::git
    R2["🌐 Public GitHub Repo\n(auto-cloned via git clone)"]:::git

    A["🧠 Agent Identity"]:::identity
    A1["SOUL.md\nPersonality"]:::file
    A2["RULES.md\nConstraints"]:::file
    A3["10x SKILL.md\nCapabilities"]:::file

    B["⚙️ index.js\nRuntime"]:::runtime
    C["📜 git log\nCommit History"]:::gitlog
    D["🤖 Groq LLM\nllama-3.3-70b"]:::llm

    E["📄 Output Files"]:::output
    E1["STANDUP.md"]:::outfile
    E2["ROAST.md"]:::outfile
    E3["HEALTH.md"]:::outfile
    E4["CHANGELOG.md"]:::outfile
    E5["BUS-FACTOR.md"]:::outfile
    E6["+ 5 more..."]:::outfile

    START --> R1 & R2
    R1 & R2 --> C
    A1 & A2 & A3 --> A
    C --> B
    A --> B
    B --> D
    D --> E
    E --> E1 & E2 & E3 & E4 & E5 & E6

    classDef start fill:#064e3b,stroke:#10b981,color:#d1fae5
    classDef identity fill:#1e1b4b,stroke:#6366f1,color:#e0e7ff
    classDef file fill:#312e81,stroke:#818cf8,color:#c7d2fe
    classDef runtime fill:#1e3a5f,stroke:#38bdf8,color:#e0f2fe
    classDef git fill:#14532d,stroke:#4ade80,color:#dcfce7
    classDef gitlog fill:#1a2e05,stroke:#84cc16,color:#ecfccb
    classDef llm fill:#7c2d12,stroke:#fb923c,color:#ffedd5
    classDef output fill:#1f2937,stroke:#6b7280,color:#f3f4f6
    classDef outfile fill:#111827,stroke:#374151,color:#9ca3af
```

1. **At startup**, choose a local repo or paste any public GitHub URL - the agent auto-clones it
2. **Agent identity** is loaded from `SOUL.md`, `RULES.md`, and all 10 `SKILL.md` files
3. **Git context** is pulled live using `git log` for the relevant time range
4. **Groq LLM** processes the identity + context and generates the output
5. **Output** is printed to terminal and saved to a `.md` file automatically
6. **Temp clones** are automatically cleaned up on exit

---

## 🔧 Configuration

### Environment Variables

<div align="center">

| Variable | Required | Description |
|---|---|---|
| `GROQ_API_KEY` | ✅ Yes | Your Groq API key - [get one free](https://console.groq.com) |

</div>

### Model

The agent uses `llama-3.3-70b-versatile` via Groq by default. You can change the model in `agent.yaml`:

```yaml
model:
  preferred: "groq:llama-3.3-70b-versatile"
  fallback:
    - "anthropic:claude-sonnet-4-5-20250929"
    - "openai:gpt-4o"
```

---

## 🧩 Built With

<div align="center">

| Technology | Purpose |
|:---:|:---|
| [![gitagent](https://img.shields.io/badge/gitagent-534AB7?style=for-the-badge)](https://github.com/open-gitagent/gitagent) | Git-native agent standard |
| [![Groq](https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com) | LLM inference (free tier) |
| [![gitclaw](https://img.shields.io/badge/gitclaw-185FA5?style=for-the-badge)](https://github.com/open-gitagent/gitclaw) | Agent runtime SDK |
| [![Node.js](https://img.shields.io/badge/Node.js-3B6D11?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org) | Runtime environment |

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

<div align="center">

[![GitAgent Hackathon 2026](https://img.shields.io/badge/Built_for_GitAgent_Hackathon_2026_🏆-6366f1?style=flat-square&logoColor=white)](https://hackculture.in)

</div>