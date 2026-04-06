import type { Metadata } from "next";

import { CTABand } from "@/components/layout/CTABand";
import { FAQ } from "@/components/services/FAQ";
import { PricingCurrency } from "@/components/services/PricingCurrency";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { serviceFaqs } from "@/data/faqs";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Pricing — Launchroom",
  description:
    "Explore Launchroom services for web development, Android app builds, retainers, and multi-currency pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <p className="eyebrow eyebrow-invert">
              Services
            </p>
            <h1 className="page-hero-title mt-6 max-w-[10ch] text-on-dark">
              Launch-ready offers, not confusing agency bundles.
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              Web, apps, and ongoing support structured for clarity. Every service
              block is meant to help a client say yes faster because the scope is
              understandable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">
                Websites
              </span>
              <span className="meta-chip meta-chip-dark">
                Android apps
              </span>
              <span className="meta-chip meta-chip-dark">
                Ongoing support
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start">Start a project</Button>
              <Button href="/contact" variant="ghost">
                Ask a question
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            <article className="panel-accent p-6 sm:p-7">
              <p className="card-label text-text-primary">Built for</p>
              <h2 className="mt-4 text-[clamp(28px,3vw,40px)] leading-[1.04] text-text-primary">
                Small businesses, founders, and teams that need momentum.
              </h2>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
              <article className="panel-lime p-6">
                <p className="card-label text-on-dark-muted">Starting range</p>
                <p className="mt-3 text-[30px] leading-[1.04] text-on-dark">
                  ₹15k to launch
                </p>
              </article>

              <article className="panel p-6">
                <p className="card-label">Response time</p>
                <p className="mt-3 text-[30px] leading-[1.04] text-text-primary">
                  Under 24h
                </p>
              </article>
            </div>

            <article className="panel p-6">
              <p className="card-label">How the studio works</p>
              <p className="mt-3 text-[17px] leading-[1.8]">
                We scope tightly, build quickly, and hand over properly. No mystery
                process, no bloated retainers, and no vague deliverables.
              </p>
            </article>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-shell section-shell-tight space-y-5">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={0.04 * index}>
            <ServiceDetail service={service} reverse={index % 2 === 1} />
          </AnimatedSection>
        ))}
      </section>

      <div className="page-shell">
        <ProcessSteps />
        <PricingCurrency />
        <FAQ items={serviceFaqs} />
      </div>

      <CTABand
        heading="Ready to move from idea to launch?"
        subtext="Tell us what you need and we'll propose the smallest useful version that still looks serious."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
