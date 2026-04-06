import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We clarify scope, budget, goals, and what the smallest useful version should be.",
  },
  {
    number: "02",
    title: "Proposal & scope",
    description:
      "You get a clear project outline, timeline, and pricing before anything starts.",
  },
  {
    number: "03",
    title: "Build & review",
    description:
      "We design, develop, and share progress in a tight review loop without wasting time.",
  },
  {
    number: "04",
    title: "Launch & handover",
    description:
      "We go live, hand over files and credentials, and stay available for post-launch support.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-shell">
      <AnimatedSection>
        <SectionHeader eyebrow="Our process" title="A simple pipeline that clients can actually follow." />
      </AnimatedSection>

      <AnimatedSection className="horizontal-rail mt-8" delay={0.05}>
        {steps.map((step, index) => (
          <article
            key={step.number}
            className={[
              "horizontal-card w-[min(100%,320px)] p-7 sm:w-[360px]",
              index === 1 ? "panel-accent" : index === 3 ? "panel-lime" : "panel",
            ].join(" ")}
          >
            <p className={`card-label ${index === 0 || index === 2 ? "" : "text-on-dark-muted"}`}>
              {step.number}
            </p>
            <h3
              className={[
                "mt-4 text-[28px] leading-[1.05]",
                index === 0 || index === 2 ? "text-text-primary" : "text-on-dark",
              ].join(" ")}
            >
              {step.title}
            </h3>
            <p
              className={[
                "mt-4 text-[17px] leading-[1.8]",
                index === 0 || index === 2 ? "text-text-secondary" : "text-on-dark-muted",
              ].join(" ")}
            >
              {step.description}
            </p>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
