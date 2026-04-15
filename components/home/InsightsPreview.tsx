import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    title: "Custom design systems",
    description: "Interfaces tailored to your offer instead of another recycled SaaS layout.",
  },
  {
    title: "Fast, modern frontend",
    description: "Clean implementation in Next.js with motion and responsive polish.",
  },
  {
    title: "Founder-friendly process",
    description: "Fewer meetings, faster decisions, and a direct line to the people building it.",
  },
  {
    title: "Clear conversion paths",
    description: "Structure that leads visitors toward the action that matters.",
  },
  {
    title: "Launch support included",
    description: "Deployment, QA, and final cleanup handled before the handover.",
  },
  {
    title: "Retainers when needed",
    description: "Ongoing help for edits, fixes, growth updates, and stability after launch.",
  },
];

export function InsightsPreview() {
  return (
    <section className="page-shell section-shell-tight">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Feature Highlights</p>
        <h2 className="section-title mx-auto max-w-[15ch]">
          Delivering excellence with features and benefits that drive success.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="page-card-grid mt-10 md:grid-cols-2 xl:grid-cols-3" delay={0.05}>
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={index === 1 || index === 5 ? "page-card panel-accent" : "page-card panel"}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-dim text-[12px] font-medium text-accent">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-[24px] leading-[1.08]">{feature.title}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-[1.78] text-text-secondary">
              {feature.description}
            </p>
          </article>
        ))}
      </AnimatedSection>
    </section>
  );
}
