import { apps } from "@/data/apps";

import { AppCard } from "@/components/apps/AppCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

export function AppsStrip() {
  const hasApps = apps.length > 0;

  return (
    <section className="border-y-2 border-black bg-surface-3 text-on-dark">
      <div className="page-shell section-shell">
        <AnimatedSection>
          <SectionHeader
            eyebrow={hasApps ? "Play Store" : "Apps"}
            title={
              hasApps
                ? "Android products with real shipping proof."
                : "App work will appear here when it's ready."
            }
            invert
          />
          <p className="section-copy max-w-3xl text-on-dark-muted">
            {hasApps
              ? "We do not just offer app development on a services page. We build, publish, maintain, and learn from our own shipped Android products too."
              : "No public apps are listed right now, so this section stays intentionally empty for the moment."}
          </p>
        </AnimatedSection>

        {hasApps ? (
          <>
            <AnimatedSection className="horizontal-rail mt-8" delay={0.05}>
              {apps.map((app) => (
                <AppCard key={app.name} app={app} compact />
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-accent-border bg-accent-dim px-5 py-3 text-[15px] font-semibold text-on-dark hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="h-2.5 w-2.5 rounded-full border border-black bg-accent" />
                  View all apps on Google Play
                </a>

                <Button href="/work" variant="ghost">
                  See app work
                </Button>
              </div>
            </AnimatedSection>
          </>
        ) : (
          <AnimatedSection delay={0.05}>
            <div className="mt-8 rounded-[28px] border border-accent-border bg-accent-dim p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
              <p className="text-[22px] leading-[1.2] text-on-dark">
                No apps added yet.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
