import Groq from "groq-sdk";
import { config } from "dotenv";
import { execSync, spawnSync } from "child_process";
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from "fs";
import { createInterface } from "readline";
import { tmpdir } from "os";
import { join } from "path";

config();

console.log("🚀 Starting git-standup-agent...");

if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY not found in .env file!");
  process.exit(1);
}

console.log("✅ API key loaded\n");

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ─── Repo Setup ───────────────────────────────────────────────────────────────

let repoPath = process.cwd(); // default: current repo
let tempDir = null;           // if we cloned, store path here

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

  console.log("┌─────────────────────────────────────────────────────────┐");
  console.log("│              git-standup-agent 🤖                        │");
  console.log("├─────────────────────────────────────────────────────────┤");
  console.log("│  Enter a public GitHub repo URL to analyze it,          │");
  console.log("│  or press Enter to use the current local repo.          │");
  console.log("└─────────────────────────────────────────────────────────┘\n");

  const input = await ask("🔗 Repo URL (or Enter to skip): ");

  if (!input.trim()) {
    console.log("\n📁 Using current local repo...\n");
    repoPath = process.cwd();
    return;
  }

  if (!isGitUrl(input.trim())) {
    console.log("\n⚠️  That doesn't look like a valid git URL. Using current repo instead.\n");
    repoPath = process.cwd();
    return;
  }

  console.log(`\n⏳ Cloning ${input.trim()} ...\n`);

  try {
    tempDir = mkdtempSync(join(tmpdir(), "gitagent-"));
    const result = spawnSync("git", ["clone", "--depth=100", input.trim(), tempDir], {
      encoding: "utf8",
      stdio: "pipe",
    });

    if (result.status !== 0) {
      console.error("❌ Failed to clone repo:", result.stderr);
      console.log("📁 Falling back to current local repo.\n");
      tempDir = null;
      repoPath = process.cwd();
      return;
    }

    repoPath = tempDir;
    const repoName = input.trim().split("/").slice(-1)[0].replace(".git", "");
    console.log(`✅ Cloned successfully! Analyzing: ${repoName}\n`);

  } catch (e) {
    console.error("❌ Clone error:", e.message);
    console.log("📁 Falling back to current local repo.\n");
    tempDir = null;
    repoPath = process.cwd();
  }
}

function cleanup() {
  if (tempDir) {
    try {
      rmSync(tempDir, { recursive: true, force: true });
      console.log("\n🧹 Cleaned up temp clone.");
    } catch (e) {
      // silent
    }
  }
}

// ─── Git Helpers ──────────────────────────────────────────────────────────────

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
  const name = git("rev-parse --show-toplevel").split(/[\\/]/).pop() || "unknown";
  const branch = git("rev-parse --abbrev-ref HEAD") || "unknown";
  const totalCommits = git("rev-list --count HEAD") || "0";
  const contributors = git("shortlog -sn --all | wc -l").trim() || "1";
  return { name, branch, totalCommits, contributors };
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

  // default: standup
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
  return "STANDUP.md";
}

// ─── Help Menu ────────────────────────────────────────────────────────────────

function printHelp(repoInfo) {
  console.log(`
┌────────────────────────────────────────────────────────── ┐
│               git-standup-agent                           │
├────────────────────────────────────────────────────────── ┤
│  📁 Repo : ${repoInfo.name.padEnd(44)}│
│  🌿 Branch: ${repoInfo.branch.padEnd(43)}│
│  📝 Commits: ${repoInfo.totalCommits.padEnd(42)}│
├────────────────────────────────────────────────────────── ┤
│  standup           → Daily standup report                 │
│  weekly summary    → 7-day activity digest                │
│  roast me          → Brutal commit review                 │
│  health report     → Code health scan                     │
│  suggest commits   → Better commit messages               │
│  share             → Slack & email format                 │
│  pr summary        → PR description                       │
│  streak            → Commit streak tracker                │
│  changelog         → Auto-generate changelog              │
│  bus factor        → Knowledge risk analysis              │
│  help              → Show this menu                       │
│  exit              → Quit                                 │
└────────────────────────────────────────────────────────── ┘
`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

  // Step 1: Ask for repo
  await setupRepo(rl);

  // Step 2: Show menu with repo info
  const repoInfo = getRepoInfo();
  printHelp(repoInfo);

  const systemPrompt = loadAgentIdentity();

  // Step 3: Command loop
  while (true) {
    const input = await ask("You: ");

    if (!input.trim()) continue;

    if (input.toLowerCase() === "exit") {
      console.log("\nBye! 👋");
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
  cleanup();
  process.exit(1);
});