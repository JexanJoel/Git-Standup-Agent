import { execSync } from "child_process";
const prompt = process.argv[2] || "standup";
console.log(`🤖 Running: ${prompt}`);
execSync(`node index.js`, { stdio: "inherit" });