import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Code, Cpu, Database, Lock } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Custom Web Application Development | SaaS & Portal Builds | LaunchRoom Studio",
  description:
    "LaunchRoom builds scalable, high-performance custom web applications, SaaS platforms, and client portals using React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "web application development",
    "custom web app studio",
    "SaaS app developer",
    "Next.js web applications",
    "React developer India",
    "full stack web app agency",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/web-app-development`,
  },
  openGraph: {
    title: "Custom Web Application Development | LaunchRoom Studio",
    description:
      "Engineered web applications built for speed, real-time interactivity, and enterprise scalability.",
    url: `${siteConfig.url}/services/web-app-development`,
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Application Development",
  provider: {
    "@type": "Organization",
    name: "LaunchRoom",
    url: "https://launchroom.in",
  },
  areaServed: "Worldwide",
  description:
    "Custom web application development, SaaS frontends, dashboards, and API integrations.",
};

const features = [
  {
    icon: Code,
    title: "Next.js & TypeScript Stack",
    description: "Type-safe, maintainable, and high-performance server-rendered frontend and API structures.",
  },
  {
    icon: Database,
    title: "Database & Backend API",
    description: "Seamless integration with Supabase, PostgreSQL, Firebase, REST, and GraphQL endpoints.",
  },
  {
    icon: Lock,
    title: "Authentication & Role Security",
    description: "Secure user sign-ins, role-based access control, session management, and OAuth flows.",
  },
  {
    icon: Cpu,
    title: "Realtime & Dashboard UI",
    description: "Interactive data visualization, admin portals, and real-time state synchronization.",
  },
];

export default function WebAppDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss Web Application Development for my product.",
  );

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
        <Link href="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">Services</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Web App Development</span>
      </nav>

      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Web Application Development</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Custom web applications built to power modern digital products.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              From web dashboards and SaaS platforms to complex interactive tools, LaunchRoom builds
              scalable web applications engineered for seamless user experience and performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Build your web app <ArrowRight className="ml-2 h-4 w-4" />
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
          <p className="eyebrow">Engineering Quality</p>
          <h2 className="section-title mt-4">Built with modern, production-tested tech</h2>
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

      <section className="pb-28">
        <AnimatedSection className="panel-accent p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="card-label text-text-primary">Capabilities</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Full stack engineering from architecture to production launch.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                We craft clean user interfaces paired with resilient backends so your platform operates reliably at scale.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "SaaS Web Applications & Portals",
                  "Admin Panels & Analytics Dashboards",
                  "Stripe / Razorpay Payment Gateway Integration",
                  "API Design & Third-party Integrations",
                  "Automated CI/CD & Vercel Deployment",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/start">Start Your Brief</Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary">Web App Solutions</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">SaaS Core Development</p>
                  <p className="mt-1 text-sm text-text-secondary">Multi-tenant architecture, user onboarding, auth & billing.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Internal Business Tools</p>
                  <p className="mt-1 text-sm text-text-secondary">Workflows, document generation, and CRM tools.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Interactive Web Widgets</p>
                  <p className="mt-1 text-sm text-text-secondary">Calculators, dynamic quote builders, and custom lead tools.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
