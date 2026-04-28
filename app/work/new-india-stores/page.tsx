import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { siteConfig } from "@/lib/site";

const tags = ["Web", "HTML/CSS", "Glassmorphism"];
const liveProjectUrl = "https://newindiastores.com/";
const screenshotSrc = "/new-india-stores-thumbnail.png";
const screenshotAlt = "Homepage screenshot of the New India Stores website";

export const metadata: Metadata = {
  title: "New India Stores — Case Study",
  description:
    "LaunchRoom case study for New India Stores, a Kolkata ship chandling company that needed a credible website for international maritime buyers.",
  keywords: [
    "New India Stores case study",
    "ship chandling website",
    "HTML CSS glassmorphism website",
    "LaunchRoom web case study",
  ],
  openGraph: {
    title: "New India Stores — Case Study",
    description:
      "Single-page glassmorphism website for a Kolkata ship chandling company, built to establish credibility with international maritime buyers.",
    url: `${siteConfig.url}/work/new-india-stores`,
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${screenshotSrc}`,
        alt: screenshotAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New India Stores — Case Study",
    description:
      "A self-contained HTML/CSS website built for New India Stores and deployed to Hostinger.",
    images: [`${siteConfig.url}${screenshotSrc}`],
  },
};

export default function NewIndiaStoresCaseStudyPage() {
  return (
    <div className="page-shell section-shell">
      <AnimatedSection>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-text-secondary"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 hover:text-text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
            Work
          </Link>
          <ChevronRight className="h-4 w-4 text-text-muted" />
          <span className="text-text-primary">New India Stores</span>
        </nav>
      </AnimatedSection>

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <AnimatedSection className="panel-dark relative overflow-hidden p-7 sm:p-9 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,160,32,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
          <div className="relative">
            <Badge variant="success">Delivered</Badge>
            <h1 className="page-hero-title mt-6 max-w-[10ch] text-on-dark">
              New India Stores
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              A single-page glassmorphism website built to give a Kolkata ship
              chandling company instant credibility with international maritime buyers.
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

            <div className="mt-8">
              <a
                href={liveProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-5 py-3 text-[15px] font-semibold text-text-primary hover:-translate-y-0.5 hover:border-accent"
              >
                Visit live website
                <ExternalLink className="h-4 w-4 text-accent" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="panel p-7 sm:p-8" delay={0.05}>
          <p className="card-label">Project snapshot</p>
          <div className="equal-height-grid mt-5 sm:grid-cols-2">
            <MetaCard label="Client" value="New India Stores, Kolkata" />
            <MetaCard label="Industry" value="Ship chandling" />
            <MetaCard label="Tech" value="HTML, CSS, Glassmorphism" />
            <MetaCard label="Deployment" value="Hostinger" />
            <MetaCard label="Live site" value="newindiastores.com" />
          </div>
        </AnimatedSection>
      </section>

      <section className="page-card-grid mt-8 lg:grid-cols-3">
        <AnimatedSection className="page-card-roomy-lg panel" delay={0.08}>
          <p className="card-label">Challenge</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-text-secondary">
            New India Stores had no web presence, which made credibility harder to
            establish with international maritime buyers evaluating suppliers from
            abroad. The business needed a simple site that looked trustworthy,
            explained what it did clearly, and could be shared confidently in sales
            conversations.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy-lg panel-accent" delay={0.1}>
          <p className="card-label text-text-primary">Solution</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-text-secondary">
            LaunchRoom designed and built a self-contained single-page website using
            HTML and CSS, with a glassmorphism look that felt modern without adding
            unnecessary complexity. The build stayed lightweight, easy to maintain,
            and fast to deploy on Hostinger so the client could go live quickly.
          </p>
        </AnimatedSection>

        <AnimatedSection className="page-card-roomy-lg panel" delay={0.12}>
          <p className="card-label">Outcome</p>
          <p className="mt-4 text-[17px] leading-[1.84] text-text-secondary">
            The result was a polished first web presence the client could start
            using immediately when speaking with shipping and procurement contacts.
            It delivered the credibility boost they needed without stretching the
            timeline or turning the project into a larger rebuild.
          </p>
        </AnimatedSection>
      </section>

      <AnimatedSection className="mt-8 panel-lime p-7 sm:p-8" delay={0.14}>
        <p className="card-label text-on-dark-muted">Result highlight</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-on-dark-muted">
              Client quote
            </p>
            <p className="mt-4 text-[clamp(30px,4vw,52px)] leading-[1.04] text-on-dark">
              &ldquo;Client satisfied - launched within agreed timeline.&rdquo;
            </p>
          </div>

          <div className="rounded-[24px] border border-[rgba(8,8,8,0.12)] bg-[rgba(255,255,255,0.2)] p-6 shadow-[0_18px_34px_rgba(0,0,0,0.12)]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-on-dark-muted">
              Why it mattered
            </p>
            <p className="mt-4 text-[18px] leading-[1.82] text-on-dark">
              A credible, shareable website gave the business a cleaner first
              impression for international buyers who needed to verify the company
              before starting a conversation.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-8" delay={0.16}>
        <div className="panel overflow-hidden">
          <div className="relative aspect-[16/9] bg-[radial-gradient(circle_at_top,rgba(232,160,32,0.2),transparent_26%),linear-gradient(135deg,#071018,#102133_52%,#060b12)]">
            <Image
              src={screenshotSrc}
              alt={screenshotAlt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 panel-dark p-7 sm:p-8" delay={0.18}>
        <p className="eyebrow eyebrow-invert">Start your project</p>
        <h2 className="mt-5 text-[clamp(30px,3vw,42px)] leading-[1.06] text-on-dark">
          Like what you see?
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-[1.82] text-on-dark-muted">
          If you need a focused website that builds trust quickly, we can scope the
          smallest useful version and get it moving.
        </p>
        <Link
          href="/start"
          className="mt-7 inline-flex items-center gap-2 text-[18px] font-semibold text-accent hover:text-text-primary"
        >
          Like what you see? Start your project →
        </Link>
      </AnimatedSection>
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="page-card rounded-[20px] border border-border bg-surface-2 shadow-[0_14px_28px_rgba(0,0,0,0.2)]">
      <p className="card-label">{label}</p>
      <p className="mt-3 text-[18px] leading-[1.35] text-text-primary">{value}</p>
    </article>
  );
}
