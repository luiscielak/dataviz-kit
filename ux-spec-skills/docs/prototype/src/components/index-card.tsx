import Link from "next/link";
import { cn } from "@/lib/utils";

type IndexCardProps = {
  href: string;
  label?: string;
  title: string;
  detail?: string;
  badges?: string[];
  className?: string;
};

export function IndexCard({
  href,
  label,
  title,
  detail,
  badges,
  className,
}: IndexCardProps) {
  const badgeAltLabels: Record<string, string> = {
    HTML: "HTML demo",
    demo: "an interactive demo",
  };
  const badgeText =
    badges && badges.length > 0
      ? ` Has ${badges.map((b) => badgeAltLabels[b] ?? b).join(" and ")}.`
      : "";

  return (
    <Link
      href={href}
      className={cn(
        "index-card flex h-full flex-col border border-foreground bg-card p-4 transition-colors",
        "hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className
      )}
      aria-label={`${title}.${detail ? ` ${detail}.` : ""}${badgeText}`}
    >
      {label ? (
        <span className="card-label mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
          {label}
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
        {title}
      </h3>
      {detail ? (
        <p className="card-detail mt-2 flex-1 text-sm text-muted-foreground">
          {detail}
        </p>
      ) : null}
      {badges && badges.length > 0 ? (
        <div className="card-meta mt-3 flex flex-wrap gap-2" aria-hidden>
          {badges.map((badge) => (
            <span
              key={badge}
              className="border border-foreground/40 bg-background px-1.5 py-0.5 text-xs text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
