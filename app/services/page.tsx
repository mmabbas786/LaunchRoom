import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  ChevronRight,
  Cloud,
  Code2,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Website Development Services | Custom Websites | LaunchRoom",
  description:
    "Explore LaunchRoom's website development services for businesses, clinics, salons, creators, and startups. Custom business websites, booking platforms, and web solutions.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Website Development Services | Custom Websites | LaunchRoom",
    description:
      "Custom website design and development services built for businesses and startups across India. Fast loading, clean aesthetics, and complete launch support.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
};

const coreWebsiteServices = [
  {
    slug: "website-development",
    title: "Website Development Services",
    tagline: "Primary Pillar • End-to-End Build",
    description:
      "Comprehensive custom website design, development, domain setup, search engine indexing, and post-launch maintenance for growing businesses.",
    icon: Globe,
    timeline: "1-3 weeks",
    highlights: ["Custom Figma UI design", "Mobile-first responsive coding", "SEO setup & Google indexing", "1-3 months warranty support"],
  },
  {
    slug: "business-website-development",
    title: "Business Websites",
    tagline: "Companies • MSMEs • Agencies",
    description:
      "Establish brand credibility, clearly present your service offerings, and capture high-intent inquiries from prospective clients.",
    icon: Briefcase,
    timeline: "1-2 weeks",
    highlights: ["Company profile & trust blocks", "Direct WhatsApp & lead forms", "Google Business profile integration", "Fast, secure cloud hosting"],
  },
  {
    slug: "booking-website-development",
    title: "Booking & Appointment Websites",
    tagline: "Salons • Clinics • Consultants",
    description:
      "Allow clients to select services, choose time slots, book consultations, or schedule appointments online without back-and-forth communication overhead.",
    icon: CalendarCheck,
    timeline: "1-3 weeks",
    highlights: ["Automated appointment calendar", "Service menus & pricing", "WhatsApp booking triggers", "Mobile-optimized booking flow"],
  },
  {
    slug: "portfolio-website-development",
    title: "Portfolio Websites",
    tagline: "Designers • Architects • Photographers",
    description:
      "Showcase your past work, creative projects, and case studies with high visual polish, fluid page transitions, and modern typography.",
    icon: Sparkles,
    timeline: "1-2 weeks",
    highlights: ["High-impact project galleries", "Visual case study layouts", "About & resume sections", "Direct project inquiry buttons"],
  },
  {
    slug: "landing-page-development",
    title: "High-Converting Landing Pages",
    tagline: "Ad Campaigns • Product Launches",
    description:
      "Single-page websites engineered to convert ad traffic into leads, sales, or event registrations with zero distraction and sub-second load times.",
    icon: Target,
    timeline: "3-7 days",
    highlights: ["Persuasive copy hierarchy", "Focused call-to-action buttons", "Google Ads & Meta tracking", "Sub-second mobile speed"],
  },
  {
    slug: "ecommerce-website-development",
    title: "E-Commerce Websites",
    tagline: "D2C Brands • Online Stores",
    description:
      "Custom product catalogues, shopping carts, and automated payment gateway integrations (Razorpay, Stripe, UPI) for direct-to-consumer businesses.",
    icon: ShoppingBag,
    timeline: "2-4 weeks",
    highlights: ["Product catalogue & filtering", "Shopping cart & instant checkout", "Razorpay / Stripe payments", "Order confirmation alerts"],
  },
  {
    slug: "custom-web-development",
    title: "Custom Web Solutions",
    tagline: "Calculators • Portals • Tools",
    description:
      "Bespoke web tools, quotation calculators, client dashboards, and custom API integrations engineered for your specific business workflow.",
    icon: Wrench,
    timeline: "1-4 weeks",
    highlights: ["Dynamic quotation calculators", "Internal dashboards & portals", "Third-party API integrations", "Workflow automation logic"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    tagline: "Monthly Retainers • Security",
    description:
      "Monthly maintenance packages covering text and image edits, security updates, 24/7 uptime monitoring, Core Web Vitals checks, and priority support.",
    icon: ShieldCheck,
    timeline: "Monthly retainer",
    highlights: ["Content & media updates", "Security & dependency patches", "Core Web Vitals audits", "Direct developer channel"],
  },
];

const technicalCapabilities = [
  {
    slug: "web-app-development",
    title: "Web App Development",
    tagline: "Custom Customer Portals & Dashboards",
    description: "Full-stack web applications with user authentication, databases, and interactive tools.",
    icon: Layers3,
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Subscription Platforms & Products",
    description: "Software-as-a-service platforms with multi-tenant data schemas and recurring billing.",
    icon: Users,
  },
  {
    slug: "startup-mvp-development",
    title: "Startup MVP Studio",
    tagline: "Rapid 2-4 Week Product Sprint",
    description: "Fast prototype engineering for founders looking to validate ideas with real users.",
    icon: Rocket,
  },
  {
    slug: "hosting-deployment",
    title: "Hosting & Cloud Deployment",
    tagline: "Global Edge Networks & DNS",
    description: "Vercel edge hosting, domain DNS configuration, and automated SSL security.",
    icon: Cloud,
  },
  {
    slug: "nextjs-development",
    title: "Next.js & React Engineering",
    tagline: "Technical Framework Specialization",
    description: "Next.js App Router, React Server Components, and sub-second rendering performance.",
    icon: Code2,
  },
];

const jsonLdServiceIndex = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LaunchRoom Website Development Services",
  serviceType: "Website Development",
  provider: {
    "@type": "Organization",
    name: "LaunchRoom",
    url: siteConfig.url,
  },
  areaServed: ["India", "Worldwide"],
  description:
    "Custom website design and development services for businesses, clinics, salons, creators, and startups by LaunchRoom.",
};

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
  ]);

  return (
    <main className="min-h-screen py-10 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServiceIndex) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="page-shell space-y-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
          <Link href="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent">Services</span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
            <span>Website Development Studio</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Website Development Services
          </h1>
          <p className="text-[18px] leading-[1.8] text-text-secondary">
            LaunchRoom designs, builds, and launches high-performing websites and digital solutions for businesses,
            professionals, and startups. You do not need technical specifications—we help you plan the right website
            and handle everything from design to domain launch.
          </p>
        </div>

        {/* Primary Commercial Services Grid */}
        <div>
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <h2 className="text-xl font-bold text-text-primary">Commercial Website Services</h2>
            <span className="text-xs font-mono text-text-muted uppercase">Designed for conversion</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreWebsiteServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="panel-hover panel p-6 sm:p-7 flex flex-col justify-between group space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="meta-chip text-[11px]">{service.timeline}</span>
                    </div>

                    <div>
                      <p className="text-[11px] font-mono uppercase text-accent">{service.tagline}</p>
                      <h3 className="text-[19px] font-bold text-text-primary group-hover:text-accent transition-colors mt-1 leading-[1.2]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[13px] leading-[1.65] text-text-secondary">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-border/50">
                      {service.highlights.map((item) => (
                        <li key={item} className="text-[11px] text-text-secondary flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border text-[12px] font-medium text-accent">
                    <span>Explore service details</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Technical & Product Engineering Capabilities */}
        <div>
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <h2 className="text-xl font-bold text-text-primary">Advanced Web Applications &amp; Retainers</h2>
            <span className="text-xs font-mono text-text-muted uppercase">Interactive systems</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technicalCapabilities.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="panel p-5 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-border text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold text-text-primary group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[11px] font-mono text-text-muted uppercase">{service.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[13px] leading-[1.6] text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-medium text-accent">
                    <span>View details</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Advisory Callout */}
        <div className="panel-accent p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[20px] font-bold text-text-primary">Not sure what type of website you need?</h3>
            <p className="text-[14px] text-text-secondary mt-1 max-w-xl">
              Tell us about your business goals and we will recommend the cleanest, most cost-effective website to build first.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button href="/start" className="px-6 py-3">
              Start a Project
            </Button>
            <Button href="/contact" variant="outline" className="px-5 py-3">
              Discuss on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
