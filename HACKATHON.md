# 🏆 HACKATHON.md — Git Standup Agent

> **GitAgent Hackathon 2026** | Built by [Jexan Joel](https://github.com/JexanJoel)

---

## 🧠 The Problem

Every developer has lived this moment:  
*"What did I do yesterday?"*  
You open Slack, stare at the message box, then go dig through `git log` trying to piece together a coherent standup.

This is wasted friction. Your commits already tell the story. They just need a translator.

---

## 💡 The Idea

**Git Standup Agent** is an AI agent that lives inside your repository — defined using the [gitagent open standard](https://github.com/open-gitagent/gitagent). It reads your raw commit history and turns it into useful, human-readable intelligence: standups, changelogs, roasts, health reports, and more.

No dashboards. No cloud sync. No third-party data access. Just clone and run.

---

## 🏗️ Architecture & Approach

### Agent Identity Layer
The agent's behavior is defined through three files:
- **`SOUL.md`** — The agent's personality: warm, concise, developer-native. It writes like a senior engineer giving a standup, not a bot generating boilerplate.
- **`RULES.md`** — Hard constraints: never hallucinate commits, never invent context, always stay in scope.
- **`skills/`** — 10 capability modules, one per command (standup, roast, health, etc.), each with its own prompt logic and output format.

### Runtime Layer
- **`index.js`** — Interactive CLI loop using `readline`. Parses user commands, routes them to the right skill, builds the agent context, and calls Groq.
- **`run.js`** — Single-shot runner for use with the `gitclaw` SDK (`gitclaw --dir . --model groq:... "your prompt"`).
- **`tools/git-log.yaml`** — Defines how the agent accesses git history. Scoped to the current repo only.

### LLM Layer
- Model: `llama-3.3-70b-versatile` via **Groq** (free tier, fast inference)
- The full agent identity (SOUL + RULES + active SKILL) is assembled into a system prompt per request
- Git context (commit log for the relevant time window) is injected as user content
- No persistent memory — each command is a fresh, self-contained inference

### Output Layer
Every command produces a markdown file saved to the repo root (`STANDUP.md`, `ROAST.md`, etc.) and also printed to the terminal.

---

## 🔑 Key Design Decisions

### 1. Git-native, not wrapper-native
Rather than wrapping an existing standup tool with AI, this agent was built from scratch around the `gitagent` spec. The agent *is* the spec — it's defined by YAML and markdown, not hardcoded logic.

### 2. gitagent open standard
Following the [gitagent spec](https://github.com/open-gitagent/gitagent) means the agent is portable. Any compliant runtime (like `gitclaw`) can run it without modification.

### 3. Groq for speed
Developer tools live and die by latency. Groq's hardware inference gives near-instant responses, which makes the interactive CLI loop feel snappy.

### 4. Personality over utility
The `roast me` command exists for a reason — developer tools that are fun get used. The SOUL.md ensures the agent has a consistent voice across all 10 commands.

### 5. No API key stored in the repo
`.env` is gitignored. Users bring their own Groq key (free, 2-minute setup). Zero risk of credential leaks.

---

## 📦 Commands Built

| Command | Approach |
|---|---|
| `standup` | Last 24h commits → grouped, summarized, blocker-aware |
| `weekly summary` | 7-day log → grouped by type (feat/fix/chore) |
| `roast me` | Commit pattern analysis → brutally honest personality-driven review |
| `health report` | TODOs, churn patterns, commit frequency → risk flags |
| `suggest commits` | Bad commit messages → rewrites following Conventional Commits |
| `share` | Standup → formatted for Slack and email |
| `pr summary` | Recent diff summary → polished PR description |
| `streak` | Commit frequency → GitHub-style streak tracker |
| `changelog` | Full commit history → structured CHANGELOG.md |
| `bus factor` | Per-file author analysis → knowledge concentration risk |

---

## 🚀 Running via gitclaw (gitagent standard)

```bash
npm install -g gitclaw

gitclaw --dir . --model groq:llama-3.3-70b-versatile "generate my standup for today"
gitclaw --dir . --model groq:llama-3.3-70b-versatile "roast my recent commits"
gitclaw --dir . --model groq:llama-3.3-70b-versatile "give me a health report"
```

---

## ☁️ Live Serverless Demo (Clawless)

The agent is fully runnable in-browser via **[Clawless](https://play.clawless.io)** — a serverless WebContainer that runs gitagent-compatible agents without local setup.

### Try it now:
1. Go to **[play.clawless.io](https://play.clawless.io)**
2. Clone this repo: `https://github.com/JexanJoel/Git-Standup-Agent`
3. Add your Groq API key in the environment variables panel
4. Run any command: `standup`, `roast me`, `health report`, etc.

No Node.js install. No terminal. Runs entirely in your browser.

> See also: **[Embedded Demo](./demo/clawless-demo.html)** — a self-contained HTML page powered by ClawContainer that lets you try the agent directly.

---

## 🧩 What I Learned

- The `gitagent` spec is genuinely powerful for defining portable agents - SOUL + RULES + skills is a clean separation of concerns
- Groq's free tier is fast enough for developer tooling; the latency delta vs. a local model is negligible for this use case
- `roast me` is the feature everyone mentions first when you show them the project

---

## 🔗 Links

- **Repo:** [github.com/JexanJoel/Git-Standup-Agent](https://github.com/JexanJoel/Git-Standup-Agent)
- **Live Demo:** [play.clawless.io](https://play.clawless.io)
- **gitagent spec:** [github.com/open-gitagent/gitagent](https://github.com/open-gitagent/gitagent)
- **Groq:** [console.groq.com](https://console.groq.com)