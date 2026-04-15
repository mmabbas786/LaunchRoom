import type { SupportedCurrency } from "@/data/pricing";

export const defaultVisitorCurrency: SupportedCurrency = "INR";

function getRegionFromLocale(locale?: string | null) {
  if (!locale) {
    return null;
  }

  const parts = locale.split(/[-_]/).map((part) => part.trim().toUpperCase());

  return parts.find((part) => /^[A-Z]{2}$/.test(part)) ?? null;
}

function getBrowserLocales() {
  if (typeof window === "undefined") {
    return [];
  }

  const intlLocale = Intl.DateTimeFormat().resolvedOptions().locale;

  return [intlLocale, navigator.language, ...navigator.languages].filter(
    (value): value is string => Boolean(value),
  );
}

export function detectBrowserCurrency(): SupportedCurrency {
  if (typeof window === "undefined") {
    return defaultVisitorCurrency;
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locales = getBrowserLocales();

  if (locales.some((locale) => getRegionFromLocale(locale) === "IN")) {
    return "INR";
  }

  if (timeZone === "Asia/Kolkata") {
    return "INR";
  }

  return "USD";
}

function isWithinIndiaBounds(latitude: number, longitude: number) {
  return latitude >= 6 && latitude <= 38 && longitude >= 68 && longitude <= 98;
}

export function detectCurrencyFromCoordinates(
  coords: Pick<GeolocationCoordinates, "latitude" | "longitude">,
): SupportedCurrency {
  return isWithinIndiaBounds(coords.latitude, coords.longitude) ? "INR" : "USD";
}
