import { AppShell } from "@/components/app-shell";
import { IndexCard } from "@/components/index-card";
import { PageHeader } from "@/components/page-header";
import { EXPERT_COUNT, experts } from "@/lib/data";

export const metadata = {
  title: "Experts",
};

export default function ExpertsIndexPage() {
  return (
    <AppShell activeNavId="experts">
      <PageHeader
        title="Experts"
        tagline="Browse shipped dataviz experts—bio, known works, and further reading."
        meta={<span>{EXPERT_COUNT} profiles</span>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {experts.map((expert) => (
          <IndexCard
            key={expert.slug}
            href={`/experts/${expert.slug}`}
            title={expert.name}
            detail={expert.whyInKit}
            badges={expert.demo ? ["demo"] : undefined}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Queued authors (Felton, Cairo, and others) are omitted until their{" "}
        <code className="font-mono text-xs">reference/</code> docs ship.
      </p>
    </AppShell>
  );
}
