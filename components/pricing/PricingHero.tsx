"use client";

import { whatsappNumber } from "@/data/pricing";
import type { SupportedCurrency } from "@/data/pricing";

import type { CurrencyPreferenceSource } from "@/components/providers/VisitorPreferencesProvider";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { CurrencyToggle } from "@/components/pricing/CurrencyToggle";

type PricingHeroProps = {
  currency: SupportedCurrency;
  basicPrice: string;
  launchPrice: string;
  scalePrice: string;
  locationPricingStatus: "idle" | "detecting" | "granted" | "denied" | "unsupported";
  currencyPreferenceSource: CurrencyPreferenceSource;
  onCurrencyChange: (currency: SupportedCurrency) => void;
};

const heroMessage =
  "Hi, I want to understand which LaunchRoom pricing package is right for my business.";

export function PricingHero({
  currency,
  basicPrice,
  launchPrice,
  scalePrice,
  locationPricingStatus,
  currencyPreferenceSource,
  onCurrencyChange,
}: PricingHeroProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(heroMessage)}`;

  const locationCopy =
    currencyPreferenceSource === "manual"
      ? `You switched pricing manually to ${currency}. We'll keep that pricing view until you change it again.`
      : locationPricingStatus === "granted"
      ? `Location access approved. Showing ${currency} pricing based on your detected region.`
      : locationPricingStatus === "detecting"
        ? "Checking your location now to choose the right pricing view."
        : locationPricingStatus === "denied"
          ? `Location access was denied, so we're showing ${currency} pricing based on browser cues. You can switch it from the nav or below.`
          : locationPricingStatus === "unsupported"
            ? `Precise location is unavailable here, so we're showing ${currency} pricing based on browser cues. You can switch it from the nav or below.`
            : "We ask for location once on first visit, and you can switch pricing manually anytime.";

  return (
    <PageHeroGrid
      label="Pricing"
      heading="Clear website packages that keep launch decisions simple."
      description="Choose from a lean BASIC one-page website, a broader LAUNCH package, or the wider SCALE build. Scope, support, and add-ons are visible upfront so you can approve with confidence."
      ctaButtons={
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <p className="card-label text-white/40">Packages</p>
              <p className="mt-2 text-[15px] leading-[1.68] text-on-dark">
                3 ready website packages with clear starting points.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <p className="card-label text-white/40">Billing</p>
              <p className="mt-2 text-[15px] leading-[1.68] text-on-dark">
                Showing <span className="preserve-case">{currency}</span> pricing for
                this visitor view.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 sm:col-span-2">
              <p className="card-label text-white/40">Location</p>
              <p className="mt-2 text-[15px] leading-[1.68] text-on-dark">
                {locationCopy}
              </p>
            </div>
          </div>

          <CurrencyToggle
            currency={currency}
            onChange={onCurrencyChange}
            isLoading={locationPricingStatus === "detecting"}
            preferenceSource={currencyPreferenceSource}
          />

          <div className="flex flex-wrap gap-4">
            <Button href="/start">Start a project</Button>
            <Button href={whatsappHref} variant="outline">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      }
      topLeftCard={{
        label: "Basic",
        content: (
          <>
            <p className="preserve-case text-[24px] leading-none text-text-primary">
              {basicPrice}
            </p>
            <p className="mt-3 text-[15px] leading-[1.72] text-text-secondary">
              Best for a focused one-page business website with mobile-ready
              design, fast setup, hosting support, and 1 month of post-launch help.
            </p>
            <span className="meta-chip meta-chip-dark mt-4 w-fit">1-page website</span>
          </>
        ),
      }}
      topRightCard={{
        label: "Launch",
        content: (
          <>
            <p className="preserve-case text-[24px] leading-none text-text-primary">
              {launchPrice}
            </p>
            <p className="mt-3 text-[15px] leading-[1.72] text-text-secondary">
              Best for a fuller brochure site with lead capture, WhatsApp
              integration, SEO basics, and a stronger first web presence.
            </p>
            <span className="meta-chip mt-4 w-fit">5-page website</span>
          </>
        ),
      }}
      bottomCard={{
        label: "Scale",
        content: (
          <>
            <p className="text-[26px] leading-[1.08] text-text-primary">
              SCALE starts at <span className="preserve-case">{scalePrice}</span> for
              broader websites that need branding, analytics, stronger SEO, and
              longer post-launch support.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                <p className="card-label text-white/40">Quote</p>
                <p className="mt-2 text-[15px] leading-[1.72] text-text-secondary">
                  Clear pricing before work begins.
                </p>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                <p className="card-label text-white/40">Timeline</p>
                <p className="mt-2 text-[15px] leading-[1.72] text-text-secondary">
                  Delivery starts after content and access are ready.
                </p>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                <p className="card-label text-white/40">Support</p>
                <p className="mt-2 text-[15px] leading-[1.72] text-text-secondary">
                  Every package includes post-launch help.
                </p>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
}
