import { Tag } from "@/components/ui/Tag";

export function StackGrid({
  groups,
}: {
  groups: Array<{ label: string; items: string[] }>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((group, index) => (
        <article
          key={group.label}
          className={index % 2 === 0 ? "panel p-7" : "panel-lime p-7"}
        >
          <p className={`card-label ${index % 2 === 0 ? "" : "text-on-dark-muted"}`}>
            Toolkit block
          </p>
          <h3
            className={[
              "mt-4 text-[30px] leading-[1.05]",
              index % 2 === 0 ? "text-text-primary" : "text-on-dark",
            ].join(" ")}
          >
            {group.label}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag
                key={item}
                className={index % 2 === 0 ? "" : "border-accent-border bg-accent-dim text-on-dark"}
              >
                {item}
              </Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
