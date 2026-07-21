import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { ModuleBlock } from "@/components/module-block";
import { PageHeader } from "@/components/page-header";
import { PromptPanel } from "@/components/prompt-panel";
import { RelatedAssets } from "@/components/related-assets";
import {
  getSkill,
  skillHasHtml,
  skillHasSample,
  skills,
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
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const skill = getSkill(slug);
  return { title: skill?.name ?? "Skill" };
}

export default async function SkillProfilePage({ params }: Props) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const badges: string[] = [];
  if (skillHasSample(skill)) badges.push("sample");
  if (skillHasHtml(skill)) badges.push("HTML");

  return (
    <AppShell activeNavId={skill.category}>
      <Breadcrumb
        items={[
          { label: "Overview", href: "/" },
          {
            label: skill.categoryLabel,
            href: `/#${skill.category}`,
          },
          { label: skill.name },
        ]}
      />

      <PageHeader
        microLabel={skill.categoryLabel}
        title={skill.name}
        tagline={skill.description}
        meta={
          <>
            <span className="font-mono text-xs sm:text-sm">{skill.path}</span>
            {badges.length > 0 ? (
              <>
                <span aria-hidden>·</span>
                <span className="flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <span
                      key={b}
                      className="border border-foreground/40 bg-card px-1.5 py-0.5 text-xs"
                    >
                      {b}
                    </span>
                  ))}
                </span>
              </>
            ) : null}
          </>
        }
      />

      <div className="space-y-6">
        <ModuleBlock accentLeft title="Purpose">
          <p>{skill.purpose}</p>
        </ModuleBlock>

        <ModuleBlock title="When to use">
          <ul className="list-disc space-y-1 pl-5">
            {skill.whenToUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ModuleBlock>

        <ModuleBlock title="Inputs">
          <div className="hidden sm:block">
            <Table>
              <caption className="sr-only">Inputs for {skill.name}</caption>
              <TableHeader>
                <TableRow className="border-foreground hover:bg-transparent">
                  <TableHead scope="col" className="text-foreground">
                    Input
                  </TableHead>
                  <TableHead scope="col" className="text-foreground">
                    Detail
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skill.inputs.map((input) => (
                  <TableRow
                    key={input.name}
                    className="border-foreground/30 hover:bg-background"
                  >
                    <TableCell className="font-medium">{input.name}</TableCell>
                    <TableCell>{input.detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ul className="space-y-3 sm:hidden">
            {skill.inputs.map((input) => (
              <li key={input.name}>
                <div className="font-medium">{input.name}</div>
                <div className="text-sm text-muted-foreground">
                  {input.detail}
                </div>
              </li>
            ))}
          </ul>
        </ModuleBlock>

        <PromptPanel prompt={skill.prompt} />

        <div className="grid gap-6 lg:grid-cols-2">
          <ModuleBlock title="Output format">
            <ol className="list-decimal space-y-1 pl-5">
              {skill.outputFormat.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </ModuleBlock>

          <ModuleBlock title="Anti-patterns">
            <ul className="list-disc space-y-1 pl-5">
              {skill.antiPatterns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ModuleBlock>
        </div>

        {skill.example ? (
          <ModuleBlock title="Example invocation">
            <p className="italic">&ldquo;{skill.example}&rdquo;</p>
          </ModuleBlock>
        ) : null}

        <ModuleBlock title="Related">
          <RelatedAssets skill={skill} />
        </ModuleBlock>
      </div>
    </AppShell>
  );
}
