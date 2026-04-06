import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-[28px] font-extrabold tracking-[-0.06em] text-text-primary"
            >
              Launch<span className="text-accent">room</span>
            </Link>
            <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-text-secondary">
              Web &amp; App Studio · Kolkata, India
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="meta-chip preserve-case">
                {siteConfig.email}
              </a>
              <span className="meta-chip">{siteConfig.phone}</span>
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
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
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
          <p>© {new Date().getFullYear()} Launchroom. All rights reserved.</p>

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
