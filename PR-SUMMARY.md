**PR Summary** 🔮

## What changed
This PR updates the package version to 0.1.8 and changes the package name to `@open-gitagent/gitagent`. It also includes several bug fixes, including replacing `execSync` with `execFileSync` to prevent command injection, and using `process.exitCode` instead of `process.exit()` for proper cleanup. Additionally, the PR adds two new CLI adapters: Codex and Google Gemini, and updates the README with the correct install path for npm.

## Why it changed
The package version was updated to reflect new features and bug fixes. The package name change is likely to follow a new naming convention. The bug fixes were necessary to prevent command injection and ensure proper cleanup. The new CLI adapters were added to expand the functionality of the package.

## Files affected
The following files were changed:
* `package.json`

## Risks / Review focus
Reviewers should check that the package version and name changes do not break any existing dependencies or scripts. They should also verify that the bug fixes do not introduce any new issues and that the new CLI adapters work as expected.

## Suggested PR title
`Update package version and name, add new CLI adapters, and fix security vulnerabilities`