"use client";

import Link from "next/link";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { demos, featuredDemoSlugs, hexToRgba } from "@/lib/demos";

const featuredDemos = featuredDemoSlugs
  .map((slug) => demos.find((demo) => demo.slug === slug))
  .filter((demo): demo is (typeof demos)[number] => Boolean(demo));

export function DemoLibraryTeaser() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Demo Library</p>
          <h2 className="section-title max-w-[12ch]">
            See your niche. Already built.
          </h2>
          <p className="section-copy max-w-2xl">
            LaunchRoom now has niche-specific demo websites that business owners can
            actually click through before they start a project.
          </p>
        </div>

        <Link
          href="/demos"
          className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-accent-border bg-accent-dim px-6 py-3 text-[15px] font-semibold text-text-primary hover:-translate-y-0.5 hover:border-accent"
        >
          View all 12 demos
        </Link>
      </AnimatedSection>

      <AnimatedSection className="page-card-grid mt-10 lg:grid-cols-3" delay={0.05}>
        {featuredDemos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/demos/${demo.slug}`}
            className="group overflow-hidden rounded-[26px] border border-border bg-surface-1 panel-hover"
          >
            <div
              className="relative overflow-hidden border-b border-border px-6 py-7"
              style={{
                background: `linear-gradient(145deg, ${hexToRgba(demo.accentColor, 0.42)} 0%, rgba(10,10,10,0.98) 68%)`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="card-label text-white/65">{demo.industry}</p>
                  <h3 className="mt-3 text-[30px] leading-[1.02] text-white">
                    {demo.niche}
                  </h3>
                </div>
                <span className="text-[42px]">{demo.coverEmoji}</span>
              </div>
            </div>

            <div className="p-6">
              <Badge variant="success" className="border-gold/20 bg-gold/10 text-gold">
                Live demo
              </Badge>
              <p className="mt-4 text-[16px] leading-[1.82] text-text-secondary">
                {demo.tagline}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-accent group-hover:text-text-primary">
                Explore demo
                <span aria-hidden="true">→</span>
              </p>
            </div>
          </Link>
        ))}
      </AnimatedSection>
    </section>
  );
}
