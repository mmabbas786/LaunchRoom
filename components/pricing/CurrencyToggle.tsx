"use client";

import { motion } from "framer-motion";

import type { SupportedCurrency } from "@/data/pricing";
import { cn } from "@/lib/utils";

type CurrencyToggleProps = {
  currency: SupportedCurrency;
  onChange: (currency: SupportedCurrency) => void;
  isLoading?: boolean;
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
  className,
}: CurrencyToggleProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="inline-flex rounded-full border border-border bg-[rgba(8,8,8,0.52)] p-1 shadow-[0_18px_36px_rgba(0,0,0,0.28)] backdrop-blur-md">
        {currencyOptions.map((option) => {
          const isActive = option.value === currency;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "preserve-case relative inline-flex min-w-[124px] items-center justify-center gap-2 rounded-full px-4 py-3 text-[14px] font-semibold",
                isActive ? "text-[#080808]" : "text-text-secondary hover:text-text-primary",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="pricing-currency-toggle"
                  className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] shadow-[0_14px_30px_rgba(232,160,32,0.22)]"
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                />
              ) : null}

              <span className="relative z-10 text-[18px]">{option.icon}</span>
              <span className="relative z-10">{option.label}</span>
            </button>
          );
        })}
      </div>

      <p className="preserve-case text-[13px] leading-[1.7] text-text-muted">
        {isLoading
          ? "Detecting your location to choose INR or USD..."
          : `Showing pricing in ${currency}. You can switch anytime.`}
      </p>
    </div>
  );
}
