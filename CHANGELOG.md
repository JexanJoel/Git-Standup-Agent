## Auto-Generated Changelog

[BOX]Release Manifest | Version 0.2.0
## Features
* Added LLM Wiki example agent and init template
* Added GitClaw runner for run command
* Added GitClaw export adapter
* Added Kiro CLI export adapter
* Implemented extends resolution, --force flag, and parent merge in export
* Added OpenClaw multi-agent workspace export
* Added Codex CLI adapter with export + import
* Added Google Gemini CLI adapter with export, import, and run
* Added GitHub Copilot CLI adapter for export
* Added 'gitagent registry' command — submit agents to the registry
* Added SOD examples, DUTIES.md files, and README documentation
* Added SOD constraints to system-prompt and claude-code adapters
* Added SOD validation, audit reporting, and init scaffolding
* Added segregation of duties schema, types, and spec
## Fixes
* Resolved duplicate requiredOption and broken switch fallthrough
* Fixed duplicated required options in export and import
* Replaced execSync with execFileSync to prevent command injection
* Used process.exitCode instead of process.exit() for proper cleanup
* Fixed generate correct Claude Code hooks JSON structure
* Addressed review feedback on OpenCode adapter
* Restored --model and --fallback-model flags in claude runner
* Moved --append-system-prompt to end of args to fix CLI parsing
## Documentation
* Added regulated-industries guide
* Added gitagent vs alternatives comparison document
* Added SkillsFlow pattern to README
* Updated directory structure with grouped categories and examples
* Updated Standard section — your repository becomes your agent
* Added logo to README
* Added CONTRIBUTING.md and MIT LICENSE
## Chore
* Bumped version to 0.2.0
* Bumped version to 0.1.9
* Bumped version to 0.1.8
* Updated package name to @open-gitagent/gitagent
* Updated README title to "gitagent | your repository becomes your agent"
[/BOX]

[BADGE]MAJOR[/BADGE]

─── Verdict: This release introduces significant features and improvements, including new adapters, enhancements to existing adapters, and fixes for various issues, demonstrating considerable progress in the development of the gitagent project. ───