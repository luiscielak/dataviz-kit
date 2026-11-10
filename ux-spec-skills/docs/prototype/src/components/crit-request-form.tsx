"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { quietControlClass } from "@/components/quiet-button";
import { cn } from "@/lib/utils";

const ACCEPT = "image/png,image/jpeg,image/webp,application/pdf";
const ALLOWED = new Set(["image/png", "image/jpeg", "image/webp", "application/pdf"]);
const MAX_BYTES = 25 * 1024 * 1024;
const UPLOAD_URL = "/dataviz/api/upload-url";
const SUBSCRIBE_URL = "/dataviz/api/subscribe";

function humanSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isLiveIntakeHost(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hostname === "thehoomanloop.com";
}

const fieldClass =
  "w-full border border-foreground bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50";

export function CritRequestForm() {
  const emailId = useId();
  const fileId = useId();
  const decisionId = useId();
  const urlId = useId();
  const contextId = useId();
  const statusId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [decision, setDecision] = useState("");
  const [dashboardUrl, setDashboardUrl] = useState("");
  const [context, setContext] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [artifactPath, setArtifactPath] = useState("");
  const [fileError, setFileError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  async function handleFile(next: File | undefined | null) {
    if (!next) return;
    if (!ALLOWED.has(next.type)) {
      setFile(null);
      setArtifactPath("");
      setFileError("Unsupported file type. Use PNG, JPEG, WebP, or PDF.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (next.size > MAX_BYTES) {
      setFile(null);
      setArtifactPath("");
      setFileError(`That file is ${humanSize(next.size)}. The limit is 25 MB.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setFileError(null);
    setFile(next);
    setArtifactPath("");

    if (!isLiveIntakeHost()) return;

    setUploading(true);
    setFileError("Uploading…");
    try {
      const res = await fetch(UPLOAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: next.name,
          contentType: next.type,
          size: next.size,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        uploadUrl?: string;
        path?: string;
        error?: string;
      };
      if (!res.ok || !data.uploadUrl || !data.path) {
        throw new Error(data.error || "Could not start the upload. Please try again.");
      }
      const put = await fetch(data.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": next.type },
        body: next,
      });
      if (!put.ok) {
        throw new Error(`Upload failed (${put.status}). Please try again.`);
      }
      setArtifactPath(data.path);
      setFileError(null);
    } catch (err) {
      setFile(null);
      setArtifactPath("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setFileError(err instanceof Error ? err.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (uploading) {
      e.preventDefault();
      setFileError("Still uploading — one moment.");
      return;
    }
    if (!file) {
      e.preventDefault();
      setFileError("Add one screenshot or export of the view that matters most.");
      return;
    }
    if (isLiveIntakeHost()) {
      if (!artifactPath) {
        e.preventDefault();
        setFileError("Please add your dashboard before sending.");
      }
      return;
    }
    e.preventDefault();
    setSubmittedEmail(email.trim());
  }

  if (submittedEmail) {
    return (
      <div role="status" className="space-y-3">
        <p className="font-medium">Request captured in this prototype.</p>
        <p className="text-muted-foreground">
          We’ll send the report to{" "}
          <span className="font-mono text-foreground">{submittedEmail}</span>{" "}
          from{" "}
          <code className="font-mono text-xs">thehoomanloop.com/dataviz/crit</code>
          . Nothing was emailed from this local preview.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link href="/" className={quietControlClass}>
            Back to Overview
          </Link>
          <Link href="/skills/dataviz-crit" className={quietControlClass}>
            Run it yourself
          </Link>
        </div>
      </div>
    );
  }

  const statusText = fileError
    ? fileError
    : artifactPath
      ? "Uploaded — ready to send."
      : file
        ? `Using file: ${file.name}`
        : "No file selected.";

  return (
    <form
      className="grid gap-4"
      action={SUBSCRIBE_URL}
      method="post"
      acceptCharset="UTF-8"
      onSubmit={onSubmit}
    >
      <p className="text-xs text-muted-foreground">
        On thehoomanloop.com this submits to the live intake. Locally it validates
        only — nothing is emailed.
      </p>

      <div className="space-y-1.5">
        <Label htmlFor={emailId}>Email address</Label>
        <input
          id={emailId}
          name="email_address"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={fileId}>
          Your dashboard or chart
          <span className="font-normal text-muted-foreground">
            {" "}
            — PNG, JPEG, WebP, or PDF, up to 25 MB
          </span>
        </Label>
        <div
          role="button"
          tabIndex={0}
          aria-controls={fileId}
          aria-describedby={statusId}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            void handleFile(e.dataTransfer.files?.[0]);
          }}
          className={cn(
            "cursor-pointer border border-dashed border-foreground/40 p-4 transition-colors",
            dragging && "border-brand bg-background"
          )}
        >
          <p className="text-sm font-medium">
            {file
              ? `${file.name} · ${humanSize(file.size)}`
              : "Drop your dashboard here, or click to choose a file"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            One screenshot or export of the view that matters most.
          </p>
        </div>
        <input
          ref={fileInputRef}
          id={fileId}
          type="file"
          accept={ACCEPT}
          className="sr-only"
          onChange={(e) => void handleFile(e.target.files?.[0])}
        />
        <input type="hidden" name="artifact_path" value={artifactPath} />
        <p
          id={statusId}
          role="status"
          aria-live="polite"
          className={cn(
            "text-xs",
            file || fileError || artifactPath
              ? "text-muted-foreground"
              : "sr-only"
          )}
        >
          {statusText}
        </p>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={decisionId}>
          What decision should this dashboard support?
        </Label>
        <textarea
          id={decisionId}
          name="decision"
          required
          rows={2}
          placeholder="e.g. Whether to shift fulfillment capacity between regions this week."
          value={decision}
          onChange={(e) => setDecision(e.target.value)}
          className={cn(fieldClass, "min-h-16")}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={urlId}>
          Public dashboard URL
          <span className="font-normal text-muted-foreground">
            {" "}
            — optional, if it&apos;s live and reachable
          </span>
        </Label>
        <input
          id={urlId}
          name="dashboard_url"
          type="text"
          inputMode="url"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="app.yourbi.com/dashboard/…"
          value={dashboardUrl}
          onChange={(e) => setDashboardUrl(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={contextId}>
          Anything else we should know?
          <span className="font-normal text-muted-foreground"> — optional</span>
        </Label>
        <textarea
          id={contextId}
          name="context"
          rows={2}
          placeholder="e.g. Audience is the COO; metric definitions live in our data dictionary."
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className={cn(fieldClass, "min-h-16")}
        />
      </div>

      <button
        type="submit"
        disabled={uploading}
        className={cn(quietControlClass, "justify-self-start disabled:opacity-50")}
      >
        Request my critique
      </button>
    </form>
  );
}
