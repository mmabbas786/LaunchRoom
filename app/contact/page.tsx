import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MessageCircle, Send } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { ISTClock } from "@/components/contact/ISTClock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact LaunchRoom | Website Development Studio Inquiries",
  description:
    "Get in touch with LaunchRoom for website development quotes, appointment booking systems, monthly maintenance retainers, or general project inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact LaunchRoom | Website Development Studio",
    description:
      "Get in touch with LaunchRoom for website development, custom web applications, or monthly maintenance support.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <nav aria-label="Breadcrumb" className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
        <Link href="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Contact</span>
      </nav>

      <section className="section-shell">
        <AnimatedSection className="grid items-start gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Send className="h-3.5 w-3.5" />
              <span>Project &amp; Studio Inquiries</span>
            </div>

            <h1 className="page-hero-title font-display font-extrabold text-on-dark">
              Get in touch with the LaunchRoom team.
            </h1>

            <p className="max-w-3xl text-[18px] leading-[1.8] text-on-dark-muted">
              Whether you want to discuss a new business website, an appointment booking system, an online store,
              or a monthly maintenance retainer, we respond promptly within 24 hours.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">Kolkata, West Bengal • Serving India</span>
              <span className="meta-chip meta-chip-dark">Direct Founder Response &lt; 24h</span>
            </div>
          </div>

          <div className="page-card-grid sm:grid-cols-2">
            <InfoCard
              label="Email Direct"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              icon={Mail}
              preserveValueCase
            />
            <InfoCard
              label="WhatsApp Direct"
              value={siteConfig.phone}
              href="https://api.whatsapp.com/send/?phone=919163030285&text=Hello%20LaunchRoom,%20I%20want%20to%20discuss%20a%20website%20project."
              icon={MessageCircle}
              accent
            />
            <div className="sm:col-span-2">
              <ISTClock />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Project Brief Callout */}
      <section className="pb-10">
        <AnimatedSection className="panel-accent p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase text-accent font-bold">Starting a new build?</p>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
              Have a website project in mind?
            </h2>
            <p className="text-sm text-text-secondary mt-1 max-w-2xl">
              Use our guided project intake flow to select your budget range, timeline, and feature requirements.
            </p>
          </div>
          <Button href="/start" className="shrink-0 px-6 py-3">
            Start a Project Brief <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 lg:pb-28">
        <div className="grid items-start gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <AnimatedSection className="space-y-5">
            <div className="page-card-roomy panel h-auto space-y-4">
              <p className="card-label">How We Can Help</p>
              <h2 className="text-[22px] font-bold text-text-primary">What you can ask us</h2>
              <ul className="space-y-3">
                {[
                  "Business, booking, and portfolio website quotes",
                  "E-commerce store setups & payment gateways",
                  "Custom web tools, calculators & portal builds",
                  "Monthly website maintenance & speed optimization",
                  "Domain, DNS, and cloud hosting migration",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-text-secondary">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-5" delay={0.05}>
            <ContactForm />
          </AnimatedSection>
        </div>
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
  icon: Icon,
}: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
  preserveValueCase?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const className = accent ? "page-card panel-accent" : "page-card panel";
  const textClass = accent ? "text-text-primary" : "text-text-primary";
  const valueClassName = preserveValueCase ? "preserve-case" : "";

  return (
    <div className={`${className} flex h-full flex-col justify-between p-6`}>
      <div>
        <div className="flex items-center justify-between">
          <p className="card-label">{label}</p>
          <Icon className="h-4 w-4 text-accent" />
        </div>
        {href ? (
          <a
            href={href}
            target={href.startsWith("https://") ? "_blank" : undefined}
            rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
            className={`mt-3 inline-flex text-[15px] sm:text-[16px] font-semibold hover:underline break-all ${textClass} ${valueClassName}`}
          >
            {value}
          </a>
        ) : (
          <p className={`mt-3 text-[15px] sm:text-[16px] font-semibold break-all ${textClass} ${valueClassName}`}>{value}</p>
        )}
      </div>
    </div>
  );
}
