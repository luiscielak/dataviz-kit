import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { CritRequestForm } from "@/components/crit-request-form";
import { ModuleBlock } from "@/components/module-block";
import { PageHeader } from "@/components/page-header";
import { QuietButton } from "@/components/quiet-button";
import {
  CRIT_FIT,
  CRIT_NOT_FIT,
  CRIT_PRINCIPLES,
  CRIT_SCORES,
  CRIT_SEVERITY,
  CRIT_STEPS,
  GITHUB_KIT_HREF,
  SAMPLE_REPORT_HREF,
  TALK_DECK_HREF,
} from "@/lib/data/crit";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = {
  title: "Free Dataviz Critique",
  description:
    "Send one dashboard or chart. Get a scored, prioritized dataviz critique across six principles.",
};

export default function CritPage() {
  return (
    <AppShell activeNavId="critique">
      <Breadcrumb
        items={[
          { label: "Overview", href: "/" },
          { label: "Critique" },
        ]}
      />

      <PageHeader
        microLabel="Free critique"
        title="See exactly where your dashboard loses the reader."
        tagline="Send one dashboard or chart. Get back a scored, prioritized dataviz critique — the same report we run for clients, across six principles, with every finding ranked by how much it costs the decision."
        meta={
          <>
            <span>Free · one dashboard · scored report</span>
            <span aria-hidden>·</span>
            <span>A few business days</span>
          </>
        }
      />

      <div className="space-y-8">
        <ModuleBlock accentLeft title="A structured read, not a restyle">
          <p>
            Most feedback on a dashboard is either a vague “make it cleaner” or
            a styling nitpick that misses the point. A dataviz critique is the
            thing in between: a practitioner reading your actual chart, naming
            what misleads or buries the signal, why it matters to the person
            making the decision, and what to change — in priority order.
          </p>
          <p>
            This is not a redesign and not a tooling opinion. It&apos;s a
            structured read of whether your visualization actually supports the
            decision it&apos;s meant to drive.
          </p>
          <QuietButton href="#request">Request a critique</QuietButton>
        </ModuleBlock>

        <section aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="section-label mb-3">
            Six principles, every time
          </h2>
          <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
            Every critique scores the same six principles — drawn from Tufte,
            Cleveland &amp; McGill, Munzner, Ben Fry, Shneiderman, Few, and
            Knaflic — so the read is consistent and comparable rather than a
            matter of taste.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {CRIT_PRINCIPLES.map((principle) => (
              <ModuleBlock key={principle.n} title={`${principle.n}  ${principle.name}`}>
                <p className="text-muted-foreground">{principle.blurb}</p>
              </ModuleBlock>
            ))}
          </div>
        </section>

        <section aria-labelledby="scores-heading">
          <h2 id="scores-heading" className="section-label mb-3">
            Scores and severity
          </h2>
          <ModuleBlock title="Every principle gets a score from 1 to 5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Score</TableHead>
                  <TableHead>What it means</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CRIT_SCORES.map((row) => (
                  <TableRow key={row.score}>
                    <TableCell className="font-mono">{row.score}</TableCell>
                    <TableCell>{row.meaning}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p>And every finding is labelled by severity, so you know what to fix first:</p>
            <ul className="space-y-2">
              {CRIT_SEVERITY.map((item) => (
                <li key={item.level}>
                  <strong>{item.level}.</strong> {item.meaning}
                </li>
              ))}
            </ul>
          </ModuleBlock>
        </section>

        <ModuleBlock accentLeft title="A real report, not a reply">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              An executive summary — the headline read on the dashboard in a few
              sentences.
            </li>
            <li>
              A scorecard — all six principles scored 1 to 5, with the reasoning
              behind each score.
            </li>
            <li>
              Prioritized findings — each with the element, the principle, a
              severity, the impact on the decision, a concrete recommendation,
              and a technical note for whoever implements it.
            </li>
            <li>
              What&apos;s working — two or three genuine strengths, because a
              critique that only lists problems isn&apos;t honest.
            </li>
            <li>
              An appendix — methodology, per-score reasoning, and a
              plain-language glossary for any acronym used.
            </li>
          </ul>
          <p>
            We ran this exact process on a weekly operations dashboard.{" "}
            <a
              href={SAMPLE_REPORT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-2 hover:underline"
            >
              Read the complete Dataviz Critique Report
            </a>
            <span className="sr-only"> (opens in new window)</span>.
          </p>
        </ModuleBlock>

        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-label mb-3">
            Three steps
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {CRIT_STEPS.map((step) => (
              <ModuleBlock key={step.n} title={`${step.n}. ${step.title}`}>
                <p className="text-muted-foreground">{step.body}</p>
              </ModuleBlock>
            ))}
          </div>
        </section>

        <section aria-labelledby="fit-heading">
          <h2 id="fit-heading" className="section-label mb-3">
            Who it&apos;s for — and who it isn&apos;t
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <ModuleBlock accentLeft title="A good fit">
              <ul className="list-disc space-y-2 pl-5">
                {CRIT_FIT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ModuleBlock>
            <ModuleBlock title="Not a fit">
              <ul className="list-disc space-y-2 pl-5">
                {CRIT_NOT_FIT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ModuleBlock>
          </div>
        </section>

        <ModuleBlock
          id="request"
          accentLeft
          title="Request a free critique"
          className="scroll-mt-20"
        >
          <p>
            Upload the dashboard and tell us the decision it&apos;s supposed to
            support. If it&apos;s a fit, we&apos;ll critique it and send you the
            report. No cost, no obligation.
          </p>
          <p>
            Dashboard too sensitive to send? Run the same critique yourself —{" "}
            <Link
              href="/skills/dataviz-crit"
              className="text-brand underline-offset-2 hover:underline"
            >
              open the Dataviz crit skill
            </Link>{" "}
            or fork{" "}
            <a
              href={GITHUB_KIT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-2 hover:underline"
            >
              dataviz-kit
            </a>
            <span className="sr-only"> (opens in new window)</span> and use{" "}
            <code className="font-mono text-xs">/dataviz-crit</code> in Cursor.
            Nothing leaves your machine.
          </p>
          <CritRequestForm />
        </ModuleBlock>

        <p className="text-sm text-muted-foreground">
          Saw this at Dataviz Philly? The Dataviz Heroes slides are here:{" "}
          <a
            href={TALK_DECK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline-offset-2 hover:underline"
          >
            view the deck
          </a>
          <span className="sr-only"> (opens in new window)</span>.
        </p>
      </div>
    </AppShell>
  );
}
