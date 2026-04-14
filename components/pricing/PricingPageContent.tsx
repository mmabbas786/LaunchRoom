"use client";

import { pricingFaqs } from "@/data/faqs";
import { pricingData } from "@/data/pricing";
import { useCurrency } from "@/hooks/useCurrency";

import { CTABand } from "@/components/layout/CTABand";
import { AddonsSection } from "@/components/pricing/AddonsSection";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingHero } from "@/components/pricing/PricingHero";
import { FAQ } from "@/components/services/FAQ";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const paymentTerms = [
  {
    label: "Deposit",
    title: "50% upfront to reserve the project slot",
    description:
      "The remaining 50% is typically cleared before final launch or source handover, so both delivery and payment stay predictable.",
  },
  {
    label: "Scope",
    title: "Extra requests are approved separately",
    description:
      "Anything outside the selected package, including add-ons or extra revisions, is quoted before work begins on that addition.",
  },
  {
    label: "Kickoff",
    title: "Timelines start after content and access are ready",
    description:
      "Project delivery depends on receiving brand assets, page copy, approvals, and required credentials on time.",
  },
  {
    label: "Support",
    title: "Post-launch help is already built into the plans",
    description:
      "Launch includes 1 month of support and Scale includes 3 months, covering guidance and fixes related to the delivered scope.",
  },
];

export function PricingPageContent() {
  const { currency, isLoading, setCurrency } = useCurrency();
  const currentPricing = pricingData[currency];

  return (
    <>
      <PricingHero
        currency={currency}
        launchPrice={currentPricing.launch.price}
        scalePrice={currentPricing.scale.price}
        isLoading={isLoading}
        onCurrencyChange={setCurrency}
      />

      <section className="page-shell section-shell-tight">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Packages"
            title="Two website packages shaped for faster approvals and cleaner launches."
          />
          <p className="section-copy">
            Pick the scope that fits right now. If the project expands later, we can
            add pages, e-commerce, maintenance, or content support without resetting
            the foundation.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <AnimatedSection delay={0.05}>
            <PricingCard plan={currentPricing.launch} currency={currency} />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <PricingCard plan={currentPricing.scale} currency={currency} />
          </AnimatedSection>
        </div>
      </section>

      <AddonsSection addons={currentPricing.addons} currency={currency} />

      <section className="page-shell section-shell-tight">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Payment terms"
            title="Clear working terms before design and development begin."
          />
          <p className="section-copy">
            Every project is scoped in writing before kickoff. These standard terms
            make timelines, approvals, and billing easier to understand from day one.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {paymentTerms.map((term, index) => (
            <AnimatedSection key={term.label} delay={0.05 * (index + 1)}>
              <article className="panel p-6 sm:p-7">
                <p className="card-label">{term.label}</p>
                <h3 className="mt-4 text-[30px] leading-[1.08]">{term.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.8]">{term.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <div className="page-shell">
        <FAQ
          items={pricingFaqs}
          eyebrow="Pricing FAQ"
          title="Answers people usually want before they book a package."
        />
      </div>

      <CTABand
        heading="Need a quote that matches your exact scope?"
        subtext="Share your brief and we will recommend the smallest package or custom extension that gets the job launched properly."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
