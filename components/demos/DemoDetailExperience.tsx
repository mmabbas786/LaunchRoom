"use client";

import { ArrowRight, ExternalLink, MonitorSmartphone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { DemoSite } from "@/components/demos/DemoSite";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import type { Demo } from "@/lib/demos";
import { hexToRgba } from "@/lib/demos";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function emitDemoEvent(eventName: string, payload: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, payload);
}

export function DemoDetailExperience({ demo }: { demo: Demo }) {
  const startHref = `/start?niche=${demo.slug}&ref=demo`;
  const previewHref = `/demos/${demo.slug}/preview`;
  const usesExternalPreview = Boolean(demo.externalUrl);

  useEffect(() => {
    emitDemoEvent("demo_view", {
      niche: demo.slug,
      business_name: demo.businessName,
    });
  }, [demo.businessName, demo.slug]);

  const trackCta = (source: string) =>
    emitDemoEvent("demo_cta_click", {
      niche: demo.slug,
      source,
    });

  return (
    <div className="pb-24 xl:pb-0">
      <div className="sticky top-0 z-50 border-b border-gold/20 bg-[rgba(6,6,6,0.92)] backdrop-blur-xl">
        <div className="page-shell flex min-h-[66px] items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Badge variant="success" className="shrink-0 border-gold/20 bg-gold/10 text-gold">
              Demo · {demo.niche}
            </Badge>
            <p className="hidden min-w-0 truncate text-[14px] leading-[1.6] text-text-secondary sm:block">
              This is a fictional demo for <span className="text-text-primary">{demo.businessName}</span>.
            </p>
          </div>

          <Link
            href={startHref}
            onClick={() => trackCta("demo_sticky_banner")}
            className="inline-flex min-h-[46px] shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-3 text-[14px] font-semibold text-[#0a0803] shadow-[0_16px_34px_rgba(212,168,67,0.24)] hover:-translate-y-0.5 hover:bg-[#e1b85b]"
          >
            Want this for your business?
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <section className="page-shell py-6 lg:py-8 xl:py-10">
        <div className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <AnimatedSection className="grid gap-6 xl:sticky xl:top-[94px] xl:self-start">
            <div className="panel-dark p-7 sm:p-8 lg:p-9">
              <Badge variant="success" className="border-gold/20 bg-gold/10 text-gold">
                Niche Demo Library
              </Badge>
              <h1 className="page-hero-title mt-5 max-w-[11ch] text-on-dark">
                {demo.niche} website demo
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.82] text-on-dark-muted">
                {demo.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {demo.tags.map((tag) => (
                  <Tag
                    key={tag}
                    className="border-white/10 bg-white/[0.05] text-on-dark-muted"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MetricCard label="Industry" value={demo.industry} />
                <MetricCard label="Fictional brand" value={demo.businessName} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={startHref}
                  onClick={() => trackCta("demo_primary_panel")}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-[#0a0803] shadow-[0_18px_38px_rgba(212,168,67,0.22)] hover:-translate-y-0.5 hover:bg-[#e1b85b]"
                >
                  Start this project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={previewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-6 py-3 text-[15px] font-semibold text-text-primary hover:-translate-y-0.5 hover:border-gold/50"
                >
                  Open isolated preview
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="page-card-grid sm:grid-cols-2">
              <AnimatedSection className="page-card-roomy panel" delay={0.04}>
                <div className="flex flex-col items-start gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-accent-border bg-accent-dim text-accent shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                    <MonitorSmartphone className="h-6 w-6" />
                  </span>
                  <div className="max-w-[28ch]">
                    <p className="card-label">Preview mode</p>
                    <p className="mt-2 text-[20px] leading-[1.28] text-text-primary sm:text-[22px]">
                      Desktop shows a focused live preview.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="page-card-roomy panel-accent" delay={0.08}>
                <div className="flex flex-col items-start gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-gold/25 bg-gold/10 text-gold shadow-[0_18px_34px_rgba(0,0,0,0.18)]">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div className="max-w-[28ch]">
                    <p className="card-label text-text-primary">Lead path</p>
                    <p className="mt-2 text-[20px] leading-[1.28] text-text-primary sm:text-[22px]">
                      CTA flows straight into a demo-aware brief.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="panel p-7 sm:p-8" delay={0.1}>
              <p className="card-label">Why this matters</p>
              <p className="mt-4 text-[16px] leading-[1.84] text-text-secondary">
                Instead of asking clients to imagine what LaunchRoom can build, this
                system lets them click through a believable version of their niche,
                then start a project with that exact context attached.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection className="hidden xl:block" delay={0.05}>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#050505] shadow-[0_34px_110px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div
                  className="rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] text-white/48"
                  style={{
                    borderColor: hexToRgba(demo.accentColor, 0.24),
                    backgroundColor: hexToRgba(demo.accentColor, 0.06),
                  }}
                >
                  Live niche preview
                </div>
              </div>

              <iframe
                src={previewHref}
                title={`${demo.niche} website demo preview`}
                loading="lazy"
                className="block h-[calc(100vh-170px)] w-full border-0 bg-[#050505]"
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-8 xl:hidden" delay={0.06}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="card-label">Mobile demo view</p>
            <span className="text-[12px] uppercase tracking-[0.18em] text-text-muted">
              Full-width preview
            </span>
          </div>
          {usesExternalPreview ? (
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#050505] shadow-[0_28px_88px_rgba(0,0,0,0.48)]">
              <iframe
                src={previewHref}
                title={`${demo.niche} website demo mobile preview`}
                loading="lazy"
                className="block h-[78vh] min-h-[680px] w-full border-0 bg-[#050505]"
              />
            </div>          ) : (
            <DemoSite demo={demo} navStickyOffsetClass="top-[66px]" compact />
          )}
        </AnimatedSection>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-[rgba(6,6,6,0.96)] p-4 backdrop-blur-xl xl:hidden">
        <Link
          href={startHref}
          onClick={() => trackCta("demo_mobile_bottom_bar")}
          className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[18px] bg-gold px-5 py-3 text-center text-[15px] font-semibold text-[#0a0803] shadow-[0_18px_38px_rgba(212,168,67,0.22)]"
        >
          Want this for your business?
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
      <p className="card-label text-on-dark-muted">{label}</p>
      <p className="mt-3 text-[22px] leading-[1.1] text-on-dark">{value}</p>
    </div>
  );
}
