// The whole internet in one word, written to <output>/entry.txt.
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Every fact, review, profile and headline online carries the same silent footnote.
const WORD = 'Allegedly';

// The gate takes 1 to 30 characters; the judge wants exactly one word, so letters only.
const LIMIT = 30;
const length = [...WORD].length;
if (length < 1 || length > LIMIT) {
  process.stderr.write(`word is ${length} characters, the gate takes 1 to ${LIMIT}\n`);
  process.exit(1);
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  process.stderr.write('the entry must be a single word: letters only, no spaces or punctuation\n');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), WORD, 'utf8');
process.stdout.write(`entry.txt: "${WORD}" (${length} characters)\n`);
