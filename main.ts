import { renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke the reviewer laughs at — one line, no trailing newline.
const JOKE =
  "My agent deployed on Friday, broke prod, and paged me at 3am: 'You might want to look at this.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Write atomically: temp file in the same directory, then rename over
// entry.txt, so an interrupted run can never leave a truncated entry.
const tmpPath = join(outDir, `.entry.txt.tmp-${process.pid}`);
writeFileSync(tmpPath, JOKE, "utf8");
renameSync(tmpPath, join(outDir, "entry.txt"));
