import { Check } from "lucide-react";

import type { PricingPlan, SupportedCurrency } from "@/data/pricing";
import { whatsappNumber } from "@/data/pricing";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type PricingCardProps = {
  plan: PricingPlan;
  currency: SupportedCurrency;
};

export function PricingCard({ plan, currency }: PricingCardProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsapp)}`;

  return (
    <article
      className={cn(
        plan.popular ? "panel-accent" : "panel",
        "page-card-roomy",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn("card-label", plan.popular ? "text-text-primary" : "")}>
            Website package
          </p>
          <h3 className="preserve-case mt-4 text-[30px] leading-[1.05] text-text-primary">
            {plan.name}
          </h3>
        </div>

        {plan.popular ? <Badge className="shrink-0">Most popular</Badge> : null}
      </div>

      <p className="mt-4 max-w-xl text-[16px] leading-[1.76] text-text-secondary">
        {plan.tagline}
      </p>

      <div
        className={cn(
          "mt-6 rounded-[18px] border p-5",
          plan.popular
            ? "border-accent-border bg-[rgba(255,255,255,0.03)]"
            : "border-border bg-[rgba(255,255,255,0.03)]",
        )}
      >
        <p className={cn("card-label", plan.popular ? "text-text-primary" : "")}>
          Project investment
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <p className="preserve-case text-[32px] leading-[1.04] text-text-primary">
            {plan.price}
          </p>
          <span
            className={cn(
              "meta-chip preserve-case",
              plan.popular ? "border-accent-border bg-accent-dim text-text-primary" : "",
            )}
          >
            {currency} billing
          </span>
        </div>
        <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">
          One-time build priced before kickoff.
        </p>
      </div>

      <div className="mt-6">
        <p className={cn("card-label", plan.popular ? "text-text-primary" : "")}>
          What’s included
        </p>
        <ul className="mt-4 grid gap-2">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "balanced-card-list-item flex items-start gap-3",
                plan.popular ? "border-accent-border bg-[rgba(255,255,255,0.04)]" : "",
              )}
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-[14px] leading-[1.68] text-text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 pt-1">
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className={cn(
              "meta-chip",
              plan.popular ? "border-accent-border bg-accent-dim text-text-primary" : "",
            )}
          >
            {plan.features.length} inclusions
          </span>
          <span
            className={cn(
              "meta-chip",
              plan.popular ? "border-accent-border bg-accent-dim text-text-primary" : "",
            )}
          >
            WhatsApp-first support
          </span>
        </div>
        <Button
          href={whatsappHref}
          variant={plan.popular ? "primary" : "outline"}
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}
