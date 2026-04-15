import Link from "next/link";
import { Github, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/mmabbas786", icon: Github },
  { label: "Twitter", href: "https://x.com/", icon: Twitter },
  {
    label: "WhatsApp",
    href: getWhatsAppHref("Hello LaunchRoom, I want to discuss website or app development."),
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[rgba(12,12,12,0.92)] py-8">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-[28px] font-extrabold tracking-[-0.06em] text-text-primary"
            >
              Launch<span className="text-accent">Room</span>
            </Link>
            <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-text-secondary">
              {siteConfig.studioLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="meta-chip preserve-case">
                {siteConfig.email}
              </a>
              <span className="meta-chip">{siteConfig.phone}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-border bg-accent-dim text-accent hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            <div>
              <p className="card-label">Explore</p>
              <nav className="mt-4 flex flex-col gap-3">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[15px] font-medium text-text-secondary hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="card-label">Reach us</p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="preserve-case text-[15px] font-medium text-text-secondary hover:text-text-primary"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={getWhatsAppHref("Hello LaunchRoom, I want to discuss website or app development.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-text-secondary hover:text-text-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-[13px] text-text-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} LaunchRoom. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
