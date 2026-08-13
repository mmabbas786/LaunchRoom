import { Layers3, MonitorSmartphone, ShieldCheck } from "lucide-react";

import type { SupportedCurrency } from "@/data/pricing";
import { services } from "@/data/services";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const icons = {
  web: MonitorSmartphone,
  webapps: Layers3,
  retainer: ShieldCheck,
};

export function ServicesPreview({ currency }: { currency: SupportedCurrency }) {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Services</p>
        <h2 className="section-title mx-auto max-w-[14ch]">
          We offer the core services most growing businesses actually need.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="page-card-grid mt-10 lg:grid-cols-3" delay={0.05}>
        {services.map((service, index) => {
          const Icon = icons[service.id];

          return (
            <article
              key={service.id}
              className={
                index === 1
                  ? "page-card-roomy panel-accent relative overflow-hidden"
                  : "page-card-roomy panel relative overflow-hidden"
              }
            >
              <div className="pointer-events-none absolute right-[-42px] top-[-42px] h-28 w-28 rounded-full bg-[rgba(232,160,32,0.08)] blur-[10px]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-accent-border bg-accent-dim text-accent shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="meta-chip shrink-0">{service.number}</span>
                </div>

                <h3 className="mt-7 text-[28px] leading-[1.12]">{service.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[1.86] text-text-secondary">
                  {service.shortDescription}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  <span className="meta-chip">{service.timeline}</span>
                  <span className="preserve-case meta-chip border-accent-border bg-accent-dim text-accent">
                    {service.startingPrice[currency]}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/services" variant="ghost">
            View full services &amp; pricing
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
