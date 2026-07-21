import { cn } from "@/lib/utils";

type ModuleBlockProps = {
  title?: string;
  accentLeft?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function ModuleBlock({
  title,
  accentLeft,
  children,
  className,
  id,
}: ModuleBlockProps) {
  return (
    <section
      id={id}
      className={cn(
        "border border-foreground bg-card p-4 sm:p-5",
        accentLeft && "border-l-4 border-l-brand",
        className
      )}
    >
      {title ? (
        <h2 className="module-header mb-3 font-display text-base font-semibold">
          {title}
        </h2>
      ) : null}
      <div className="space-y-3 text-sm leading-relaxed text-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}
