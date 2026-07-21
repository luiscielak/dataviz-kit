// Copies canonical expert demos into public/ so the prototype can serve them.
// Source of truth: ux-spec-skills/examples/experts/<slug>/demo.html
// Output (generated, gitignored): public/expert-demos/<slug>.html
import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const protoRoot = join(here, "..");
const srcDir = join(protoRoot, "..", "..", "examples", "experts");
const outDir = join(protoRoot, "public", "expert-demos");

async function main() {
  let entries;
  try {
    entries = await readdir(srcDir, { withFileTypes: true });
  } catch {
    console.warn(`[copy-expert-demos] source not found: ${srcDir} — skipping`);
    return;
  }

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  let copied = 0;
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const demo = join(srcDir, slug, "demo.html");
    try {
      await stat(demo);
    } catch {
      continue;
    }
    await cp(demo, join(outDir, `${slug}.html`));
    copied += 1;
  }

  console.log(`[copy-expert-demos] copied ${copied} demo(s) to public/expert-demos/`);
}

main().catch((err) => {
  console.error("[copy-expert-demos] failed:", err);
  process.exit(1);
});
