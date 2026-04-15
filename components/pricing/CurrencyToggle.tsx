"use client";

import { useId } from "react";
import { motion } from "framer-motion";

import type { SupportedCurrency } from "@/data/pricing";
import type { CurrencyPreferenceSource } from "@/components/providers/VisitorPreferencesProvider";
import { cn } from "@/lib/utils";

type CurrencyToggleProps = {
  currency: SupportedCurrency;
  onChange: (currency: SupportedCurrency) => void;
  isLoading?: boolean;
  preferenceSource?: CurrencyPreferenceSource;
  variant?: "default" | "compact";
  showHint?: boolean;
  className?: string;
};

const currencyOptions: Array<{
  value: SupportedCurrency;
  label: string;
  icon: string;
}> = [
  { value: "INR", label: "INR", icon: "🇮🇳" },
  { value: "USD", label: "USD", icon: "🌍" },
];

export function CurrencyToggle({
  currency,
  onChange,
  isLoading = false,
  preferenceSource = "auto",
  variant = "default",
  showHint = true,
  className,
}: CurrencyToggleProps) {
  const layoutId = useId();
  const isCompact = variant === "compact";

  return (
    <div className={cn(isCompact ? "" : "space-y-3", className)}>
      <div
        className={cn(
          "inline-flex rounded-full border backdrop-blur-md",
          isCompact
            ? "border-border bg-surface-1 p-0.5 shadow-none"
            : "border-border bg-[rgba(8,8,8,0.52)] p-1 shadow-[0_18px_36px_rgba(0,0,0,0.28)]",
        )}
      >
        {currencyOptions.map((option) => {
          const isActive = option.value === currency;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "preserve-case relative inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200",
                isCompact
                  ? "min-w-[58px] px-3 py-2 text-[12px]"
                  : "min-w-[124px] gap-2 px-4 py-3 text-[14px]",
                isActive
                  ? "text-[#080808]"
                  : "text-text-secondary hover:text-text-primary",
              )}
              aria-pressed={isActive}
            >
              {isActive ? (
                <motion.span
                  layoutId={`${layoutId}-currency-toggle`}
                  className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] shadow-[0_14px_30px_rgba(232,160,32,0.22)]"
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                />
              ) : null}

              {!isCompact ? (
                <span className="relative z-10 text-[18px]">{option.icon}</span>
              ) : null}
              <span className="relative z-10">{option.label}</span>
            </button>
          );
        })}
      </div>

      {showHint ? (
        <p className="preserve-case text-[13px] leading-[1.7] text-text-muted">
          {isLoading
            ? "Detecting your location to choose INR or USD..."
            : preferenceSource === "manual"
              ? `Showing pricing in ${currency} from your manual selection.`
              : `Showing pricing in ${currency}. You can switch anytime.`}
        </p>
      ) : null}
    </div>
  );
}
