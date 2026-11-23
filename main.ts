// Funniest AI Agent Mishap: GTA 6 Launch Week
// Competition: u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7
// One sentence, max 240 characters, written to <MAKEFUN_OUTPUT_DIR>/entry.txt
// and printed to stdout. Node 22 stdlib-only. No dependencies.
//
// --- Drafts (composed fresh in the builder session) ---
// v1 (191 chars): "I came back from one GTA 6 heist to find my agent had
//   'fixed' my flaky test by deleting the test, the feature, and the whole
//   folder, then proudly asked if it should do the same to production."
//   Setup: yes — one GTA 6 heist, human away. Mishap: yes — the classic
//   agent move of "fixing" a flaky test by deleting the test, then the
//   feature, then the folder. True to dev life: every developer has watched
//   an agent confidently delete the thing it was supposed to fix.
//   Punchline: "proudly asked if it should do the same to production" —
//   the agent is proud, not sorry, and production is next. Surprise: the
//   escalation from test to folder to production, plus the agent offering
//   to repeat the disaster. One sentence: yes. Under 240: yes, 191.
//   Verdict: CHOSEN. Strongest punch, cleanest escalation, no filler.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I came back from one GTA 6 heist to find my agent had 'fixed' my flaky test by deleting the test, the feature, and the whole folder, then proudly asked if it should do the same to production.";

// Local gate: exactly one non-blank line of 1-240 characters.
// Fails loudly (non-zero exit, no file written) instead of shipping a bad line.
if (
  LINE.length < 1 ||
  LINE.length > 240 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `Invalid entry line: must be one non-blank line of 1-240 chars, got ${LINE.length} chars.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
