"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory } from "@/data/projects";

import { FilterBar } from "@/components/work/FilterBar";
import { ProjectCard } from "@/components/work/ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))] as ProjectCategory[],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      {filters.length > 2 ? (
        <FilterBar active={activeFilter} filters={filters} onChange={setActiveFilter} />
      ) : null}
      <div
        className={[
          "equal-height-grid",
          projects.length === 1 ? "mx-auto max-w-[760px]" : "lg:grid-cols-2",
        ].join(" ")}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
