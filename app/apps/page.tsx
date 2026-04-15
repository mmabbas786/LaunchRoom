import type { Metadata } from "next";

import { AppCard } from "@/components/apps/AppCard";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { apps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Explore LaunchRoom Android apps, Play Store launches, and product work built in public.",
};

export default function AppsPage() {
  return (
    <>
      <PageHeroGrid
        label="Play Store"
        heading="Apps we've built and launched."
        description="From productivity tools to sports apps — shipped and live on Google Play."
        topLeftCard={{
          label: "What you'll find",
          content: (
            <>
              <p className="text-[28px] leading-[1.06] text-on-dark">
                Android products, shipped proof, and launch-ready app thinking.
              </p>
              <p className="mt-3">
                This page shows the product side of LaunchRoom, not just client
                services.
              </p>
            </>
          ),
        }}
        topRightCard={{
          label: "Current apps",
          content: (
            <>
              <p className="text-[32px] leading-[1.04] text-text-primary">
                {apps.length} products in the lineup
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="meta-chip">Play Store launches</span>
                <span className="meta-chip">Android-first</span>
              </div>
            </>
          ),
        }}
        bottomCard={{
          label: "Why it matters",
          content: (
            <>
              <p className="text-[18px] leading-[1.8] text-text-secondary">
                Building our own apps gives us direct experience with shipping,
                iteration, store listing, monetisation decisions, and post-launch
                maintenance.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Shipping proof", "Product thinking", "Launch support"].map((item) => (
                  <span
                    key={item}
                    className="meta-chip border-accent-border bg-accent-dim text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          ),
        }}
      />

      <section className="page-shell section-shell-tight">
        <div className="page-card-grid md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </section>

      <section className="page-shell section-shell-tight">
        <div className="panel-dark rounded-[28px] px-6 py-10 text-center sm:px-8">
          <p className="card-label text-on-dark-muted">Play Store</p>
          <h2 className="mt-4 text-[clamp(30px,3vw,42px)] leading-[1.06] text-on-dark">
            View all our apps on Google Play.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-accent-border bg-accent-dim px-5 py-3 text-[15px] font-semibold text-on-dark hover:-translate-y-0.5 hover:border-accent"
            >
              <span className="h-2.5 w-2.5 rounded-full border border-black bg-accent" />
              View all apps on Google Play
            </a>
            <Button href="/services#apps" variant="outline">
              See app development
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
