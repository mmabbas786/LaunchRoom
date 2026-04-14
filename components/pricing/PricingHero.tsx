import { whatsappNumber } from "@/data/pricing";
import type { SupportedCurrency } from "@/data/pricing";

import { CurrencyToggle } from "@/components/pricing/CurrencyToggle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

type PricingHeroProps = {
  currency: SupportedCurrency;
  launchPrice: string;
  scalePrice: string;
  isLoading: boolean;
  onCurrencyChange: (currency: SupportedCurrency) => void;
};

const heroMessage =
  "Hi, I want to understand which Launchroom pricing package is right for my business.";

export function PricingHero({
  currency,
  launchPrice,
  scalePrice,
  isLoading,
  onCurrencyChange,
}: PricingHeroProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(heroMessage)}`;

  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="panel-dark p-7 sm:p-9 lg:p-12">
          <p className="eyebrow eyebrow-invert">Pricing</p>
          <h1 className="page-hero-title mt-6 max-w-[11ch] text-on-dark">
            Clear website packages that keep launch decisions simple.
          </h1>
          <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
            Choose a lean launch package or a wider digital presence package. Scope,
            support, and optional add-ons are visible upfront so you can approve with
            confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="meta-chip meta-chip-dark">2 ready packages</span>
            <span className="meta-chip meta-chip-dark">India + global billing</span>
            <span className="meta-chip meta-chip-dark">WhatsApp-first support</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/start">Start a project</Button>
            <Button href={whatsappHref} variant="outline">
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <article className="panel-accent p-6 sm:p-7">
            <p className="card-label text-text-primary">Billing view</p>
            <h2 className="mt-4 text-[clamp(30px,3vw,42px)] leading-[1.04] text-text-primary">
              See pricing in the currency that fits where you are.
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.8] text-text-secondary">
              We check your location once and you can override it manually whenever
              you want.
            </p>
            <CurrencyToggle
              currency={currency}
              isLoading={isLoading}
              onChange={onCurrencyChange}
              className="mt-6"
            />
          </article>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
            <article className="panel-lime p-6">
              <p className="card-label text-on-dark-muted">Launch starts at</p>
              <p className="preserve-case mt-3 text-[30px] leading-[1.04] text-on-dark">
                {launchPrice}
              </p>
            </article>

            <article className="panel p-6">
              <p className="card-label">Scale starts at</p>
              <p className="preserve-case mt-3 text-[30px] leading-[1.04] text-text-primary">
                {scalePrice}
              </p>
            </article>
          </div>

          <article className="panel p-6">
            <p className="card-label">
              Viewing <span className="preserve-case">{currency}</span>
            </p>
            <p className="mt-3 text-[17px] leading-[1.8]">
              This page is built to answer the first budget questions quickly, before
              we move into a tailored proposal and final scope confirmation.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </section>
  );
}
