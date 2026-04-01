**Roast Report** 🔥

Let's get roasting:

* `2c2bad7` and `a8d561d` — Duplicate commits with the same message? Come on, @shreyas-lyzr! Use `git commit --amend` or `git rebase -i` to squash those duplicates. What to do instead: Merge the changes into one commit and use a descriptive message.
* `cf029df` — `fix(issue,53)`? What's with the weird commit message format? Stick to conventional commits, folks! ✅ Better: `fix: resolve duplicate requiredOption and broken switch fallthrough (#53)`.
* `c141ac1` and `24ed359` — Another duplicate commit pair! @shreyas-lyzr, you're making this too easy. What to do instead: Use `git commit --amend` to update the previous commit.
* `5533b98` — "Update install path for npm in README" is a bit vague. What changed? Why? ✅ Better: `docs: update npm install path in README to reflect new package structure`.
* `fa163ef`, `bf3a363`, `40c19a2`, and `2058a95` — Multiple commits fixing similar issues. Maybe it's time to refactor the code to prevent these problems in the future? 🤔
* `01f72c7` and `c510a69` — Duplicate commits again! @shreyas-lyzr, please use `git commit --amend` or `git rebase -i` to squash these.
* `fdd07a3` — `feat(adapters): Codex CLI adapter — export + import (#32)` is a bit hard to read. Stick to conventional commits, @Nanook! ✅ Better: `feat: add Codex CLI adapter with export and import (#32)`.

Overall Score: 4/10

One genuine compliment: @shreyas-lyzr, you're actively working on the project and fixing issues. Keep it up, and let's work on those commit messages and duplicates! 👍