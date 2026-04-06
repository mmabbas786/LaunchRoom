"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory } from "@/data/projects";

import { FilterBar } from "@/components/work/FilterBar";
import { ProjectCard } from "@/components/work/ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
