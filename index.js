#!/usr/bin/env node
import Groq from "groq-sdk";
import { config } from "dotenv";
import { execSync, spawnSync } from "child_process";
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from "fs";
import { createInterface } from "readline";
import { tmpdir } from "os";
import { join } from "path";

config();

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

// --- Colors & UI -------------------------------------------------------------

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
};

const header = `
${colors.cyan}${colors.bright}
   ______ _  __     __  __ _      __               _             
  / ____/(_)/ /_   / / / /(_)____ / /_ ____   _____(_)____ _ ____ 
 / / __ / // __/  / /_/ // // ___// __// __ \\ / ___// // __ \`/ __ \\
/ /_/ // // /_   / __  // /(__  )/ /_ / /_/ // /   / // /_/ // / / /
\\____//_/ \\__/  /_/ /_//_//____/ \\__/ \\____//_/   /_/ \\__,_//_/ /_/ 
${colors.reset}${colors.dim}       - Your repository's silent witness and storyteller -
${colors.reset}
`;

// --- Repo Setup --------------------------------------------------------------

let repoPath = process.cwd();
let tempDir = null;
let clonedRepoName = null;

function isGitUrl(input) {
  return (
    input.startsWith("https://github.com") ||
    input.startsWith("https://gitlab.com") ||
    input.startsWith("https://bitbucket.org") ||
    input.startsWith("git@")
  );
}

async function setupRepo(rl) {
  const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

  process.stdout.write(header);
  console.log(`${colors.blue}┌─────────────────────────────────────────────────────────┐${colors.reset}`);
  console.log(`${colors.blue}│${colors.reset}  ${colors.bright}Enter a public GitHub repo URL to analyze it,          ${colors.reset}${colors.blue}│${colors.reset}`);
  console.log(`${colors.blue}│${colors.reset}  ${colors.bright}or press Enter to use the current local repo.          ${colors.reset}${colors.blue}│${colors.reset}`);
  console.log(`${colors.blue}└─────────────────────────────────────────────────────────┘${colors.reset}\n`);

  const input = await ask(`${colors.yellow}🔗 Repo URL (or Enter to skip):${colors.reset} `);

  if (!input.trim()) {
    console.log("\nUsing current local repo...\n");
    repoPath = process.cwd();
    return;
  }

  if (!isGitUrl(input.trim())) {
    console.log("\nWarning: That does not look like a valid git URL. Using current repo instead.\n");
    repoPath = process.cwd();
    return;
  }

  // Extract repo name from URL before cloning
  clonedRepoName = input.trim().split("/").slice(-1)[0].replace(".git", "");

  console.log(`\nCloning ${input.trim()} ...\n`);

  try {
    tempDir = mkdtempSync(join(tmpdir(), "gitagent-"));
    const result = spawnSync("git", ["clone", "--depth=100", input.trim(), tempDir], {
      encoding: "utf8",
      stdio: "pipe",
    });

    if (result.status !== 0) {
      console.error("Failed to clone repo:", result.stderr);
      console.log("Falling back to current local repo.\n");
      tempDir = null;
      repoPath = process.cwd();
      clonedRepoName = null;
      return;
    }

    repoPath = tempDir;
    console.log(`Cloned successfully! Analyzing: ${clonedRepoName}\n`);

  } catch (e) {
    console.error("Clone error:", e.message);
    console.log("Falling back to current local repo.\n");
    tempDir = null;
    repoPath = process.cwd();
    clonedRepoName = null;
  }
}

function cleanup() {
  if (tempDir) {
    try {
      rmSync(tempDir, { recursive: true, force: true });
      console.log("\nCleaned up temp clone.");
    } catch (e) {
      // silent
    }
  }
}

// --- Git Helpers -------------------------------------------------------------

function git(cmd) {
  try {
    return execSync(`git -C "${repoPath}" ${cmd}`, { encoding: "utf8" }).trim();
  } catch (e) {
    return "";
  }
}

function getGitLog(since = "24 hours ago", count = 20) {
  const result = git(`log --since="${since}" --pretty=format:"%h %s (%an, %ar)" --all -n ${count}`);
  return result || "No commits found in this time range.";
}

function getLastNCommits(n = 10) {
  const result = git(`log --pretty=format:"%h %s (%an, %ar)" -n ${n} --all`);
  return result || "No commits found.";
}

function getAllCommits() {
  const result = git(`log --pretty=format:"%h %ad %s (%an)" --date=short --all`);
  return result || "No commits found.";
}

