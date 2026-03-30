import Groq from "groq-sdk";
import { config } from "dotenv";
import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { createInterface } from "readline";

config();

console.log("🚀 Starting git-standup-agent...");

if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY not found in .env file!");
  process.exit(1);
}

console.log("✅ API key loaded");

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ─── Git Helpers ─────────────────────────────────────────────────────────────

function getGitLog(since = "24 hours ago", count = 20) {
  try {
    const result = execSync(
      `git log --since="${since}" --pretty=format:"%h %s (%an, %ar)" --all -n ${count}`,
      { encoding: "utf8" }
    );
    return result.trim() || "No commits found in this time range.";
  } catch (e) {
    return "Not a git repository or no commits found.";
  }
}

function getLastNCommits(n = 10) {
  try {
    const result = execSync(
      `git log --pretty=format:"%h %s (%an, %ar)" -n ${n} --all`,
      { encoding: "utf8" }
    );
    return result.trim() || "No commits found.";
  } catch (e) {
    return "Not a git repository or no commits found.";
  }
}

function getAllCommits() {
  try {
    const result = execSync(
      `git log --pretty=format:"%h %ad %s (%an)" --date=short --all`,
      { encoding: "utf8" }
    );
    return result.trim() || "No commits found.";
  } catch (e) {
    return "No commits found.";
  }
}

function getGitStats() {
  try {
    const totalCommits = execSync("git rev-list --count HEAD", { encoding: "utf8" }).trim();
    const contributors = execSync("git shortlog -sn --all", { encoding: "utf8" }).trim();
    const recentFiles = execSync("git diff --name-only HEAD~1 HEAD", { encoding: "utf8" }).trim();
    return { totalCommits, contributors, recentFiles };
  } catch (e) {
    return { totalCommits: "N/A", contributors: "N/A", recentFiles: "N/A" };
  }
}

function getFileOwnership() {
  try {
    const files = execSync(
      `git log --pretty=format: --name-only --all | sort | uniq -c | sort -rn | head -20`,
      { encoding: "utf8" }
    ).trim();
    const authorsByFile = execSync(
      `git log --pretty=format:"%an" --all --follow -- . | sort | uniq -c | sort -rn | head -20`,
      { encoding: "utf8" }
    ).trim();
    return { files, authorsByFile };
  } catch (e) {
    return { files: "N/A", authorsByFile: "N/A" };
  }
}

function getStreakData() {
  try {
    const dates = execSync(
      `git log --pretty=format:"%ad" --date=short --all`,
      { encoding: "utf8" }
    ).trim();
    return dates || "No commit dates found.";
  } catch (e) {
    return "No data.";
  }
}

// ─── Agent Identity ───────────────────────────────────────────────────────────

function loadAgentIdentity() {
  try {
    const soul = readFileSync("SOUL.md", "utf8");
    const rules = readFileSync("RULES.md", "utf8");
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
    ];
    const skills = skillPaths
      .filter(existsSync)
      .map((p) => readFileSync(p, "utf8"))
      .join("\n\n---\n\n");

    return `You are git-standup-agent — an AI agent that lives in a git repository.\n\n${soul}\n\n${rules}\n\n## Your Skills:\n\n${skills}`;
  } catch (e) {
    console.error("❌ Error loading agent files:", e.message);
    process.exit(1);
  }
}

// ─── LLM Call ─────────────────────────────────────────────────────────────────

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

// ─── Command Router ───────────────────────────────────────────────────────────

