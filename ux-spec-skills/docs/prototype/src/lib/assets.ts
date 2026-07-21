import { readFile } from "node:fs/promises";
import { join, normalize, resolve, extname } from "node:path";

export type AssetKind = "markdown" | "html" | "missing";

export type AssetResult = {
  kind: AssetKind;
  content: string;
  path: string;
};

const ALLOWED_EXTENSIONS = new Set([".md", ".html"]);

/** Repo root is two levels up from the prototype (ux-spec-skills/docs/prototype). */
function repoRoot(): string {
  return resolve(process.cwd(), "..", "..");
}

/**
 * Read a repo-relative asset (e.g. "reference/principles-tufte.md") from the
 * ux-spec-skills root. Guards against path traversal and restricts to a small
 * extension allowlist so Related assets can render real content in-app.
 */
export async function readAsset(repoPath: string): Promise<AssetResult> {
  const root = repoRoot();
  const target = normalize(join(root, repoPath));

  const withinRoot = target === root || target.startsWith(root + "/");
  const ext = extname(target).toLowerCase();

  if (!withinRoot || !ALLOWED_EXTENSIONS.has(ext)) {
    return { kind: "missing", content: "", path: repoPath };
  }

  try {
    const content = await readFile(target, "utf8");
    return {
      kind: ext === ".html" ? "html" : "markdown",
      content,
      path: repoPath,
    };
  } catch {
    return { kind: "missing", content: "", path: repoPath };
  }
}