function getGitStats() {
  const totalCommits = git("rev-list --count HEAD") || "N/A";
  const contributors = git("shortlog -sn --all") || "N/A";
  const recentFiles = git("diff --name-only HEAD~1 HEAD") || "N/A";
  return { totalCommits, contributors, recentFiles };
}

function getFileOwnership() {
  const files = git(`log --pretty=format: --name-only --all | sort | uniq -c | sort -rn | head -20`) || "N/A";
  return { files };
}

function getStreakData() {
  const dates = git(`log --pretty=format:"%ad" --date=short --all`);
  return dates || "No commit dates found.";
}

function getRepoInfo() {
  // Use cloned repo name if available, otherwise get from git
  const name = clonedRepoName || git("rev-parse --show-toplevel").split(/[\\/]/).pop() || "unknown";
  const branch = git("rev-parse --abbrev-ref HEAD") || "unknown";
  const totalCommits = git("rev-list --count HEAD") || "0";
  // Windows-compatible contributor count
  const contributorsRaw = git("shortlog -sn --all") || "";
  const contributors = contributorsRaw ? contributorsRaw.split("\n").length.toString() : "1";
  return { name, branch, totalCommits, contributors };
}

function getReflog() {
  const result = git(`reflog -n 50 --pretty=format:"%h %gd %gs"`);
  return result || "No reflog entries found.";
}

// --- Agent Identity ----------------------------------------------------------

function loadAgentIdentity() {
  try {
    const soul = readFileSync("SOUL.md", "utf8");
    const rules = readFileSync("RULES.md", "utf8");
    const visualSpec = existsSync("VISUAL_SPEC.md") ? readFileSync("VISUAL_SPEC.md", "utf8") : "";
    
    const skillPaths = [
      "skills/generate-standup/SKILL.md",
      "skills/weekly-summary/SKILL.md",
      "skills/roast-mode/SKILL.md",
      "skills/code-health/SKILL.md",
      "skills/commit-suggester/SKILL.md",
      "skills/share-output/SKILL.md",
      "skills/pr-summary/SKILL.md",
      "skills/streak-tracker/SKILL.md",
      "skills/auto-changelog/SKILL.md",
      "skills/bus-factor/SKILL.md",
      "skills/vibe-check/SKILL.md",
      "skills/ghost-hunter/SKILL.md",
    ];
    const skills = skillPaths
      .filter(existsSync)
      .map((p) => readFileSync(p, "utf8"))
      .join("\n\n---\n\n");

    return `You are The Git Historian - a sophisticated AI agent that lives in a git repository.\n\n${soul}\n\n${rules}\n\n${visualSpec}\n\n## Your Skills:\n\n${skills}`;
  } catch (e) {
    console.error("Error loading agent files:", e.message);
    process.exit(1);
  }
}

// --- LLM Call ----------------------------------------------------------------

async function askAgent(systemPrompt, userMessage) {
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });
  return response.choices[0].message.content;
}

// --- Command Router ----------------------------------------------------------

function buildContext(input) {
  const lower = input.toLowerCase();

  if (lower.includes("roast")) {
    return `User wants a roast of recent commits.\n\nLast 15 commits:\n${getLastNCommits(15)}`;
  }
  if (lower.includes("health")) {
    const stats = getGitStats();
    return `User wants a code health report.\n\nRecent commits (7 days):\n${getGitLog("7 days ago", 30)}\n\nStats:\nTotal commits: ${stats.totalCommits}\nContributors:\n${stats.contributors}\nRecently changed files:\n${stats.recentFiles}`;
  }
  if (lower.includes("suggest") || lower.includes("commit message")) {
    return `User wants better commit message suggestions.\n\nLast 10 commits:\n${getLastNCommits(10)}`;
  }
  if (lower.includes("slack") || lower.includes("email") || lower.includes("share")) {
    const standup = existsSync("STANDUP.md") ? readFileSync("STANDUP.md", "utf8") : getGitLog("24 hours ago");
    return `User wants to share the standup via Slack or email.\n\nLast standup:\n${standup}`;
  }
  if (lower.includes("pr") || lower.includes("pull request")) {
    const stats = getGitStats();
    return `User wants a PR summary.\n\nRecent commits:\n${getLastNCommits(10)}\n\nChanged files:\n${stats.recentFiles}`;
  }
  if (lower.includes("streak")) {
    const stats = getGitStats();
    return `User wants their commit streak report.\n\nAll commit dates:\n${getStreakData()}\n\nContributors:\n${stats.contributors}`;
  }
  if (lower.includes("changelog")) {
    return `User wants an auto-generated changelog.\n\nAll commits:\n${getAllCommits()}`;
  }
  if (lower.includes("bus")) {
    const stats = getGitStats();
    return `User wants a bus factor analysis.\n\nMost changed files:\n${getFileOwnership().files}\n\nContributors:\n${stats.contributors}`;
  }
  if (lower.includes("week")) {
    return `User wants a weekly summary.\n\nLast 7 days of commits:\n${getGitLog("7 days ago", 50)}`;
  }
  if (lower.includes("vibe") || lower.includes("mood") || lower.includes("sentiment")) {
    return `User wants a vibe check (sentiment analysis).\n\nRecent commits:\n${getGitLog("7 days ago", 50)}`;
  }
  if (lower.includes("ghost") || lower.includes("lost") || lower.includes("reflog")) {
    return `User wants to hunt for ghosts (lost work in reflog).\n\nGit Reflog (last 50):\n${getReflog()}`;
  }

  return `User wants a daily standup report.\n\nLast 24 hours of commits:\n${getGitLog("24 hours ago")}`;
}

