import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { IndexCard } from "@/components/index-card";
import { ModuleBlock } from "@/components/module-block";
import { PageHeader } from "@/components/page-header";
import { QuietButton } from "@/components/quiet-button";
import {
  CATEGORY_CARD_LABEL,
  EXPERT_COUNT,
  SKILL_COUNT,
  VERSION,
  experts,
  skillHasHtml,
  skillHasSample,
  skillsGrouped,
} from "@/lib/data";

export default function OverviewPage() {
  const groups = skillsGrouped();

  return (
    <AppShell activeNavId="overview">
      <PageHeader
        title="Dataviz Kit"
        tagline="Learn from dataviz experts. Run Spec Skills with clarity."
        meta={
          <>
            <span className="font-mono">v{VERSION}</span>
            <span aria-hidden>·</span>
            <span>
              {EXPERT_COUNT} experts · {SKILL_COUNT} skills
            </span>
            <span aria-hidden>·</span>
            <Link
              href="/loading"
              className="underline-offset-2 hover:underline"
            >
              Preview loading
            </Link>
          </>
        }
      />

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <ModuleBlock accentLeft title="Browse experts">
          <p>
            Who they are, known works, and where to learn more—separate from
            principle checklists.
          </p>
          <QuietButton href="/experts">View experts</QuietButton>
        </ModuleBlock>
        <ModuleBlock accentLeft title="Browse skills">
          <p>
            Discover Spec Skills by category, open a profile, and follow the
            run path: inputs → prompt → output.
          </p>
          <QuietButton href="#how-to-use">View skills</QuietButton>
        </ModuleBlock>
      </div>

      <section id="experts" className="mb-10 scroll-mt-20" aria-labelledby="experts-heading">
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h2 id="experts-heading" className="section-label">
            Experts
          </h2>
          <Link
            href="/experts"
            className="text-sm text-brand underline-offset-2 hover:underline"
          >
            Full index
          </Link>
        </div>
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
      </section>

      <section id="how-to-use" className="mb-10 scroll-mt-20">
        <ModuleBlock title="How to use Spec Skills">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Choose skill</strong> — pick from the catalog or open
              Router when unsure.
            </li>
            <li>
              <strong>Gather inputs</strong> — copy the inputs list into your
              Cursor chat.
            </li>
            <li>
              <strong>Run prompt</strong> — paste the prompt with your filled
              inputs; keep{" "}
              <code className="font-mono text-xs">.skill.md</code> as source of
              truth.
            </li>
            <li>
              <strong>Optional</strong> — apply a template, rigor pass, or
              Dataviz critique.
            </li>
          </ol>
        </ModuleBlock>
      </section>

      {groups.map((group) => (
        <section
          key={group.category}
          id={group.category}
          className="mb-10 scroll-mt-20"
          aria-labelledby={`${group.category}-heading`}
        >
          <h2 id={`${group.category}-heading`} className="section-label mb-3">
            {group.label}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {group.skills.map((skill) => {
              const badges: string[] = [];
              if (skillHasSample(skill)) badges.push("sample");
              if (skillHasHtml(skill)) badges.push("HTML");
              return (
                <IndexCard
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  label={CATEGORY_CARD_LABEL[skill.category]}
                  title={skill.name}
                  detail={skill.description}
                  badges={badges}
                />
              );
            })}
          </div>
        </section>
      ))}

      <ModuleBlock accentLeft title="Not sure which skill?">
        <p>
          Use the Router when the ask mixes cadence, consulting, rigor, or
          critique language.
        </p>
        <QuietButton href="/skills/router">Open Router</QuietButton>
      </ModuleBlock>
    </AppShell>
  );
}
