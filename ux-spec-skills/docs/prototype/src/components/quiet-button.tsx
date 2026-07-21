import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center border border-foreground bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

type QuietButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function QuietButton({
  href,
  children,
  className,
  external,
}: QuietButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, className)}
      >
        {children}
        <span className="sr-only"> (opens in new window)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, className)}>
      {children}
    </Link>
  );
}
