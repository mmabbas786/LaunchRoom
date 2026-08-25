import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Database,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "SaaS Development Services | Custom Software & Platforms | LaunchRoom Studio",
  description:
    "LaunchRoom engineers scalable SaaS web applications, subscription platforms, multi-tenant databases, Stripe billing integrations, and client dashboards.",
  keywords: [
    "SaaS development services",
    "custom SaaS agency",
    "SaaS MVP developers",
    "subscription platform development",
    "multi-tenant web app developers",
    "Next.js SaaS builders",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/saas-development`,
  },
  openGraph: {
    title: "SaaS Development Services | LaunchRoom Studio",
    description:
      "Turn your software idea into a recurring-revenue SaaS platform with multi-tenant architecture, secure billing, and fast UX.",
    url: `${siteConfig.url}/services/saas-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is included in SaaS development with LaunchRoom?",
    a: "We engineer your SaaS platform end-to-end: UI/UX design, Next.js frontend, multi-tenant database schema, user authentication & role permissions, Stripe/Razorpay subscription billing with webhooks, client dashboards, admin management portals, and automated cloud deployment.",
  },
  {
    q: "How do you handle multi-tenancy and data isolation?",
    a: "We architect multi-tenant databases (PostgreSQL / Supabase) with row-level security (RLS) or organization-based tenant IDs, ensuring data from different company accounts remains strictly segregated and secure.",
  },
  {
    q: "Can we integrate automated recurring billing and free trials?",
    a: "Yes. We implement Stripe Billing or Razorpay Subscriptions with automated trial periods, plan upgrade/downgrade logic, proration calculations, customer portals for self-service invoice downloads, and dunning workflows for failed payments.",
  },
  {
    q: "Do we own the intellectual property and source code?",
    a: "Yes, 100%. All custom code, database migrations, UI assets, and API configurations belong entirely to you with no proprietary licensing fees or vendor lock-in.",
  },
  {
    q: "What is the typical timeline to launch a SaaS MVP?",
    a: "Most SaaS MVP platforms with core subscription flows, user dashboards, and authentication launch within 3 to 6 weeks depending on feature complexity.",
  },
];

const jsonLdSaas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/saas-development#service`,
      name: "SaaS Development Services",
      serviceType: "SaaS Development",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "Custom SaaS platform engineering, multi-tenant databases, Stripe subscription billing, and user dashboards by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/saas-development#faq`,
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

const saasPillars = [
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description: "Team workspaces, organization hierarchies, and role-based permissions (admin, member, viewer) with strict database isolation.",
  },
  {
    icon: CreditCard,
    title: "Subscription & Billing Flows",
    description: "Stripe & Razorpay checkout, monthly/annual tiers, usage-based metering, self-service customer portals, and automated webhooks.",
  },
  {
    icon: Lock,
    title: "Secure Authentication & SSO",
    description: "Email/password, Google/GitHub OAuth, magic link logins, session management, and two-factor authentication support.",
  },
  {
    icon: Layers,
    title: "Interactive User Dashboards",
    description: "Fast, responsive web interfaces with real-time data views, searchable tables, dynamic charts, and CSV/PDF export tools.",
  },
  {
    icon: Database,
    title: "Scalable Cloud Databases",
    description: "PostgreSQL, Supabase, or Firebase schemas optimized for high query throughput, automatic backups, and data integrity.",
  },
  {
    icon: Zap,
    title: "Admin & Operations Portals",
    description: "Internal back-office tools for your team to manage user accounts, inspect subscription states, and monitor platform health.",
  },
];

export default function SaasDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss SaaS Development for my software product.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "SaaS Development", url: `${siteConfig.url}/services/saas-development` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSaas) }}
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
        <span className="text-accent">SaaS Development</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">SaaS Platform Engineering</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Turn your software idea into a scalable, revenue-generating SaaS product.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              From multi-user account architectures and Stripe subscription billing to interactive client dashboards,
              LaunchRoom engineers production-grade software-as-a-service platforms built to scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=saas">
                Scope Your SaaS Platform <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Multi-Tenant Auth</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Stripe / Razorpay Billing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>3-6 Week Delivery</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Core SaaS Capabilities */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Platform Capabilities</p>
          <h2 className="section-title mt-4">
            Everything your SaaS needs to onboard, bill, and retain users
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            We handle the complete technical foundation so you can focus on customer acquisition, product marketing, and business growth.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saasPillars.map((item, idx) => {
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

      {/* The SaaS Architecture Roadmap */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="card-label text-text-primary">Engineering Lifecycle</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                From concept wireframe to live paying subscribers.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                We organize SaaS development into structured milestones so you have full visibility at every stage of the build.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "1. Database schema design & tenant isolation model",
                  "2. Interactive dashboard UX & component library in Figma",
                  "3. Type-safe Next.js frontend & API route implementation",
                  "4. Stripe subscription billing & customer portal integration",
                  "5. Automated CI/CD deployment on Vercel Edge & testing",
                  "6. Complete code handover walkthrough & launch support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=saas">Start Your SaaS Brief</Button>
                <Button href="/work" variant="outline">
                  See Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8 space-y-4">
              <p className="text-xs font-mono uppercase text-accent tracking-wider">Example SaaS Builds</p>
              <div className="space-y-3">
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">B2B Workflow Platforms</p>
                  <p className="mt-1 text-xs text-text-secondary">Multi-user document generation, approval funnels, and team task managers.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Analytics &amp; Data Portals</p>
                  <p className="mt-1 text-xs text-text-secondary">Live metrics tracking, customer event monitoring, and automated report generators.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Subscription Member Communities</p>
                  <p className="mt-1 text-xs text-text-secondary">Gated video/content libraries, digital download hubs, and paid subscriber tiers.</p>
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
            Common questions about SaaS development
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
            <span className="eyebrow eyebrow-invert">Build Your SaaS</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Ready to engineer your SaaS platform?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Share your software concept with us. We will help map out the architecture, timeline, and starting milestone quote.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=saas">
                Start a SaaS Project <ArrowRight className="ml-2 h-4 w-4" />
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
