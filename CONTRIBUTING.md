# Contributing to Git-Standup-Agent

Thank you for your interest in contributing! Contributions, issues, and feature requests are welcome.

## How to Contribute

1. **Fork** the repo
2. **Create a branch**
   ```bash
   git checkout -b feat/your-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature"
   ```
4. **Push to your branch**
   ```bash
   git push origin feat/your-feature
   ```
5. **Open a Pull Request**

## Ideas for Contributions

- New skill modules under `skills/`
- Improvements to existing skill prompts
- Better git log parsing in `index.js`
- Support for additional LLM providers in `agent.yaml`
- Bug fixes and edge case handling

## Project Structure

```
git-standup-agent/
│
├── agent.yaml                    # Agent manifest (model, skills, tools)
├── SOUL.md                       # Agent identity & personality
├── RULES.md                      # Hard constraints & boundaries
│
├── skills/                       # 10 composable skill modules
│   ├── generate-standup/
│   ├── weekly-summary/
│   ├── roast-mode/
│   ├── code-health/
│   ├── commit-suggester/
│   ├── share-output/
│   ├── pr-summary/
│   ├── streak-tracker/
│   ├── auto-changelog/
│   └── bus-factor/
│
├── tools/
│   └── git-log.yaml              # MCP-compatible git tool definition
│
└── index.js                      # Runtime (Groq + gitagent standard)
```

## Reporting Issues

Please open an issue with:
- A clear title and description
- Steps to reproduce the problem
- Expected vs actual behavior
- Your Node.js version and OS

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).