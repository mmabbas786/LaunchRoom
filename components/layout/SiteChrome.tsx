"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

function shouldHideGlobalChrome(pathname: string) {
  return pathname.startsWith("/demos/") && pathname !== "/demos";
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideGlobalChrome = shouldHideGlobalChrome(pathname ?? "");

  return (
    <div className="flex min-h-screen flex-col">
      {!hideGlobalChrome ? <Nav /> : null}
      <main className="flex-1">{children}</main>
      {!hideGlobalChrome ? <WhatsAppButton /> : null}
      {!hideGlobalChrome ? <Footer /> : null}
      {!hideGlobalChrome ? <CookieBanner /> : null}
    </div>
  );
}
