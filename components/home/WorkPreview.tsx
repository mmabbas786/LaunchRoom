import Link from "next/link";

import { projects } from "@/data/projects";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function WorkPreview() {
  return (
    <section className="page-shell section-shell-tight">
      <AnimatedSection className="text-center">
        <p className="eyebrow mx-auto">Complete Projects</p>
        <h2 className="section-title mx-auto max-w-[14ch]">
          Check out our latest complete projects.
        </h2>
      </AnimatedSection>

      <AnimatedSection className="mt-10 grid gap-5 lg:grid-cols-3" delay={0.05}>
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={index === 1 ? "panel-accent panel-hover overflow-hidden" : "panel panel-hover overflow-hidden"}
          >
            <div className="p-4">
              <div
                className="flex h-[220px] items-center justify-center rounded-[18px] border border-border text-[72px]"
                style={{ background: project.thumbGradient }}
              >
                {project.thumbEmoji}
              </div>
            </div>
            <div className="px-6 pb-7">
              <p className="card-label">{project.category}</p>
              <h3 className="mt-3 text-[28px] leading-[1.08]">{project.name}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-text-secondary">
                {project.desc}
              </p>
            </div>
          </Link>
        ))}
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/work">View all projects</Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
