import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    name: "Discover",
    title: "Understand your goals",
    description: "We discuss your business goals, target audience, and what success looks like—no technical knowledge needed.",
  },
  {
    number: "02",
    name: "Plan",
    title: "Structure scope & copy",
    description: "We outline the pages, features, messaging, and inquiry pathways so you know exactly what is being built.",
  },
  {
    number: "03",
    name: "Design",
    title: "Craft custom UI in Figma",
    description: "We design clean, modern layouts focused on visual hierarchy, mobile polish, and clear calls-to-action.",
  },
  {
    number: "04",
    name: "Build",
    title: "Fast, responsive coding",
    description: "We write clean, lightweight code ensuring sub-second load times and seamless usability across all devices.",
  },
  {
    number: "05",
    name: "Test",
    title: "Speed & quality checks",
    description: "We test mobile responsiveness, inquiry forms, WhatsApp triggers, and Core Web Vitals speed benchmarks.",
  },
  {
    number: "06",
    name: "Launch",
    title: "Domain & cloud deploy",
    description: "We configure your custom domain, SSL certificate, DNS records, and submit your site to Google Search Console.",
  },
  {
    number: "07",
    name: "Support",
    title: "Handover & ongoing help",
    description: "You receive full code ownership, credentials, post-launch warranty, and optional monthly maintenance.",
  },
];

export function HomeProcessSection() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <p className="eyebrow mx-auto">Our Process</p>
        <h2 className="section-title mx-auto mt-4">
          A straightforward path from idea to live website
        </h2>
        <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
          We keep the process transparent, fast, and free of developer jargon. You always know what is happening,
          what comes next, and when your website will go live.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {processSteps.map((step, idx) => (
          <AnimatedSection
            key={step.number}
            delay={idx * 0.03}
            className={`page-card panel flex flex-col justify-between ${
              idx === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-accent">
                  {step.number}
                </span>
                <span className="rounded-full border border-border bg-surface-2 px-3 py-0.5 text-xs font-mono text-text-muted uppercase">
                  {step.name}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.7] text-text-secondary">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