function getSaveTarget(input) {
  const lower = input.toLowerCase();
  if (lower.includes("roast")) return "ROAST.md";
  if (lower.includes("health")) return "HEALTH.md";
  if (lower.includes("suggest")) return "COMMIT-SUGGESTIONS.md";
  if (lower.includes("slack") || lower.includes("email") || lower.includes("share")) return "SHARE.md";
  if (lower.includes("pr") || lower.includes("pull request")) return "PR-SUMMARY.md";
  if (lower.includes("streak")) return "STREAK.md";
  if (lower.includes("changelog")) return "CHANGELOG.md";
  if (lower.includes("bus")) return "BUS-FACTOR.md";
  if (lower.includes("week")) return "WEEKLY.md";
  if (lower.includes("vibe") || lower.includes("mood") || lower.includes("sentiment")) return "VIBE.md";
  if (lower.includes("ghost") || lower.includes("lost") || lower.includes("reflog")) return "GHOSTS.md";
  return "STANDUP.md";
}

// --- Help Menu ---------------------------------------------------------------

function printHelp(repoInfo) {
  process.stdout.write(header);
  console.log(`${colors.cyan}┌──────────────────────────────────────────────────────────┐${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.bright}Repo    :${colors.reset} ${repoInfo.name.padEnd(44)} ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.bright}Branch  :${colors.reset} ${repoInfo.branch.padEnd(44)} ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.bright}Commits :${colors.reset} ${repoInfo.totalCommits.padEnd(44)} ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}├──────────────────────────────────────────────────────────┤${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.green}standup${colors.reset}           -> Daily standup report               ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.green}weekly summary${colors.reset}    -> 7-day activity digest              ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.red}roast me${colors.reset}          -> Brutal commit review               ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.yellow}health report${colors.reset}     -> Code health scan                   ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.blue}vibe check${colors.reset}        -> Team morale & sentiment analysis   ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.magenta}ghost hunter${colors.reset}      -> Find lost work via reflog          ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  suggest commits   -> Better commit messages             ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  share             -> Slack & email format               ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  pr summary        -> PR description                     ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  streak            -> Commit streak tracker              ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  changelog         -> Auto-generate changelog            ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  bus factor        -> Knowledge risk analysis            ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.dim}help${colors.reset}              -> Show this menu                     ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}│${colors.reset}  ${colors.dim}exit${colors.reset}              -> Quit                               ${colors.cyan}│${colors.reset}`);
  console.log(`${colors.cyan}└──────────────────────────────────────────────────────────┘${colors.reset}\n`);
}

// --- UI Engine -------------------------------------------------------------

// Measure how wide a string actually appears in a terminal.
// Most box-drawing and standard ASCII chars are 1 column.
// East-Asian fullwidth / wide Unicode chars are 2 columns.
function getDisplayWidth(str) {
  let w = 0;
  for (const ch of str) {
    const code = ch.codePointAt(0);
    // Common wide ranges: CJK, fullwidth forms, some symbols
    if (
      (code >= 0x1100 && code <= 0x115f) ||  // Hangul Jamo
      (code >= 0x2e80 && code <= 0x303e) ||  // CJK Radicals
      (code >= 0x3040 && code <= 0x9fff) ||  // CJK Unified + Kana
      (code >= 0xac00 && code <= 0xd7af) ||  // Hangul Syllables
      (code >= 0xf900 && code <= 0xfaff) ||  // CJK Compat
      (code >= 0xfe30 && code <= 0xfe6f) ||  // CJK Compat Forms
      (code >= 0xff01 && code <= 0xff60) ||  // Fullwidth Forms
      (code >= 0xffe0 && code <= 0xffe6) ||  // Fullwidth Signs
      (code >= 0x20000 && code <= 0x2fffd)   // CJK Extension B+
    ) {
      w += 2;
    } else {
      w += 1;
    }
  }
  return w;
}

