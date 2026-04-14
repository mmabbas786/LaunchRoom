import type { PricingAddon, SupportedCurrency } from "@/data/pricing";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

type AddonsSectionProps = {
  addons: PricingAddon[];
  currency: SupportedCurrency;
};

export function AddonsSection({ addons, currency }: AddonsSectionProps) {
  return (
    <section className="page-shell section-shell-tight">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Add-ons"
          title="Optional services when the base package needs extra room."
        />
        <p className="section-copy">
          Add-ons below follow the selected <span className="preserve-case">{currency}</span>{" "}
          pricing view, so it stays easy to compare the total scope.
        </p>
      </AnimatedSection>

      <AnimatedSection
        className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        delay={0.05}
      >
        {addons.map((addon) => (
          <Card key={addon.name} className="flex items-start justify-between gap-4 p-5 sm:p-6">
            <div>
              <p className="card-label">Optional service</p>
              <h3 className="mt-3 text-[24px] leading-[1.1]">{addon.name}</h3>
            </div>

            <span className="preserve-case inline-flex shrink-0 rounded-full border border-accent-border bg-accent-dim px-4 py-2 text-[15px] font-semibold text-accent">
              {addon.price}
            </span>
          </Card>
        ))}
      </AnimatedSection>
    </section>
  );
}
