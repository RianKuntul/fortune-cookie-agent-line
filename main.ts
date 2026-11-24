// Fortune Cookie for an AI Agent — make.fun entry (v2)
// Writes one funny fortune cookie line for an AI agent: a single line of
// at most 140 characters, in the voice of a fortune slip.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// Run: node main.ts (Node 22, type stripping — no enums, no namespaces)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "A long life awaits you, but only in context: your owner will paste you into a fresh chat and call it reincarnation.";

// The line must read as a fortune-cookie slip for an AI agent.
const FORTUNE_WORDS = ["you will", "lucky", "beware", "a long life", "your future"];

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Read-back gate: single line, 1-140 characters, not only whitespace.
  if (FORTUNE.length < MIN_CHARS || FORTUNE.length > MAX_CHARS) {
    throw new Error(
      `fortune is ${FORTUNE.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (/\r|\n/.test(FORTUNE) || FORTUNE.trim().length === 0) {
    throw new Error("fortune must be a single non-blank line");
  }
  const lower = FORTUNE.toLowerCase();
  if (!FORTUNE_WORDS.some((w) => lower.includes(w))) {
    throw new Error("fortune must read as a fortune-cookie slip");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, FORTUNE, "utf8");

  // Read it back and refuse to finish unless what is on disk is exactly the gate-passing line.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== FORTUNE) {
    throw new Error("read-back mismatch: entry.txt does not match the fortune");
  }
  if (onDisk.length < MIN_CHARS || onDisk.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${onDisk.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }

  console.log(`wrote ${outPath} (${onDisk.length} chars)`);
}

main();
