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
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.1em] leading-[1.2] text-text-secondary sm:px-4 sm:text-[12px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
