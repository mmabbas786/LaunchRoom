"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTABand } from "@/components/layout/CTABand";
import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";
import { FAQ } from "@/components/services/FAQ";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getServiceFaqs } from "@/data/faqs";
import { pricingSummary } from "@/data/pricing";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

export function ServicesPageContent() {
  const { currency } = useVisitorPreferences();
  const serviceFaqs = getServiceFaqs(currency);

  return (
    <>
      <PageHeroGrid
        label="Services"
        heading="Clear services for websites, apps, and ongoing support."
        description="Everything here is structured to help you understand scope quickly, compare options easily, and move into a quote without guesswork."
        ctaButtons={
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">Websites</span>
              <span className="meta-chip meta-chip-dark">Mobile apps</span>
              <span className="meta-chip meta-chip-dark">Maintenance retainers</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/start">Start a project</Button>
              <Button href="/pricing" variant="outline">
                View pricing
              </Button>
            </div>
          </div>
        }
        topLeftCard={{
          label: "Response time",
          content: (
            <p className="text-[30px] leading-[1.04] text-on-dark">
              {siteConfig.responseTime}
            </p>
          ),
        }}
        topRightCard={{
          label: "Handover",
          content: (
            <p className="text-[30px] leading-[1.04] text-text-primary">
              Full access
            </p>
          ),
        }}
        bottomCard={{
          label: "Choose a starting point",
          content: (
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`#${service.id}`}
                  className="group block rounded-[18px] border border-white/10 bg-white/[0.04] p-4 hover:border-accent-border hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="card-label text-white/40">{service.number}</p>
                      <h2 className="mt-2 text-[22px] leading-[1.08] text-text-primary">
                        {service.name}
                      </h2>
                    </div>

                    <span className="preserve-case inline-flex shrink-0 rounded-full border border-accent-border bg-accent-dim px-3 py-1.5 text-[13px] font-semibold text-accent">
                      {service.startingPrice[currency]}
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
          ),
        }}
      />

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
              <ServiceDetail
                service={service}
                currency={currency}
                reverse={index % 2 === 1}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <div className="page-shell">
        <ProcessSteps />

        <section className="section-shell-tight">
          <AnimatedSection>
            <div className="page-card-roomy panel grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="card-label">Pricing</p>
                <h2 className="mt-4 text-[clamp(28px,3vw,42px)] leading-[1.06]">
                  Need exact website package pricing?
                </h2>
                <p className="mt-4 max-w-2xl text-[17px] leading-[1.8]">
                  We keep website package rates, add-ons, payment terms, and
                  location-based billing on a dedicated page so this services page
                  stays focused and easier to scan.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="meta-chip">
                    Basic{" "}
                    <span className="preserve-case">{pricingSummary.basic[currency]}</span>
                  </span>
                  <span className="meta-chip">
                    Launch{" "}
                    <span className="preserve-case">{pricingSummary.launch[currency]}</span>
                  </span>
                  <span className="meta-chip">
                    Scale{" "}
                    <span className="preserve-case">{pricingSummary.scale[currency]}</span>
                  </span>
                  <span className="meta-chip">
                    Showing <span className="preserve-case">{currency}</span>
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
