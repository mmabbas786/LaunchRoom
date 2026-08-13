import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Cpu, Globe, Gauge, Layers, Server, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Next.js Development Agency & Experts | High Performance Web Studio",
  description:
    "LaunchRoom is a specialized Next.js development agency. We build server-rendered, SEO-optimized React websites and enterprise web applications with Vercel App Router.",
  keywords: [
    "Next.js development agency",
    "Next.js developer India",
    "React Next.js agency",
    "Vercel deployment agency",
    "Next.js App Router developers",
    "Core Web Vitals Next.js optimization",
  ],
  alternates: {
    canonical: `${siteConfig.url}/nextjs-development`,
  },
  openGraph: {
    title: "Next.js Development Agency & Experts | LaunchRoom",
    description:
      "Expert Next.js App Router engineering, SSR/SSG architecture, and Vercel cloud deployment.",
    url: `${siteConfig.url}/nextjs-development`,
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Next.js Development",
  provider: {
    "@type": "Organization",
    name: "LaunchRoom",
    url: "https://launchroom.in",
  },
  areaServed: "Worldwide",
  description:
    "Next.js development, React App Router migration, performance optimization, and Vercel infrastructure setup.",
};

const advantages = [
  {
    icon: Gauge,
    title: "90+ Lighthouse & CWV Scores",
    description: "Built-in image optimization, server component streaming, and font optimizations for top Google scores.",
  },
  {
    icon: Server,
    title: "App Router & SSR / SSG",
    description: "Hybrid rendering models that combine static speed with real-time server rendering flexibility.",
  },
  {
    icon: Globe,
    title: "Instant Global CDN Edge",
    description: "Deploys automatically to Vercel's global edge network for fast response worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Modern TypeScript",
    description: "Strict TypeScript typing preventing runtime errors and ensuring maintainability.",
  },
];

export default function NextJsDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Next.js Development for my project.",
  );

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Next.js Development Studio</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Custom Next.js engineering built for ultimate speed &amp; top SEO ranks.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              We leverage the full power of Next.js App Router, React 19, Server Components, and Tailwind CSS
              to build digital experiences that load instantly and scale effortlessly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Hire Next.js Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pb-20">
        <AnimatedSection className="text-center">
          <p className="eyebrow">Technical Mastery</p>
          <h2 className="section-title mt-4">Why Next.js is our framework of choice</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <AnimatedSection key={adv.title} delay={idx * 0.05} className="page-card panel flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-text-primary">{adv.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">{adv.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="pb-28">
        <AnimatedSection className="panel-accent p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="card-label text-text-primary">Next.js Services</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Greenfield Next.js builds &amp; legacy React upgrades.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                Whether starting fresh or migrating an existing CRA / WordPress site to Next.js, we ensure zero downtime and improved SEO ranks.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Next.js App Router Architecture",
                  "Server-Side Rendering (SSR) & Dynamic Caching",
                  "Headless CMS Integration (Sanity, Strapi, Contentful)",
                  "Vercel Deployment & Domain DNS Management",
                  "Full Technical SEO & Dynamic Schema Markup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/work">See Shipped Projects</Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary">Our Next.js Stack</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Frontend Logic</p>
                  <p className="mt-1 text-sm text-text-secondary">Next.js 16+, React 19, TypeScript, Framer Motion</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Styling &amp; UX</p>
                  <p className="mt-1 text-sm text-text-secondary">Tailwind CSS, Lucide Icons, Custom Design Tokens</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Analytics &amp; Cloud</p>
                  <p className="mt-1 text-sm text-text-secondary">Google Analytics GA4, Vercel Speed Insights, Resend API</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
