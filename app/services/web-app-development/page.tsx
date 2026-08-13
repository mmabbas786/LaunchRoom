import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Web App Development Services | LaunchRoom Studio",
  description:
    "LaunchRoom Studio builds custom full-stack web applications, SaaS platforms, and enterprise dashboards with Next.js and TypeScript.",
};

export default function WebAppDevelopmentPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <span className="text-accent">Web App Development</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Web Application Engineering
          </h1>
          <p className="text-[18px] leading-[1.75] text-text-secondary">
            Custom full-stack web applications, multi-tenant SaaS dashboards, and complex digital platforms built for scale, security, and exceptional UX.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8 space-y-6">
            <h2 className="text-[24px] font-bold text-text-primary">Technical Capabilities</h2>
            <ul className="space-y-4">
              {[
                "Full-Stack Next.js & Node.js Architecture",
                "Relational & Document Database Schema Design",
                "Authentication & Multi-Tenant Role-Based Authorization",
                "Stripe Payment & Subscription Gateway Integration",
                "RESTful & GraphQL API Integrations",
                "Real-time Dashboard Analytics & Data Visualization",
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
                Build Your Web Application
              </h2>
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                Partner with LaunchRoom Studio to engineer your core web product, internal software tool, or customer portal.
              </p>
            </div>

            <Button href="/contact" className="min-h-[50px] px-8 text-[15px] w-fit">
              <span>Schedule Technical Call</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
