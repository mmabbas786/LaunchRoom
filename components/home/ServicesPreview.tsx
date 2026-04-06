import { Layers3, MonitorSmartphone, ShieldCheck } from "lucide-react";

import { services } from "@/data/services";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const icons = {
  web: MonitorSmartphone,
  apps: Layers3,
  retainer: ShieldCheck,
};

export function ServicesPreview() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Services</p>
        <h2 className="section-title mx-auto max-w-[14ch]">
          We offer the core services most growing businesses actually need.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-3" delay={0.05}>
        {services.map((service, index) => {
          const Icon = icons[service.id];

          return (
            <article
              key={service.id}
              className={index === 1 ? "panel-accent relative overflow-hidden p-7" : "panel relative overflow-hidden p-7"}
            >
              <div className="pointer-events-none absolute right-[-42px] top-[-42px] h-28 w-28 rounded-full bg-[rgba(232,160,32,0.08)] blur-[10px]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-dim text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="meta-chip">{service.number}</span>
                </div>

                <h3 className="mt-6 text-[28px] leading-[1.08]">{service.name}</h3>
                <p className="mt-4 min-h-[110px] text-[15px] leading-[1.8] text-text-secondary">
                  {service.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="meta-chip">{service.timeline}</span>
                  <span className="meta-chip border-accent-border bg-accent-dim text-accent">
                    {service.startingPrice}
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
