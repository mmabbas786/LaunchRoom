import type { Metadata } from "next";
import Link from "next/link";

import { CTABand } from "@/components/layout/CTABand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageHeroGrid } from "@/components/ui/PageHeroGrid";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projects } from "@/data/projects";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Case Studies & Work Portfolio",
  description:
    "Explore LaunchRoom client website case studies, live site links, app launches, and build delivery details.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Client Case Studies & Portfolio | LaunchRoom",
    description:
      "Explore LaunchRoom client website case studies, live site links, app launches, and build delivery details.",
    url: `${siteConfig.url}/work`,
    type: "website",
  },
};

export default function WorkPage() {
  const hasSingleProject = projects.length === 1;
  const categoryBreakdown = [
    {
      label: "Web",
      value: projects.filter((project) => project.category === "Web").length,
    },
    {
      label: "Web Applications",
      value: projects.filter((project) => project.category === "Web Applications").length,
    },
    {
      label: "Ongoing",
      value: projects.filter((project) => project.category === "Ongoing").length,
    },
  ].filter((item) => item.value > 0);

  return (
    <>
      <PageHeroGrid
        label="Our work"
        heading="Projects with a clean path from brief to launch."
        description="Live client website work with a clear breakdown of the brief, the build, and the launch outcome."
        topLeftCard={{
          label: "What you'll see",
          content: (
            <>
              <p className="text-[28px] leading-[1.06] text-on-dark">
                Real client work with live links and clear case study context.
              </p>
              <p className="mt-3">
                Each project stays focused on what was built, why it mattered, and
                where it went live.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Client website", "Live link", "Case study"].map((item) => (
                  <span
                    key={item}
                    className="meta-chip border-[rgba(255,255,255,0.12)] bg-white/[0.04] text-on-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          ),
        }}
        topRightCard={{
          label: "Current count",
          content: (
            <>
              <p className="text-[32px] leading-[1.04] text-text-primary">
                {projects.length} {hasSingleProject ? "live client case study" : "live client case studies"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categoryBreakdown.map((item) => (
                  <span key={item.label} className="meta-chip">
                    {item.value} {item.label}
                  </span>
                ))}
              </div>
            </>
          ),
        }}
        bottomCard={{
          label: "What matters here",
          content: (
            <>
              <p className="text-[18px] leading-[1.8] text-text-secondary">
                Each case study shows the brief, the challenge, the build approach,
                and the result so you can understand both the work and the thinking
                behind it.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Brief", "Challenge", "Solution", "Result", "Stack", "Outcome"].map((item) => (
                  <span
                    key={item}
                    className="meta-chip border-accent-border bg-accent-dim text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          ),
        }}
      />

      <section className="page-shell section-shell-tight">
        {projects.length > 1 ? (
          <AnimatedSection className="horizontal-rail items-stretch" delay={0.05}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="horizontal-card panel panel-hover equal-height-card w-[min(100%,320px)]"
              >
                <div
                  className="flex h-[180px] items-center justify-center border-b border-border text-5xl"
                  style={{ background: project.thumbGradient }}
                >
                  {project.thumbEmoji}
                </div>
                <div className="equal-height-card-body p-6">
                  <p className="card-label">{project.category}</p>
                  <h2 className="mt-4 text-[28px] leading-[1.05]">{project.name}</h2>
                  <p className="mt-4 text-[16px] leading-[1.76]">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="meta-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto pt-6 inline-flex text-[15px] font-semibold text-accent">
                    Open case study →
                  </span>
                </div>
              </Link>
            ))}
          </AnimatedSection>
        ) : null}

        <AnimatedSection className={projects.length > 1 ? "mt-10" : undefined} delay={0.08}>
          <ProjectGrid projects={projects} />
        </AnimatedSection>
      </section>

      <CTABand
        heading="Have a project in mind?"
        subtext="Let's scope it properly and get you a clear next step without agency fluff."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}
