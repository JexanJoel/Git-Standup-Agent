**PR Summary** 🔮

## What changed
This PR updates the package version to 0.1.8, renames the package to `@open-gitagent/gitagent`, and includes several fixes and features. The changes include bumping the version, updating the README with the correct install path for npm, adding guides for regulated industries, introducing new CLI adapters for Codex and Google Gemini, and fixing security vulnerabilities related to command injection.

## Why it changed
These changes aim to improve the overall security, functionality, and usability of the git agent. The version update and package rename are part of the maintenance and upkeep of the project. The addition of new CLI adapters expands the compatibility and usefulness of the agent, while the fixes address potential security risks and improve the cleanup process.

## Files affected
The primary file affected is `package.json`, which has been updated to reflect the new version and package name. Other files have been modified as part of the feature additions and bug fixes, including the README and various code files related to the new adapters and security patches.

## Risks / Review focus
Reviewers should focus on verifying that the version update and package rename do not introduce any compatibility issues, and that the new CLI adapters function as expected. Additionally, reviewers should ensure that the security fixes effectively prevent command injection vulnerabilities and that the cleanup process works correctly.

## Suggested PR title
"Bump version to 0.1.8, add new CLI adapters, and fix security vulnerabilities"