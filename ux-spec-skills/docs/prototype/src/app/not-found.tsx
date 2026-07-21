import { AppShell } from "@/components/app-shell";
import { ModuleBlock } from "@/components/module-block";
import { QuietButton } from "@/components/quiet-button";

export default function NotFound() {
  return (
    <AppShell activeNavId="overview">
      <ModuleBlock accentLeft>
        <div role="alert">
          <h1 className="font-display text-2xl font-semibold">
            Something went wrong
          </h1>
          <p className="mt-3 text-base">
            We couldn&apos;t open that page or asset. Prefer honest failure over
            a blank module.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <QuietButton href="/">Back to Overview</QuietButton>
          <QuietButton href="/experts">Experts index</QuietButton>
          <QuietButton href="/skills/router">Router</QuietButton>
        </div>
      </ModuleBlock>
    </AppShell>
  );
}
