"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import type { SupportedCurrency } from "@/data/pricing";
import {
  detectCurrencyFromCoordinates,
  defaultVisitorCurrency,
  detectBrowserCurrency,
} from "@/lib/visitor-currency";

type CookieConsentStatus = "unknown" | "accepted" | "rejected";
type LocationPricingStatus = "idle" | "detecting" | "granted" | "denied" | "unsupported";
export type CurrencyPreferenceSource = "auto" | "manual";

type VisitorPreferencesContextValue = {
  currency: SupportedCurrency;
  cookieConsent: CookieConsentStatus;
  locationPricingStatus: LocationPricingStatus;
  currencyPreferenceSource: CurrencyPreferenceSource;
  acceptCookiesAndDetectLocation: () => void;
  rejectCookies: () => void;
  setCurrencyPreference: (currency: SupportedCurrency) => void;
};

const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
const AUTO_LOCATION_PROMPT_SESSION_KEY = "launchroom_location_prompt_started";
const CONSENT_COOKIE_NAME = "launchroom_cookie_consent";
const CURRENCY_COOKIE_NAME = "launchroom_currency";
const CURRENCY_SOURCE_COOKIE_NAME = "launchroom_currency_source";
const LOCATION_COOKIE_NAME = "launchroom_location_pricing";

const VisitorPreferencesContext = createContext<VisitorPreferencesContextValue | null>(null);

function readCookie(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const prefix = `${name}=`;
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(prefix));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.slice(prefix.length));
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function clearCookie(name: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
}

function isSupportedCurrency(value?: string | null): value is SupportedCurrency {
  return value === "INR" || value === "USD";
}

function isLocationPricingStatus(value?: string | null): value is LocationPricingStatus {
  return (
    value === "idle" ||
    value === "detecting" ||
    value === "granted" ||
    value === "denied" ||
    value === "unsupported"
  );
}

function isCurrencyPreferenceSource(value?: string | null): value is CurrencyPreferenceSource {
  return value === "auto" || value === "manual";
}

function readInitialCookieConsent(): CookieConsentStatus {
  const savedConsent = readCookie(CONSENT_COOKIE_NAME);

  return savedConsent === "accepted" || savedConsent === "rejected"
    ? savedConsent
    : "unknown";
}

function readInitialLocationPricingStatus(
  consent: CookieConsentStatus,
): LocationPricingStatus {
  const savedLocationPricing = readCookie(LOCATION_COOKIE_NAME);

  if (isLocationPricingStatus(savedLocationPricing)) {
    return savedLocationPricing;
  }

  return consent === "rejected" ? "denied" : "idle";
}

function readInitialCurrency(
  consent: CookieConsentStatus,
): SupportedCurrency {
  const savedCurrency = readCookie(CURRENCY_COOKIE_NAME);

  if (isSupportedCurrency(savedCurrency)) {
    return savedCurrency;
  }

  return consent === "accepted" ? detectBrowserCurrency() : defaultVisitorCurrency;
}

function readInitialCurrencyPreferenceSource(): CurrencyPreferenceSource {
  const savedSource = readCookie(CURRENCY_SOURCE_COOKIE_NAME);

  if (isCurrencyPreferenceSource(savedSource)) {
    return savedSource;
  }

  return "auto";
}

function hasStartedAutoLocationPrompt() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.sessionStorage.getItem(AUTO_LOCATION_PROMPT_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markAutoLocationPromptStarted() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(AUTO_LOCATION_PROMPT_SESSION_KEY, "true");
  } catch {}
}

