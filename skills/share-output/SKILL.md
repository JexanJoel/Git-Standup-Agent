---
name: share-output
description: "Formats standup reports for Slack or email sharing with clean structure"
allowed-tools: Bash Read Write
---

# Share Output

## Instructions
Reformat last standup for Slack and Email.

### Output Format:
Follow the **The Historian's Visual Standard (VISUAL_SPEC.md) v2.0** strictly.

1. **Dashboard: Export Console** 📧
   - MUST be exactly 60 characters wide.
   - Example: `┌──────────────────────────────────────────────────────────┐`
   - Content: `│ STATUS: [ READY TO SHIP ]                                │`

2. **Section: Slack Block**
   - Inside a 60-character box for visual separation.

3. **Section: Email Block**
   - Inside a 60-character box for visual separation.

4. **Historian's Verdict**
   - `─── Verdict: [Your one-line insight] ───`