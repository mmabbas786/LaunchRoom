import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Startup MVP Development Studio | LaunchRoom Studio",
  description:
    "LaunchRoom Studio helps startup founders design, engineer, and ship production-ready SaaS MVPs in 3-4 weeks.",
};

export default function StartupMvpDevelopmentPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <span className="text-accent">Startup MVP Development</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Startup MVP Engineering Sprint
          </h1>
          <p className="text-[18px] leading-[1.75] text-text-secondary">
            Rapid 3-4 week MVP engineering sprint designed to transform early founder concepts into robust, production-grade web applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8 space-y-6">
            <h2 className="text-[24px] font-bold text-text-primary">MVP Sprint Package</h2>
            <ul className="space-y-4">
              {[
                "Product Scope & Technical Architecture Blueprint",
                "Full-Stack Web App & Database Development",
                "Authentication, Billing & User Management",
                "Landing Page & Conversion Funnel Setup",
                "Production Cloud Infrastructure Deployment",
                "30-Day Post-Launch Technical Support",
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
              <span className="card-label">Founder Sprint</span>
              <h2 className="text-[26px] font-display font-extrabold text-text-primary">
                Launch Your Startup MVP
              </h2>
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                Turn your product roadmap into a live, scalable software product ready for user onboardings and investor demonstrations.
              </p>
            </div>

            <Button href="/contact" className="min-h-[50px] px-8 text-[15px] w-fit">
              <span>Start Founder Briefing</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