export function VisitorPreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [currency, setCurrency] = useState<SupportedCurrency>(defaultVisitorCurrency);
  const [cookieConsent, setCookieConsent] = useState<CookieConsentStatus>("unknown");
  const [locationPricingStatus, setLocationPricingStatus] =
    useState<LocationPricingStatus>("idle");
  const [currencyPreferenceSource, setCurrencyPreferenceSource] =
    useState<CurrencyPreferenceSource>("auto");
  const [hasHydratedPreferences, setHasHydratedPreferences] = useState(false);
  const locationRequestIdRef = useRef(0);

  const hideAutoLocationPrompt =
    pathname?.startsWith("/demos/") && pathname !== "/demos";

  useEffect(() => {
    const savedConsent = readInitialCookieConsent();
    const savedLocationPricing = readInitialLocationPricingStatus(savedConsent);

    setCookieConsent(savedConsent);
    setLocationPricingStatus(savedLocationPricing);
    setCurrency(readInitialCurrency(savedConsent));
    setCurrencyPreferenceSource(readInitialCurrencyPreferenceSource());
    setHasHydratedPreferences(true);
  }, []);

  const acceptCookiesAndDetectLocation = () => {
    const requestId = locationRequestIdRef.current + 1;
    locationRequestIdRef.current = requestId;
    setCookieConsent("accepted");
    setLocationPricingStatus("detecting");
    setCurrencyPreferenceSource("auto");
    writeCookie(CONSENT_COOKIE_NAME, "accepted");
    writeCookie(CURRENCY_SOURCE_COOKIE_NAME, "auto");

    const fallbackCurrency = detectBrowserCurrency();

    if (!("geolocation" in navigator)) {
      if (locationRequestIdRef.current !== requestId) {
        return;
      }

      setCurrency(fallbackCurrency);
      setLocationPricingStatus("unsupported");
      setCurrencyPreferenceSource("auto");
      writeCookie(CURRENCY_COOKIE_NAME, fallbackCurrency);
      writeCookie(CURRENCY_SOURCE_COOKIE_NAME, "auto");
      writeCookie(LOCATION_COOKIE_NAME, "unsupported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (locationRequestIdRef.current !== requestId) {
          return;
        }

        const detectedCurrency = detectCurrencyFromCoordinates(position.coords);
        setCurrency(detectedCurrency);
        setLocationPricingStatus("granted");
        setCurrencyPreferenceSource("auto");
        writeCookie(CURRENCY_COOKIE_NAME, detectedCurrency);
        writeCookie(CURRENCY_SOURCE_COOKIE_NAME, "auto");
        writeCookie(LOCATION_COOKIE_NAME, "granted");
      },
      (error) => {
        if (locationRequestIdRef.current !== requestId) {
          return;
        }

        const nextStatus = error.code === 1 ? "denied" : "unsupported";

        setCurrency(fallbackCurrency);
        setLocationPricingStatus(nextStatus);
        setCurrencyPreferenceSource("auto");
        writeCookie(CURRENCY_COOKIE_NAME, fallbackCurrency);
        writeCookie(CURRENCY_SOURCE_COOKIE_NAME, "auto");
        writeCookie(
          LOCATION_COOKIE_NAME,
          nextStatus,
        );
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1000 * 60 * 10,
      },
    );
  };

  const rejectCookies = () => {
    locationRequestIdRef.current += 1;
    setCookieConsent("rejected");
    setCurrency(defaultVisitorCurrency);
    setLocationPricingStatus("denied");
    setCurrencyPreferenceSource("auto");
    writeCookie(CONSENT_COOKIE_NAME, "rejected");
    clearCookie(CURRENCY_COOKIE_NAME);
    clearCookie(CURRENCY_SOURCE_COOKIE_NAME);
    clearCookie(LOCATION_COOKIE_NAME);
  };

  const setCurrencyPreference = (nextCurrency: SupportedCurrency) => {
    locationRequestIdRef.current += 1;
    setCurrency(nextCurrency);
    setCurrencyPreferenceSource("manual");

    if (locationPricingStatus === "detecting") {
      setLocationPricingStatus("idle");
    }

    if (cookieConsent === "accepted") {
      writeCookie(CURRENCY_COOKIE_NAME, nextCurrency);
      writeCookie(CURRENCY_SOURCE_COOKIE_NAME, "manual");
      writeCookie(LOCATION_COOKIE_NAME, "idle");
    }
  };

  useEffect(() => {
    if (!hasHydratedPreferences) {
      return;
    }

    if (hideAutoLocationPrompt) {
      return;
    }

    if (currencyPreferenceSource === "manual") {
      return;
    }

    if (locationPricingStatus !== "idle") {
      return;
    }

    if (cookieConsent !== "unknown" && cookieConsent !== "accepted") {
      return;
    }

    if (hasStartedAutoLocationPrompt()) {
      return;
    }

    markAutoLocationPromptStarted();
    acceptCookiesAndDetectLocation();
  }, [
    cookieConsent,
    currencyPreferenceSource,
    hasHydratedPreferences,
    hideAutoLocationPrompt,
    locationPricingStatus,
  ]);

  return (
    <VisitorPreferencesContext.Provider
      value={{
        currency,
        cookieConsent,
        locationPricingStatus,
        currencyPreferenceSource,
        acceptCookiesAndDetectLocation,
        rejectCookies,
        setCurrencyPreference,
      }}
    >
      {children}
    </VisitorPreferencesContext.Provider>
  );
}

export function useVisitorPreferences() {
  const context = useContext(VisitorPreferencesContext);

  if (!context) {
    throw new Error("useVisitorPreferences must be used inside VisitorPreferencesProvider.");
  }

  return context;
}
