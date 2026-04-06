import Link from "next/link";

import type { Project } from "@/data/projects";

import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="panel panel-hover block overflow-hidden"
    >
      <div
        className="flex h-[220px] items-center justify-center border-b-2 border-black text-6xl"
        style={{ background: project.thumbGradient }}
      >
        {project.thumbEmoji}
      </div>

      <div className="p-7 sm:p-8">
        <Badge className="mb-5">{project.category}</Badge>
        <h3 className="text-[30px] leading-[1.04]">{project.name}</h3>
        <p className="mt-4 text-[17px] leading-[1.8]">{project.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="mt-7 inline-flex text-[15px] font-semibold text-accent">
          View case study →
        </span>
      </div>
    </Link>
  );
}
