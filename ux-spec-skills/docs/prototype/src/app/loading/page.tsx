import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import { VERSION } from "@/lib/data";

export const metadata = {
  title: "Loading preview",
};

export default function OverviewLoadingPreviewPage() {
  return (
    <AppShell activeNavId="overview">
      <PageHeader
        title="Dataviz Kit"
        tagline="Learn from dataviz experts. Run Spec Skills with clarity."
        meta={
          <>
            <span className="font-mono">v{VERSION}</span>
            <span aria-hidden>·</span>
            <Skeleton className="h-4 w-40 rounded-none bg-muted-foreground/20" />
          </>
        }
      />

      <div
        className="space-y-8"
        aria-busy="true"
        aria-live="polite"
        aria-label="Loading content"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-32 rounded-none bg-muted-foreground/15" />
          <Skeleton className="h-32 rounded-none bg-muted-foreground/15" />
        </div>

        <div>
          <Skeleton className="mb-3 h-3 w-24 rounded-none bg-muted-foreground/20" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-28 rounded-none bg-muted-foreground/15"
              />
            ))}
          </div>
        </div>

        <div>
          <Skeleton className="mb-3 h-3 w-32 rounded-none bg-muted-foreground/20" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-32 rounded-none bg-muted-foreground/15"
              />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
