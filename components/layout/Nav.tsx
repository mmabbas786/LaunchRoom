"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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
      <header className="sticky top-0 z-40 pt-4 lg:pt-5">
        <div className="page-shell">
          <nav
            className={cn(
              "flex min-h-[72px] items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-md transition-all duration-200 sm:px-6",
              scrolled
                ? "border-border-hover bg-[rgba(8,8,8,0.92)] shadow-[0_18px_54px_rgba(0,0,0,0.42)]"
                : "border-border bg-[rgba(8,8,8,0.88)] shadow-[0_12px_36px_rgba(0,0,0,0.28)]",
            )}
          >
            <Link href="/" className="flex items-center gap-3">
              <span className="font-display text-[24px] font-extrabold tracking-[-0.06em] text-text-primary">
                Launch<span className="text-accent">room</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {siteConfig.navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-flex px-1 py-2 text-[14px] font-medium text-text-secondary hover:text-text-primary",
                        isActive && "text-text-primary",
                      )}
                    >
                      {item.label}
                      {isActive ? (
                        <span className="absolute bottom-[-6px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <Button href="/start" className="min-h-[46px] px-5 text-[14px]">
                Start a project
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-1 text-text-primary lg:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile navigation"
              className="fixed inset-0 z-[60] bg-[rgba(0,0,0,0.84)] backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-0 z-[70] flex w-screen flex-col overflow-y-auto border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),#0d0d0d] px-5 pb-6 pt-5 shadow-[0_30px_90px_rgba(0,0,0,0.54)] lg:hidden sm:inset-auto sm:right-4 sm:top-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100vw-2rem)] sm:max-w-sm sm:rounded-[28px] sm:border sm:px-6 sm:pb-6 sm:pt-6"
              initial={{ x: "105%" }}
              animate={{ x: 0 }}
              exit={{ x: "105%" }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 flex items-start justify-between gap-4 border-b border-border pb-5 sm:items-center sm:border-b-0 sm:pb-0">
                <Link
                  href="/"
                  className="pr-3 font-display text-[24px] font-extrabold tracking-[-0.06em] text-text-primary"
                >
                  Launch<span className="text-accent">room</span>
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

              <div className="panel-accent mb-6 p-5">
                <p className="card-label">Web &amp; App Studio</p>
                <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">
                  Launchroom builds premium websites, app interfaces, and clean
                  digital systems for businesses that need to ship with confidence.
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                {siteConfig.navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-[18px] border px-5 py-4 text-lg font-medium",
                        isActive
                          ? "border-accent-border bg-accent-dim text-text-primary"
                          : "border-border bg-surface-1 text-text-secondary hover:text-text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Button href="/start" className="mt-8 w-full justify-center">
                Start a project
              </Button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
