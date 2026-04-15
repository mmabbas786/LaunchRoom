"use client";

import { Loader2, MapPin, ShieldCheck } from "lucide-react";

import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";

export function CookieBanner() {
  const {
    cookieConsent,
    locationPricingStatus,
    acceptCookiesAndDetectLocation,
    rejectCookies,
  } = useVisitorPreferences();

  if (cookieConsent !== "unknown" && locationPricingStatus !== "detecting") {
    return null;
  }

  const isDetecting = locationPricingStatus === "detecting";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[95] px-4 sm:bottom-6 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-[720px] rounded-[24px] border border-accent-border bg-[rgba(8,8,8,0.96)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Cookies & location
            </div>
            <div className="space-y-2">
              <p className="text-[18px] font-semibold leading-[1.5] text-text-primary">
                Allow cookies and location access to show the right pricing for
                your region.
              </p>
              <p className="text-[14px] leading-[1.75] text-text-secondary">
                {isDetecting
                  ? "We ask once on first visit. Checking your location now only takes a moment."
                  : "You can reject and continue with the default pricing view instead."}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={rejectCookies}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border px-5 py-3 text-[14px] font-semibold text-text-secondary hover:border-border-hover hover:text-text-primary"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={acceptCookiesAndDetectLocation}
              disabled={isDetecting}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,#f4c86d_0%,#e8a020_48%,#8f5d10_100%)] px-5 py-3 text-[14px] font-semibold text-[#080808] shadow-[0_14px_30px_rgba(232,160,32,0.24)] disabled:pointer-events-none disabled:opacity-70"
            >
              {isDetecting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <MapPin className="h-4 w-4" />
                  Accept
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
