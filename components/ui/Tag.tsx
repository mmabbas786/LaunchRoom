import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
