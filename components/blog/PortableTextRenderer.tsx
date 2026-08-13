"use client";

import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = Array.isArray(children)
        ? children.map((c) => (typeof c === "string" ? c : "")).join("")
        : String(children || "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      return (
        <h2 id={id} className="mt-10 scroll-mt-24 text-[26px] font-bold text-text-primary">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = Array.isArray(children)
        ? children.map((c) => (typeof c === "string" ? c : "")).join("")
        : String(children || "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      return (
        <h3 id={id} className="mt-8 scroll-mt-24 text-[21px] font-bold text-text-primary">
          {children}
        </h3>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-accent pl-5 font-display text-[18px] italic leading-[1.7] text-text-primary/90">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-5 text-[17px] leading-[1.86] text-text-secondary">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-5 space-y-2.5 pl-6 list-disc text-text-secondary">{children}</ul>,
    number: ({ children }) => <ol className="my-5 space-y-2.5 pl-6 list-decimal text-text-secondary">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[16px] leading-[1.8]">{children}</li>,
    number: ({ children }) => <li className="text-[16px] leading-[1.8]">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value);
      if (!imageUrl) return null;

      return (
        <figure className="my-8 overflow-hidden rounded-[20px] border border-border bg-surface-1">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrl}
              alt={value.alt || "Article illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption ? (
            <figcaption className="p-3 text-center font-mono text-[13px] text-text-muted">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-surface-1 px-1.5 py-0.5 font-mono text-[14px] text-accent border border-border">
        {children}
      </code>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
