import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  FileOutput,
  FilePenLine,
  Files,
  Minimize2,
  ScanLine,
  SplitSquareVertical,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "PDF Vault SaaS Case Study | LaunchRoom",
  description:
    "Case study for PDF Vault, a lightweight, fast web-based 6-in-1 PDF utility platform engineered with Next.js.",
  alternates: {
    canonical: `${siteConfig.url}/work/pdf-vault`,
  },
  openGraph: {
    title: "PDF Vault SaaS Case Study | LaunchRoom",
    description:
      "Case study for PDF Vault, a lightweight, fast web-based 6-in-1 PDF utility platform engineered with Next.js.",
    url: `${siteConfig.url}/work/pdf-vault`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Vault SaaS Case Study | LaunchRoom",
    description:
      "Case study for PDF Vault, a lightweight, fast web-based 6-in-1 PDF utility platform engineered with Next.js.",
  },
};

const pdfVaultFeatures = [
  { name: "Compress", icon: Minimize2 },
  { name: "Merge", icon: Files },
  { name: "Split", icon: SplitSquareVertical },
  { name: "Scan", icon: ScanLine },
  { name: "Sign", icon: FilePenLine },
  { name: "Convert", icon: FileOutput },
];

const tags = ["Next.js", "Web App", "SaaS Utility"];

export default function PdfVaultCaseStudyPage() {
  return (
    <div className="page-shell section-shell">
      <AnimatedSection>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary hover:text-text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to work
        </Link>
      </AnimatedSection>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <AnimatedSection className="panel-dark p-7 sm:p-9 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-2 text-[13px] font-semibold text-text-primary">
            <Badge variant="success" className="min-h-0 px-0 py-0 border-0 bg-transparent text-support">
              Case Study
            </Badge>
          </div>
          <h1 className="page-hero-title mt-6 max-w-[8ch] text-on-dark">
            PDF Vault
          </h1>
          <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
            6-in-1 Web PDF toolkit built to stay useful, lightweight, and easy
            to access without forcing users through bloated software flows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag
                key={tag}
                className="preserve-case border-accent-border bg-accent-dim text-on-dark"
              >
                {tag}
              </Tag>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="panel p-7 sm:p-8" delay={0.05}>
          <p className="card-label">Project snapshot</p>
          <div className="equal-height-grid mt-5 sm:grid-cols-2">
            <MetaCard label="Platform" value="Web Platform" />
            <MetaCard label="Stack" value="Next.js · TypeScript · Tailwind" />
            <MetaCard label="Type" value="SaaS Utility Tool" />
            <MetaCard label="Result" value="Production Ready" />
          </div>
        </AnimatedSection>
      </section>

      <section className="page-card-grid mt-8 lg:grid-cols-[1fr_1fr_1fr]">
        <AnimatedSection className="page-card-roomy panel" delay={0.08}>
          <p className="card-label">Problem</p>
          <p className="mt-4 text-[17px] leading-[1.84]">
            Most web PDF utility tools feel bloated, cluttered with aggressive ads,
            or locked behind paywalls. Users usually just need a handful of core
            tasks done fast.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy panel-accent" delay={0.1}>
          <p className="card-label text-text-primary">Solution</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-text-secondary">
            PDF Vault was scoped around six practical web tools: compress, merge,
            split, scan, sign, and convert. Built with Next.js for client-side speed
            and instant response.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy panel-lime" delay={0.12}>
          <p className="card-label text-on-dark-muted">Outcome</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-on-dark-muted">
            Delivered as a modular web application that demonstrates LaunchRoom&apos;s
            ability to build clean, fast, and utility-driven software.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="mt-8" delay={0.14}>
        <div className="panel p-7 sm:p-8">
          <p className="card-label">Feature grid</p>
          <div className="page-card-grid mt-6 md:grid-cols-2 xl:grid-cols-3">
            {pdfVaultFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="page-card rounded-[22px] border border-border bg-surface-2 shadow-[0_16px_30px_rgba(0,0,0,0.22)]"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-accent-border bg-accent-dim text-accent shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-[24px] leading-[1.12]">{item.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.82]">
                    One focused tool inside a fast web utility workflow.
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 panel p-7 sm:p-8" delay={0.18}>
        <p className="card-label">CTA</p>
        <h2 className="mt-4 text-[clamp(30px,3vw,42px)] leading-[1.06]">
          Have a web application idea? Let&apos;s build it.
        </h2>
        <div className="mt-6">
          <Button href="/start">Start your project</Button>
        </div>
      </AnimatedSection>
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="page-card rounded-[20px] border border-border bg-surface-2 shadow-[0_14px_28px_rgba(0,0,0,0.2)]">
      <p className="card-label">{label}</p>
      <p className="mt-3 text-[18px] leading-[1.35] text-text-primary">{value}</p>
    </div>
  );
}
