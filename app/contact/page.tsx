import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ISTClock } from "@/components/contact/ISTClock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { quickContactFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Launchroom",
  description:
    "Contact Launchroom for websites, Android apps, retainers, and project proposals.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <p className="eyebrow eyebrow-invert">
              Contact
            </p>
            <h1 className="page-hero-title mt-6 max-w-[8ch] text-on-dark">
              Let's talk about what needs to launch.
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              Reach out for websites, Android apps, retainers, and launch support.
              We respond quickly and we keep the first conversation practical.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">
                {siteConfig.location}
              </span>
              <span className="meta-chip meta-chip-dark">
                {siteConfig.responseTime}
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <InfoCard
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              preserveValueCase
            />
            <InfoCard
              label="WhatsApp"
              value={siteConfig.phone}
              href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
              accent
            />
            <div className="sm:col-span-2">
              <ISTClock />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection className="space-y-5">
            <div className="panel p-7">
              <p className="card-label">What to include</p>
              <ul className="mt-5 space-y-3">
                {[
                  "What you want to build",
                  "Your budget range",
                  "When you want to launch",
                  "Any references you like",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] leading-[1.76] text-text-secondary">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel-lime p-7">
              <p className="card-label text-on-dark-muted">Availability</p>
              <p className="mt-4 text-[18px] leading-[1.8] text-on-dark-muted">
                Mon-Sat, 10 AM to 8 PM IST. For urgent matters, WhatsApp is usually
                the fastest route.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <ContactForm />
          </AnimatedSection>
        </div>

        <AnimatedSection className="horizontal-rail mt-8" delay={0.08}>
          {quickContactFaqs.map((item, index) => (
            <article
              key={item.question}
              className={[
                "horizontal-card w-[min(100%,320px)] p-6 sm:w-[360px]",
                index === 1 ? "panel-accent" : index === 2 ? "panel-lime" : "panel",
              ].join(" ")}
            >
              <p className="card-label">Quick answer</p>
              <h3 className="mt-4 text-[25px] leading-[1.08]">{item.question}</h3>
              <p className="mt-4 text-[16px] leading-[1.76]">{item.answer}</p>
            </article>
          ))}
        </AnimatedSection>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  value,
  href,
  accent = false,
  preserveValueCase = false,
}: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
  preserveValueCase?: boolean;
}) {
  const className = accent ? "panel-accent p-6" : "panel p-6";
  const textClass = accent ? "text-text-primary" : "text-text-primary";
  const valueClassName = preserveValueCase ? "preserve-case" : "";

  return (
    <div className={className}>
      <p className={`card-label ${accent ? "text-text-primary" : ""}`}>{label}</p>
      {href ? (
        <a
          href={href}
          target={href.startsWith("https://") ? "_blank" : undefined}
          rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
          className={`mt-3 inline-flex text-[18px] font-semibold ${textClass} ${valueClassName}`}
        >
          {value}
        </a>
      ) : (
        <p className={`mt-3 text-[18px] font-semibold ${textClass} ${valueClassName}`}>{value}</p>
      )}
    </div>
  );
}
