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
              <span className="font-display text-[26px] font-extrabold tracking-[-0.06em] text-text-primary">
                Launch<span className="text-accent">Room</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[14px] leading-[1.75] text-text-secondary">
              LaunchRoom is a digital product engineering studio building custom websites, SaaS web applications, and digital platforms, alongside publishing industry insights on AI, cloud, software, and cybersecurity.
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
              <p className="card-label">Services</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/services/website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Website Development
                </Link>
                <Link href="/services/web-app-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Web App Engineering
                </Link>
                <Link href="/services/nextjs-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Next.js Agency
                </Link>
                <Link href="/services/startup-mvp-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Startup MVP Studio
                </Link>
              </nav>
            </div>

            <div>
              <p className="card-label">Blog & Insights</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/blog" className="text-[14px] font-medium text-accent hover:underline">
                  All Blog Posts
                </Link>
                <Link href="/blog/ai-automation" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  AI & Automation
                </Link>
                <Link href="/blog/tech-news" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Tech News
                </Link>
                <Link href="/blog/software-saas" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Software & SaaS
                </Link>
                <Link href="/blog/cloud-devops" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Cloud & DevOps
                </Link>
                <Link href="/blog/cybersecurity" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Cybersecurity
                </Link>
              </nav>
            </div>

            <div>
              <p className="card-label">Company & Ecosystem</p>
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
                <Link href="/about" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  About LaunchRoom
                </Link>
                <Link href="/contact" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Contact Us
                </Link>
                <Link href="/privacy-policy" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Disclaimer
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LaunchRoom. All rights reserved.</p>
          <div className="flex items-center gap-4 min-w-0">
            <a href="mailto:infolaunchroom@gmail.com" className="hover:text-text-primary break-all">
              infolaunchroom@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


