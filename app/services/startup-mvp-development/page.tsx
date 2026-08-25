import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, FastForward, Lightbulb, Rocket, ShieldCheck, Target, TrendingUp } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Startup MVP Development Studio | Rapid Product Launch | LaunchRoom",
  description:
    "LaunchRoom helps founders and startups turn product ideas into real, working MVPs in 2 to 4 weeks. High speed, fixed scope, and founder-friendly pricing.",
  keywords: [
    "startup mvp development",
    "mvp builder studio",
    "rapid MVP launch agency",
    "software development for startups",
    "founder app launch",
    "minimum viable product development",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/startup-mvp-development`,
  },
  openGraph: {
    title: "Startup MVP Development Studio | LaunchRoom Studio",
    description:
      "Turn your startup idea into a live product in 2-4 weeks. Fixed timeline, practical scope, lean engineering.",
    url: `${siteConfig.url}/services/startup-mvp-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "How does the 2-4 week MVP sprint work?",
    a: "Week 1 is dedicated to scoping, wireframes, and database architecture. Weeks 2 and 3 focus on core engineering and API integrations. Week 4 covers end-to-end testing, payment verification, and production cloud deployment on Vercel.",
  },
  {
    q: "Do I need a technical co-founder to build an MVP with LaunchRoom?",
    a: "No. We act as your technical delivery partner during the build, helping you make sound architectural decisions, avoid technical debt, and launch with clean, documented code.",
  },
  {
    q: "Do you take equity in my startup?",
    a: "No. We operate strictly on a fixed-fee milestone model. You retain 100% intellectual property ownership and full codebase rights.",
  },
  {
    q: "What tech stack do you use for startup MVPs?",
    a: "We use Next.js App Router, React 19, TypeScript, Tailwind CSS, and Supabase / Firebase. This allows rapid iteration without sacrificing long-term scalability.",
  },
  {
    q: "What happens after the MVP launches?",
    a: "We provide post-launch warranty support and offer flexible ongoing maintenance retainers or follow-on development sprints as you gather user feedback.",
  },
];

const jsonLdMvp = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/services/startup-mvp-development#service`,
      name: "Startup MVP Development Studio",
      serviceType: "Startup MVP Development",
      provider: {
        "@type": "Organization",
        name: "LaunchRoom",
        url: siteConfig.url,
      },
      areaServed: "Worldwide",
      description:
        "Rapid Minimum Viable Product (MVP) design, prototyping, and engineering for early-stage founders and startups by LaunchRoom Studio.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/services/startup-mvp-development#faq`,
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

const steps = [
  {
    step: "01",
    title: "Product Scope & Core Feature Map",
    description: "We strip away bloat and define the absolute minimum essential features needed to validate your business model with real users.",
  },
  {
    step: "02",
    title: "UI Wireframes & Clickable Prototype",
    description: "Polished interactive design in Figma that communicates your value proposition and builds immediate credibility with early testers.",
  },
  {
    step: "03",
    title: "Rapid Full-Stack Build",
    description: "Engineered using Next.js, React, TypeScript, and Supabase / PostgreSQL so your MVP operates reliably without technical debt.",
  },
  {
    step: "04",
    title: "Deploy, Track & Handover",
    description: "Production cloud deployment on Vercel with analytics and event tracking configured so you can measure user retention.",
  },
];

export default function StartupMvpDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I am a founder looking to build a Startup MVP.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Startup MVP Development", url: `${siteConfig.url}/services/startup-mvp-development` },
  ]);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMvp) }}
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
        <span className="text-accent">Startup MVP Development</span>
      </nav>

      {/* Hero Section */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-invert">Startup MVP Studio</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              From startup idea to live working product in 2 to 4 weeks.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop over-engineering before Day 1. LaunchRoom builds lean, production-ready MVPs designed to get early user traction, investor validation, and real customer revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start?service=mvp">
                Discuss Your MVP <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                WhatsApp Founder Chat
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>2-4 Week Timeline</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Zero Equity Required</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fixed Milestone Quotes</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Execution Blueprint */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Execution Blueprint</p>
          <h2 className="section-title mt-4">How we launch your MVP with zero drag</h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            A structured, fast-paced development framework designed to ship real software quickly without scope creep.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <AnimatedSection key={item.step} delay={idx * 0.05} className="page-card panel flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-accent font-mono">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Founder-First Model */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="card-label text-text-primary">Founder-First Model</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Fixed pricing, predictable timelines, zero equity required.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                You retain 100% intellectual property and full codebase ownership. We operate like your dedicated technical engineering arm during the build.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Clear fixed-fee project milestone quotes",
                  "Rapid prototyping & user flow validation",
                  "Analytics & event tracking included",
                  "Vercel, Supabase, & Firebase integrations",
                  "Handover documentation & code walkthrough",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/start?service=mvp">Get Your MVP Quote</Button>
                <Button href="/work" variant="outline">
                  See Case Studies
                </Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-text-primary">What We Focus On in Version 1</h3>
              <div className="space-y-3">
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Core Value Proposition</p>
                  <p className="mt-1 text-xs text-text-secondary">The one primary workflow that solves the user problem.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Clean Onboarding &amp; Auth</p>
                  <p className="mt-1 text-xs text-text-secondary">Frictionless signup, login, and profile creation.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4 bg-surface-2">
                  <p className="font-semibold text-text-primary text-sm">Monetization / Lead Intake</p>
                  <p className="mt-1 text-xs text-text-secondary">Stripe payment or intake forms to capture customer commitment.</p>
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
            Common questions about startup MVP development
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
            <span className="eyebrow eyebrow-invert">Validate Your Idea</span>
            <h2 className="text-[clamp(32px,4vw,50px)] font-extrabold text-on-dark leading-[1.1] mt-4">
              Ready to launch your startup MVP?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Tell us about your startup concept. We will help scope the leanest version to test with real users.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Button href="/start?service=mvp">
                Start MVP Brief <ArrowRight className="ml-2 h-4 w-4" />
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
