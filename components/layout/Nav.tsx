"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 pt-4 lg:pt-5">
        <div className="page-shell">
          <nav
            className={cn(
              "flex min-h-[72px] items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-200 sm:px-6",
              scrolled
                ? "border-border-hover bg-[rgba(8,8,8,0.85)] shadow-[0_18px_54px_rgba(0,0,0,0.42)] backdrop-blur-xl"
                : "border-transparent bg-transparent shadow-none",
            )}
          >
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/launchroom-logo.png"
                alt="LaunchRoom logo"
                width={48}
                height={48}
                className="h-11 w-11 shrink-0 rounded-[14px] object-cover shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_1px_rgba(232,160,32,0.34),0_0_0_5px_rgba(232,160,32,0.08),0_18px_38px_rgba(232,160,32,0.22)]"
              />
              <div className="flex flex-col">
                <span className="font-display text-[22px] font-extrabold tracking-[-0.06em] text-text-primary leading-none sm:text-[24px]">
                  Launch<span className="text-accent">Room</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-text-muted font-mono hidden sm:inline-block mt-0.5">
                  Tech Intelligence
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-3 xl:gap-6 lg:flex">
              <ul className="flex items-center gap-4 xl:gap-6">
                {siteConfig.navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex px-1 py-1.5 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors",
                          isActive && "text-text-primary font-semibold",
                        )}
                      >
                        {item.label}
                        {isActive ? (
                          <span className="absolute bottom-[-4px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <a
                    href={siteConfig.externalToolsLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-accent/20 bg-accent-dim text-[13px] font-medium text-accent hover:border-accent/40 hover:text-text-primary transition-all"
                  >
                    <span>{siteConfig.externalToolsLink.label}</span>
                  </a>
                </li>
              </ul>

              <Link
                href="/news"
                className="hidden xl:inline-flex items-center justify-center rounded-full border border-border bg-surface-1 px-4 py-2 text-[13px] font-medium text-text-primary hover:border-accent-border transition-all"
              >
                Briefing
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border text-text-primary lg:hidden",
                scrolled
                  ? "border-border bg-surface-1"
                  : "border-border bg-[rgba(8,8,8,0.62)] backdrop-blur-md",
              )}
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence initial={!prefersReducedMotion}>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile navigation"
              className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.84)] backdrop-blur-md lg:hidden"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-0 z-[70] flex w-screen flex-col overflow-y-auto border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#0d0d0d] px-5 pb-6 pt-5 shadow-[0_30px_90px_rgba(0,0,0,0.54)] lg:hidden sm:inset-auto sm:right-4 sm:top-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100vw-2rem)] sm:max-w-sm sm:rounded-[28px] sm:border sm:px-6 sm:pb-6 sm:pt-6"
              initial={prefersReducedMotion ? { x: 0 } : { x: "105%" }}
              animate={{ x: 0 }}
              exit={prefersReducedMotion ? { x: 0 } : { x: "105%" }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-5">
                <Link href="/" className="group flex items-center gap-3 pr-3">
                  <Image
                    src="/launchroom-logo.png"
                    alt="LaunchRoom logo"
                    width={44}
                    height={44}
                    className="h-10 w-10 shrink-0 rounded-[12px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                  />
                  <div className="flex flex-col">
                    <span className="font-display text-[22px] font-extrabold tracking-[-0.06em] text-text-primary">
                      Launch<span className="text-accent">Room</span>
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                      AI & Tech Publication
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-1 text-text-primary"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                {siteConfig.navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-[16px] border px-4 py-3 text-base font-medium",
                        isActive
                          ? "border-accent-border bg-accent-dim text-text-primary"
                          : "border-border bg-surface-1 text-text-secondary hover:text-text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <a
                  href={siteConfig.externalToolsLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-between rounded-[16px] border border-accent-border bg-accent-dim px-4 py-3 text-base font-medium text-accent hover:text-text-primary"
                >
                  <span>{siteConfig.externalToolsLink.label}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="panel-accent mt-6 p-4">
                <p className="card-label">LaunchRoom Studio</p>
                <p className="mt-2 text-[13px] leading-[1.6] text-text-secondary">
                  Custom websites, SaaS MVPs, and web applications for startups and growing businesses.
                </p>
                <Link
                  href="/services/website-development"
                  className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:underline"
                >
                  Explore Studio Services →
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

