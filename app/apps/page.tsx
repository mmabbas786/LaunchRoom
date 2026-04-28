import type { Metadata } from "next";

import { AppCard } from "@/components/apps/AppCard";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { apps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "LaunchRoom app portfolio. Public app projects will appear here when available.",
};

export default function AppsPage() {
  const hasApps = apps.length > 0;

  return (
    <>
      <PageHeroGrid
        label={hasApps ? "Play Store" : "Apps"}
        heading={hasApps ? "Apps we've built and launched." : "App portfolio coming soon."}
        description={
          hasApps
            ? "From productivity tools to sports apps — shipped and live on Google Play."
            : "No public app projects are listed here right now."
        }
        topLeftCard={{
          label: "What you'll find",
          content: (
            <>
              <p className="text-[28px] leading-[1.06] text-on-dark">
                {hasApps
                  ? "Android products, shipped proof, and launch-ready app thinking."
                  : "This section is intentionally empty for now."}
              </p>
              <p className="mt-3">
                {hasApps
                  ? "This page shows the product side of LaunchRoom, not just client services."
                  : "Once apps are ready to share publicly, they'll appear here with the same case-study clarity as the work section."}
              </p>
            </>
          ),
        }}
        topRightCard={{
          label: hasApps ? "Current apps" : "Current status",
          content: (
            <>
              <p className="text-[32px] leading-[1.04] text-text-primary">
                {hasApps ? `${apps.length} products in the lineup` : "0 public apps listed"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hasApps ? (
                  <>
                    <span className="meta-chip">Play Store launches</span>
                    <span className="meta-chip">Android-first</span>
                  </>
                ) : (
                  <span className="meta-chip">Coming soon</span>
                )}
              </div>
            </>
          ),
        }}
        bottomCard={{
          label: "Why it matters",
          content: (
            <>
              <p className="text-[18px] leading-[1.8] text-text-secondary">
                {hasApps
                  ? "Building our own apps gives us direct experience with shipping, iteration, store listing, monetisation decisions, and post-launch maintenance."
                  : "This page stays quiet until there are real app launches worth showing publicly."}
              </p>
              {hasApps ? (
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
              ) : null}
            </>
          ),
        }}
      />

      <section className="page-shell section-shell-tight">
        {hasApps ? (
          <div className="page-card-grid md:grid-cols-2 xl:grid-cols-3">
            {apps.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        ) : (
          <div className="panel mx-auto max-w-3xl rounded-[28px] px-6 py-10 text-center sm:px-8">
            <p className="text-[28px] leading-[1.08] text-text-primary">
              No apps added yet.
            </p>
          </div>
        )}
      </section>

      {hasApps ? (
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
      ) : null}
    </>
  );
}
