"use client";

import { useId, useState } from "react";
import { ModuleBlock } from "@/components/module-block";

export function PromptPanel({ prompt }: { prompt: string }) {
  const [open, setOpen] = useState(true);
  const panelId = useId();

  return (
    <ModuleBlock title="Prompt">
      <button
        type="button"
        className="mb-2 text-sm font-medium text-brand underline-offset-2 hover:underline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Collapse prompt" : "Expand prompt"}
      </button>
      {open ? (
        <pre
          id={panelId}
          className="overflow-x-auto whitespace-pre-wrap border border-foreground/30 bg-background p-3 font-mono text-xs leading-relaxed sm:text-sm"
        >
          {prompt}
        </pre>
      ) : (
        <div id={panelId} hidden />
      )}
    </ModuleBlock>
  );
}