function buildContext(input) {
  const lower = input.toLowerCase();

  if (lower.includes("roast")) {
    const commits = getLastNCommits(15);
    return `User wants a roast of recent commits.\n\nLast 15 commits:\n${commits}`;
  }

  if (lower.includes("health")) {
    const commits = getGitLog("7 days ago", 30);
    const stats = getGitStats();
    return `User wants a code health report.\n\nRecent commits (7 days):\n${commits}\n\nStats:\nTotal commits: ${stats.totalCommits}\nContributors:\n${stats.contributors}\nRecently changed files:\n${stats.recentFiles}`;
  }

  if (lower.includes("suggest") || lower.includes("commit message")) {
    const commits = getLastNCommits(10);
    return `User wants better commit message suggestions.\n\nLast 10 commits:\n${commits}`;
  }

  if (lower.includes("slack") || lower.includes("email") || lower.includes("share")) {
    const standup = existsSync("STANDUP.md")
      ? readFileSync("STANDUP.md", "utf8")
      : getGitLog("24 hours ago");
    return `User wants to share the standup via Slack or email.\n\nLast standup:\n${standup}`;
  }

  if (lower.includes("pr") || lower.includes("pull request")) {
    const commits = getLastNCommits(10);
    const stats = getGitStats();
    return `User wants a PR summary.\n\nRecent commits:\n${commits}\n\nChanged files:\n${stats.recentFiles}`;
  }

  if (lower.includes("streak")) {
    const dates = getStreakData();
    const stats = getGitStats();
    return `User wants their commit streak report.\n\nAll commit dates:\n${dates}\n\nContributors:\n${stats.contributors}`;
  }

  if (lower.includes("changelog")) {
    const allCommits = getAllCommits();
    return `User wants an auto-generated changelog.\n\nAll commits:\n${allCommits}`;
  }

  if (lower.includes("bus factor") || lower.includes("bus")) {
    const ownership = getFileOwnership();
    const stats = getGitStats();
    return `User wants a bus factor analysis.\n\nMost changed files:\n${ownership.files}\n\nContributors:\n${stats.contributors}`;
  }

  if (lower.includes("week")) {
    const commits = getGitLog("7 days ago", 50);
    return `User wants a weekly summary.\n\nLast 7 days of commits:\n${commits}`;
  }

  // default: standup
  const commits = getGitLog("24 hours ago");
  return `User wants a daily standup report.\n\nLast 24 hours of commits:\n${commits}`;
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
  return "STANDUP.md";
}

// ─── Help Menu ────────────────────────────────────────────────────────────────

function printHelp() {
  console.log(`
┌──────────────────────────────────────────────────┐
│            git-standup-agent 🤖                   │
├──────────────────────────────────────────────────┤
│  standup           → Daily standup report         │
│  weekly summary    → 7-day activity digest        │
│  roast me          → Brutal commit review    🔥   │
│  health report     → Code health scan        📊   │
│  suggest commits   → Better commit messages  🎯   │
│  share             → Slack & email format    📧   │
│  pr summary        → PR description          🔮   │
│  streak            → Commit streak tracker   ⏰   │
│  changelog         → Auto-generate changelog 🧩   │
│  bus factor        → Knowledge risk analysis 🚨   │
│  help              → Show this menu               │
│  exit              → Quit                         │
└──────────────────────────────────────────────────┘
`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  printHelp();

  const systemPrompt = loadAgentIdentity();

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

  while (true) {
    const input = await ask("You: ");

    if (!input.trim()) continue;

    if (input.toLowerCase() === "exit") {
      console.log("\nBye! 👋\n");
      rl.close();
      break;
    }

    if (input.toLowerCase() === "help") {
      printHelp();
      continue;
    }

    const context = buildContext(input);
    const userMessage = `${input}\n\n${context}`;

    console.log("\n⏳ Thinking...\n");

    try {
      const reply = await askAgent(systemPrompt, userMessage);
      console.log("🤖 Agent:\n");
      console.log(reply);
      console.log("\n");

      const file = getSaveTarget(input);
      writeFileSync(file, reply, "utf8");
      console.log(`✅ Saved to ${file}\n`);

    } catch (err) {
      console.error("❌ API Error:", err.message);
    }
  }
}

main().catch((e) => {
  console.error("❌ Fatal error:", e.message);
  process.exit(1);
});