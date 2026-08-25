import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Layers,
  MousePointerClick,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "High-Converting Landing Page Development | LaunchRoom",
  description:
    "Custom landing page design and development for marketing campaigns, Google & Meta ads, product launches, and lead generation funnels.",
  keywords: [
    "landing page development",
    "landing page design India",
    "high converting landing pages",
    "ad campaign landing page",
    "lead generation landing page",
    "product launch landing page",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/landing-page-development`,
  },
  openGraph: {
    title: "High-Converting Landing Page Development | LaunchRoom",
    description:
      "Single-page websites engineered for sub-second speeds, zero distractions, and maximum conversion rates on ad traffic.",
    url: `${siteConfig.url}/services/landing-page-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Why should I use a dedicated landing page instead of my existing website?",
    a: "Standard websites contain multiple navigation links and distractions that dilute ad traffic. A dedicated landing page is laser-focused on a single offer and a single call-to-action, yielding dramatically higher conversion rates and lower cost-per-lead.",
  },
  {
    q: "Can you set up tracking pixels for Google Ads and Meta Ads?",
    a: "Yes. We configure Google Tag Manager, Google Analytics 4, Meta Pixel, and conversion tracking events so your ad platforms can accurately track form submissions, WhatsApp clicks, and purchases.",
  },
  {
    q: "How quickly can you build and launch a landing page?",
    a: "Most landing page projects are planned, designed, coded, and deployed in 3 to 7 business days.",
  },
  {
    q: "Will the landing page load fast on mobile data networks?",
    a: "Yes. We write lightweight, modern code without bloated WordPress builders. Our landing pages consistently score 95+ on Google PageSpeed Insights and load in under 1 second.",
  },
];

const pillars = [
  {
    title: "Distraction-Free Focus",
    desc: "Single goal, clear value proposition, and persistent call-to-action buttons that guide visitors directly into your lead funnel.",
    icon: Target,
  },
  {
    title: "Sub-Second Loading Speed",
    desc: "Optimized asset delivery and clean code ensure mobile visitors never bounce due to slow loading times.",
    icon: Zap,
  },
  {
    title: "Conversion Copy Hierarchy",
    desc: "Compelling headlines, problem/solution structuring, social proof placement, and clear objection handling.",
    icon: TrendingUp,
  },
  {
    title: "Instant Lead Capture",
    desc: "Frictionless forms, instant WhatsApp routing, and webhook connections to your CRM or Google Sheets.",
    icon: MousePointerClick,
  },
];

export default function LandingPageDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I need a high-converting landing page for my campaign.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Landing Page Development", url: `${siteConfig.url}/services/landing-page-development` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Landing Page Development Services",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
    },
    areaServed: ["India", "Worldwide"],
    description:
      "Custom landing page design and development for marketing campaigns, ad traffic, and lead generation by LaunchRoom.",
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted"
      >
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">
          Services
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Landing Pages</span>
      </nav>

      {/* Hero */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Target className="h-3.5 w-3.5" />
              <span>High-Converting Landing Pages</span>
            </div>
            <h1 className="page-hero-title mt-6 text-on-dark font-display font-extrabold">
              Landing pages engineered to convert ad traffic into paying customers.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop burning ad budget on slow, generic homepages. We build focused, single-purpose landing pages
              designed for Google Ads, Meta campaigns, and product launches with sub-second loading speed and
              frictionless lead intake.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Build a Landing Page <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>3-7 Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>95+ Speed Score</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Ad Pixels Configured</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Instant WhatsApp Leads</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Conversion Anatomy */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">The Conversion Formula</p>
          <h2 className="section-title mt-4">
            Why our landing pages outperform generic websites
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                delay={idx * 0.04}
                className="panel p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about landing pages
          </h2>
        </AnimatedSection>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.q} delay={idx * 0.03} className="panel p-6">
              <h3 className="text-lg font-bold text-text-primary">{faq.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">{faq.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <AnimatedSection className="panel-dark p-8 sm:p-12 text-center rounded-2xl">
          <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-on-dark">
            Ready to maximize your ad conversions?
          </h2>
          <p className="mt-4 text-[17px] text-on-dark-muted max-w-2xl mx-auto">
            Tell us about your offer or campaign. We will build a high-converting landing page ready to launch in days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/start" className="px-8 py-3.5">
              Start a Project
            </Button>
            <Button href={whatsappUrl} variant="outline" className="px-6 py-3.5">
              Discuss on WhatsApp
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
