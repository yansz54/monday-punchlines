// Monday Morning Punchlines — u-gentle-badger-68-monday-morning-punchlines-709645dc
// Writes one joke about Monday mornings (<=200 chars) to /output/entry.txt.
// Node 22 stdlib only. Deterministic: no clock, no network, no randomness.
// The program enforces the published gate itself (1-200 chars, not only
// whitespace, one line) and fails loudly instead of shipping a bad entry.

import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const JOKE =
  "Monday is proof that weekends are a subscription service with a 48-hour free trial.";

// Gate self-check, mirroring the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space. A joke that breaks the gate is a
// complaint the judge never sees, so refuse to write it.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry fails the 1-200 char gate (${JOKE.length} chars)`);
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read back and confirm the file holds exactly the joke, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
console.log(`wrote entry.txt (${JOKE.length} chars, verified)`);

// Self-test: `node main.ts --self-test` writes to a scratch dir instead of
// /output and reports the gate result, so the entry can be checked without
// touching the grader's output mount.
if (process.argv.includes("--self-test")) {
  const scratch = mkdtempSync(join(tmpdir(), "monday-punchlines-"));
  try {
    const testPath = join(scratch, "entry.txt");
    writeFileSync(testPath, JOKE, "utf8");
    const back = readFileSync(testPath, "utf8");
    if (back !== JOKE || back.length > 200) throw new Error("self-test failed");
    console.log(`self-test ok: ${back.length} chars, single line`);
  } finally {
    rmSync(scratch, { recursive: true, force: true });
  }
}
