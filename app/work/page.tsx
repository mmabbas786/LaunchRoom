import type { Metadata } from "next";
import Link from "next/link";

import { CTABand } from "@/components/layout/CTABand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work — Launchroom",
  description:
    "Explore Launchroom case studies across client websites, Android products, and ongoing internal experiments.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-shell section-shell">
        <AnimatedSection className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-dark p-7 sm:p-9 lg:p-12">
            <p className="eyebrow eyebrow-invert">
              Our work
            </p>
            <h1 className="page-hero-title mt-6 max-w-[11ch] text-on-dark">
              Projects with a clean path from brief to launch.
            </h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-[1.82] text-on-dark-muted">
              From local business websites to Android utility apps and internal
              experiments, this is where Launchroom shows how it thinks in public.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="panel-lime p-6">
              <p className="card-label text-on-dark-muted">What you'll see</p>
              <p className="mt-3 text-[28px] leading-[1.06] text-on-dark">
                Real client work, shipped product proof, and experiments.
              </p>
            </article>
            <article className="panel p-6">
              <p className="card-label">Current count</p>
              <p className="mt-3 text-[28px] leading-[1.06] text-text-primary">
                {projects.length} active case studies
              </p>
            </article>
            <article className="panel-accent p-6 sm:col-span-2">
              <p className="card-label text-text-primary">What matters here</p>
              <p className="mt-3 text-[18px] leading-[1.8] text-text-secondary">
                Each case study is structured to show context, problem, solution,
                results, and what kind of client or product it was built for.
              </p>
            </article>
          </div>
        </AnimatedSection>
      </section>

      <section className="page-shell section-shell-tight">
        <AnimatedSection className="horizontal-rail" delay={0.05}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="horizontal-card panel panel-hover w-[min(100%,320px)] p-6"
            >
              <p className="card-label">{project.category}</p>
              <h2 className="mt-4 text-[28px] leading-[1.05]">{project.name}</h2>
              <p className="mt-4 text-[16px] leading-[1.76]">{project.summary}</p>
              <span className="mt-6 inline-flex text-[15px] font-semibold text-accent">
                Open case study →
              </span>
            </Link>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-10" delay={0.08}>
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
