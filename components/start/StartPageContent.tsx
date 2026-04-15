"use client";

import { IntakeForm } from "@/components/start/IntakeForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";

type DemoPrefill = {
  slug: string;
  niche: string;
  ref?: string;
} | null;

export function StartPageContent({
  prefillDemo = null,
}: {
  prefillDemo?: DemoPrefill;
}) {
  const { currency } = useVisitorPreferences();

  return (
    <>
      <PageHeroGrid
        label="Get started"
        heading={
          prefillDemo ? (
            <>
              Start your project from the{" "}
              <span className="preserve-case">{prefillDemo.niche}</span> demo.
            </>
          ) : (
            "Tell us about your project."
          )
        }
        description={
          prefillDemo
            ? `You’re coming from the ${prefillDemo.niche} demo, so we’ve already loaded that context into the intake flow below.`
            : "Share the essentials, choose the right budget range, and we’ll open WhatsApp with your project brief ready to send."
        }
        ctaButtons={
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="outline">
              Contact instead
            </Button>
          </div>
        }
        topLeftCard={{
          label: "Route",
          content: (
            <p className="text-[28px] leading-[1.06] text-on-dark">
              {prefillDemo ? "Demo-aware project intake." : "WhatsApp-first project intake."}
            </p>
          ),
        }}
        topRightCard={{
          label: "Pricing view",
          content: (
            <p className="text-[28px] leading-[1.06] text-text-primary">
              Showing <span className="preserve-case">{currency}</span> right now.
            </p>
          ),
        }}
        bottomCard={{
          label: "What happens next",
          content: (
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                prefillDemo
                  ? `We’ve attached the ${prefillDemo.niche} demo as your starting point.`
                  : "Choose your project type, budget, and timeline.",
                "Add the brief details we need to understand version one.",
                "Send the prefilled message in WhatsApp and we’ll reply there.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 text-[15px] leading-[1.72] text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>
          ),
        }}
      />

      <section className="page-shell section-shell-tight">
        <div className="grid items-start gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:items-stretch">
          <AnimatedSection className="grid gap-6 xl:h-full xl:grid-rows-2">
            <div className="page-card-roomy panel-lime xl:h-full">
              <p className="card-label text-on-dark-muted">Helpful before you submit</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Your budget range",
                  "Rough timeline",
                  "Any references you like",
                  "What success should look like",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[17px] leading-[1.76] text-on-dark-muted"
                  >
                    <span className="text-on-dark">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="page-card-roomy panel xl:h-full">
              <p className="card-label">Need a faster route?</p>
              <p className="mt-4 text-[17px] leading-[1.8]">
                If you already know the scope and just want to talk, use the contact
                page and send the essentials directly.
              </p>
              <div className="mt-auto pt-6">
                <Button href="/contact" variant="outline">
                  Contact instead
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="xl:h-full" delay={0.05}>
            {prefillDemo ? (
              <div className="mb-6 rounded-xl border border-gold/20 bg-gold/10 p-5">
                <p className="text-[15px] leading-[1.76] text-[#f2d38c]">
                  You&apos;re starting from the{" "}
                  <strong className="text-[#fff0c6]">{prefillDemo.niche}</strong> demo.
                  We&apos;ll shape the brief and proposal around that direction.
                </p>
              </div>
            ) : null}
            <IntakeForm currency={currency} prefillDemo={prefillDemo} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
