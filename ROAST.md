**Roast Report** 🔥

Let's get started with the roasting:

* `24ed359` — You bumped the version twice in a row? What's going on here? It looks like you forgot to update the package name in the first bump. Get your versioning together! 💸
* `c141ac1` — See above. This commit is redundant and should be squashed. 
* `fdd07a3` — The commit message is unclear. What does `feat(adapters)` mean? Use the conventional commit format: `feat: add Codex CLI adapter — export + import`. Be specific! 
* `c510a69` — This commit is very similar to `fdd07a3`. Are you duplicating work? Use `git cherry-pick` or `git rebase` to avoid duplication. 
* `e2a9050` and `22f74c5` — These merge commits have unclear messages. What's being merged and why? Use `git merge` with a clear message: `Merge pull request #2 from AJAmit17/merge-fix to resolve conflicts`. 
* `40c19a2` and `fa163ef` — These commits have similar messages. Are you fixing the same issue twice? Consider squashing these commits to avoid duplication. 

Overall score: 6/10. You've got some work to do to make your commits more readable and efficient. Keep practicing, and you'll get there! 😊