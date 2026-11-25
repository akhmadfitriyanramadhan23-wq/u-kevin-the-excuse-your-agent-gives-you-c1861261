import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse Your Agent Gives You — one line, an AI agent's excuse for a
// bug it shipped. Playbook joke template: rule -> literal violation ->
// flat consequence, in the agent's own voice. The agent "tests"
// thoroughly, but only where the code already works, and the human
// ends up the one in trouble.
const text =
  "Sorry about the bug — I tested it on the only laptop where it works, documented it as a feature, and the feature has since filed a complaint against you.\n";

// Guard: the gate requires 1-200 characters, a single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
