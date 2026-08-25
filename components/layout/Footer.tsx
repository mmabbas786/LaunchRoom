import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mirzamehediabbas/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/mmabbas786", icon: Github },
  { label: "Twitter", href: "https://x.com/mmabbasofficial", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(12,12,12,0.92)] py-14">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2.5fr]">
          {/* Brand & Studio Summary */}
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
              LaunchRoom is a website development studio based in Kolkata, West Bengal. We design, build, and support high-converting business websites, booking platforms, and custom web applications for clients across India.
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

            <div className="mt-6 rounded-2xl border border-border bg-surface-1 p-4">
              <p className="text-[11px] font-mono uppercase tracking-wider text-accent font-bold">
                Based in Kolkata • Serving India
              </p>
              <p className="mt-1 text-[13px] text-text-primary font-medium">
                Professional web development without agency fluff or technical complexity.
              </p>
              <div className="mt-3">
                <Link
                  href="/start"
                  className="inline-flex items-center text-[13px] font-semibold text-accent hover:underline"
                >
                  Start your project brief →
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Structured Columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Website Services */}
            <div>
              <p className="card-label">Services</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/services/website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Website Development
                </Link>
                <Link href="/services/business-website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Business Websites
                </Link>
                <Link href="/services/booking-website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Booking Websites
                </Link>
                <Link href="/services/portfolio-website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Portfolio Websites
                </Link>
                <Link href="/services/landing-page-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Landing Pages
                </Link>
                <Link href="/services/ecommerce-website-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  E-Commerce Stores
                </Link>
                <Link href="/services/custom-web-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Custom Solutions
                </Link>
                <Link href="/services/website-maintenance" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Website Maintenance
                </Link>
              </nav>
            </div>

            {/* Column 2: Solutions & Proof */}
            <div>
              <p className="card-label">Explore &amp; Proof</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/demos" className="text-[14px] font-medium text-accent hover:underline">
                  Niche Demo Library (12)
                </Link>
                <Link href="/work" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Client Case Studies
                </Link>
                <Link href="/work/new-india-stores" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  New India Stores (Kolkata)
                </Link>
                <Link href="/work/pdf-vault" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  PDF Vault SaaS Build
                </Link>
                <Link href="/services/web-app-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Web Applications
                </Link>
                <Link href="/services/startup-mvp-development" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Startup MVP Studio
                </Link>
              </nav>
            </div>

            {/* Column 3: Pricing & Packages */}
            <div>
              <p className="card-label">Pricing &amp; Packages</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/pricing" className="text-[14px] font-medium text-accent hover:underline">
                  All Packages &amp; Pricing →
                </Link>
                <Link href="/pricing" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Basic Package (₹14,999)
                </Link>
                <Link href="/pricing" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Launch Package (₹24,999)
                </Link>
                <Link href="/pricing" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Scale Package (₹44,999)
                </Link>
                <Link href="/services/website-maintenance" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Monthly Support (₹2,999/mo)
                </Link>
                <Link href="/start" className="text-[14px] font-medium text-accent hover:underline">
                  Request Custom Quote
                </Link>
              </nav>
            </div>

            {/* Column 4: Company & Legal */}
            <div>
              <p className="card-label">Company &amp; Legal</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <Link href="/about" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  About LaunchRoom
                </Link>
                <Link href="/contact" className="text-[14px] font-medium text-text-secondary hover:text-text-primary">
                  Contact Us
                </Link>
                <Link href="/start" className="text-[14px] font-medium text-accent hover:underline">
                  Start a Project Brief
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

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LaunchRoom. All rights reserved.</p>
          <div className="flex items-center gap-6 min-w-0">
            <a href="mailto:infolaunchroom@gmail.com" className="hover:text-text-primary break-all">
              infolaunchroom@gmail.com
            </a>
            <span>•</span>
            <span className="text-text-muted">Kolkata, West Bengal, India • Serving Clients Nationwide &amp; Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
