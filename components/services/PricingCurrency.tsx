"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "CAD";

type RatesMap = Record<string, number>;

const fallbackRates: RatesMap = {
  INR: 1,
  USD: 0.012,
  GBP: 0.0094,
  EUR: 0.011,
  CAD: 0.016,
};

const currencyMeta: Array<{ code: CurrencyCode; flag: string }> = [
  { code: "INR", flag: "🇮🇳" },
  { code: "USD", flag: "🇺🇸" },
  { code: "GBP", flag: "🇬🇧" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "CAD", flag: "🇨🇦" },
];

const packages = [
  {
    id: "starter",
    name: "Starter",
    desc: "Fast brochure site or landing page for a small business.",
    priceUSD: 469,
    suffix: "onwards",
    featured: false,
    items: [
      "5-page responsive website",
      "Contact form + Google Maps",
      "Mobile optimisation",
      "Basic SEO setup",
      "1 month free support",
    ],
  },
  {
    id: "business",
    name: "Business",
    desc: "Lead-focused business site with stronger growth foundations.",
    priceUSD: 969,
    suffix: "onwards",
    featured: true,
    items: [
      "Everything in Starter",
      "CMS or editable content flow",
      "Lead capture + email setup",
      "Analytics and SEO structure",
      "3 months support",
    ],
  },
  {
    id: "webapp",
    name: "Web App / SaaS",
    desc: "Custom web platform, client portal, or SaaS MVP build.",
    priceUSD: 1699,
    suffix: "onwards",
    featured: false,
    items: [
      "Next.js & React 19 app build",
      "Database & Auth integration",
      "Stripe / Payment gateway setup",
      "Source code handover",
      "3 months support",
    ],
  },
  {
    id: "retainer",
    name: "Retainer",
    desc: "Monthly updates, fixes, and performance watch.",
    priceUSD: 69,
    suffix: "/ month",
    featured: false,
    items: [
      "Unlimited small edits",
      "Uptime monitoring",
      "Monthly performance report",
      "Priority response",
      "Hosting management",
    ],
  },
];

function convertFromUSD(priceUSD: number, currency: CurrencyCode, rates: RatesMap): number {
  if (currency === "USD") return priceUSD;

  const usdRate = rates.USD ?? fallbackRates.USD;
  const targetRate = rates[currency] ?? fallbackRates[currency];

  if (currency === "INR") {
    return priceUSD / usdRate;
  }

  return priceUSD * (targetRate / usdRate);
}

function formatPrice(priceUSD: number, currency: CurrencyCode, rates: RatesMap): string {
  const converted = Math.round(convertFromUSD(priceUSD, currency, rates));
  const symbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
    GBP: "£",
    EUR: "€",
    CAD: "CA$",
  };

  return symbols[currency] + converted.toLocaleString();
}

export function PricingCurrency() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>("USD");
  const [rates, setRates] = useState<RatesMap>(fallbackRates);
  const [ratesLoaded, setRatesLoaded] = useState(false);
  const [ratesLive, setRatesLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadRates() {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/INR");
        const data = (await response.json()) as { rates?: RatesMap };

        if (!mounted) return;

        if (response.ok && data.rates) {
          setRates(data.rates);
          setRatesLive(true);
          setUpdatedAt(new Date());
        }
      } catch {
        // Keep fallback rates when external fetch fails.
      } finally {
        if (mounted) {
          setRatesLoaded(true);
        }
      }
    }

    loadRates();

    return () => {
      mounted = false;
    };
  }, []);

  const helperText = useMemo(() => {
    if (!ratesLoaded) return "Fetching rates...";
    if (ratesLive && updatedAt) {
      return `Live rates · ${updatedAt.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })}`;
    }

    return "Approximate rates";
  }, [ratesLoaded, ratesLive, updatedAt]);

  return (
    <div className="section-shell">
      <div className="panel grid gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="card-label">Pricing view</p>
          <h3 className="mt-4 text-[clamp(28px,3vw,42px)] leading-[1.04]">
            Flexible for India and international clients.
          </h3>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.78]">
            Starting rates only. The final quote depends on scope, content readiness,
            integrations, and revision load.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {currencyMeta.map((currency) => {
            const active = activeCurrency === currency.code;

            return (
              <button
                key={currency.code}
                type="button"
                onClick={() => setActiveCurrency(currency.code)}
                className={[
                  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[14px] font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.22)]",
                  active
                    ? "border-accent-border bg-accent text-[#080808] shadow-[0_16px_28px_rgba(232,160,32,0.18)]"
                    : "bg-surface-1 text-text-secondary hover:-translate-y-0.5 hover:border-accent-border hover:text-text-primary",
                ].join(" ")}
              >
                <span>{currency.flag}</span>
                <span>{currency.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-text-muted">
        {helperText}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((item) => (
          <Card key={item.id} featured={item.featured} className="p-7">
            {item.featured && <Badge className="mb-5">Most popular</Badge>}
            <p className="card-label">{item.id}</p>
            <h3 className="mt-4 text-[30px] leading-[1.05]">{item.name}</h3>
            <p className="mt-4 text-[17px] leading-[1.78]">{item.desc}</p>

            <div className="mt-7 min-h-[88px]">
              {!ratesLoaded ? (
                <div className="h-12 w-40 animate-pulse rounded-[16px] border border-border bg-surface-2" />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCurrency}
                    initial={{ opacity: 0.45, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0.45, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="font-display text-[40px] font-bold leading-[1.08] tracking-[-0.05em] text-text-primary">
                      {formatPrice(item.priceUSD, activeCurrency, rates)}
                    </div>
                    <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-text-muted">
                      {item.suffix}
                    </p>
                    {activeCurrency !== "USD" ? (
                      <p className="mt-2 text-[14px] text-text-muted">
                        ≈ ${item.priceUSD.toLocaleString()} USD
                      </p>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            <div className="my-6 h-px w-full bg-border" />

            <ul className="space-y-3">
              {item.items.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-[16px] leading-[1.72] text-text-secondary"
                >
                  <span className="text-accent">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <p className="mt-6 max-w-4xl text-[15px] leading-[1.74] text-text-muted">
        Prices are starting rates and help clients understand where a project may
        land before scoping. For international clients, the final invoice currency
        is confirmed before work starts.
      </p>
    </div>
  );
}
