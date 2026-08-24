import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Rocket, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering & Web Development Services | LaunchRoom Studio",
  description:
    "LaunchRoom Studio builds custom high-performance websites, Next.js applications, and SaaS MVPs for startups and growing businesses.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Engineering & Web Development Services | LaunchRoom Studio",
    description:
      "LaunchRoom Studio builds custom high-performance websites, Next.js applications, and SaaS MVPs for startups and growing businesses.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
};

const services = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Bespoke corporate websites engineered with Next.js, dark modern aesthetics, high conversion rates, and sub-second load times.",
    icon: Globe,
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    description: "Scalable full-stack SaaS applications, custom web portals, and complex cloud application interfaces.",
    icon: Code2,
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    description: "Expert React & Next.js App Router engineering, partial pre-rendering, Turbopack optimizations, and Vercel deployments.",
    icon: Terminal,
  },
  {
    slug: "startup-mvp-development",
    title: "Startup MVP Development",
    description: "Rapid 3-4 week MVP engineering sprint for early-stage tech founders looking to validate ideas and raise capital.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
            <span>LaunchRoom Studio</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Engineering & Product Development Services
          </h1>
          <p className="text-[18px] leading-[1.75] text-text-secondary">
            While LaunchRoom operates as an independent tech news & intelligence publication, LaunchRoom Studio provides select custom software, web application, and digital product engineering for startups and ambitious enterprises worldwide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="panel-hover panel p-8 flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-[22px] font-bold text-text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[15px] leading-[1.7] text-text-secondary">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[14px] font-medium text-accent pt-4 border-t border-border">
                  <span>Learn about {service.title}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="panel-accent p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[20px] font-bold text-text-primary">Have a custom engineering project?</h3>
            <p className="text-[14px] text-text-secondary mt-1">Discuss technical requirements with our engineering lead.</p>
          </div>
          <Button href="/contact" className="px-6 py-3 shrink-0">
            Contact LaunchRoom Studio
          </Button>
        </div>
      </div>
    </main>
  );
}
