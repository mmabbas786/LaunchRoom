import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  LayoutGrid,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Custom Web Solutions & Portal Development | LaunchRoom Studio",
  description:
    "LaunchRoom builds custom web tools, dynamic quote calculators, internal dashboards, booking systems, and API integrations tailored to your specific business workflows.",
  keywords: [
    "custom web development",
    "custom web portal development",
    "custom calculator development",
    "business web solutions",
    "API integration development",
    "custom dashboard developers",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/custom-web-development`,
  },
  openGraph: {
    title: "Custom Web Solutions & Portal Development | LaunchRoom Studio",
    description:
      "Tailored web tools, dynamic quote calculators, internal dashboards, and custom API integrations engineered for your business.",
    url: `${siteConfig.url}/services/custom-web-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What qualifies as a custom web solution?",
    a: "Custom web solutions include interactive ROI or quotation calculators, private customer portals, appointment booking systems with complex rules, automated PDF document generators, internal CRM dashboards, and multi-step inquiry funnels with custom backend routing.",
  },
  {
    q: "How do custom web solutions differ from standard websites?",
    a: "Standard websites focus primarily on presenting information, brand credibility, and collecting basic contact forms. Custom web solutions involve interactive logic, calculations, database read/write operations, user authentication, or third-party API workflows.",
  },
  {
    q: "Can you integrate with our existing CRM, ERP, or payment systems?",
    a: "Yes. We regularly connect custom web tools with platforms like Stripe, Razorpay, Supabase, Airtable, HubSpot, Google Sheets, custom REST APIs, and webhook endpoints.",
  },
  {
    q: "How do you quote custom web development projects?",
    a: "After an initial discovery conversation where we map out your required inputs, outputs, user flows, and integrations, we deliver a transparent fixed-price proposal and delivery schedule.",
  },
  {
    q: "Do we own the source code after launch?",
    a: "Yes, 100%. All custom code, database schemas, and visual assets belong entirely to you with zero licensing fees or vendor lock-in.",
  },
];

const jsonLdCustom = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/custom-web-development#service`,
      name: "Custom Web Solutions & Portal Development",
      serviceType: "Custom Web Development",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "Custom web calculators, internal dashboards, booking systems, and API integrations by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/custom-web-development#faq`,
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

const solutions = [
  {
    icon: Calculator,
    title: "Interactive Calculators & Estimators",
    description: "Dynamic pricing calculators, ROI estimators, loan calculators, and instant quote builders that engage users and pre-qualify leads.",
  },
  {
    icon: LayoutGrid,
    title: "Customer & Member Portals",
    description: "Private, authenticated areas where clients can access documents, manage bookings, view service status, and update profile data.",
  },
  {
    icon: Workflow,
    title: "Internal Operations Dashboards",
    description: "Lightweight admin panels to track leads, manage customer inquiries, approve submissions, and streamline repetitive internal tasks.",
  },
  {
    icon: Cpu,
    title: "Third-Party API Integrations",
    description: "Seamless synchronization with payment gateways, CRMs, email marketing tools, inventory databases, and cloud webhooks.",
  },
  {
    icon: Database,
    title: "Data Views & Visualizations",
    description: "Interactive charts, searchable tables, dynamic filtering, and exportable reports designed for speed and clarity.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication & Roles",
    description: "Role-based access controls, magic-link logins, OAuth integrations, and encrypted database connections.",
  },
];

export default function CustomWebDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to discuss a Custom Web Solution for my business.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Custom Web Solutions", url: `${siteConfig.url}/services/custom-web-development` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCustom) }}
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
        <span className="text-accent">Custom Web Solutions</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Custom Web Solutions</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              Tailored web tools and digital systems built for your exact business workflows.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              When standard templates and generic SaaS plugins cannot solve your specific operational needs,
              LaunchRoom engineers custom web applications, dynamic calculators, customer portals, and API automations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=custom">
                Scope Your Custom Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Bespoke Logic</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>API Integrations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fixed Project Quotes</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title mt-4">
            Custom web systems designed around how you work
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            We build modular, maintainable tools using modern TypeScript, React, Next.js, and cloud databases so your system performs reliably.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => {
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

      {/* How It Works Section */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="card-label text-text-primary">Direct Scoping Process</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                From business requirement to live custom tool in 1 to 4 weeks.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                You do not need to prepare a 50-page technical specification. We map out the exact data inputs, calculations, user workflows, and integrations needed to get your tool live fast.
              </p>

              <div className="mt-6 space-y-2.5">
                {[
                  "1. Workflow discovery & feature priority map",
                  "2. Interactive wireframes & calculation testing",
                  "3. Type-safe full-stack engineering & API hookup",
                  "4. User testing, security audit & production cloud launch",
                  "5. Handover documentation & post-launch warranty",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=custom">Start Your Brief</Button>
                <Button href="/contact" variant="outline">
                  Discuss Scope
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8 space-y-4">
              <p className="text-xs font-mono uppercase text-accent tracking-wider">Example Builds</p>
              <div className="space-y-3">
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Quote &amp; Estimate Builders</p>
                  <p className="mt-1 text-xs text-text-secondary">Dynamic step-by-step price calculators that send pre-filled lead briefs to sales teams.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Document &amp; PDF Generators</p>
                  <p className="mt-1 text-xs text-text-secondary">Automated generation of invoices, certificates, and compliance reports from form inputs.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Private Client Dashboards</p>
                  <p className="mt-1 text-xs text-text-secondary">Secure login areas for clients to upload assets, track milestones, and view analytics.</p>
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
            Common questions about custom web development
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
            <span className="eyebrow eyebrow-invert">Build What You Need</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Have a custom web tool or portal idea?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Share your business requirements with us. We will help scope the cleanest version and provide a clear quote and timeline.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=custom">
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
