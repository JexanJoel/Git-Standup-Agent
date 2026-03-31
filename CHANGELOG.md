# Changelog

## Unreleased
### Added
* Google Gemini CLI adapter for export, import, and run
* Codex CLI adapter with export and import
* OpenClaw multi-agent workspace export
* Cursor adapter with export and enhanced import
* GitHub Copilot CLI adapter for export
* 'gitagent registry' command to submit agents to the registry
* SOD examples, DUTIES.md files, and README documentation
* SOD constraints to system-prompt and claude-code adapters
* SOD validation, audit reporting, and init scaffolding
* Segregation of duties schema, types, and spec
* CONTRIBUTING.md and MIT LICENSE
* CI, templates, badges, and community infrastructure
* Patterns section to README
* Logo to README
* Code of conduct
* Directory structure to top as "The Standard" section
* All 12 pattern images to README
* Logo to README

### Changed
* Update package name to @open-gitagent/gitagent
* Update install path for npm in README
* Improve skill scores across all examples
* Use progressive skill disclosure in claude-code adapter
* Auto-detect default branch when 'main' doesn't exist
* Bump version to 0.1.8
* Update documentation for gemini adaptor
* Always prefix hook scripts with 'hooks/' directory in Gemini adapter
* Prefix .sh hook scripts with 'bash hooks/' on Windows for Gemini CLI
* Restore --model and --fallback-model flags in claude runner
* Remove --model and --fallback-model flags from claude runner
* Move --append-system-prompt to end of args to fix CLI parsing
* Scope package name to @shreyaskapale/gitagent for npm

### Fixed
* Use process.exitCode instead of process.exit() for proper cleanup
* Replace execSync with execFileSync to prevent command injection
* Generate correct Claude Code hooks JSON structure
* Address review feedback on OpenCode adapter
* Use progressive skill disclosure in claude-code adapter
* --refresh now re-clones instead of git pull
* Resolve real Claude Code binary, skip node_modules shadows
* Restore --model and --fallback-model flags in claude runner
* Remove --model and --fallback-model flags from claude runner

## 0.1.0
* Initial release

Note: The changelog is generated based on the provided commits, and the formatting follows the Keep a Changelog format.