# Commit Suggester

Reviewing the last 10 commit messages, I've identified some areas for improvement and suggested better conventional commit rewrites.

* 24ed359: 
  ❌ Original: chore: bump version to 0.1.8 and update package name to @open-gitagent/gitagent
  ✅ Better: chore(@open-gitagent/gitagent): update package name and bump version to 0.1.8
  💡 Why: Added scope to specify the package being updated

* c141ac1: 
  ❌ Original: chore: bump version to 0.1.8
  ✅ Better: chore: bump version to 0.1.8 (pre-release)
  💡 Why: Added context to indicate this is a pre-release version bump

* 5533b98: 
  ❌ Original: Update install path for npm in README
  ✅ Better: docs: update npm install path in README
  💡 Why: Changed type to 'docs' to reflect the update is to documentation

* 618b46d: 
  ❌ Original: docs: add regulated-industries guide (#44)
  ✅ Better: docs: add guide for regulated industries (#44)
  💡 Why: Reworded for clarity and readability

* 333e1db: 
  ❌ Original: feat: add Codex CLI adapter with export + import (#32)
  ✅ Better: feat: add Codex CLI adapter for export and import functionality (#32)
  💡 Why: Expanded description for better understanding

* fa163ef: 
  ❌ Original: fix: use process.exitCode instead of process.exit() for proper cleanup (#49)
  ✅ Better: fix: replace process.exit() with process.exitCode for cleaner shutdown (#49)
  💡 Why: Changed wording for better clarity on the fix

* bf3a363: 
  ❌ Original: fix: replace execSync with execFileSync to prevent command injection (#48)
  ✅ Better: fix: mitigate command injection by replacing execSync with execFileSync (#48)
  💡 Why: Emphasized the security aspect of the fix

* 40c19a2: 
  ❌ Original: fix: use process.exitCode instead of process.exit() so runner finally blocks clean up temp files
  ✅ Better: fix: use process.exitCode for proper cleanup and temp file removal
  💡 Why: Simplified the description while maintaining the essential information

* 2058a95: 
  ❌ Original: fix: replace execSync string interpolation with execFileSync to prevent command injection
  ✅ Better: fix: prevent command injection by using execFileSync instead of execSync
  💡 Why: Made the description more concise and focused on the solution

* 01f72c7: 
  ❌ Original: feat: add Google Gemini CLI adapter (#33)
  ✅ Better: feat: add Google Gemini CLI adapter for simplified integration (#33)
  💡 Why: Added context to highlight the benefit of the new feature

**Commit Quality Score: 7/10**

Most commit messages follow the conventional commit format, but some could be improved with more descriptive and concise language. Additionally, some commits could benefit from more specific scopes or clearer descriptions of the changes made.