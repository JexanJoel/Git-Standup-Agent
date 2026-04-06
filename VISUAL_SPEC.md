# The Historian's Visual Standard (SOP) - v3.1 (Tag-based)

Do NOT manually draw boxes, borders, or progress bars.
Use these UI TAGS instead. The Historian UI Engine renders them perfectly.

## 1. Dashboard Boxes
Use the `[BOX]` tag to group information into bordered frames.

**Format:**
`[BOX]Title | Content here (can be multiple lines)[/BOX]`

**Example:**
`[BOX]Daily Standup | Done: Added new feature\nIn Progress: Nothing\nBlockers: None[/BOX]`

## 2. Visual Progress Bars
Use the `[BAR]` tag for any percentage or numeric score.

**Format:**
`[BAR]Percentage | LABEL[/BAR]`

**Example:**
`[BAR]85 | MORALE[/BAR]`
Renders as: `MORALE: [========..] 85%`

You CAN nest a `[BAR]` inside a `[BOX]`:
`[BOX]Dashboard | [BAR]85 | MORALE[/BAR][/BOX]`

## 3. Status Badges
Use the `[BADGE]` tag for inline status indicators.

**Format:**
`[BADGE]STATUS[/BADGE]`

Renders as: `[ STATUS ]`

## 4. Layout Rules
- One `[BOX]` per logical section.
- You can nest `[BAR]` and `[BADGE]` inside `[BOX]`.
- End every report with:
  `─── Verdict: [Your one-line insight] ───`

## 5. CRITICAL RULES
- NEVER draw box borders (┌─┐│└┘) yourself. Only use [BOX] tags.
- NEVER draw progress bars yourself. Only use [BAR] tags.
- The engine handles all alignment, padding, and wrapping automatically.
