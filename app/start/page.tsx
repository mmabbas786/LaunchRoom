import type { Metadata } from "next";

import { IntakeForm } from "@/components/start/IntakeForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start a Project — Launchroom",
  description:
    "Share your project brief with Launchroom and receive a tailored proposal within 48 hours.",
};

export default function StartPage() {
  return (
    <div className="page-shell">
      <section className="section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-5">
            <div className="panel-dark p-7 sm:p-9">
              <p className="eyebrow eyebrow-invert">
                Get started
              </p>
              <h1 className="page-hero-title mt-6 max-w-[9ch] text-on-dark">
                Tell us about your project.
              </h1>
              <p className="mt-6 text-[19px] leading-[1.82] text-on-dark-muted">
                Fill in the details below and we&apos;ll send you a tailored proposal
                within 48 hours.
              </p>
            </div>

            <div className="panel-lime p-7">
              <p className="card-label text-on-dark-muted">Helpful before you submit</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Your budget range",
                  "Rough timeline",
                  "Any references you like",
                  "What success should look like",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] leading-[1.76] text-on-dark-muted">
                    <span className="text-on-dark">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-7">
              <p className="card-label">Need a faster route?</p>
              <p className="mt-4 text-[17px] leading-[1.8]">
                If you already know the scope and just want to talk, use the contact
                page and send the essentials directly.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline">
                  Contact instead
                </Button>
              </div>
            </div>
          </div>

          <AnimatedSection delay={0.05}>
            <IntakeForm />
          </AnimatedSection>
        </AnimatedSection>
      </section>
    </div>
  );
}
