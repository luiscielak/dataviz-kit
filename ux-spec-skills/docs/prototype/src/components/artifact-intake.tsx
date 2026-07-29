"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ACCEPT = "image/*,.html,.md,.txt,.csv,.json";
const TEXT_PREVIEW_LIMIT = 2000;

export type Artifact =
  | { kind: "url"; value: string }
  | { kind: "file"; name: string; isImage: boolean };

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function looksTextual(file: File): boolean {
  if (file.type.startsWith("text/")) return true;
  return /\.(html?|md|txt|csv|json)$/i.test(file.name);
}

export function ArtifactIntake({
  onChange,
}: {
  onChange?: (artifact: Artifact | null) => void;
}) {
  const urlFieldId = useId();
  const fileFieldId = useId();
  const statusId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [urlValue, setUrlValue] = useState("");
  const [urlActive, setUrlActive] = useState("");
  const [showFrame, setShowFrame] = useState(false);

  const [fileName, setFileName] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [textPreview, setTextPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function emit(next: Artifact | null) {
    onChange?.(next);
  }

  function clearFileState() {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setFileName(null);
    setImagePreview(null);
    setTextPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function applyUrl() {
    const trimmed = urlValue.trim();
    if (!trimmed || !isHttpUrl(trimmed)) {
      setUrlActive("");
      setShowFrame(false);
      if (!fileName) emit(null);
      return;
    }
    clearFileState();
    setUrlActive(trimmed);
    emit({ kind: "url", value: trimmed });
  }

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    clearFileState();
    setUrlValue("");
    setUrlActive("");
    setShowFrame(false);

    setFileName(file.name);
    const isImage = file.type.startsWith("image/");

    if (isImage) {
      const objectUrl = URL.createObjectURL(file);
      objectUrlRef.current = objectUrl;
      setImagePreview(objectUrl);
    } else if (looksTextual(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        const text = String(reader.result ?? "");
        setTextPreview(
          text.length > TEXT_PREVIEW_LIMIT
            ? `${text.slice(0, TEXT_PREVIEW_LIMIT)}\n…`
            : text
        );
      };
      reader.readAsText(file);
    }

    emit({ kind: "file", name: file.name, isImage });
  }

  function clearAll() {
    clearFileState();
    setUrlValue("");
    setUrlActive("");
    setShowFrame(false);
    emit(null);
  }

  const hasArtifact = Boolean(urlActive || fileName);
  const statusText = urlActive
    ? `Using URL: ${urlActive}`
    : fileName
      ? `Using file: ${fileName}`
      : "No artifact selected.";

  return (
    <div className="mb-4 border border-foreground/30 bg-background p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Artifact</p>
        {hasArtifact ? (
          <button
            type="button"
            onClick={clearAll}
            className="text-sm text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Clear
          </button>
        ) : null}
      </div>

      <p className="mb-3 text-xs text-muted-foreground">
        Point to a URL or upload a screenshot, HTML, or spec. Nothing is
        uploaded to a server; the artifact is added to the prompt below.
      </p>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor={urlFieldId}>Artifact URL</Label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              id={urlFieldId}
              type="url"
              inputMode="url"
              placeholder="https://example.com/dashboard"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              onBlur={applyUrl}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  applyUrl();
                }
              }}
              aria-describedby={statusId}
              aria-invalid={
                urlValue.trim().length > 0 && !isHttpUrl(urlValue.trim())
              }
            />
            <button
              type="button"
              onClick={applyUrl}
              className="inline-flex shrink-0 items-center justify-center border border-foreground bg-transparent px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Use URL
            </button>
          </div>
          {urlValue.trim().length > 0 && !isHttpUrl(urlValue.trim()) ? (
            <p className="text-xs text-destructive">
              Enter a valid http(s) URL.
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor={fileFieldId}>Upload artifact</Label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFile(e.dataTransfer.files?.[0]);
            }}
            className={cn(
              "flex flex-col items-start gap-2 border border-dashed border-foreground/40 p-3 transition-colors",
              dragging && "border-brand bg-card"
            )}
          >
            <p className="text-xs text-muted-foreground">
              Drag a file here, or choose one. Images, HTML, Markdown, TXT, CSV,
              or JSON.
            </p>
            <Input
              ref={fileInputRef}
              id={fileFieldId}
              type="file"
              accept={ACCEPT}
              onChange={(e) => handleFile(e.target.files?.[0])}
              className="h-auto py-1"
            />
          </div>
        </div>
      </div>

      {urlActive ? (
        <div className="mt-3 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={urlActive}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand underline-offset-2 hover:underline"
            >
              Open URL in new tab
            </a>
            <button
              type="button"
              onClick={() => setShowFrame((v) => !v)}
              aria-expanded={showFrame}
              className="text-sm text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {showFrame ? "Hide preview" : "Show preview"}
            </button>
          </div>
          {showFrame ? (
            <div className="space-y-1">
              <iframe
                src={urlActive}
                title="Artifact preview"
                sandbox=""
                className="h-64 w-full border border-foreground/30 bg-card"
              />
              <p className="text-xs text-muted-foreground">
                Some sites block embedding; use “Open URL in new tab” if the
                preview stays blank.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {imagePreview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imagePreview}
          alt={`Preview of ${fileName ?? "uploaded image"}`}
          className="mt-3 max-h-64 w-auto border border-foreground/30 bg-card"
        />
      ) : null}

      {textPreview ? (
        <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap border border-foreground/30 bg-card p-3 font-mono text-xs leading-relaxed">
          {textPreview}
        </pre>
      ) : null}

      <p id={statusId} aria-live="polite" className="sr-only">
        {statusText}
      </p>
    </div>
  );
}
