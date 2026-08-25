import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { pricingData } from "@/data/pricing";

export function HomePricingPreview() {
  const inrPricing = pricingData.INR;

  const plans = [
    {
      plan: inrPricing.basic,
      desc: "Lean 1-page business website with essential contact points.",
    },
    {
      plan: inrPricing.launch,
      desc: "Comprehensive 5-page website with WhatsApp and lead capture.",
    },
    {
      plan: inrPricing.scale,
      desc: "Up to 10 pages with branding, advanced SEO, and 3 months priority support.",
    },
  ];

  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <p className="eyebrow mx-auto">Transparent Pricing</p>
        <h2 className="section-title mx-auto mt-4">
          Predictable website packages shaped for clean launches
        </h2>
        <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
          Know your investment upfront. Every package includes custom design, mobile responsiveness,
          domain setup, and post-launch warranty support.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map(({ plan, desc }, idx) => (
          <AnimatedSection
            key={plan.name}
            delay={idx * 0.04}
            className={`page-card panel p-6 sm:p-8 flex flex-col justify-between ${
              plan.popular ? "panel-accent border-accent/40 relative overflow-hidden" : ""
            }`}
          >
            {plan.popular ? (
              <div className="absolute right-4 top-4">
                <span className="meta-chip border-accent-border bg-accent text-black font-bold text-[10px]">
                  Most Popular
                </span>
              </div>
            ) : null}

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-accent font-bold">
                {plan.name} PACKAGE
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-xs text-text-muted">/ one-time</span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-text-secondary">
                {desc}
              </p>

              <div className="mt-6 border-t border-border/60 pt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-xs text-text-secondary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/60">
              <Button
                href="/start"
                variant={plan.popular ? "primary" : "outline"}
                className="w-full justify-center text-[14px]"
              >
                Choose {plan.name}
              </Button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-8 text-center" delay={0.1}>
        <div className="inline-flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/pricing"
            className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
          >
            <span>View all package comparisons, USD pricing &amp; add-ons</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
