"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";
import { CurrencyToggle } from "@/components/pricing/CurrencyToggle";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { currency, currencyPreferenceSource, setCurrencyPreference } =
    useVisitorPreferences();
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
                ? "border-border-hover bg-[rgba(8,8,8,0.78)] shadow-[0_18px_54px_rgba(0,0,0,0.42)] backdrop-blur-xl"
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
              <span className="font-display text-[24px] font-extrabold tracking-[-0.06em] text-text-primary">
                Launch<span className="text-accent">Room</span>
              </span>
            </Link>

            <div className="hidden items-center gap-4 lg:flex">
              <ul className="flex items-center gap-8">
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

              <CurrencyToggle
                currency={currency}
                onChange={setCurrencyPreference}
                preferenceSource={currencyPreferenceSource}
                variant="compact"
                showHint={false}
                className="shrink-0"
              />

              <Button href="/start" className="min-h-[46px] px-5 text-[14px]">
                Start a project
              </Button>
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
              <div className="mb-8 flex items-start justify-between gap-4 border-b border-border pb-5 sm:items-center sm:border-b-0 sm:pb-0">
                <Link
                  href="/"
                  className="group flex items-center gap-3 pr-3"
                >
                  <Image
                    src="/launchroom-logo.png"
                    alt="LaunchRoom logo"
                    width={44}
                    height={44}
                    className="h-10 w-10 shrink-0 rounded-[12px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_1px_rgba(232,160,32,0.34),0_0_0_5px_rgba(232,160,32,0.08),0_16px_34px_rgba(232,160,32,0.22)]"
                  />
                  <span className="font-display text-[24px] font-extrabold tracking-[-0.06em] text-text-primary">
                    Launch<span className="text-accent">Room</span>
                  </span>
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
                  LaunchRoom builds premium websites, app interfaces, and clean
                  digital systems for businesses that need to ship with confidence.
                </p>
              </div>

              <div className="mb-6 flex items-center justify-between gap-4 rounded-[20px] border border-border bg-surface-1 p-4">
                <div>
                  <p className="card-label">Pricing view</p>
                  <p className="mt-2 text-[14px] leading-[1.65] text-text-secondary">
                    Switch INR or USD anytime.
                  </p>
                </div>

                <CurrencyToggle
                  currency={currency}
                  onChange={setCurrencyPreference}
                  preferenceSource={currencyPreferenceSource}
                  variant="compact"
                  showHint={false}
                  className="shrink-0"
                />
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
