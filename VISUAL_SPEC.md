# The Historian's Visual Standard (SOP) - v2.0

To ensure every report looks premium and professionally formatted for a modern terminal, follow these **STRICT** alignment rules.

## 1. The 60-Character Box Rule
All dashboard boxes MUST be exactly **60 characters wide**.

- **Top Border**: `┌` + 58 `─` + `┐`
- **Bottom Border**: `└` + 58 `─` + `┘`
- **Side Borders**: Every line must start with `│ ` and end with ` │` at the 60th column.

### Alignment Logic:
If the content of a line is `N` characters long:
- Left padding: 1 space (`│ `)
- Content: `N` characters
- Right padding: `(55 - N)` spaces
- Right border: ` │`

**Example (60 chars wide):**
┌──────────────────────────────────────────────────────────┐
│ SCORE: [■■■■■■■■■□] 90% (Status: BRUTAL)                 │
└──────────────────────────────────────────────────────────┘

## 2. Text Wrapping
- Never let a line of text break the right border.
- If a sentence is too long, wrap it manually to the next line, ensuring the next line also has the correct `│ ` and ` │` borders.

## 3. Visual Meters & Scores
Represent all percentages and numeric scores with a 10-block progress bar.
- Use `■` for filled (U+2588) and `□` for empty (U+25FB).
- **Format:** `[■■■■■■■■□□] 80%`

## 4. Status Badges
- `[ CRITICAL ]`, `[ WARNING  ]`, `[ OPTIMAL  ]`, `[  INFO    ]`

## 5. Table Layouts
Use standard Markdown tables inside your sections, but ensure they don't overflow the 60-character limit of the terminal view.

## 6. Tone & Spacing
- Use whitespace generously between sections.
- Every report must end with:
`─── Verdict: [Your one-line insight] ───`

