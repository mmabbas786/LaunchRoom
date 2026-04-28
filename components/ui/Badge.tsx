import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "success" | "muted";

const variants: Record<BadgeVariant, string> = {
  accent:
    "border border-accent-border bg-accent-dim text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-[12px]",
  success:
    "border border-[rgba(240,189,87,0.22)] bg-[rgba(240,189,87,0.1)] text-[11px] font-semibold uppercase tracking-[0.12em] text-support sm:text-[12px]",
  muted:
    "border border-border bg-surface-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary sm:text-[12px]",
};

export function Badge({
  children,
  className,
  variant = "accent",
}: {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center justify-center rounded-full px-4 py-1.5 leading-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
