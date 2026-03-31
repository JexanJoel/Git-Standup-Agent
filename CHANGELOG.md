# Changelog

## Unreleased
### Added
* Google Gemini CLI adapter for export, import, and run
* Codex CLI adapter with export and import
* Cursor adapter with export and enhanced import
* OpenClaw multi-agent workspace export
* GitHub Copilot CLI adapter for export
* SOD examples, DUTIES.md files, and README documentation
* Segregation of duties schema, types, and spec
* SOD validation, audit reporting, and init scaffolding
* 'gitagent registry' command to submit agents to the registry
* SkillsFlow pattern to README
* Full OpenCode adapter: export, runner, import, and auto-detection
* Gitagent vs alternatives comparison document

### Fixed
* Use process.exitCode instead of process.exit() for proper cleanup
* Replace execSync with execFileSync to prevent command injection
* Prefix hook scripts with 'hooks/' directory in Gemini adapter
* Always prefix .sh hook scripts with 'bash hooks/' on Windows for Gemini CLI
* Generate correct Claude Code hooks JSON structure
* Address review feedback on OpenCode adapter
* Use progressive skill disclosure in claude-code adapter
* Auto-detect default branch when 'main' doesn't exist
* Restore --model and --fallback-model flags in claude runner
* Move --append-system-prompt to end of args to fix CLI parsing

### Changed
* Bump version to 0.1.8 and update package name to @open-gitagent/gitagent
* Update install path for npm in README
* Update documentation for gemini adaptor
* Restructure directory tree with grouped categories and examples
* Update README title to "gitagent | your repository becomes your agent"
* Update Standard section — your repository becomes your agent
* Move directory structure to top as "The Standard" section
* Add all 12 pattern images to README
* Replace logo with banner image in README
* Add logo to README
* Add CI, templates, badges, and community infrastructure
* Add CONTRIBUTING.md and MIT LICENSE
* Bump version to 0.1.1
* Add Patterns section to README
* Scope package name to @shreyaskapale/gitagent for npm

## 0.1.0
* Initial release

Note: This changelog is auto-generated from the git log and may not reflect all changes. It's recommended to review the git log for a complete history of changes.