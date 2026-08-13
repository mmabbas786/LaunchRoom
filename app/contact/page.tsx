import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ProjectWhatsAppSelector } from "@/components/contact/ProjectWhatsAppSelector";
import { Button } from "@/components/ui/Button";
import { ISTClock } from "@/components/contact/ISTClock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { quickContactFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact LaunchRoom Studio",
  description:
    "Contact LaunchRoom for website development, Android apps, retainers, and project proposals. Fast responses on email & WhatsApp.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact LaunchRoom Studio",
    description:
      "Reach out to LaunchRoom for custom websites, mobile apps, and project proposals.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

const whatsappHref = getWhatsAppHref(
  "Hello LaunchRoom, I want to discuss website or app development.",
);

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="section-shell">
        <AnimatedSection className="grid items-start gap-5 xl:grid-cols-[1.08fr_0.92fr]">
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

          <div className="page-card-grid sm:grid-cols-2">
            <InfoCard
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              preserveValueCase
            />
            <InfoCard
              label="WhatsApp"
              value={siteConfig.phone}
              href={whatsappHref}
              accent
            />
            <div className="sm:col-span-2">
              <ISTClock />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="grid items-start gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection className="space-y-5">
            <div className="page-card-roomy panel h-auto">
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

            <div className="page-card-roomy panel-lime h-auto">
              <p className="card-label text-on-dark-muted">Availability</p>
              <p className="mt-4 text-[18px] leading-[1.8] text-on-dark-muted">
                Mon-Sat, 10 AM to 8 PM IST. For urgent matters, WhatsApp is usually
                the fastest route.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-5" delay={0.05}>
            <div className="page-card-roomy panel-accent h-auto">
              <p className="card-label text-text-primary">Primary contact</p>
              <h2 className="mt-4 text-[clamp(28px,3vw,40px)] leading-[1.06] text-text-primary">
                Need the fastest reply?
              </h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-text-secondary">
                Pick website development, app development, or both. We&apos;ll open
                WhatsApp with the right inquiry message already filled in.
              </p>
              <ProjectWhatsAppSelector />
              <div className="mt-6">
                <Button href="/start" variant="outline" className="w-full justify-center sm:w-auto">
                  Send a full brief instead
                </Button>
              </div>
            </div>

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
  const className = accent ? "page-card panel-accent" : "page-card panel";
  const textClass = accent ? "text-text-primary" : "text-text-primary";
  const valueClassName = preserveValueCase ? "preserve-case" : "";

  return (
    <div className={`${className} flex h-full flex-col`}>
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
