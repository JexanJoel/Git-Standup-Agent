import OpenAI from "openai";
import { config } from "dotenv";
import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";

config();

console.log("🚀 Starting git-standup-agent...");

if (!process.env.OPENROUTER_API_KEY) {
  console.error("❌ OPENROUTER_API_KEY not found in .env file!");
  process.exit(1);
}

console.log("✅ API key loaded");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

function getGitLog(since = "24 hours ago") {
  try {
    const result = execSync(
      `git log --since="${since}" --pretty=format:"%h %s (%an, %ar)" --all`,
      { encoding: "utf8" }
    );
    return result.trim() || "No commits found in this time range.";
  } catch (e) {
    return "Not a git repository or no commits found.";
  }
}

function loadAgentIdentity() {
  try {
    const soul = readFileSync("SOUL.md", "utf8");
    const rules = readFileSync("RULES.md", "utf8");
    const skill = readFileSync("skills/generate-standup/SKILL.md", "utf8");
    const weeklySkill = readFileSync("skills/weekly-summary/SKILL.md", "utf8");
    return `You are git-standup-agent.\n\n${soul}\n\n${rules}\n\nSKILL 1:\n${skill}\n\nSKILL 2:\n${weeklySkill}`;
  } catch (e) {
    console.error("❌ Error loading agent files:", e.message);
    process.exit(1);
  }
}

async function askClaude(systemPrompt, userMessage) {
  const response = await client.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });
  return response.choices[0].message.content;
}

async function main() {
  console.log("\n🤖 git-standup-agent is ready!\n");
  console.log('Type "standup", "weekly summary", or "exit"\n');

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
      console.log("Bye! 👋");
      rl.close();
      break;
    }

    const isWeekly = input.toLowerCase().includes("week");
    const gitLog = isWeekly ? getGitLog("7 days ago") : getGitLog("24 hours ago");

    const userMessage = `${input}\n\nCurrent git log:\n${gitLog}`;

    console.log("\n⏳ Thinking...\n");

    try {
      const reply = await askClaude(systemPrompt, userMessage);
      console.log("🤖 Agent:\n");
      console.log(reply);
      console.log("\n");

      if (input.toLowerCase().includes("standup")) {
        writeFileSync("STANDUP.md", reply, "utf8");
        console.log("✅ Saved to STANDUP.md\n");
      }
      if (isWeekly) {
        writeFileSync("WEEKLY.md", reply, "utf8");
        console.log("✅ Saved to WEEKLY.md\n");
      }
    } catch (err) {
      console.error("❌ API Error:", err.message);
    }
  }
}

main().catch((e) => {
  console.error("❌ Fatal error:", e.message);
  process.exit(1);
});