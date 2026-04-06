import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline" | "dark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] px-6 py-3 text-[15px] font-semibold text-[#080808] shadow-[0_14px_34px_rgba(232,160,32,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(232,160,32,0.28)]",
  ghost:
    "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-transparent bg-transparent px-5 py-3 text-[15px] font-medium text-text-secondary hover:border-border hover:bg-surface-1 hover:text-text-primary",
  outline:
    "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-accent-border bg-transparent px-6 py-3 text-[15px] font-semibold text-text-primary hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim",
  dark:
    "inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-accent-border bg-[#050505] px-6 py-3 text-[15px] font-semibold text-accent shadow-[0_14px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#0d0d0d]",
};

function isExternalHref(href?: string) {
  return Boolean(href && /^https?:\/\//.test(href));
}

function isLinkHref(href?: string) {
  return Boolean(href && (href.startsWith("/") || href.startsWith("#")));
}

function ButtonContent({
  children,
  arrow,
  variant,
}: {
  children: ReactNode;
  arrow?: boolean;
  variant: ButtonVariant;
}) {
  return (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {(arrow ?? variant === "ghost") && <ArrowRight className="h-4 w-4" />}
    </>
  );
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  arrow,
  ...props
}: ButtonProps) {
  const classes = cn(variantClasses[variant], className);

  if (isLinkHref(href)) {
    return (
      <Link href={href!} className={classes}>
        <ButtonContent arrow={arrow} variant={variant}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternalHref(href) ? "_blank" : undefined}
        rel={isExternalHref(href) ? "noopener noreferrer" : undefined}
      >
        <ButtonContent arrow={arrow} variant={variant}>
          {children}
        </ButtonContent>
      </a>
    );
  }

  return (
    <button
      className={cn("disabled:pointer-events-none disabled:opacity-60", classes)}
      {...props}
    >
      <ButtonContent arrow={arrow} variant={variant}>
        {children}
      </ButtonContent>
    </button>
  );
}
