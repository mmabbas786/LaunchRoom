import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { demos, hexToRgba } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Demo Websites by Niche",
  description:
    "See LaunchRoom's live website demos for restaurants, clinics, law firms, gyms, and more. Find your niche and start a project with context already attached.",
};

const statCards = [
  {
    label: "Demo count",
    value: `${demos.length} niches`,
    copy: "Each one is a complete fictional business website, not just a hero mockup.",
  },
  {
    label: "Lead path",
    value: "Demo → brief",
    copy: "Every demo routes straight into a prefilled project flow on /start.",
  },
  {
    label: "Built for",
    value: "Fast sales",
    copy: "Clients can see themselves in the work before they book a call.",
  },
];

export default function DemosPage() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection>
        <div className="panel-dark p-7 sm:p-8 lg:p-10">
          <div className="grid gap-10">
            <div className="max-w-4xl">
              <p className="eyebrow eyebrow-invert">Demo Library</p>
              <h1 className="page-hero-title max-w-[9ch] text-on-dark">
                See your industry. Already built.
              </h1>
              <p className="mt-6 max-w-3xl text-[18px] leading-[1.82] text-on-dark-muted">
                Every card below opens a believable, clickable website demo for a
                specific business niche. Find the closest fit, walk through the
                experience, and start a project with that demo context already attached.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/start?ref=demos">Start a project</Button>
                <Button href="/work" variant="outline">
                  See live client work
                </Button>
              </div>
            </div>

            <div className="page-card-grid md:grid-cols-3">
              {statCards.map((item, index) => (
                <article
                  key={item.label}
                  className={[
                    "flex h-full min-h-[220px] flex-col rounded-xl",
                    index === 1 ? "panel-accent" : "panel",
                    "p-6 sm:p-7",
                  ].join(" ")}
                >
                  <p className="card-label">{item.label}</p>
                  <div className="mt-4 min-h-[3.5rem]">
                    <h2 className="text-[28px] leading-[1.04] text-text-primary">
                      {item.value}
                    </h2>
                  </div>
                  <p className="mt-auto pt-5 text-[15px] leading-[1.8] text-text-secondary">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-8 flex flex-wrap gap-3" delay={0.05}>
        {[
          "Clickable niche previews",
          "Demo-aware intake form",
          "Sticky CTA flow",
          "Fictional business details only",
        ].map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </AnimatedSection>

      <div className="page-card-grid mt-10 md:grid-cols-2 xl:grid-cols-3">
        {demos.map((demo, index) => (
          <AnimatedSection
            key={demo.slug}
            className="h-full"
            delay={0.04 + (index % 3) * 0.03}
          >
            <Link
              href={`/demos/${demo.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-surface-1 panel-hover"
            >
              <div
                className="relative overflow-hidden border-b border-border px-6 py-8"
                style={{
                  background: `linear-gradient(145deg, ${hexToRgba(demo.accentColor, 0.42)} 0%, rgba(10,10,10,0.98) 68%)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_34%)]" />
                <div className="relative flex min-h-[188px] items-start justify-between gap-5">
                  <div className="flex min-h-[124px] flex-1 flex-col">
                    <p className="card-label text-white/65">{demo.industry}</p>
                    <h2 className="mt-3 min-h-[4.2rem] max-w-[11ch] text-[34px] leading-[0.98] text-white">
                      {demo.niche}
                    </h2>
                    <p className="mt-auto max-w-[18ch] pt-4 text-[14px] leading-[1.7] text-white/70">
                      {demo.businessName}
                    </p>
                  </div>
                  <span className="pt-1 text-[48px] leading-none">{demo.coverEmoji}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex min-h-[44px] items-start justify-between gap-3">
                  <Badge variant="success" className="border-gold/20 bg-gold/10 text-gold">
                    Live demo
                  </Badge>
                  <span className="max-w-[13ch] text-right text-[12px] uppercase tracking-[0.18em] text-text-muted">
                    {demo.location}
                  </span>
                </div>

                <p className="mt-4 min-h-[5.6rem] text-[16px] leading-[1.82] text-text-secondary">
                  {demo.tagline}
                </p>

                <div className="mt-6 flex min-h-[76px] flex-wrap content-start gap-2">
                  {demo.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <p className="mt-auto pt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent group-hover:text-text-primary">
                  View demo
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-10" delay={0.08}>
        <div className="panel-accent p-7 text-center sm:p-8 lg:p-10">
          <p className="card-label text-text-primary">Need a different niche?</p>
          <h2 className="mt-4 text-[clamp(30px,4vw,46px)] leading-[1.06] text-text-primary">
            We can build beyond the library too.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.84] text-text-secondary">
            These demos are a starting system, not a limit. If your business is not
            listed yet, we can still scope and design the right version from scratch.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/start?ref=demos">Start your project</Button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
