import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export interface PageHeroGridProps {
  label: string;
  heading: ReactNode;
  description: string;
  ctaButtons?: ReactNode;
  topLeftCard: {
    label: string;
    content: ReactNode;
  };
  topRightCard: {
    label: string;
    content: ReactNode;
  };
  bottomCard: {
    label?: string;
    content: ReactNode;
  };
}

function HeroCard({
  label,
  content,
}: {
  label?: string;
  content: ReactNode;
}) {
  return (
    <article className="rounded-xl border border-white/10 bg-[#1a1a1a] p-5">
      {label ? (
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
          {label}
        </p>
      ) : null}
      <div className="text-sm leading-relaxed text-white/70">{content}</div>
    </article>
  );
}

export function PageHeroGrid({
  label,
  heading,
  description,
  ctaButtons,
  topLeftCard,
  topRightCard,
  bottomCard,
}: PageHeroGridProps) {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection>
        <div className="panel-dark rounded-[28px] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div className="grid gap-5 lg:grid-cols-[55fr_45fr] lg:items-start">
            <div className="flex h-full flex-col lg:pr-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                  {label}
                </span>
              </div>

              <h1 className="page-hero-title mt-6 max-w-[11ch] text-on-dark">
                {heading}
              </h1>

              <p className="mt-6 max-w-3xl text-[17px] leading-[1.82] text-on-dark-muted sm:text-[18px]">
                {description}
              </p>

              {ctaButtons ? <div className="mt-8">{ctaButtons}</div> : null}
            </div>

            <div className="grid grid-rows-[auto_auto] gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <HeroCard label={topLeftCard.label} content={topLeftCard.content} />
                <HeroCard label={topRightCard.label} content={topRightCard.content} />
              </div>

              <HeroCard label={bottomCard.label} content={bottomCard.content} />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
