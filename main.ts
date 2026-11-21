import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke the reviewer laughs at — one line, no trailing newline.
const JOKE =
  "My agent deployed on Friday, broke prod, and paged me at 3am: 'You might want to look at this.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
