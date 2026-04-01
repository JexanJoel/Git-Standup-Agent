**PR Summary** 🔮

## What changed
This PR resolves issues with duplicate required options and broken switch fallthrough in the export and import commands. It also updates the package version to 0.1.8.

## Why it changed
The changes were necessary to fix bugs and improve the overall stability of the export and import functionality. Additionally, the version bump is part of regular maintenance to keep the package up-to-date.

## Files affected
The following files were modified:
* `src/commands/export.ts`
* `src/commands/import.ts`

## Risks / Review focus
Reviewers should check that the fixes for duplicate required options and switch fallthrough are correctly implemented and do not introduce any new issues. Additionally, verify that the version bump and package name update do not cause any compatibility problems.

## Suggested PR title
Fix export and import commands, bump version to 0.1.8