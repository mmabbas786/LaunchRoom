import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  Globe,
  Layers3,
  ShoppingBag,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const buildCategories = [
  {
    icon: Briefcase,
    title: "Business Websites",
    audience: "Companies, MSMEs, agencies, and professional firms",
    description:
      "Clean, authoritative business websites designed to present your offerings, establish immediate credibility, and capture customer inquiries.",
    href: "/services/business-website-development",
    badges: ["Company Profiles", "Service Menus", "WhatsApp Inquiries"],
  },
  {
    icon: CalendarCheck,
    title: "Booking Websites",
    audience: "Salons, clinics, fitness trainers, and consultants",
    description:
      "Automated appointment scheduling websites where clients view services, pick open time slots, and receive instant booking confirmations.",
    href: "/services/booking-website-development",
    badges: ["Self-Serve Calendar", "WhatsApp Alerts", "UPI/Card Deposits"],
  },
  {
    icon: Sparkles,
    title: "Portfolio Websites",
    audience: "Designers, photographers, architects, and creators",
    description:
      "High-impact visual showcases with fast-loading galleries, project case studies, and modern typography to attract premium clients.",
    href: "/services/portfolio-website-development",
    badges: ["Visual Case Studies", "Fast Media Load", "Direct Inquiries"],
  },
  {
    icon: Target,
    title: "Landing Pages",
    audience: "Ad campaigns, product launches, and lead funnels",
    description:
      "Single-page websites engineered for Google and Meta ad traffic, optimized for sub-second load times and high conversion rates.",
    href: "/services/landing-page-development",
    badges: ["95+ Speed Score", "Pixel Tracking", "Frictionless Forms"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    audience: "D2C brands, retail stores, and online catalogues",
    description:
      "Fast online shopping storefronts with smooth product catalogues, mobile cart checkouts, and Razorpay/Stripe payment gateways.",
    href: "/services/ecommerce-website-development",
    badges: ["Instant Checkout", "Zero App Bloat", "Order Alerts"],
  },
  {
    icon: Wrench,
    title: "Custom Web Solutions",
    audience: "Dashboards, calculators, and internal business tools",
    description:
      "Tailored web tools, dynamic quote calculators, client portals, and CRM integrations when off-the-shelf templates cannot solve your workflow.",
    href: "/services/custom-web-development",
    badges: ["Custom Calculators", "Client Portals", "API Integrations"],
  },
];

export function WhatWeBuildSection() {
  return (
    <section className="page-shell section-shell">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <p className="eyebrow mx-auto">What We Build</p>
        <h2 className="section-title mx-auto mt-4">
          Websites designed for your specific business model
        </h2>
        <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
          Every client arrives with different requirements. Whether you need a corporate presence,
          an appointment calendar, or an online store, we guide you to the simplest, most effective solution.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {buildCategories.map((item, idx) => {
          const Icon = item.icon;
          return (
            <AnimatedSection
              key={item.title}
              delay={idx * 0.04}
              className="page-card panel flex flex-col justify-between group panel-hover"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-dim border border-accent-border text-accent group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">Solution {`0${idx + 1}`}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs font-mono text-text-muted">{item.audience}</p>
                <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.badges.map((badge) => (
                    <span key={badge} className="meta-chip text-[11px]">
                      {badge}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore {item.title.toLowerCase()}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
