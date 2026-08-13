import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Website Development Services | LaunchRoom Studio",
  description:
    "LaunchRoom Studio engineers high-performance Next.js websites for technology startups, SaaS products, and digital enterprises.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <span className="text-accent">Website Development</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Website Development Services
          </h1>
          <p className="text-[18px] leading-[1.75] text-text-secondary">
            We build custom, high-converting websites engineered with Next.js, Tailwind CSS, clean semantic architecture, and sub-second loading performance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8 space-y-6">
            <h2 className="text-[24px] font-bold text-text-primary">What We Deliver</h2>
            <ul className="space-y-4">
              {[
                "Custom Next.js App Router Architecture",
                "Pixel-Perfect Dark Premium Design System",
                "Sub-100ms Page Loads & 95+ Core Web Vitals",
                "SEO Architecture, Canonical Routing & Schema Markup",
                "Mobile-First Responsive Layouts",
                "Content Management System (CMS) Integration",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[15px] text-text-secondary">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-accent p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="card-label">Studio Engagement</span>
              <h2 className="text-[26px] font-display font-extrabold text-text-primary">
                Ready to Build Your Website?
              </h2>
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                Get in touch with LaunchRoom Studio to discuss your project requirements, scope, timelines, and technical architecture.
              </p>
            </div>

            <Button href="/contact" className="min-h-[50px] px-8 text-[15px] w-fit">
              <span>Request Project Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
