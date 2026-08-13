import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Globe, Layout, ShieldCheck, Zap } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Website Development for Startups & Businesses",
  description:
    "LaunchRoom builds fast, modern, mobile-first websites for startups and growing businesses. High converting design, SEO optimized, and fast turnaround.",
  keywords: [
    "website development",
    "startup website design",
    "business web development",
    "responsive website builder",
    "SEO optimized websites",
    "custom web development studio",
  ],
  alternates: {
    canonical: `${siteConfig.url}/website-development`,
  },
  openGraph: {
    title: "Website Development for Startups | LaunchRoom",
    description:
      "Custom, high-performing websites built for conversion, speed, and clean mobile responsiveness.",
    url: `${siteConfig.url}/website-development`,
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Development",
  provider: {
    "@type": "Organization",
    name: "LaunchRoom",
    url: "https://launchroom.in",
  },
  areaServed: "Worldwide",
  description:
    "Custom website design and development for startups, local businesses, and growing brands.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "14999",
  },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Sub-second loading times powered by Next.js, modern image optimization, and clean asset delivery.",
  },
  {
    icon: Layout,
    title: "Conversion-Focused UX",
    description: "Custom layouts engineered to turn site visitors into clients, bookings, and active leads.",
  },
  {
    icon: Globe,
    title: "On-Page SEO Included",
    description: "Structured headings, OpenGraph preview cards, meta descriptions, and sitemap registration baked in.",
  },
  {
    icon: ShieldCheck,
    title: "Mobile Responsive & Accessible",
    description: "Flawless rendering on iPhone, Android, tablets, and desktop displays with smooth interactions.",
  },
];

const faqs = [
  {
    q: "How long does a website build take?",
    a: "Standard business websites ship in 1 to 3 weeks depending on content scope and revision speed.",
  },
  {
    q: "Do you handle domain, hosting, and launch?",
    a: "Yes! We handle Vercel/Netlify hosting deployment, domain setup, DNS records, and Google Analytics integration.",
  },
  {
    q: "Can I update the content after launch?",
    a: "Absolutely. We build modular code structures or CMS integrations so you can manage your content with ease.",
  },
];

export default function WebsiteDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Website Development for my business.",
  );

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Website Development</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              High-converting websites engineered to build instant credibility.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              LaunchRoom designs and codes custom websites for startups and growing businesses.
              Fast load speeds, mobile responsiveness, and technical SEO standard on every build.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Start your website project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Key Benefits */}
      <section className="pb-20">
        <AnimatedSection className="text-center">
          <p className="eyebrow">Why Choose LaunchRoom</p>
          <h2 className="section-title mt-4">Built for speed, clarity, and search results</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={idx * 0.05} className="page-card panel flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Package Offerings */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="card-label text-text-primary">Custom Packages</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                From single-page landing pages to full corporate sites.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                We deliver clean code, high SEO standards, and slick animations so your brand stands out from generic WordPress templates.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Custom Figma UI/UX Design",
                  "Next.js & HTML5 modern stack",
                  "Google Search Console & GA4 Setup",
                  "Lightning fast Core Web Vitals score",
                  "Post-launch technical support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/pricing">View Package Pricing</Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary">Popular Website Builds</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-border p-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Startups & MVPs</span>
                  <p className="mt-1 font-semibold text-text-primary">SaaS & Product Landing Pages</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Professional Services</span>
                  <p className="mt-1 font-semibold text-text-primary">Law Firms, CA Consultants, & Agencies</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Local & Enterprise</span>
                  <p className="mt-1 font-semibold text-text-primary">Clinics, Restaurants, & Portfolios</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-28">
        <AnimatedSection>
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">Everything you need to know about website development</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="page-card panel">
                <h3 className="text-lg font-bold text-text-primary">{faq.q}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
