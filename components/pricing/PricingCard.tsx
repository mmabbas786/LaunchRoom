import { Check } from "lucide-react";

import type { PricingPlan, SupportedCurrency } from "@/data/pricing";
import { whatsappNumber } from "@/data/pricing";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type PricingCardProps = {
  plan: PricingPlan;
  currency: SupportedCurrency;
};

export function PricingCard({ plan, currency }: PricingCardProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsapp)}`;

  return (
    <Card featured={plan.popular} className="flex h-full flex-col p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="card-label">
            Billing in <span className="preserve-case">{currency}</span>
          </p>
          <h3 className="preserve-case mt-4 text-[clamp(34px,4vw,48px)] leading-[1.02]">
            {plan.name}
          </h3>
        </div>

        {plan.popular ? <Badge className="shrink-0">Most popular</Badge> : null}
      </div>

      <p className="mt-4 max-w-xl text-[17px] leading-[1.8]">{plan.tagline}</p>

      <div className="mt-7 rounded-[24px] border border-accent-border bg-[radial-gradient(circle_at_top_right,rgba(232,160,32,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#121212] p-6 shadow-[0_20px_44px_rgba(0,0,0,0.28)]">
        <p className="card-label text-on-dark-muted">Project investment</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <p className="preserve-case text-[clamp(34px,4vw,52px)] leading-none text-text-primary">
            {plan.price}
          </p>
          <p className="max-w-[16ch] text-[13px] leading-[1.65] text-text-secondary">
            One-time build priced before kickoff.
          </p>
        </div>
      </div>

      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-[15px] leading-[1.75] text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <Button
          href={whatsappHref}
          variant={plan.popular ? "primary" : "outline"}
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </div>
    </Card>
  );
}
