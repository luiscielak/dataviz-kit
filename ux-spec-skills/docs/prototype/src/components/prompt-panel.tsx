"use client";

import { useId, useState } from "react";
import { ArtifactIntake, type Artifact } from "@/components/artifact-intake";
import { ModuleBlock } from "@/components/module-block";

function artifactLine(artifact: Artifact | null): string {
  if (!artifact) return "";
  if (artifact.kind === "url") return `\n\nArtifact: ${artifact.value}`;
  const descriptor = artifact.isImage ? "uploaded screenshot" : "uploaded file";
  return `\n\nArtifact: ${artifact.name} (${descriptor})`;
}

export function PromptPanel({
  prompt,
  artifactIntake,
}: {
  prompt: string;
  artifactIntake?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [copied, setCopied] = useState(false);
  const panelId = useId();

  const composedPrompt = prompt + artifactLine(artifact);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(composedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ModuleBlock title="Prompt">
      {artifactIntake ? <ArtifactIntake onChange={setArtifact} /> : null}

      <div className="mb-2 flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="text-sm font-medium text-brand underline-offset-2 hover:underline"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Collapse prompt" : "Expand prompt"}
        </button>
        <button
          type="button"
          className="text-sm font-medium text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          onClick={copyPrompt}
        >
          {copied ? "Copied" : "Copy prompt"}
        </button>
      </div>
      {open ? (
        <pre
          id={panelId}
          className="overflow-x-auto whitespace-pre-wrap border border-foreground/30 bg-background p-3 font-mono text-xs leading-relaxed sm:text-sm"
        >
          {composedPrompt}
        </pre>
      ) : (
        <div id={panelId} hidden />
      )}
    </ModuleBlock>
  );
}
