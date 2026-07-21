import { cn } from "@/lib/utils";

type PageHeaderProps = {
  microLabel?: string;
  title: string;
  tagline?: string;
  meta?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  microLabel,
  title,
  tagline,
  meta,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("mb-8 border-b border-foreground pb-6", className)}>
      {microLabel ? <p className="micro-label mb-2">{microLabel}</p> : null}
      <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
        {title}
      </h1>
      {tagline ? (
        <p className="mt-2 max-w-2xl text-lg text-foreground/90">{tagline}</p>
      ) : null}
      {meta ? (
        <div className="meta-row mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          {meta}
        </div>
      ) : null}
    </header>
  );
}
