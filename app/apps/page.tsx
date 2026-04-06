import type { Metadata } from "next";

import { AppCard } from "@/components/apps/AppCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { apps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Play Store Apps — Launchroom",
  description:
    "Explore Launchroom's Play Store portfolio across productivity tools, sports entertainment, and ongoing product experiments.",
};

export default function AppsPage() {
  return (
    <div className="page-shell">
      <section className="section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <p className="eyebrow eyebrow-invert">
              Play Store
            </p>
            <h1 className="page-hero-title mt-6 max-w-[10ch] text-on-dark">
              Apps we've built and actually launched.
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              Product proof matters. These apps help show that Launchroom can go
              beyond websites and build Android products with real shipping
              experience too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">
                Android-first
              </span>
              <span className="meta-chip meta-chip-dark">
                Product-minded
              </span>
              <span className="meta-chip meta-chip-dark">
                Play Store ready
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="panel-lime p-6">
              <p className="card-label text-on-dark-muted">Why this matters</p>
              <p className="mt-3 text-[28px] leading-[1.06] text-on-dark">
                Clients can see product thinking, not just service pages.
              </p>
            </article>
            <article className="panel p-6">
              <p className="card-label">Current lineup</p>
              <p className="mt-3 text-[28px] leading-[1.06] text-text-primary">
                {apps.length} app slots
              </p>
            </article>
            <article className="panel-accent p-6 sm:col-span-2">
              <p className="card-label text-text-primary">What we build</p>
              <p className="mt-3 text-[18px] leading-[1.8] text-text-secondary">
                Utility apps, MVPs, launch experiments, and products that can be
                scoped realistically for a solo or small-team studio.
              </p>
            </article>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </AnimatedSection>

      <section className="section-shell">
        <AnimatedSection className="panel-dark p-7 sm:p-9 lg:flex lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-invert">
              Explore more
            </p>
            <h2 className="section-title mt-6 text-on-dark">
              Want to see the Play Store profile too?
            </h2>
            <p className="mt-5 max-w-2xl text-[18px] leading-[1.8] text-on-dark-muted">
              Browse the current app lineup directly on Google Play, or talk to us
              if you want a similar Android-first MVP built for your business.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 lg:mt-0">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-accent-border bg-accent-dim px-5 py-3 text-[15px] font-semibold text-on-dark hover:-translate-y-0.5 hover:border-accent"
            >
              View all apps on Google Play
            </a>
            <Button href="/services#apps">See app pricing</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
