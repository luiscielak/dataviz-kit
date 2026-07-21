import Link from "next/link";
import type { Skill } from "@/lib/data";
import { getExpert } from "@/lib/data";

/** Repo-relative paths shown as mono links for the prototype (not live file hosts). */
function assetHref(path: string): string {
  // Prototype: link to a stub page that explains the external asset.
  return `/assets?path=${encodeURIComponent(path)}`;
}

function RelatedRow({
  label,
  href,
  emptyLabel,
}: {
  label: string;
  href?: string;
  emptyLabel: string;
}) {
  return (
    <li className="flex flex-col gap-0.5 border-b border-foreground/20 py-2 last:border-0 sm:flex-row sm:items-baseline sm:gap-3">
      <span className="w-28 shrink-0 text-sm font-medium">{label}</span>
      {href ? (
        <Link
          href={href}
          className="text-sm text-brand underline-offset-2 hover:underline"
        >
          Open {label.toLowerCase()}
        </Link>
      ) : (
        <span className="text-sm text-muted-foreground">{emptyLabel}</span>
      )}
    </li>
  );
}

export function RelatedAssets({ skill }: { skill: Skill }) {
  const { related } = skill;
  const expert = related.expertSlug
    ? getExpert(related.expertSlug)
    : undefined;

  return (
    <ul className="list-none">
      <RelatedRow
        label="Template"
        href={related.template ? assetHref(related.template) : undefined}
        emptyLabel="No template yet"
      />
      <RelatedRow
        label="Sample"
        href={related.sample ? assetHref(related.sample) : undefined}
        emptyLabel="No sample yet"
      />
      <RelatedRow
        label="HTML demo"
        href={related.html ? assetHref(related.html) : undefined}
        emptyLabel="No HTML demo yet"
      />
      <RelatedRow
        label="Expert"
        href={expert ? `/experts/${expert.slug}` : undefined}
        emptyLabel="No expert mapped yet"
      />
      <RelatedRow
        label="Principles"
        href={
          related.principles
            ? assetHref(related.principles)
            : undefined
        }
        emptyLabel="No principles mapped yet"
      />
    </ul>
  );
}
