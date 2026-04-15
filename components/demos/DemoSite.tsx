"use client";

import type { CSSProperties } from "react";

import type { Demo } from "@/lib/demos";
import { hexToRgba } from "@/lib/demos";
import { cn } from "@/lib/utils";

function getDemoStyle(accentColor: string) {
  return {
    "--demo-accent": accentColor,
    "--demo-accent-soft": hexToRgba(accentColor, 0.16),
    "--demo-accent-border": hexToRgba(accentColor, 0.32),
    "--demo-accent-wash": hexToRgba(accentColor, 0.08),
  } as CSSProperties;
}

export function DemoSite({
  demo,
  navStickyOffsetClass = "top-0",
  compact = false,
}: {
  demo: Demo;
  navStickyOffsetClass?: string;
  compact?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-[28px] border border-white/10 bg-[#050505] text-white shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
      style={getDemoStyle(demo.accentColor)}
    >
      <nav
        className={cn(
          "sticky z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-[rgba(5,5,5,0.88)] px-4 py-4 backdrop-blur-xl sm:px-6",
          navStickyOffsetClass,
        )}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
            {demo.industry}
          </p>
          <p className="mt-1 text-lg font-semibold text-white">{demo.businessName}</p>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#services" className="text-sm text-white/65 hover:text-white">
            Services
          </a>
          <a href="#gallery" className="text-sm text-white/65 hover:text-white">
            Gallery
          </a>
          <a href="#contact" className="text-sm text-white/65 hover:text-white">
            Contact
          </a>
          <a
            href={`https://wa.me/${demo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-full px-5 py-2 text-sm font-semibold text-[#050505]"
            style={{ backgroundColor: demo.accentColor }}
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />

        {demo.sections.map((section, index) => {
          if (section.type === "hero") {
            return (
              <section
                key={`${section.type}-${index}`}
                className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20"
                style={{
                  background: `radial-gradient(circle at top, ${hexToRgba(demo.accentColor, 0.22)} 0%, rgba(5,5,5,0) 48%)`,
                }}
              >
                <div className="mx-auto max-w-5xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/72"
                      style={{ borderColor: hexToRgba(demo.accentColor, 0.34) }}
                    >
                      {demo.location}
                    </span>
                    <span className="text-xl">{demo.coverEmoji}</span>
                  </div>

                  <h1 className="mt-6 max-w-4xl text-[clamp(40px,7vw,78px)] font-semibold leading-[0.95] text-white">
                    {section.headline}
                  </h1>
                  <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-white/72 sm:text-[18px]">
                    {section.subheadline}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${demo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[50px] items-center rounded-full px-6 py-3 text-sm font-semibold text-[#050505]"
                      style={{ backgroundColor: demo.accentColor }}
                    >
                      {section.cta}
                    </a>
                    <a
                      href="#services"
                      className="inline-flex min-h-[50px] items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/82 hover:border-white/30 hover:text-white"
                    >
                      Explore the site
                    </a>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {demo.tags.map((tag) => (
                      <div
                        key={tag}
                        className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/38">
                          Highlight
                        </p>
                        <p className="mt-2 text-[15px] leading-[1.5] text-white/78">{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "services") {
            return (
              <section
                key={`${section.type}-${index}`}
                id="services"
                className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
              >
                <div className="mb-10 flex flex-col gap-3 text-center">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                    Offerings
                  </p>
                  <h2 className="text-[clamp(28px,4vw,42px)] font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[24px] leading-[1.06] text-white">{item.name}</h3>
                        {item.price ? (
                          <span
                            className="inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em]"
                            style={{
                              borderColor: hexToRgba(demo.accentColor, 0.34),
                              color: demo.accentColor,
                              backgroundColor: hexToRgba(demo.accentColor, 0.08),
                            }}
                          >
                            {item.price}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-4 text-[15px] leading-[1.8] text-white/68">
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          }

          if (section.type === "gallery") {
            return (
              <section
                key={`${section.type}-${index}`}
                id="gallery"
                className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] px-5 py-16 sm:px-8 sm:py-20"
              >
                <div className="mx-auto max-w-6xl">
                  <div className="mb-10 flex flex-col gap-3 text-center">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                      Gallery feel
                    </p>
                    <h2 className="text-[clamp(28px,4vw,42px)] font-semibold text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className={cn("grid gap-5", compact ? "md:grid-cols-2" : "lg:grid-cols-3")}>
                    {section.images.map((label, imageIndex) => (
                      <div
                        key={label}
                        className="group relative min-h-[240px] overflow-hidden rounded-[26px] border border-white/10"
                        style={{
                          background: `linear-gradient(145deg, ${hexToRgba(demo.accentColor, 0.4)} 0%, rgba(14,14,14,0.98) 66%)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(0,0,0,0.6)_100%)]" />
                        <div className="relative flex h-full flex-col justify-between p-6">
                          <span className="text-[44px] leading-none text-white/85">
                            {["◐", "◌", "◍"][imageIndex % 3]}
                          </span>
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/48">
                              Preview panel
                            </p>
                            <p className="mt-3 text-[22px] leading-[1.12] text-white">
                              {label}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "testimonials") {
            return (
              <section
                key={`${section.type}-${index}`}
                className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
              >
                <div className="mb-10 flex flex-col gap-3 text-center">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                    Testimonials
                  </p>
                  <h2 className="text-[clamp(28px,4vw,42px)] font-semibold text-white">
                    Built to feel trustworthy.
                  </h2>
                </div>
                <div className="grid gap-5 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                    >
                      <div className="flex gap-1 text-lg" style={{ color: demo.accentColor }}>
                        {Array.from({ length: item.rating }).map((_, starIndex) => (
                          <span key={`${item.name}-${starIndex}`}>★</span>
                        ))}
                      </div>
                      <p className="mt-4 text-[16px] leading-[1.84] text-white/78">
                        “{item.text}”
                      </p>
                      <p className="mt-5 text-[13px] uppercase tracking-[0.18em] text-white/42">
                        {item.name}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          }

          return (
            <section
              key={`${section.type}-${index}`}
              id="contact"
              className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#050505] px-5 py-16 sm:px-8 sm:py-20"
            >
              <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                    Contact
                  </p>
                  <h2 className="mt-4 text-[clamp(30px,4vw,44px)] text-white">
                    Get in touch with {demo.businessName}
                  </h2>
                  <p className="mt-4 max-w-xl text-[16px] leading-[1.84] text-white/68">
                    Fictional contact details are included here to show how a real client
                    website could close the loop from browsing to enquiry.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${demo.phone}`}
                      className="inline-flex min-h-[48px] items-center rounded-full border border-white/12 px-5 py-3 text-sm text-white/82 hover:border-white/28 hover:text-white"
                    >
                      {demo.phone}
                    </a>
                    <a
                      href={`mailto:${demo.email}`}
                      className="inline-flex min-h-[48px] items-center rounded-full border border-white/12 px-5 py-3 text-sm text-white/82 hover:border-white/28 hover:text-white"
                    >
                      {demo.email}
                    </a>
                    <a
                      href={`https://wa.me/${demo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center rounded-full px-5 py-3 text-sm font-semibold text-[#050505]"
                      style={{ backgroundColor: demo.accentColor }}
                    >
                      WhatsApp us
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03]">
                  <div
                    className="min-h-[260px] border-b border-white/10"
                    style={{
                      background: `radial-gradient(circle at 25% 25%, ${hexToRgba(demo.accentColor, 0.36)} 0%, rgba(9,9,9,0.95) 50%)`,
                    }}
                  >
                    <div className="grid min-h-[260px] place-items-center bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]">
                      <div className="rounded-full border border-white/14 bg-black/30 px-4 py-2 text-[13px] uppercase tracking-[0.18em] text-white/68">
                        Serving {demo.location}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 p-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                        Demo business
                      </p>
                      <p className="mt-2 text-[18px] text-white">{demo.businessName}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/42">
                        Area served
                      </p>
                      <p className="mt-2 text-[18px] text-white">{demo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="border-t border-white/8 px-5 py-7 text-center sm:px-8">
        <p className="text-[12px] leading-[1.8] text-white/42">
          This is a fictional demo website built by{" "}
          <a href="/" target="_top" className="text-[#d4a843] hover:underline">
            LaunchRoom
          </a>
          . All business details shown here are illustrative.
        </p>
      </footer>
    </div>
  );
}
