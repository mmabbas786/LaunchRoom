import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Globe, MapPin, ShieldCheck, Sparkles, Zap } from "lucide-react";

import { TeamCard } from "@/components/about/TeamCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About LaunchRoom | Website Development Studio in Kolkata, India",
  description:
    "LaunchRoom is a website development studio based in Kolkata, West Bengal. We build high-converting business websites, booking platforms, and custom web applications for clients across India.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About LaunchRoom | Website Development Studio",
    description:
      "Learn about LaunchRoom's mission, team, and approach to building fast, high-converting websites for businesses across India.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const studioPrinciples = [
  {
    title: "No Developer Jargon",
    desc: "You do not need to understand Next.js, API schemas, or server infrastructure. We communicate in plain business terms and guide you to the simplest, most effective website to launch.",
    icon: Sparkles,
  },
  {
    title: "Sub-Second Performance",
    desc: "We write clean, lightweight code instead of bloated WordPress templates. Every website is built mobile-first and optimized for maximum speed and Core Web Vitals compliance.",
    icon: Zap,
  },
  {
    title: "End-to-End Delivery",
    desc: "From initial page architecture and Figma design to custom domain DNS connection, SSL certificates, and Google Search Console indexing, we handle the entire launch pipeline.",
    icon: Globe,
  },
  {
    title: "100% Code & Asset Ownership",
    desc: "Zero vendor lock-in. You receive complete intellectual property ownership, clean source code repositories, and full administrative access upon final delivery.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "About", url: `${siteConfig.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="page-shell section-shell">
        <AnimatedSection>
          <div className="panel-dark p-8 sm:p-10 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <MapPin className="h-3.5 w-3.5" />
              <span>Based in Kolkata • Serving India &amp; Global Clients</span>
            </div>

            <h1 className="page-hero-title font-display font-extrabold text-on-dark max-w-4xl">
              Website development services built around real business outcomes.
            </h1>

            <p className="max-w-3xl text-[18px] leading-[1.8] text-on-dark-muted">
              LaunchRoom is a website development studio founded in Kolkata, West Bengal. We build fast,
              credible, and high-converting websites for businesses, creators, and startups across India—without
              agency overhead, bloated templates, or technical friction.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/start">
                Start a Project Brief <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/work" variant="outline">
                View Our Client Work
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="mt-12">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mx-auto">Our Philosophy</p>
            <h2 className="section-title mx-auto mt-3">
              How we build websites differently
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {studioPrinciples.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={idx * 0.04}>
                  <article className="panel p-6 sm:p-7 space-y-3 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mt-4">{item.title}</h3>
                      <p className="text-[14px] leading-[1.7] text-text-secondary mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Founding Team */}
      <div className="page-shell">
        <section className="section-shell-tight">
          <AnimatedSection>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Founding Team &amp; Studio Leads</h2>
            <p className="mt-3 text-[16px] text-text-secondary max-w-2xl">
              LaunchRoom is operated by engineers and designers who work directly with clients to ship clean, reliable websites.
            </p>
          </AnimatedSection>

          <AnimatedSection className="page-card-grid mt-8 md:grid-cols-2" delay={0.05}>
            <TeamCard
              name="Mirza Mehedi Abbas"
              role="Founder &amp; Engineering Lead"
              bio={
                <>
                  <p>
                    Mirza leads technical architecture, frontend engineering, and client delivery at LaunchRoom. Based in Kolkata, he oversees website design, Next.js development, cloud infrastructure deployment, and conversion optimization for clients across India.
                  </p>
                </>
              }
              skills={[
                "Website Architecture",
                "Frontend UX Design",
                "Next.js & TypeScript",
                "Cloud Deployment & DNS",
                "SEO & Conversion Strategy",
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
              role="Co-founder &amp; Operations Director"
              bio={
                <>
                  <p>
                    Arsh oversees client onboarding, project roadmaps, communication schedules, and delivery milestones, ensuring projects launch on time and on budget.
                  </p>
                </>
              }
              skills={[
                "Studio Operations",
                "Client Onboarding",
                "Project Roadmapping",
                "Quality Assurance",
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
