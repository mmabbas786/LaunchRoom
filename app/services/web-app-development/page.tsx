import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Code2, Cpu, Database, Layers, Lock, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

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

const faqs = [
  {
    q: "What tech stack do you use for web applications?",
    a: "We build primarily with Next.js App Router, React 19, TypeScript, Tailwind CSS, and Node.js on the frontend/API layer, paired with PostgreSQL, Supabase, or Firebase for database and authentication.",
  },
  {
    q: "How do you handle user authentication and data privacy?",
    a: "We integrate industry-standard secure auth providers (such as Supabase Auth, NextAuth, or Clerk) with role-based access control (RBAC), encrypted sessions, and secure environment variables.",
  },
  {
    q: "Can you build payment flows and subscription billing?",
    a: "Yes. We integrate Stripe, Razorpay, or custom payment gateways with webhook handlers for automated user tier upgrades, invoice generation, and subscription lifecycle management.",
  },
  {
    q: "Do you provide API documentation and source code handover?",
    a: "Yes. You receive 100% intellectual property ownership, clean GitHub repository access, deployment guides, and post-launch technical support.",
  },
];

const jsonLdService = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/web-app-development#service`,
      name: "Custom Web Application Development",
      serviceType: "Web Application Development",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "Custom web application development, SaaS frontends, dashboards, and API integrations by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/web-app-development#faq`,
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

const features = [
  {
    icon: Code2,
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

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Web App Development", url: `${siteConfig.url}/services/web-app-development` },
  ]);

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

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
        <Link href="/" className="hover:text-accent">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">Services</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Web App Development</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Web Application Development</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Custom web applications built to power modern digital products.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              From web dashboards and customer portals to full SaaS platforms, LaunchRoom builds
              scalable, type-safe web applications engineered for speed, clean UX, and seamless usability.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=web-app">
                Build your web app <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Next.js &amp; TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Auth &amp; Permissions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Database &amp; APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% Code Handover</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Grid */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Engineering Quality</p>
          <h2 className="section-title mt-4">Built with modern, production-tested technologies</h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            We avoid unnecessary complexity while ensuring your application has a solid architectural foundation that can scale.
          </p>
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

      {/* Capabilities Section */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
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
                  "SaaS Web Applications & Member Portals",
                  "Admin Panels & Real-Time Analytics Dashboards",
                  "Stripe / Razorpay Payment Gateway Integration",
                  "Custom Database Schemas & API Integrations",
                  "Automated CI/CD & Vercel Edge Deployment",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=web-app">Start Your Brief</Button>
                <Button href="/work" variant="outline">
                  See Case Studies
                </Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary">Common Solutions We Engineer</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary">SaaS Core Platforms</p>
                  <p className="mt-1 text-sm text-text-secondary">Multi-tenant architecture, user onboarding, auth & subscription billing.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary">Internal Business Tools</p>
                  <p className="mt-1 text-sm text-text-secondary">Workflows, document generation, inventory views, and CRM tools.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary">Interactive Web Utilities</p>
                  <p className="mt-1 text-sm text-text-secondary">Calculators, dynamic quote builders, and custom lead generation widgets.</p>
                </div>
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
            Common questions about web application engineering
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
            <span className="eyebrow eyebrow-invert">Build With LaunchRoom</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Ready to engineer your custom web application?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Tell us about your product requirements. We will help scope the architecture and launch plan.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=web-app">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
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
