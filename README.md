<div align="center">

<h1>🤖 Git-Standup-Agent</h1>

<p><strong>Your git repo has a memory. Now it can speak.</strong></p>

<p><em>A git-native AI agent built on the <a href="https://github.com/open-gitagent/gitagent">gitagent</a> open standard.<br/>
It lives inside your repository, reads your commits, and turns them into intelligence.</em></p>

<br/>

<!-- BADGES -->
<p>
  <a href="https://github.com/open-gitagent/gitagent"><img src="https://img.shields.io/badge/gitagent-v0.1.0-blue?style=flat-square" alt="gitagent"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="MIT License"/></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=flat-square" alt="Node"/></a>
  <a href="https://groq.com"><img src="https://img.shields.io/badge/Powered%20by-Groq-orange?style=flat-square" alt="Groq"/></a>
  <a href="https://hackculture.in"><img src="https://img.shields.io/badge/GitAgent%20Hackathon-2026-purple?style=flat-square" alt="Hackathon"/></a>
</p>

<br/>

</div>

---

## 🧠 What is this?

`git-standup-agent` is an AI agent that **lives inside your git repository** — defined using the [gitagent open standard](https://github.com/open-gitagent/gitagent). It reads your commit history and turns raw git data into useful, human-readable intelligence.

No dashboards. No cloud sync. No third-party services. Just clone and run.

> *"Stop copying commit hashes into Slack. Let your repo speak for itself."*

---

## ✨ Features

<div align="center">

| Command | What it does | Output |
|---|---|---|
| `standup` | Daily standup from last 24hrs of commits | `STANDUP.md` |
| `weekly summary` | 7-day digest grouped by type | `WEEKLY.md` |
| `roast me` 🔥 | Brutally honest commit review | `ROAST.md` |
| `health report` 📊 | Code health scan — TODOs, churn, debt | `HEALTH.md` |
| `suggest commits` 🎯 | Rewrites bad commit messages | `COMMIT-SUGGESTIONS.md` |
| `share` 📧 | Formats standup for Slack & email | `SHARE.md` |
| `pr summary` 🔮 | Summarizes your changes as a PR description | `PR-SUMMARY.md` |
| `streak` ⏰ | Tracks your commit streak like GitHub | `STREAK.md` |
| `changelog` 🧩 | Auto-generates `CHANGELOG.md` from all commits | `CHANGELOG.md` |
| `bus factor` 🚨 | Identifies single-owner files — knowledge risk | `BUS-FACTOR.md` |

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- A free [Groq API key](https://console.groq.com) *(takes 2 minutes)*

### Installation

```bash
# 1. Clone the agent into your project
git clone https://github.com/JexanJoel/Git-Standup-Agent.git
cd Git-Standup-Agent

# 2. Install dependencies
npm install

# 3. Add your API key
echo "GROQ_API_KEY=your_key_here" > .env

# 4. Run
node index.js
```

### Usage

<div align="center">

## 🤖 git-standup-agent

| Command | Description |
|---|---|
| `standup` | Daily standup report |
| `weekly summary` | 7-day activity digest |
| `roast me` | Brutal commit review 🔥 |
| `health report` | Code health scan 📊 |
| `suggest commits` | Better commit messages 🎯 |
| `share` | Slack & email format 📧 |
| `pr summary` | PR description 🔮 |
| `streak` | Commit streak tracker ⏰ |
| `changelog` | Auto-generate changelog 🧩 |
| `bus factor` | Knowledge risk analysis 🚨 |
| `help` | Show this menu |
| `exit` | Quit |

</div>

You: standup

---

## 📁 Project Structure

This agent is fully defined using the [gitagent open standard](https://github.com/open-gitagent/gitagent). Cloning this repo gives you a complete, portable AI agent.

```
git-standup-agent/
│
├── agent.yaml                    # Agent manifest (model, skills, tools)
├── SOUL.md                       # Agent identity & personality
├── RULES.md                      # Hard constraints & boundaries
│
├── skills/                       # 10 composable skill modules
│   ├── generate-standup/         # Daily standup generation
│   ├── weekly-summary/           # 7-day digest
│   ├── roast-mode/               # Brutal commit review
│   ├── code-health/              # Health scan & scoring
│   ├── commit-suggester/         # Commit message rewrites
│   ├── share-output/             # Slack & email formatter
│   ├── pr-summary/               # PR description generator
│   ├── streak-tracker/           # GitHub-style streak tracking
│   ├── auto-changelog/           # CHANGELOG.md generator
│   └── bus-factor/               # Knowledge risk analysis
│
├── tools/
│   └── git-log.yaml              # MCP-compatible git tool definition
│
└── index.js                      # Runtime (Groq + gitagent standard)
```

---

## ✅ Validate the Agent

This agent is fully compliant with the gitagent v0.1.0 specification.

```bash
# Install the gitagent CLI
npm install -g @shreyaskapale/gitagent

# Validate
npx @shreyaskapale/gitagent validate

# View agent summary
npx @shreyaskapale/gitagent info

# Export as system prompt
npx @shreyaskapale/gitagent export --format system-prompt
```

Expected output:
```
✓ agent.yaml — valid
✓ SOUL.md — valid
✓ tools/git-log.yaml — valid
✓ skills/ — valid
✓ Validation passed (0 warnings)
```

---

## 🏗️ How It Works

<div align="center">

```
┌─────────────────────────────────────────────────────────────┐
│                    git-standup-agent                        │
│                                                             │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────┐   │
│  │ SOUL.md  │    │   RULES.md   │    │   10 x SKILL.md  │   │
│  │ identity │ +  │  constraints │ +  │   capabilities   │   │
│  └──────────┘    └──────────────┘    └──────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│              ┌─────────────────────┐                        │
│              │    index.js         │                        │
│              │  reads git log  →   │                        │
│              │  builds context →   │                        │
│              │  calls Groq LLM →   │                        │
│              │  saves output       │                        │
│              └─────────────────────┘                        │
│                         │                                   │
│           ┌─────────────┴──────────────┐                    │
│           ▼                            ▼                    │
│    STANDUP.md                    CHANGELOG.md               │
│    ROAST.md                      BUS-FACTOR.md              │
│    HEALTH.md                     + more...                  │
└─────────────────────────────────────────────────────────────┘
```

</div>

1. **Agent identity** is loaded from `SOUL.md`, `RULES.md`, and all `SKILL.md` files
2. **Git context** is pulled live using `git log` for the relevant time range
3. **Groq LLM** processes the identity + context and generates the output
4. **Output** is printed to terminal and saved to a `.md` file automatically

---

## 🔧 Configuration

### Environment Variables

<div align="center">

| Variable | Required | Description |
|---|---|---|
| `GROQ_API_KEY` | ✅ Yes | Your Groq API key — [get one free](https://console.groq.com) |

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
|---|---|
| [gitagent](https://github.com/open-gitagent/gitagent) | Git-native agent standard |
| [Groq](https://groq.com) | LLM inference (free tier) |
| [llama-3.3-70b-versatile](https://groq.com/models) | The model powering the agent |
| [gitclaw](https://github.com/open-gitagent/gitclaw) | Agent runtime SDK |
| Node.js | Runtime environment |

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

MIT © [JexanJoel](https://github.com/JexanJoel)

</div>

---

<div align="center">

Built for the **[GitAgent Hackathon 2026](https://hackculture.in)** 🏆

*Powered by the [gitagent open standard](https://github.com/open-gitagent/gitagent)*

</div>