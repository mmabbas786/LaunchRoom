import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Next.js Development Agency Services | LaunchRoom Studio",
  description:
    "Specialized Next.js App Router engineering, performance optimization, and custom React web application development.",
};

export default function NextJsDevelopmentPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted">
            <Link href="/services" className="hover:text-accent">Services</Link>
            <span>/</span>
            <span className="text-accent">Next.js Development</span>
          </div>
          <h1 className="page-hero-title font-display font-extrabold text-text-primary">
            Next.js Engineering Specialization
          </h1>
          <p className="text-[18px] leading-[1.75] text-text-secondary">
            Deep technical expertise in Next.js App Router, Server Components, Turbopack, Partial Pre-rendering, and enterprise Vercel deployments.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8 space-y-6">
            <h2 className="text-[24px] font-bold text-text-primary">Next.js Architecture Highlights</h2>
            <ul className="space-y-4">
              {[
                "Next.js App Router Migration & Clean Architecture",
                "React Server Components (RSC) Performance Tuning",
                "Edge Middleware & Server Action Security",
                "Core Web Vitals & Lighthouse 95+ Optimization",
                "Vercel Enterprise Infrastructure Setup",
                "Dynamic OpenGraph & Automated Metadata Pipeline",
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
              <span className="card-label">Next.js Engineering</span>
              <h2 className="text-[26px] font-display font-extrabold text-text-primary">
                Optimize Your Next.js App
              </h2>
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                Need expert Next.js developers to build or refactor your web platform? Connect with LaunchRoom Studio today.
              </p>
            </div>

            <Button href="/contact" className="min-h-[50px] px-8 text-[15px] w-fit">
              <span>Discuss Next.js Project</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
