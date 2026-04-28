import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="panel panel-hover equal-height-card block"
    >
      <div className="relative h-[220px] overflow-hidden border-b-2 border-black bg-surface-2">
        {project.thumbImageSrc ? (
          <Image
            src={project.thumbImageSrc}
            alt={project.thumbImageAlt ?? `${project.name} thumbnail`}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center text-6xl"
            style={{ background: project.thumbGradient }}
          >
            {project.thumbEmoji}
          </div>
        )}
      </div>

      <div className="equal-height-card-body">
        <Badge className="mb-5">{project.category}</Badge>
        <h3 className="text-[30px] leading-[1.04]">{project.name}</h3>
        <p className="mt-4 text-[17px] leading-[1.8]">{project.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="mt-auto pt-7 inline-flex text-[15px] font-semibold text-accent">
          View case study →
        </span>
      </div>
    </Link>
  );
}
