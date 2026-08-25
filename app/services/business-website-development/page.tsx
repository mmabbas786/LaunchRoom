import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  MapPin,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Business Website Development Services | Custom Company Websites | LaunchRoom",
  description:
    "Custom business website development for companies, MSMEs, agencies, and consultancies in Kolkata and across India. Clean design, fast loading, and lead-converting layouts.",
  keywords: [
    "business website development",
    "company website design",
    "business website development Kolkata",
    "MSME website development India",
    "corporate website development",
    "professional website builder",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/business-website-development`,
  },
  openGraph: {
    title: "Business Website Development Services | LaunchRoom",
    description:
      "Custom business websites engineered for credibility, speed, and qualified lead conversion for companies across India.",
    url: `${siteConfig.url}/services/business-website-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What pages are included in a standard business website?",
    a: "Typically, a business website includes a Home page, About the Company, Services / Offerings breakdown, Case Studies or Proof of Work, Client Testimonials/Trust markers, FAQ section, and a Contact page with inquiry forms and direct WhatsApp triggers.",
  },
  {
    q: "Do I need to write all the website content myself?",
    a: "No. You only need to share basic information about your company, services, and target customers. We help organize your messaging into clear, persuasive copy structured for both visitors and search engines.",
  },
  {
    q: "Can you optimize our business website for Google Search (SEO)?",
    a: "Yes. Every business website is built with clean semantic HTML5, fast Core Web Vitals performance, metadata, OpenGraph cards, Schema.org Organization markup, and Google Search Console indexing as standard deliverables.",
  },
  {
    q: "How long does it take to design and launch our business website?",
    a: "Most business websites are designed, developed, and deployed within 1 to 2 weeks, depending on the number of custom pages and how quickly content approvals are finalized.",
  },
  {
    q: "Can customers contact us directly via WhatsApp?",
    a: "Yes. We integrate direct WhatsApp buttons with prefilled inquiry messages, so visitors browsing from mobile phones can instantly reach your sales or support desk.",
  },
];

const whoItsFor = [
  {
    title: "Corporate & Enterprise Firms",
    desc: "Establish brand authority, showcase corporate governance, and present service capabilities to prospective enterprise partners.",
    icon: Building2,
  },
  {
    title: "Local MSMEs & Manufacturers",
    desc: "Reach domestic and international buyers with a credible digital presence, product catalogues, and direct inquiry pathways.",
    icon: Globe,
  },
  {
    title: "Agencies & Consultancies",
    desc: "Demonstrate expertise, publish client success stories, and acquire high-ticket corporate consultation leads.",
    icon: Briefcase,
  },
  {
    title: "Professional Service Providers",
    desc: "Chartered accountants, legal firms, financial advisors, and architects looking to build trust with local and regional clients.",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Custom Figma UI design tailored to your industry",
  "Sub-second page loading speed on all devices",
  "Lead generation forms with instant email/WhatsApp routing",
  "Google Business profile linking & local SEO foundations",
  "Custom domain connection, SSL certificate & DNS setup",
  "Google Analytics (GA4) & Search Console integration",
  "1-3 months post-launch warranty support",
  "Complete code and asset handover",
];

export default function BusinessWebsitePage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I need a professional business website for my company.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Business Website Development", url: `${siteConfig.url}/services/business-website-development` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Website Development Services",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
    },
    areaServed: ["Kolkata", "West Bengal", "India", "Worldwide"],
    description:
      "Custom business website development services for companies, MSMEs, agencies, and consultancies in Kolkata and across India.",
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
        <span className="text-accent">Business Websites</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Business Website Development</span>
            </div>
            <h1 className="page-hero-title mt-6 text-on-dark font-display font-extrabold">
              Custom business websites that build credibility and convert clients.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              We design and build bespoke company websites for businesses in Kolkata and across India.
              Clear messaging, fast loading speeds, and structured inquiry paths that turn visitors into
              valuable commercial leads.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Start Your Business Website <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>1-2 Week Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Local &amp; Pan-India SEO</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Complete Launch Support</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Who It Is For */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Who We Build For</p>
          <h2 className="section-title mt-4">
            Designed for businesses that need immediate online trust
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Whether your customers are local to West Bengal or across international markets,
            your website should instantly answer who you are and why they should work with you.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whoItsFor.map((item, idx) => {
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

      {/* What's Included */}
      <section className="pb-20">
        <AnimatedSection className="panel p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="card-label">Deliverables</p>
              <h2 className="text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.15]">
                Everything your business needs to go live with confidence.
              </h2>
              <p className="text-[16px] leading-[1.75] text-text-secondary">
                We handle the technical execution end-to-end so you never have to deal with complex
                hosting dashboards, broken mobile layouts, or slow loading speeds.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/start">Get a Project Estimate</Button>
                <Button href="/pricing" variant="outline">
                  View Packages &amp; Pricing
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border bg-surface-2 p-6 sm:p-8 space-y-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Local Proof Callout */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-accent font-bold">
              <MapPin className="h-4 w-4" />
              <span>Real Kolkata Case Study</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
              New India Stores — Strand Road, Kolkata
            </h3>
            <p className="text-sm text-text-secondary mt-1 max-w-2xl">
              Ship chandling business website built in 5 days, establishing immediate international credibility for global maritime clients.
            </p>
          </div>
          <Button href="/work/new-india-stores" className="shrink-0">
            Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about business websites
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
            Ready to build a credible website for your business?
          </h2>
          <p className="mt-4 text-[17px] text-on-dark-muted max-w-2xl mx-auto">
            Tell us about your business goals and we will structure a clean, fast website tailored for your market.
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
