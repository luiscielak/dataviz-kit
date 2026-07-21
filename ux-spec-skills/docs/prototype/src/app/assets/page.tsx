import Link from "next/link";
import { marked } from "marked";
import { AppShell } from "@/components/app-shell";
import { ModuleBlock } from "@/components/module-block";
import { QuietButton } from "@/components/quiet-button";
import { readAsset } from "@/lib/assets";

type Props = {
  searchParams: Promise<{ path?: string }>;
};

export const metadata = {
  title: "Asset",
};

marked.setOptions({ gfm: true, breaks: false });

export default async function AssetStubPage({ searchParams }: Props) {
  const { path } = await searchParams;
  const assetPath = path?.trim();

  if (!assetPath) {
    return (
      <AppShell>
        <ModuleBlock accentLeft>
          <div role="alert">
            <h1 className="font-display text-2xl font-semibold">
              Missing asset path
            </h1>
            <p className="mt-3">
              No repository path was provided for this Related asset.
            </p>
          </div>
          <div className="mt-4">
            <QuietButton href="/">Back to Overview</QuietButton>
          </div>
        </ModuleBlock>
      </AppShell>
    );
  }

  const asset = await readAsset(assetPath);

  const pathLabel = (
    <p className="font-mono text-sm break-all border border-foreground/30 bg-background p-3">
      {assetPath}
    </p>
  );

  const footer = (
    <div className="flex flex-wrap gap-3">
      <QuietButton href="/">Back to Overview</QuietButton>
      <Link
        href="/error"
        className="text-sm text-muted-foreground underline-offset-2 hover:underline"
      >
        Preview error recovery
      </Link>
    </div>
  );

  if (asset.kind === "markdown") {
    const html = await marked.parse(asset.content);
    return (
      <AppShell>
        <ModuleBlock accentLeft title="Related asset">
          <p className="text-muted-foreground">
            Rendered from{" "}
            <code className="font-mono text-sm">ux-spec-skills/</code> — the real
            content behind this skill.
          </p>
          {pathLabel}
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {footer}
        </ModuleBlock>
      </AppShell>
    );
  }

  if (asset.kind === "html") {
    return (
      <AppShell>
        <ModuleBlock accentLeft title="Related asset">
          <p className="text-muted-foreground">
            Live HTML demo from{" "}
            <code className="font-mono text-sm">ux-spec-skills/</code>.
          </p>
          {pathLabel}
          <iframe
            title={assetPath}
            srcDoc={asset.content}
            className="h-[70vh] w-full border border-foreground bg-white"
          />
          {footer}
        </ModuleBlock>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ModuleBlock accentLeft title="Related asset">
        <p>
          This Related asset maps to a file under{" "}
          <code className="font-mono text-sm">ux-spec-skills/</code>, but it
          could not be read in this prototype.
        </p>
        {pathLabel}
        {footer}
      </ModuleBlock>
    </AppShell>
  );
}
