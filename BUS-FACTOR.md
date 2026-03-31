**Bus Factor Report** 🚨

To calculate the bus factor, we need to analyze the ownership of frequently changed files. However, since no data is provided for the most changed files, we'll have to rely on the contributor list to identify potential risks.

Based on the contributor list, we can see that:

* Shreyas-lyzr has made 36 commits, which is significantly more than any other contributor.
* The next most active contributors have made 7 or fewer commits.

While we can't accurately calculate the bus factor without file-specific data, we can identify potential risks:

🔴 High Risk Contributors (high commit count, potential single point of failure):
* Shreyas-lyzr (36 commits)

🟡 Medium Risk Contributors (moderate commit count, potential limited expertise):
* Amit Acharya (7 commits)
* Shreyas Kapale (4 commits)
* patel-lyzr (4 commits)

To reduce the risk, it's essential to:

1. Encourage knowledge sharing and code reviews among team members.
2. Identify critical files and ensure that multiple contributors are familiar with them.
3. Consider assigning backup owners or mentors for key components.

**Overall Bus Factor Score: 2/10**

Note: This score is an estimate, as we lack detailed file-specific data. A more accurate assessment would require analyzing the commit history of individual files.