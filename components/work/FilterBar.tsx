"use client";

import type { ProjectCategory } from "@/data/projects";

const filters: ProjectCategory[] = ["All", "Web", "Apps", "Ongoing"];

export function FilterBar({
  active,
  onChange,
}: {
  active: ProjectCategory;
  onChange: (filter: ProjectCategory) => void;
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = active === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={[
              "rounded-full border border-border px-4 py-2.5 text-[14px] font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-all duration-200",
              isActive
                ? "border-accent-border bg-accent text-[#080808] shadow-[0_16px_28px_rgba(232,160,32,0.18)]"
                : "bg-surface-1 text-text-secondary hover:-translate-y-0.5 hover:border-accent-border hover:text-text-primary",
            ].join(" ")}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
