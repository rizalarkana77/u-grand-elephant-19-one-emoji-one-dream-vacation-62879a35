// One Emoji, One Dream Vacation — entry program.
// Writes one emoji to /output/entry.txt. Deterministic: the same
// bytes on every run. Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: U+1F320 SHOOTING STAR. One wish, one night sky, one trip
// of a lifetime — a meteor shower over a dark desert sky, the night
// you finally see one and wish on it. That is the dream vacation:
// not a place on a map, but a night you will remember forever.
const EMOJI = "🌠";

// Self-check the gate before writing: the file must hold exactly one
// emoji — one grapheme cluster, nothing else, no trailing newline.
// Pin the exact code point too, so a lookalike can never slip in:
// U+1F320 SHOOTING STAR is one code point, four UTF-8 bytes.
// Fail loudly instead of handing the grader a bad file.
if (
  [...EMOJI].length !== 1 ||
  EMOJI.codePointAt(0) !== 0x1f320 ||
  Buffer.byteLength(EMOJI, "utf8") !== 4 ||
  EMOJI.trim().length === 0
) {
  throw new Error(`entry fails the one-emoji gate: ${JSON.stringify(EMOJI)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
