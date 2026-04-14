import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { CTABand } from "@/components/layout/CTABand";
import { FAQ } from "@/components/services/FAQ";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceFaqs } from "@/data/faqs";
import { pricingSummary } from "@/data/pricing";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Launchroom services for website development, app builds, and ongoing support with clear scope, timelines, and starting prices.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <p className="eyebrow eyebrow-invert">Services</p>
            <h1 className="page-hero-title mt-6 max-w-[10ch] text-on-dark">
              Clear services for websites, apps, and ongoing support.
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              Everything here is structured to help you understand scope quickly,
              compare options easily, and move into a quote without guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">Websites</span>
              <span className="meta-chip meta-chip-dark">Mobile apps</span>
              <span className="meta-chip meta-chip-dark">Maintenance retainers</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start">Start a project</Button>
              <Button href="/pricing" variant="outline">
                View pricing
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="panel-accent p-6 sm:p-7">
              <p className="card-label text-text-primary">Choose a starting point</p>
              <div className="mt-5 space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`#${service.id}`}
                    className="group block rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5 hover:border-accent-border hover:bg-[rgba(255,255,255,0.04)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="card-label text-on-dark-muted">{service.number}</p>
                        <h2 className="mt-3 text-[24px] leading-[1.08] text-text-primary">
                          {service.name}
                        </h2>
                      </div>

                      <span className="preserve-case inline-flex shrink-0 rounded-full border border-accent-border bg-accent-dim px-3 py-1.5 text-[13px] font-semibold text-accent">
                        {service.startingPrice}
                      </span>
                    </div>

                    <p className="mt-3 text-[15px] leading-[1.75] text-on-dark-muted">
                      {service.shortDescription}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-text-primary">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="panel-lime p-6">
                <p className="card-label text-on-dark-muted">Response time</p>
                <p className="mt-3 text-[30px] leading-[1.04] text-on-dark">
                  {siteConfig.responseTime}
                </p>
              </article>

              <article className="panel p-6">
                <p className="card-label">Handover</p>
                <p className="mt-3 text-[30px] leading-[1.04] text-text-primary">
                  Full access
                </p>
              </article>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-shell section-shell-tight">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What we do"
            title="Pick the service that matches where your project is right now."
          />
          <p className="section-copy">
            Start with a business website, ship an app, or keep an existing product
            maintained. Each service below shows what is included, how long it
            usually takes, and where pricing begins.
          </p>
        </AnimatedSection>

        <div className="mt-8 space-y-5">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={0.04 * index}>
              <ServiceDetail service={service} reverse={index % 2 === 1} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <div className="page-shell">
        <ProcessSteps />

        <section className="section-shell-tight">
          <AnimatedSection>
            <div className="panel grid gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="card-label">Pricing</p>
                <h2 className="mt-4 text-[clamp(28px,3vw,42px)] leading-[1.06]">
                  Need exact website package pricing?
                </h2>
                <p className="mt-4 max-w-2xl text-[17px] leading-[1.8]">
                  We keep website package rates, add-ons, payment terms, and
                  INR/USD pricing on a dedicated page so this services page stays
                  focused and easier to scan.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="meta-chip">
                    Launch <span className="preserve-case">{pricingSummary.launchCombined}</span>
                  </span>
                  <span className="meta-chip">
                    Scale <span className="preserve-case">{pricingSummary.scaleCombined}</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/pricing">View pricing</Button>
                <Button href="/start" variant="outline">
                  Start a project
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <FAQ
          items={serviceFaqs}
          eyebrow="FAQ"
          title="Common questions before we start working together."
        />
      </div>

      <CTABand
        heading="Need help choosing the right service?"
        subtext="Share your brief and we will point you to the smallest useful scope that fits your goals, timeline, and budget."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
