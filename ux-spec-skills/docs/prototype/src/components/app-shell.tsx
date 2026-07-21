"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import { CATEGORY_NAV } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type AppShellProps = {
  children: React.ReactNode;
  activeNavId?: string;
};

function resolveActiveId(pathname: string, activeNavId?: string): string {
  if (activeNavId) return activeNavId;
  if (pathname.startsWith("/experts")) return "experts";
  if (pathname.startsWith("/skills/")) {
    // category set by page via activeNavId
    return "overview";
  }
  if (pathname === "/error") return "overview";
  return "overview";
}

function NavList({
  activeId,
  onNavigate,
  id,
}: {
  activeId: string;
  onNavigate?: () => void;
  id?: string;
}) {
  return (
    <ul id={id} className="flex flex-col gap-0.5">
      {CATEGORY_NAV.map((item) => {
        const isCurrent = item.id === activeId;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                "block border-l-2 px-3 py-2 text-sm transition-colors",
                isCurrent
                  ? "border-brand bg-background font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-foreground/30 hover:bg-background hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function BrandBlock({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("block", className)}>
      <div className="font-display text-lg font-semibold leading-tight text-foreground">
        Dataviz Kit
      </div>
      <div className="text-xs text-muted-foreground">by The Hooman Loop</div>
    </Link>
  );
}

export function AppShell({ children, activeNavId }: AppShellProps) {
  const pathname = usePathname();
  const activeId = resolveActiveId(pathname, activeNavId);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-foreground bg-card px-4 py-3 lg:hidden">
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Open main navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-4 w-4" aria-hidden />
        </button>
        <BrandBlock className="min-w-0 flex-1" />
        <ThemeToggle />
      </header>

      <Sheet
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) {
            queueMicrotask(() => menuButtonRef.current?.focus());
          }
        }}
      >
        <SheetContent
          id="mobile-nav"
          side="left"
          className="w-[min(100%,20rem)] rounded-none border-r border-foreground bg-card p-0 [&>button]:hidden"
          aria-labelledby={titleId}
        >
          <SheetHeader className="flex-row items-center justify-between gap-2 border-b border-foreground px-4 py-3 text-left">
            <div>
              <SheetTitle id={titleId} className="sr-only">
                Main navigation
              </SheetTitle>
              <BrandBlock />
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center border border-foreground"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </SheetHeader>
          <nav aria-label="Main navigation" className="px-2 py-4">
            <NavList activeId={activeId} onNavigate={() => setOpen(false)} />
          </nav>
          <div className="mt-auto border-t border-foreground px-4 py-3">
            <ThemeToggle />
          </div>
        </SheetContent>
      </Sheet>

      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-foreground bg-card lg:flex">
          <div className="border-b border-foreground px-4 py-5">
            <BrandBlock />
          </div>
          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-2 py-4">
            <NavList activeId={activeId} />
          </nav>
          <div className="border-t border-foreground px-4 py-3">
            <ThemeToggle />
          </div>
        </aside>

        <main id="main" tabIndex={-1} className="min-w-0 flex-1 outline-none">
          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
