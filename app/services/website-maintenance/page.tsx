import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Gauge,
  LifeBuoy,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { pricingSummary } from "@/data/pricing";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Website Maintenance & Support Services | LaunchRoom Studio",
  description:
    "Keep your website fast, secure, and up-to-date with LaunchRoom's monthly maintenance plans. Includes uptime monitoring, content updates, security patches, and priority support.",
  keywords: [
    "website maintenance services",
    "website support retainers",
    "monthly website maintenance",
    "website security monitoring",
    "web maintenance agency",
    "wordpress next.js website maintenance",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/website-maintenance`,
  },
  openGraph: {
    title: "Website Maintenance & Support Services | LaunchRoom Studio",
    description:
      "Keep your website fast, secure, and up-to-date with LaunchRoom's monthly maintenance plans.",
    url: `${siteConfig.url}/services/website-maintenance`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is included in monthly website maintenance?",
    a: "Our monthly retainers include small text and image content updates, 24/7 uptime monitoring, critical security updates, domain/SSL management, Core Web Vitals performance checks, and a direct channel for fast bug fixes.",
  },
  {
    q: "Can you maintain a website that was built by another developer or agency?",
    a: "Yes. We perform an initial code and infrastructure audit on your existing website (Next.js, React, HTML5, or WordPress) before onboarding to ensure we can support it smoothly.",
  },
  {
    q: "How fast do you respond to urgent website issues?",
    a: "For active retainer clients, critical downtime or broken functionality is prioritized with response times typically within 2 to 4 hours on business days.",
  },
  {
    q: "Are there long-term lock-in contracts?",
    a: "No. Our website maintenance is billed on a month-to-month basis. You can adjust your plan or cancel at any time with 30 days notice.",
  },
  {
    q: "What happens if I need major new features or additional pages?",
    a: "Small updates are covered in your monthly plan. If you need a brand-new section, major custom functionality, or an e-commerce addition, we provide a discounted fixed-fee quote for retainer clients.",
  },
];

const jsonLdMaintenance = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/website-maintenance#service`,
      name: "Website Maintenance & Support Services",
      serviceType: "Website Maintenance",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "Monthly website maintenance, security monitoring, content updates, and technical support by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/website-maintenance#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

const maintenanceFeatures = [
  {
    icon: RefreshCw,
    title: "Content & Media Updates",
    description: "Quick updates to text, pricing, blog posts, team members, images, and contact information without delay.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Vulnerability Patches",
    description: "Regular package and dependency audits to prevent exploits, SSL renewal tracking, and security headers.",
  },
  {
    icon: Server,
    title: "24/7 Uptime & DNS Monitoring",
    description: "Automated monitoring alerts our team immediately if your website experiences downtime or server issues.",
  },
  {
    icon: Gauge,
    title: "Speed & Core Web Vitals",
    description: "Ongoing audits to ensure page speed, image weights, and mobile responsiveness remain in the 90+ score range.",
  },
  {
    icon: Lock,
    title: "Backups & Disaster Recovery",
    description: "Automated codebase versioning on GitHub and cloud snapshots so your website can be restored in minutes if needed.",
  },
  {
    icon: LifeBuoy,
    title: "Direct Developer Support",
    description: "Direct access to our builders via email or WhatsApp—no ticketing queues or junior account managers.",
  },
];

export default function WebsiteMaintenancePage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Website Maintenance for my business website.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Website Maintenance", url: `${siteConfig.url}/services/website-maintenance` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMaintenance) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
        <Link href="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">Services</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Website Maintenance</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Website Maintenance &amp; Support</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Dependable website maintenance to keep your business running smoothly.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop worrying about broken forms, outdated content, or sudden downtime.
              LaunchRoom handles updates, monitoring, security, and performance so your website stays an asset, not a burden.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=maintenance">
                Get Maintenance Support <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Monthly Retainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast Content Edits</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>No Long-Term Lock-in</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Grid */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">What We Handle</p>
          <h2 className="section-title mt-4">
            Everything required to keep your website healthy and current
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Focus on running your business while our team takes care of routine technical tasks, content additions, and platform stability.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {maintenanceFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                delay={idx * 0.04}
                className="page-card panel flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Pricing / Plan Overview */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="card-label text-text-primary">Transparent Monthly Plans</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Starting at {pricingSummary.monthlyMaintenance.INR} ({pricingSummary.monthlyMaintenance.USD}) per month.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                A predictable, low-friction monthly fee to ensure you always have an experienced developer on standby whenever something needs updating or troubleshooting.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "Unlimited small text, image, and link updates",
                  "Monthly uptime and security monitoring",
                  "DNS, domain renewal, and SSL certificate maintenance",
                  "Priority support channel with direct response",
                  "Performance and Core Web Vitals checks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=maintenance">Start Maintenance Plan</Button>
                <Button href="/pricing" variant="outline">
                  View All Packages
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8 space-y-5">
              <p className="text-xs font-mono uppercase text-accent tracking-wider">Why Choose LaunchRoom</p>
              <h3 className="text-xl font-bold text-text-primary">No agency delays. Direct builder support.</h3>
              <p className="text-sm text-text-secondary leading-[1.7]">
                Traditional agencies charge high minimum monthly retainers and route requests through account managers. We provide agile, direct communication with the engineers who understand your code.
              </p>
              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Month-to-Month</span>
                <span>•</span>
                <span>Cancel Anytime</span>
                <span>•</span>
                <span>Fast Turnaround</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about website maintenance
          </h2>
        </AnimatedSection>

        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.q} delay={idx * 0.03} className="page-card panel p-6 sm:p-7">
              <h3 className="text-lg font-bold text-text-primary">{faq.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">{faq.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="pb-28">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="eyebrow eyebrow-invert">Get Peace of Mind</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Need reliable ongoing support for your website?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Let us take website maintenance off your plate so you can focus on growing your business.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=maintenance">
                Start Maintenance Support <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
