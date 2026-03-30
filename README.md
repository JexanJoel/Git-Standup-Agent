<div align="center">

<h1>🤖 Git-Standup-Agent</h1>

<p><strong>Your git repo has a memory. Now it can speak.</strong></p>

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
| `health report` 📊 | Code health scan - TODOs, churn, debt | `HEALTH.md` |
| `suggest commits` 🎯 | Rewrites bad commit messages | `COMMIT-SUGGESTIONS.md` |
| `share` 📧 | Formats standup for Slack & email | `SHARE.md` |
| `pr summary` 🔮 | Summarizes your changes as a PR description | `PR-SUMMARY.md` |
| `streak` ⏰ | Tracks your commit streak like GitHub | `STREAK.md` |
| `changelog` 🧩 | Auto-generates `CHANGELOG.md` from all commits | `CHANGELOG.md` |
| `bus factor` 🚨 | Identifies single-owner files - knowledge risk | `BUS-FACTOR.md` |

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

## 🤖 Commands

<div align="center">
<table>
<tr>
<td align="center" width="33%"><a href="#"><img src="https://img.shields.io/badge/📋_STANDUP-534AB7?style=for-the-badge&logoColor=EEEDFE"/></a><br/><sub>Daily standup from last 24hrs → <code>STANDUP.md</code></sub></td>
<td align="center" width="33%"><a href="#"><img src="https://img.shields.io/badge/📅_WEEKLY_SUMMARY-534AB7?style=for-the-badge"/></a><br/><sub>7-day digest grouped by type → <code>WEEKLY.md</code></sub></td>
<td align="center" width="33%"><a href="#"><img src="https://img.shields.io/badge/🔥_ROAST_ME-A32D2D?style=for-the-badge"/></a><br/><sub>Brutally honest commit review → <code>ROAST.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/📊_HEALTH_REPORT-0F6E56?style=for-the-badge"/></a><br/><sub>TODOs, churn, tech debt → <code>HEALTH.md</code></sub></td>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/✏️_SUGGEST_COMMITS-185FA5?style=for-the-badge"/></a><br/><sub>Rewrites bad commit messages → <code>COMMIT-SUGGESTIONS.md</code></sub></td>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/📧_SHARE-993556?style=for-the-badge"/></a><br/><sub>Formats standup for Slack & email → <code>SHARE.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/🔮_PR_SUMMARY-185FA5?style=for-the-badge"/></a><br/><sub>PR description from your changes → <code>PR-SUMMARY.md</code></sub></td>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/⏰_STREAK-854F0B?style=for-the-badge"/></a><br/><sub>GitHub-style commit streak → <code>STREAK.md</code></sub></td>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/🧩_CHANGELOG-3B6D11?style=for-the-badge"/></a><br/><sub>Auto-generate changelog → <code>CHANGELOG.md</code></sub></td>
</tr>
<tr>
<td align="center"><a href="#"><img src="https://img.shields.io/badge/🚨_BUS_FACTOR-A32D2D?style=for-the-badge"/></a><br/><sub>Single-owner file risk → <code>BUS-FACTOR.md</code></sub></td>
<td align="center"><img src="https://img.shields.io/badge/ℹ️_HELP-5F5E5A?style=for-the-badge"/><br/><sub>Show this menu</sub></td>
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
    A["🧠 Agent Identity"]:::identity
    A1["SOUL.md\nPersonality"]:::file
    A2["RULES.md\nConstraints"]:::file
    A3["10x SKILL.md\nCapabilities"]:::file

    B["⚙️ index.js\nRuntime"]:::runtime

    C["📜 git log\nCommit History"]:::git

    D["🤖 Groq LLM\nllama-3.3-70b"]:::llm

    E["📄 Output Files"]:::output
    E1["STANDUP.md"]:::outfile
    E2["ROAST.md"]:::outfile
    E3["HEALTH.md"]:::outfile
    E4["CHANGELOG.md"]:::outfile
    E5["BUS-FACTOR.md"]:::outfile
    E6["+ more..."]:::outfile

    A1 & A2 & A3 --> A
    C --> B
    A --> B
    B --> D
    D --> E
    E --> E1 & E2 & E3 & E4 & E5 & E6

    classDef identity fill:#1e1b4b,stroke:#6366f1,color:#e0e7ff
    classDef file fill:#312e81,stroke:#818cf8,color:#c7d2fe
    classDef runtime fill:#1e3a5f,stroke:#38bdf8,color:#e0f2fe
    classDef git fill:#14532d,stroke:#4ade80,color:#dcfce7
    classDef llm fill:#7c2d12,stroke:#fb923c,color:#ffedd5
    classDef output fill:#1f2937,stroke:#6b7280,color:#f3f4f6
    classDef outfile fill:#111827,stroke:#374151,color:#9ca3af
```

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
|---|---|
| [gitagent](https://github.com/open-gitagent/gitagent) | Git-native agent standard |
| [Groq](https://groq.com) | LLM inference (free tier) |
| [llama-3.3-70b-versatile](https://groq.com/models) | The model powering the agent |
| [gitclaw](https://github.com/open-gitagent/gitclaw) | Agent runtime SDK |
| Node.js | Runtime environment |

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

Built for the **[GitAgent Hackathon 2026](https://hackculture.in)** 🏆

*Powered by the [gitagent open standard](https://github.com/open-gitagent/gitagent)*

</div>