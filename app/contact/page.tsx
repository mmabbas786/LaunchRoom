import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ISTClock } from "@/components/contact/ISTClock";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site";
import { Mail, MessageCircle, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Newsroom & Studio | LaunchRoom",
  description:
    "Get in touch with LaunchRoom's newsroom for press releases, technical analysis tips, or LaunchRoom Studio web development inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact LaunchRoom",
    description:
      "Reach out to LaunchRoom for editorial dispatches, press releases, or custom web engineering.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="section-shell">
        <AnimatedSection className="grid items-start gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Newspaper className="h-3.5 w-3.5" />
              <span>Newsroom & Studio Contact</span>
            </div>

            <h1 className="page-hero-title font-display font-extrabold text-on-dark">
              Get in touch with LaunchRoom.
            </h1>

            <p className="max-w-3xl text-[18px] leading-[1.8] text-on-dark-muted">
              Whether you have an editorial tip, press release, research whitepaper, or wish to engage LaunchRoom Studio for engineering services, we respond promptly.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="meta-chip meta-chip-dark">{siteConfig.location}</span>
              <span className="meta-chip meta-chip-dark">Editorial Response &lt; 24h</span>
            </div>
          </div>

          <div className="page-card-grid sm:grid-cols-2">
            <InfoCard
              label="Editorial Desk"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              icon={Mail}
              preserveValueCase
            />
            <InfoCard
              label="Studio Direct"
              value={siteConfig.phone}
              href="https://api.whatsapp.com/send/?phone=919163030285&text=Hello%20LaunchRoom,%20I%20want%20to%20get%20in%20touch."
              icon={MessageCircle}
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
            <div className="page-card-roomy panel h-auto space-y-4">
              <p className="card-label">Newsroom Guidelines</p>
              <h2 className="text-[22px] font-bold text-text-primary">Press & Editorial Submissions</h2>
              <ul className="space-y-3">
                {[
                  "AI benchmark results & research whitepapers",
                  "Startup seed / Series A funding announcements",
                  "Open source developer tool launches",
                  "Security vulnerability advisories",
                  "LaunchRoom Studio project briefs",
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
