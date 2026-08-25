import Link from "next/link";
import { ArrowRight, Cloud, Code2, Globe, Layers3, MonitorSmartphone, Rocket, ShieldCheck, Users, Wrench } from "lucide-react";

import type { SupportedCurrency } from "@/data/pricing";
import { services } from "@/data/services";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const icons: Record<string, typeof MonitorSmartphone> = {
  web: Globe,
  webapps: Layers3,
  saas: Users,
  mvp: Rocket,
  retainer: ShieldCheck,
  hosting: Cloud,
  custom: Wrench,
  nextjs: Code2,
};

export function ServicesPreview({ currency }: { currency: SupportedCurrency }) {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Services</p>
        <h2 className="section-title mx-auto max-w-[16ch]">
          Core web and software services built for real business growth.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] text-text-secondary">
          From fast-launching business websites to scalable web platforms and monthly technical maintenance, we build what you actually need.
        </p>
      </AnimatedSection>

      <AnimatedSection className="page-card-grid mt-10 sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
        {services.slice(0, 6).map((service, index) => {
          const Icon = icons[service.id] || MonitorSmartphone;
          const isHighlight = index === 0;

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={
                isHighlight
                  ? "page-card-roomy panel-accent relative overflow-hidden flex flex-col justify-between group panel-hover"
                  : "page-card-roomy panel relative overflow-hidden flex flex-col justify-between group panel-hover"
              }
            >
              <div className="pointer-events-none absolute right-[-42px] top-[-42px] h-28 w-28 rounded-full bg-[rgba(232,160,32,0.08)] blur-[10px]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-accent-border bg-accent-dim text-accent shadow-[0_18px_34px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="meta-chip shrink-0">{service.number}</span>
                </div>

                <h3 className="mt-6 text-[24px] leading-[1.15] text-text-primary group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">
                  {service.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="meta-chip text-xs">{service.timeline}</span>
                  <span className="preserve-case meta-chip border-accent-border bg-accent-dim text-accent text-xs">
                    {service.startingPrice[currency].startsWith("₹") || service.startingPrice[currency].startsWith("$")
                      ? `Starting at ${service.startingPrice[currency]}`
                      : service.startingPrice[currency]}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                <span>Explore service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/services">
            Explore All Services &amp; Pricing
          </Button>
          <Button href="/start" variant="outline">
            Start a Project
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}

