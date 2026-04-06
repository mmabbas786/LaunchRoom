import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  className,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <p
        className={cn(
          "eyebrow",
          invert && "eyebrow-invert",
        )}
      >
        {eyebrow}
      </p>
      <h2 className={cn("section-title", invert && "text-on-dark")}>{title}</h2>
    </div>
  );
}
