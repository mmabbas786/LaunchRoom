import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  ExternalLink,
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
import { pdfVaultFeatures } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "PDF Vault Case Study",
  description:
    "Case study for PDF Vault, LaunchRoom's 6-in-1 Android PDF toolkit built with Flutter and monetised with AdMob.",
};

const featureIcons = {
  Compress: Minimize2,
  Merge: Files,
  Split: SplitSquareVertical,
  Scan: ScanLine,
  Sign: FilePenLine,
  Convert: FileOutput,
} satisfies Record<(typeof pdfVaultFeatures)[number], typeof Minimize2>;

const tags = ["Android", "Flutter", "Utility"];

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
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-2 text-[13px] font-semibold text-text-primary hover:-translate-y-0.5 hover:border-accent"
          >
            <Badge variant="success" className="min-h-0 px-0 py-0 border-0 bg-transparent text-support">
              Live on Play Store
            </Badge>
            <ExternalLink className="h-4 w-4 text-accent" />
          </a>
          <h1 className="page-hero-title mt-6 max-w-[8ch] text-on-dark">
            PDF Vault
          </h1>
          <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
            6-in-1 Android PDF toolkit built to stay useful, lightweight, and easy
            to access without forcing users through bloated or paywalled flows.
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
            <MetaCard label="Platform" value="Android" />
            <MetaCard label="Stack" value="Flutter · Android · AdMob" />
            <MetaCard label="Monetisation" value="AdMob integration" />
            <MetaCard label="Result" value="Live on Play Store" />
          </div>
        </AnimatedSection>
      </section>

      <section className="page-card-grid mt-8 lg:grid-cols-[1fr_1fr_1fr]">
        <AnimatedSection className="page-card-roomy panel" delay={0.08}>
          <p className="card-label">Problem</p>
          <p className="mt-4 text-[17px] leading-[1.84]">
            Most PDF utility apps feel bloated, cluttered with ads, or locked
            behind aggressive paywalls. Users usually just need a handful of core
            tasks without friction.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy panel-accent" delay={0.1}>
          <p className="card-label text-text-primary">Solution</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-text-secondary">
            PDF Vault was scoped around six practical tools only: compress, merge,
            split, scan, sign, and convert. Flutter kept iteration fast while the
            app stayed focused on real Android workflows.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy panel-lime" delay={0.12}>
          <p className="card-label text-on-dark-muted">Outcome</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-on-dark-muted">
            The product shipped to the Play Store as a monetisation-ready utility
            app, giving LaunchRoom direct proof of Android delivery, release, and
            maintenance experience.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="mt-8" delay={0.14}>
        <div className="panel p-7 sm:p-8">
          <p className="card-label">Feature grid</p>
          <div className="page-card-grid mt-6 md:grid-cols-2 xl:grid-cols-3">
            {pdfVaultFeatures.map((feature) => {
              const Icon = featureIcons[feature];

              return (
                <article
                  key={feature}
                  className="page-card rounded-[22px] border border-border bg-surface-2 shadow-[0_16px_30px_rgba(0,0,0,0.22)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[24px] leading-[1.08]">{feature}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75]">
                    One focused tool inside a tighter Android utility flow.
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-8" delay={0.16}>
        <div className="panel flex min-h-[420px] items-center justify-center p-8">
          <div className="relative mx-auto flex h-[360px] w-[200px] items-center justify-center rounded-[42px] border border-accent-border bg-[linear-gradient(180deg,#0d0d0d,#151515)] p-4 shadow-[0_24px_54px_rgba(0,0,0,0.38)]">
            <div className="absolute top-3 h-1.5 w-16 rounded-full bg-[rgba(255,255,255,0.12)]" />
            <div className="flex h-full w-full items-center justify-center rounded-[30px] border border-border bg-[radial-gradient(circle_at_top,rgba(232,160,32,0.18),transparent_26%),linear-gradient(180deg,#111,#1b1b1b)] px-6 text-center">
              <p className="text-[28px] leading-[1.08] text-text-primary">
                PDF Vault
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 panel p-7 sm:p-8" delay={0.18}>
        <p className="card-label">CTA</p>
        <h2 className="mt-4 text-[clamp(30px,3vw,42px)] leading-[1.06]">
          Have an app idea? Let&apos;s build it.
        </h2>
        <div className="mt-6">
          <Button href="/start">Let&apos;s build it</Button>
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
