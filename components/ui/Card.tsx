import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  featured = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { featured?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface-1 shadow-[0_20px_60px_rgba(0,0,0,0.34)] transition-all duration-200 hover:-translate-y-1 hover:border-accent-border hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)]",
        featured &&
          "border-accent-border bg-[radial-gradient(circle_at_top_right,rgba(232,160,32,0.14),transparent_26%),linear-gradient(180deg,rgba(232,160,32,0.08),rgba(255,255,255,0)),#111111)]",
        className,
      )}
      {...props}
    />
  );
}
