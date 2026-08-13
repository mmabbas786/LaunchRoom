import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Linkedin, Twitter } from "lucide-react";

import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mirzamehediabbas/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/mmabbas786", icon: Github },
  { label: "Twitter", href: "https://x.com/mmabbasofficial", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(12,12,12,0.92)] py-12">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              <Image
                src="/launchroom-logo.png"
                alt="LaunchRoom logo"
                width={52}
                height={52}
                className="h-12 w-12 shrink-0 rounded-[16px] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_1px_rgba(232,160,32,0.34),0_0_0_5px_rgba(232,160,32,0.08),0_18px_40px_rgba(232,160,32,0.22)]"
              />
              <div className="flex flex-col">
                <span className="font-display text-[26px] font-extrabold tracking-[-0.06em] text-text-primary leading-none">
                  Launch<span className="text-accent">Room</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-text-muted mt-1">
                  AI, Tech & Startup Intelligence
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-text-secondary">
              Independent publication covering artificial intelligence, cloud architecture, cybersecurity threat vectors, software releases, and high-growth startup engineering.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="social-icon-button !h-10 !w-10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="card-label">Publication</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/ai" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Artificial Intelligence
                </Link>
                <Link href="/startups" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Startups & Funding
                </Link>
                <Link href="/software" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Software Engineering
                </Link>
                <Link href="/cloud" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Cloud Infrastructure
                </Link>
                <Link href="/cybersecurity" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Cybersecurity
                </Link>
                <Link href="/research" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Deep Tech Research
                </Link>
              </nav>
            </div>

            <div>
              <p className="card-label">Ecosystem & Studio</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <a
                  href="https://toolztotal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[14px] font-medium text-accent hover:underline"
                >
                  <span>ToolzTotal Ecosystem</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link href="/services/website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  LaunchRoom Studio
                </Link>
                <Link href="/services/web-app-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Web App Engineering
                </Link>
                <Link href="/services/startup-mvp-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  SaaS MVP Studio
                </Link>
                <Link href="/services/nextjs-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Next.js Services
                </Link>
              </nav>
            </div>

            <div>
              <p className="card-label">Company & Legal</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/about" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  About LaunchRoom
                </Link>
                <Link href="/contact" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Contact Newsroom
                </Link>
                <Link href="/privacy-policy" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Editorial Disclaimer
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LaunchRoom. All rights reserved. Built for global tech & AI intelligence.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:infolaunchroom@gmail.com" className="hover:text-text-primary">
              Editorial: infolaunchroom@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

