import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FastForward, Lightbulb, Rocket, ShieldCheck, Target, TrendingUp } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Startup MVP Development Studio | Rapid Product Launch",
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
    canonical: `${siteConfig.url}/startup-mvp-development`,
  },
  openGraph: {
    title: "Startup MVP Development Studio | LaunchRoom",
    description:
      "Turn your startup idea into a live product in 2-4 weeks. Fixed timeline, practical scope, lean engineering.",
    url: `${siteConfig.url}/startup-mvp-development`,
    type: "website",
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Startup MVP Development",
  provider: {
    "@type": "Organization",
    name: "LaunchRoom",
    url: "https://launchroom.in",
  },
  areaServed: "Worldwide",
  description:
    "Rapid Minimum Viable Product (MVP) design, prototyping, and engineering for early-stage founders and startups.",
};

const steps = [
  {
    step: "01",
    title: "Product Scope & Core Features",
    description: "We strip away bloat and define the absolute minimum features needed to validate your business idea with real users.",
  },
  {
    step: "02",
    title: "UI Wireframes & Prototype",
    description: "Slick interactive design in Figma that builds user trust and communicates your value prop instantly.",
  },
  {
    step: "03",
    title: "Rapid Full-Stack Build",
    description: "Built using Next.js, React, Node.js, and Supabase so your MVP runs smoothly without technical debt.",
  },
  {
    step: "04",
    title: "Deploy, Track & Handover",
    description: "Live Vercel cloud deployment with Google Analytics GA4 set up so you can measure user conversion.",
  },
];

export default function StartupMvpDevelopmentPage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I am a founder looking to build a Startup MVP.",
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
            <span className="eyebrow eyebrow-invert">Startup MVP Studio</span>
            <h1 className="page-hero-title mt-6 text-on-dark">
              From startup idea to live working product in 2 to 4 weeks.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop over-engineering before Day 1. LaunchRoom builds lean, production-ready MVPs designed to get early user traction, investor validation, and real revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Discuss Your MVP <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                WhatsApp Founder Chat
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pb-20">
        <AnimatedSection className="text-center">
          <p className="eyebrow">Execution Blueprint</p>
          <h2 className="section-title mt-4">How we launch your MVP with zero drag</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <AnimatedSection key={item.step} delay={idx * 0.05} className="page-card panel flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-accent">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <AnimatedSection className="panel-accent p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="card-label text-text-primary">Founder-First Model</p>
              <h2 className="mt-3 text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.1]">
                Fixed pricing, predictable timelines, zero equity required.
              </h2>
              <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
                You retain 100% intellectual property and full codebase ownership. We operate like your dedicated technical co-founder during launch week.
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

              <div className="mt-8">
                <Button href="/start">Get Your Quote</Button>
              </div>
            </div>

            <div className="rounded-[24px] border border-border bg-surface-1 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary">Recent Shipped MVPs</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">New India Stores</p>
                  <p className="mt-1 text-sm text-text-secondary">E-Commerce & local catalog digital store platform.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">SaaS Utility Portals</p>
                  <p className="mt-1 text-sm text-text-secondary">Custom document processing and web utility tools.</p>
                </div>
                <div className="rounded-[16px] border border-border p-4">
                  <p className="font-semibold text-text-primary">Legal &amp; Clinic Portals</p>
                  <p className="mt-1 text-sm text-text-secondary">Interactive booking and client consultation platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
