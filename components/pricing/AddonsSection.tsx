import type { PricingAddon, SupportedCurrency } from "@/data/pricing";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
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
          Add-ons below follow the current <span className="preserve-case">{currency}</span>{" "}
          pricing view, so it stays easy to compare the total scope.
        </p>
      </AnimatedSection>

      <AnimatedSection className="equal-height-grid mt-8 sm:grid-cols-2 xl:grid-cols-3" delay={0.05}>
        {addons.map((addon) => (
          <article key={addon.name} className="page-card panel justify-between">
            <div>
              <p className="card-label">Optional service</p>
              <h3 className="mt-3 text-[28px] leading-[1.06] text-text-primary">
                {addon.name}
              </h3>
            </div>

            <p className="preserve-case mt-5 text-[24px] leading-none text-text-primary">
              {addon.price}
            </p>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
