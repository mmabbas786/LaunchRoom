import { Calendar, Clock, User, ShieldCheck } from "lucide-react";

interface AuthorBylineProps {
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
}

export function AuthorByline({ author, publishedAt, updatedAt, readTime }: AuthorBylineProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedUpdated = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface-1 p-5 text-[14px]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dim border border-accent-border font-display text-base font-bold text-accent">
          {author.name[0]}
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-medium text-text-primary">
            <span>{author.name}</span>
            <ShieldCheck className="h-4 w-4 text-accent" />
          </div>
          <p className="text-[12px] text-text-muted">{author.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[12px] text-text-muted font-mono">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-accent" />
          <span>Published {formattedDate}</span>
        </div>
        {formattedUpdated && (
          <div className="hidden sm:flex items-center gap-1.5 border-l border-border pl-4">
            <span>Updated {formattedUpdated}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 border-l border-border pl-4">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
