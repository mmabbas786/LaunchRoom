import { testimonials } from "@/data/testimonials";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "32K", label: "Product views" },
  { value: "24+", label: "Years combined focus" },
  { value: "124+", label: "Launch assets created" },
  { value: "400+", label: "Support requests handled" },
];

export function Testimonials() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Testimonials</p>
        <h2 className="section-title mx-auto max-w-[14ch]">
          What our clients are saying.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-3" delay={0.05}>
        {testimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${testimonial.company}`}
            className={index === 1 ? "panel-accent p-6" : "panel p-6"}
          >
            <p className="text-[15px] leading-[1.82] text-text-secondary">
              “{testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-dim text-[13px] font-semibold text-accent">
                {testimonial.name.slice(0, 1)}
              </div>
              <div>
                <h3 className="text-[16px] leading-[1.1]">{testimonial.name}</h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-text-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" delay={0.08}>
        {stats.map((stat) => (
          <div key={stat.label} className="panel-lime px-6 py-6 text-center">
            <div className="font-display text-[40px] font-extrabold tracking-[-0.06em] text-accent">
              {stat.value}
            </div>
            <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
}
