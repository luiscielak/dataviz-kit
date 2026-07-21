import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { IndexCard } from "@/components/index-card";
import { ModuleBlock } from "@/components/module-block";
import { PageHeader } from "@/components/page-header";
import { QuietButton } from "@/components/quiet-button";
import {
  experts,
  getExpert,
  getSkill,
  skillHasHtml,
  skillHasSample,
} from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experts.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const expert = getExpert(slug);
  return { title: expert?.name ?? "Expert" };
}

export default async function ExpertProfilePage({ params }: Props) {
  const { slug } = await params;
  const expert = getExpert(slug);
  if (!expert) notFound();

  const relatedSkills = expert.relatedSkillSlugs
    .map((s) => getSkill(s))
    .filter(Boolean);

  return (
    <AppShell activeNavId="experts">
      <Breadcrumb
        items={[
          { label: "Overview", href: "/" },
          { label: "Experts", href: "/experts" },
          { label: expert.name },
        ]}
      />

      <PageHeader
        microLabel={expert.tier}
        title={expert.name}
        tagline={expert.whyInKit}
        meta={
          <>
            <QuietButton href={`/assets?path=${encodeURIComponent(expert.principlesPath)}`}>
              Principles checklist
            </QuietButton>
          </>
        }
      />

      <div className="space-y-6">
        {expert.demo ? (
          <ModuleBlock accentLeft title="See it">
            <p className="font-medium text-foreground">
              {expert.demo.principleLabel}
            </p>
            <p className="text-muted-foreground">{expert.demo.caption}</p>
            <div className="border border-foreground bg-background">
              <iframe
                src={`/expert-demos/${expert.demo.slug}.html`}
                title={`${expert.name} demo: ${expert.demo.principleLabel}`}
                loading="lazy"
                className="block h-[420px] w-full"
              />
            </div>
            <div>
              <QuietButton
                href={`/expert-demos/${expert.demo.slug}.html`}
                external
              >
                Open full demo
              </QuietButton>
            </div>
          </ModuleBlock>
        ) : null}

        <ModuleBlock accentLeft title="Bio / context">
          {expert.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </ModuleBlock>

        <ModuleBlock title="Known works">
          <div className="hidden sm:block">
            <Table>
              <caption className="sr-only">Known works for {expert.name}</caption>
              <TableHeader>
                <TableRow className="border-foreground hover:bg-transparent">
                  <TableHead scope="col" className="text-foreground">
                    Title
                  </TableHead>
                  <TableHead scope="col" className="text-foreground">
                    Year
                  </TableHead>
                  <TableHead scope="col" className="text-foreground">
                    Type
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expert.works.map((work) => (
                  <TableRow
                    key={work.title}
                    className="border-foreground/30 hover:bg-background"
                  >
                    <TableCell className="font-medium">{work.title}</TableCell>
                    <TableCell>{work.year}</TableCell>
                    <TableCell>{work.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ul className="space-y-3 sm:hidden">
            {expert.works.map((work) => (
              <li key={work.title} className="border border-foreground/30 p-3">
                <div className="font-medium">{work.title}</div>
                <div className="text-sm text-muted-foreground">
                  {work.year} · {work.type}
                </div>
              </li>
            ))}
          </ul>
        </ModuleBlock>

        <ModuleBlock title="Where to learn more">
          <ul className="list-disc space-y-2 pl-5">
            {expert.furtherReading.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline-offset-2 hover:underline"
                >
                  {link.label}
                  <span className="sr-only"> (opens in new window)</span>
                </a>
              </li>
            ))}
          </ul>
        </ModuleBlock>

        <ModuleBlock accentLeft title="Principles for specs">
          <p>
            Spec rules live in the principle checklist—distinct from this
            profile. Use the checklist when writing or reviewing Spec Skills
            output.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {expert.principlesPath}
          </p>
          <QuietButton
            href={`/assets?path=${encodeURIComponent(expert.principlesPath)}`}
          >
            Open principles checklist
          </QuietButton>
        </ModuleBlock>

        <section aria-labelledby="related-skills-heading">
          <h2 id="related-skills-heading" className="section-label mb-3">
            Related skills
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedSkills.map((skill) => {
              if (!skill) return null;
              const badges: string[] = [];
              if (skillHasSample(skill)) badges.push("sample");
              if (skillHasHtml(skill)) badges.push("HTML");
              return (
                <IndexCard
                  key={skill.slug}
                  href={`/skills/${skill.slug}`}
                  title={skill.name}
                  detail={skill.description}
                  badges={badges}
                />
              );
            })}
          </div>
          {relatedSkills.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No related skills mapped yet.
            </p>
          ) : null}
        </section>

        <p className="text-sm text-muted-foreground">
          <Link href="/experts" className="text-brand underline-offset-2 hover:underline">
            ← Back to Experts
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
