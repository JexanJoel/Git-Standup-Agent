[BOX]Release Manifest | 
## v0.2.0
### Features
* Add LLM Wiki example agent and init template
* Add gitclaw runner for run command
* Add gitclaw export adapter
* Implement extends resolution, --force flag, and parent merge in export
* Add Kiro CLI export adapter
* Add Codex CLI adapter with export + import
* Add Google Gemini CLI adapter with export, run, and import
* Add OpenClaw multi-agent workspace export
* Add Cursor adapter with export and enhanced import
* Add GitHub Copilot CLI adapter for export
* Add 'gitagent registry' command — submit agents to the registry
* Add SOD examples, DUTIES.md files, and README documentation
* Add SOD constraints to system-prompt and claude-code adapters
* Add SOD validation, audit reporting, and init scaffolding
* Add segregation of duties schema, types, and spec

### Fixes
* Resolve duplicate requiredOption and broken switch fallthrough
* Replace execSync with execFileSync to prevent command injection
* Use process.exitCode instead of process.exit() for proper cleanup
* Generate correct Claude Code hooks JSON structure
* Address review feedback on OpenCode adapter
* Use progressive skill disclosure in claude-code adapter
* Auto-detect default branch when 'main' doesn't exist
* Move --append-system-prompt to end of args to fix CLI parsing
* Restore --model and --fallback-model flags in claude runner

### Changes
* Bump version to 0.2.0
* Bump version to 0.1.9
* Bump version to 0.1.8
* Update package name to @open-gitagent/gitagent
* Update install path for npm in README
* Add regulated-industries guide
* Add SkillsFlow pattern to README
* Add gitagent vs alternatives comparison document
* Improve skill scores across all examples
* Add logo to README
* Add CI, templates, badges, and community infrastructure
* Add CONTRIBUTING.md and MIT LICENSE
* Refresh now re-clones instead of git pull
* Remove --model and --fallback-model flags from claude runner
* Scope package name to @shreyaskapale/gitagent for npm
[/BOX]

[BADGE]MAJOR[/BADGE]
─── Verdict: This release includes significant features, fixes, and changes to improve the overall functionality and user experience of the gitagent. ───