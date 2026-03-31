## Commit Suggester

Reviewing the last 10 commit messages, I've identified areas for improvement and suggest the following rewritten commit messages:

1. **Original:** `chore: bump version to 0.1.8 and update package name to @open-gitagent/gitagent`
   **Better:** `chore: release v0.1.8 and rename package to @open-gitagent/gitagent`
   **Why:** More descriptive and follows conventional commit format.

2. **Original:** `chore: bump version to 0.1.8`
   **Better:** `chore: prepare v0.1.8 release`
   **Why:** This commit seems to be part of a larger release process. The suggested message provides more context.

3. **Original:** `Update install path for npm in README`
   **Better:** `docs: update npm installation path in README`
   **Why:** Follows conventional commit format and specifies the type of change (docs).

4. **Original:** `docs: add regulated-industries guide (#44)`
   **Better:** `docs: add guide for regulated industries (#44)`
   **Why:** Minor rewording for clarity.

5. **Original:** `feat: add Codex CLI adapter with export + import (#32)`
   **Better:** `feat: implement Codex CLI adapter for data export and import (#32)`
   **Why:** More descriptive and clear about the feature added.

6. **Original:** `fix: use process.exitCode instead of process.exit() for proper cleanup (#49)`
   **Better:** `fix: improve process exit handling for cleaner shutdown (#49)`
   **Why:** Simplifies the message while maintaining the essence of the change.

7. **Original:** `fix: replace execSync with execFileSync to prevent command injection (#48)`
   **Better:** `fix: secure command execution by replacing execSync with execFileSync (#48)`
   **Why:** Emphasizes the security aspect of the fix.

8. **Original:** `fix: use process.exitCode instead of process.exit() so runner finally blocks clean up temp files`
   **Better:** `fix: ensure temp file cleanup on exit by using process.exitCode`
   **Why:** Clarifies the purpose of the change.

9. **Original:** `fix: replace execSync string interpolation with execFileSync to prevent command injection`
   **Better:** `fix: mitigate command injection risk by using execFileSync`
   **Why:** Focuses on the security benefit of the fix.

10. **Original:** `feat: add Google Gemini CLI adapter (#33)`
    **Better:** `feat: integrate Google Gemini CLI adapter for enhanced functionality (#33)`
    **Why:** Provides more context about the feature addition.

**Commit Quality Score:** 8/10

The commits generally follow a good format, but some could benefit from more descriptive messages to enhance clarity and adherence to conventional commit guidelines.