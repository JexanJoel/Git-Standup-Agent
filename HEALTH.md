**Code Health Report** 📊

🔴 Critical Issues
- No critical issues found.

🟡 Warnings
- A large number of commits (12) in the last 7 days, with most of them being made by a single contributor (shreyas-lyzr). This may indicate a high bus factor and potential bottlenecks in the development process.
- Two commits (c141ac1 and 24ed359) seem to be doing similar changes (bumping version to 0.1.8), which might be unnecessary or redundant.
- Repeated commits to fix similar issues (fa163ef and 40c19a2, 2058a95 and bf3a363) might indicate that the fixes are not being properly tested or verified.

🟢 Healthy Signals
- The presence of multiple contributors (10) and a decent distribution of commits among them (although shreyas-lyzr has the most commits).
- Commits are following a somewhat consistent conventional commit format (feat, fix, chore, docs).
- Recent commits have been made to update documentation (618b46d) and add new features (333e1db, 01f72c7, fdd07a3).

Overall Health Score: 7/10

Recommendations:
- Encourage more contributors to participate in the development process to reduce the bus factor.
- Review and refine the testing and verification process to prevent repeated commits for similar fixes.
- Consider merging or reworking similar commits (e.g., c141ac1 and 24ed359) to improve commit history clarity.