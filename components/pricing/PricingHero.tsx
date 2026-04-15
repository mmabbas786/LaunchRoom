"use client";

import { whatsappNumber } from "@/data/pricing";
import type { SupportedCurrency } from "@/data/pricing";

import type { CurrencyPreferenceSource } from "@/components/providers/VisitorPreferencesProvider";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { CurrencyToggle } from "@/components/pricing/CurrencyToggle";

type PricingHeroProps = {
  currency: SupportedCurrency;
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
      description="Choose a lean launch package or a wider digital presence package. Scope, support, and optional add-ons are visible upfront so you can approve with confidence."
      ctaButtons={
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <p className="card-label text-white/40">Packages</p>
              <p className="mt-2 text-[15px] leading-[1.68] text-on-dark">
                2 ready website packages with clear starting points.
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
        label: "Launch",
        content: (
          <>
            <p className="preserve-case text-[24px] leading-none text-text-primary">
              {launchPrice}
            </p>
            <p className="mt-3 text-[15px] leading-[1.72] text-text-secondary">
              Best for a focused 5-page website with mobile-ready design, lead
              capture, WhatsApp integration, SEO basics, and support after launch.
            </p>
            <span className="meta-chip meta-chip-dark mt-4 w-fit">5-page website</span>
          </>
        ),
      }}
      topRightCard={{
        label: "Scale",
        content: (
          <>
            <p className="preserve-case text-[24px] leading-none text-text-primary">
              {scalePrice}
            </p>
            <p className="mt-3 text-[15px] leading-[1.72] text-text-secondary">
              Better for a broader launch: up to 10 pages plus branding, Google
              Business, analytics, stronger SEO, conversion thinking, and longer
              support.
            </p>
            <span className="meta-chip mt-4 w-fit">Up to 10 pages</span>
          </>
        ),
      }}
      bottomCard={{
        label: "Before kickoff",
        content: (
          <>
            <p className="text-[26px] leading-[1.08] text-text-primary">
              You choose a package first, then we lock the final scope in writing.
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
                  Launch and Scale both include post-launch help.
                </p>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
}
