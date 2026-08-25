import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronRight,
  Compass,
  Eye,
  FolderKanban,
  Image as ImageIcon,
  Palette,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Portfolio Website Development | Showcase Websites | LaunchRoom",
  description:
    "Custom portfolio website development for designers, architects, photographers, creators, and freelancers. Visual case study layouts, fast loading, and inquiry triggers.",
  keywords: [
    "portfolio website development",
    "portfolio website builder",
    "photographer portfolio website",
    "architect portfolio website",
    "designer portfolio developer India",
    "creative portfolio website",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/portfolio-website-development`,
  },
  openGraph: {
    title: "Portfolio Website Development | LaunchRoom",
    description:
      "Bespoke portfolio websites engineered with high visual polish, fast-loading galleries, and direct project inquiry channels.",
    url: `${siteConfig.url}/services/portfolio-website-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "How many past projects can I showcase in my portfolio?",
    a: "Standard portfolio builds typically launch with 6 to 12 featured case studies or galleries, structured so you can easily add more projects over time without disrupting the layout.",
  },
  {
    q: "Will high-resolution images slow down the website?",
    a: "No. We implement modern image compression, WebP/AVIF formatting, responsive srcset resolution, and lazy loading so your photos and graphics look razor-sharp while loading in milliseconds.",
  },
  {
    q: "Can I include an about page, resume, and downloadable PDF media kit?",
    a: "Yes. We integrate dedicated bio sections, client lists, awards/press mentions, downloadable CVs, and direct project contact forms.",
  },
  {
    q: "Can I choose between dark mode and light mode?",
    a: "Yes. We can design your portfolio in a sleek dark aesthetic, a clean editorial light aesthetic, or provide an automatic system toggle.",
  },
];

const whoItsFor = [
  {
    title: "Designers & Art Directors",
    desc: "Interactive UI/UX case studies, branding showcases, Figma prototypes, and client outcome summaries.",
    icon: Palette,
  },
  {
    title: "Photographers & Videographers",
    desc: "Full-bleed photo galleries, categorized shoot portfolios (fashion, wedding, commercial), and direct booking triggers.",
    icon: Camera,
  },
  {
    title: "Architects & Interior Designers",
    desc: "Blueprint highlights, project location tags, high-res interior walkthroughs, and material palettes.",
    icon: Compass,
  },
  {
    title: "Consultants & Freelancers",
    desc: "Executive bios, client logos, past engagement metrics, speaking engagements, and consultation links.",
    icon: UserCheck,
  },
];

export default function PortfolioWebsitePage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I need a custom portfolio website to showcase my work.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Portfolio Website Development", url: `${siteConfig.url}/services/portfolio-website-development` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Portfolio Website Development",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
    },
    areaServed: ["India", "Worldwide"],
    description:
      "Custom portfolio website design and development for designers, photographers, architects, creators, and freelancers.",
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
        <span className="text-accent">Portfolio Websites</span>
      </nav>

      {/* Hero */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Showcase &amp; Portfolio Websites</span>
            </div>
            <h1 className="page-hero-title mt-6 text-on-dark font-display font-extrabold">
              Portfolio websites that showcase your work and win high-ticket clients.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              First impressions dictate your client rates. We craft visually stunning, fast-loading portfolio
              websites for designers, photographers, architects, and creators that make your work look authoritative
              and memorable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Build Your Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Visual Case Studies</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast Image Loading</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Mobile Polish</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Direct Lead Routing</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Target Creative Niches */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Creative Niches</p>
          <h2 className="section-title mt-4">
            Bespoke showcases tailored to your discipline
          </h2>
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

      {/* Demo Teaser */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase text-accent font-bold">Interactive Concept</p>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
              Explore Our Photographer Demo Concept
            </h3>
            <p className="text-sm text-text-secondary mt-1 max-w-2xl">
              See a clickable photography studio demo with image galleries, service breakdowns, and booking triggers.
            </p>
          </div>
          <Button href="/demos/photographer">
            View Photographer Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about portfolio websites
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
            Ready to elevate your creative presentation?
          </h2>
          <p className="mt-4 text-[17px] text-on-dark-muted max-w-2xl mx-auto">
            Share your work with us and we will craft a stunning digital portfolio ready to impress clients.
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
