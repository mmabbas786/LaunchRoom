import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTABand } from "@/components/layout/CTABand";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

type Params = { slug: string };
type RouteProps = { params: Promise<Params> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Launchroom`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: RouteProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <Badge className="mb-5">{project.category}</Badge>
            <h1 className="page-hero-title max-w-[9ch] text-on-dark">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="meta-chip meta-chip-dark">
                  {tag}
                </span>
              ))}
            </div>
            {project.liveUrl ? (
              <div className="mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-accent-border bg-accent-dim px-5 py-3 text-[15px] font-semibold text-on-dark hover:-translate-y-0.5 hover:border-accent"
                >
                  {project.liveLabel ?? "View live project"}
                </a>
              </div>
            ) : null}
          </div>

          <div className="panel overflow-hidden">
            <div
              className="flex h-[320px] items-center justify-center border-b-2 border-black text-[120px]"
              style={{ background: project.thumbGradient }}
            >
              {project.thumbEmoji}
            </div>
            <div className="grid gap-4 p-7 sm:grid-cols-2">
              <MetaCard label="Client" value={project.client} />
              <MetaCard label="Timeline" value={project.timeline} />
              <MetaCard label="Role" value={project.role} />
              <MetaCard label="Focus" value={project.category} />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-shell section-shell-tight">
        <AnimatedSection className="horizontal-rail" delay={0.04}>
          <div className="horizontal-card panel w-[min(100%,320px)] p-6">
            <p className="card-label">Tech stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="horizontal-card panel-accent w-[min(100%,320px)] p-6">
            <p className="card-label text-text-primary">Project summary</p>
            <p className="mt-4 text-[17px] leading-[1.8] text-text-secondary">
              {project.desc}
            </p>
          </div>
          <div className="horizontal-card panel-lime w-[min(100%,320px)] p-6">
            <p className="card-label text-on-dark-muted">Delivery style</p>
            <p className="mt-4 text-[17px] leading-[1.8] text-on-dark-muted">
              Built around clarity, speed, and client handover rather than overbuilt process.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection className="panel p-7" delay={0.06}>
            <p className="card-label">The brief</p>
            <p className="mt-4 text-[17px] leading-[1.84]">{project.overview}</p>
          </AnimatedSection>

          <AnimatedSection className="panel-lime p-7" delay={0.08}>
            <p className="card-label text-on-dark-muted">The challenge</p>
            <p className="mt-4 text-[17px] leading-[1.84] text-on-dark-muted">
              {project.problem}
            </p>
          </AnimatedSection>

          <AnimatedSection className="panel lg:col-span-2 p-7" delay={0.1}>
            <p className="card-label">The solution</p>
            <p className="mt-4 max-w-4xl text-[17px] leading-[1.84]">
              {project.solution}
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-8" delay={0.12}>
          <p className="eyebrow">Results</p>
          <div className="horizontal-rail mt-4">
            {project.results.map((result, resultIndex) => (
              <div
                key={result}
                className={[
                  "horizontal-card w-[min(100%,280px)] p-6",
                  resultIndex % 3 === 0
                    ? "panel"
                    : resultIndex % 3 === 1
                      ? "panel-accent"
                      : "panel-lime",
                ].join(" ")}
              >
                <p className="card-label">Outcome</p>
                <h3 className="mt-4 text-[24px] leading-[1.08]">{result}</h3>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-8 panel p-7 sm:p-8" delay={0.14}>
          <p className="card-label">Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-[clamp(30px,3vw,42px)] leading-[1.04] text-text-primary hover:text-accent"
          >
            {nextProject.name} →
          </Link>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.8]">
            Jump straight into the next case study and see how the studio handles
            a different type of launch.
          </p>
        </AnimatedSection>
      </section>

      <CTABand
        heading="Like what you see? Let's build yours."
        subtext="If you have a project in mind, we can help scope, design, build, and launch it."
        buttonText="Start a project"
        buttonHref="/start"
      />
    </>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border-2 border-black bg-surface-1 p-5 shadow-[4px_4px_0_rgba(0,0,0,0.12)]">
      <p className="card-label">{label}</p>
      <p className="mt-3 text-[20px] leading-[1.15] text-text-primary">{value}</p>
    </div>
  );
}
