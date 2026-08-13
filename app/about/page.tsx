import type { Metadata } from "next";

import { TeamCard } from "@/components/about/TeamCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { ArrowRight, Newspaper, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About LaunchRoom | AI, Tech & Startup Intelligence",
  description:
    "LaunchRoom is an independent media & technology intelligence publication delivering analysis on AI, software, cloud, and startups.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About LaunchRoom Intelligence",
    description:
      "Independent coverage of artificial intelligence, software engineering, cloud computing, cybersecurity, and startups.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection>
          <div className="panel-dark p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <Newspaper className="h-3.5 w-3.5" />
              <span>Independent Intelligence</span>
            </div>

            <h1 className="page-hero-title font-display font-extrabold text-on-dark max-w-4xl">
              Independent coverage of the platforms, startups, and intelligence shaping the future of technology.
            </h1>

            <p className="max-w-3xl text-[18px] leading-[1.8] text-on-dark-muted">
              LaunchRoom was founded to provide tech executives, software engineers, founders, and security professionals with concise, highly analytical dispatches. We cut through press release fluff to report on core architectural shifts, funding dynamics, and deep technical breakthroughs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <AnimatedSection delay={0.05}>
            <article className="panel p-8 space-y-4 h-full">
              <p className="card-label">Publication Mission</p>
              <h2 className="text-[22px] font-bold text-text-primary">Analytical & Newsroom Precision</h2>
              <p className="text-[15px] leading-[1.75] text-text-secondary">
                We believe tech journalism should be written by engineers and analysts who understand modern codebases, cloud infrastructure, and venture fundamentals. Our editorial standard prioritizes accuracy, architectural context, and executive relevance.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="panel-accent p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[12px] font-mono uppercase text-accent font-bold">
                  <Code2 className="h-4 w-4" />
                  <span>Secondary Business</span>
                </div>
                <h2 className="text-[22px] font-bold text-text-primary">LaunchRoom Studio</h2>
                <p className="text-[15px] leading-[1.75] text-text-secondary">
                  Alongside our news publication, LaunchRoom Studio provides custom web application, SaaS MVP, and Next.js engineering for select startups and enterprise teams worldwide.
                </p>
              </div>

              <Link
                href="/services/website-development"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-accent hover:underline pt-4"
              >
                <span>Explore LaunchRoom Studio Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <div className="page-shell">
        <section className="section-shell-tight">
          <AnimatedSection>
            <p className="eyebrow">Editorial Team</p>
            <h2 className="section-title">Founding Team & Leadership</h2>
          </AnimatedSection>

          <AnimatedSection className="page-card-grid mt-8 md:grid-cols-2" delay={0.05}>
            <TeamCard
              name="Mirza Mehedi Abbas"
              role="Founder & Editor-in-Chief"
              bio={
                <>
                  <p>
                    Mirza leads editorial direction and technical analysis at LaunchRoom. With deep roots in software engineering, Next.js architecture, and AI models, he writes analytical briefings on AI breakthroughs, developer tooling, and cloud infrastructure.
                  </p>
                </>
              }
              skills={[
                "AI Models",
                "Next.js Architecture",
                "TypeScript",
                "Cloud Systems",
                "Technical Editorials",
              ]}
              avatarLabel="M"
              avatarClassName="bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] text-[#080808]"
              socialLinks={[
                {
                  href: "https://github.com/mmabbas786",
                  label: "Mirza on GitHub",
                  platform: "github",
                },
                {
                  href: "https://www.linkedin.com/in/mirzamehediabbas/",
                  label: "Mirza on LinkedIn",
                  platform: "linkedin",
                },
                {
                  href: "https://x.com/mmabbasofficial",
                  label: "Mirza on X",
                  platform: "twitter",
                },
              ]}
            />
            <TeamCard
              name="Arsh"
              role="Co-founder & Operations Director"
              bio={
                <>
                  <p>
                    Arsh oversees publication operations, brand partnerships, content syndication, and client engagement for LaunchRoom Studio.
                  </p>
                </>
              }
              skills={[
                "Editorial Operations",
                "Media Strategy",
                "Studio Partnerships",
              ]}
              avatarLabel="A"
              avatarClassName="bg-[linear-gradient(135deg,#f0bd57_0%,#b07811_100%)] text-[#080808]"
              socialLinks={[
                {
                  href: "https://www.linkedin.com/in/mirzamehediabbas/",
                  label: "Arsh on LinkedIn",
                  platform: "linkedin",
                },
              ]}
            />
          </AnimatedSection>
        </section>
      </div>
    </>
  );
}