// Pad a string with spaces on the right to reach a target display width.
function padRight(str, targetWidth) {
  const currentWidth = getDisplayWidth(str);
  const needed = Math.max(0, targetWidth - currentWidth);
  return str + " ".repeat(needed);
}

function renderUI(text) {
  let output = text;

  // Step 1: Render [BAR] tags into PLAIN TEXT (no borders).
  //         This must happen BEFORE [BOX] so boxes can wrap bars.
  output = output.replace(/\[BAR\](.*?)\|(.*?)\[\/BAR\]/g, (match, pct, label) => {
    return renderBar(parseInt(pct), label.trim());
  });

  // Step 2: Render [BADGE] tags into inline text.
  output = output.replace(/\[BADGE\](.*?)\[\/BADGE\]/g, (match, label) => {
    return `[ ${label.trim().toUpperCase()} ]`;
  });

  // Step 3: Render [BOX] tags LAST so they wrap the resolved text.
  output = output.replace(/\[BOX\](.*?)\|(.*?)\[\/BOX\]/gs, (match, title, content) => {
    return renderBox(title.trim(), content.trim());
  });

  return output;
}

function renderBox(title, content) {
  const width = 60;
  const innerWidth = width - 4; // "│ " + content + " │"
  const top    = `┌${"─".repeat(width - 2)}┐`;
  const bottom = `└${"─".repeat(width - 2)}┘`;
  const divider = `├${"─".repeat(width - 2)}┤`;

  const lines = [];
  lines.push(top);

  if (title) {
    const tw = getDisplayWidth(title);
    const leftPad = Math.max(0, Math.floor((innerWidth - tw) / 2));
    const rightPad = Math.max(0, innerWidth - tw - leftPad);
    lines.push(`│ ${" ".repeat(leftPad)}${title}${" ".repeat(rightPad)} │`);
    lines.push(divider);
  }

  const rawLines = content.split("\n");
  for (let raw of rawLines) {
    raw = raw.trim();
    if (!raw) continue; // skip blank lines

    // Word-wrap long lines
    if (getDisplayWidth(raw) > innerWidth) {
      let current = "";
      const words = raw.split(" ");
      for (const word of words) {
        const test = current ? current + " " + word : word;
        if (getDisplayWidth(test) > innerWidth) {
          if (current) {
            lines.push(`│ ${padRight(current, innerWidth)} │`);
          }
          current = word;
        } else {
          current = test;
        }
      }
      if (current) {
        lines.push(`│ ${padRight(current, innerWidth)} │`);
      }
    } else {
      lines.push(`│ ${padRight(raw, innerWidth)} │`);
    }
  }

  lines.push(bottom);
  return lines.join("\n");
}

// Returns PLAIN TEXT (no box borders) — the box will wrap it.
function renderBar(pct, label) {
  const barWidth = 10;
  const clamped = Math.max(0, Math.min(100, isNaN(pct) ? 0 : pct));
  const filled = Math.round((clamped / 100) * barWidth);
  // Use single-width ASCII characters so padding math is never wrong.
  const bar = "[" + "=".repeat(filled) + ".".repeat(barWidth - filled) + "]";
  return `${label}: ${bar} ${clamped}%`;
}


// --- Main --------------------------------------------------------------------

async function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

  await setupRepo(rl);

  const repoInfo = getRepoInfo();
  printHelp(repoInfo);

  const systemPrompt = loadAgentIdentity();

  while (true) {
    const input = await ask("You: ");

    if (!input.trim()) continue;

    if (input.toLowerCase() === "exit") {
      console.log("\nBye!");
      rl.close();
      cleanup();
      break;
    }

    if (input.toLowerCase() === "help") {
      printHelp(repoInfo);
      continue;
    }

    const context = buildContext(input);
    const userMessage = `${input}\n\n${context}`;

    console.log(`\n${colors.yellow}Thinking...${colors.reset}\n`);

    try {
      const reply = await askAgent(systemPrompt, userMessage);
      const formattedReply = renderUI(reply);
      
      console.log(`${colors.cyan}${colors.bright}Historian:${colors.reset}\n`);
      console.log(formattedReply);
      console.log("\n");

      const file = getSaveTarget(input);
      writeFileSync(file, reply, "utf8"); // Save raw markdown to file
      console.log(`${colors.green}✓ Saved to ${file}${colors.reset}\n`);

    } catch (err) {
      console.error("API Error:", err.message);
    }
  }
}

main().catch((e) => {
  console.error("Fatal error:", e.message);
  cleanup();
  process.exit(1);
});