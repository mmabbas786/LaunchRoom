import { headers } from "next/headers";

import type { SupportedCurrency } from "@/data/pricing";

const countryHeaderNames = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "cloudfront-viewer-country",
  "x-country-code",
  "x-appengine-country",
] as const;

function getCountryCode(headersList: Headers) {
  for (const headerName of countryHeaderNames) {
    const value = headersList.get(headerName)?.trim().toUpperCase();

    if (value) {
      return value;
    }
  }

  return null;
}

export function getCurrencyForCountry(countryCode?: string | null): SupportedCurrency {
  if (countryCode === "IN") {
    return "INR";
  }

  if (countryCode) {
    return "USD";
  }

  return "INR";
}

export async function getRequestCurrency() {
  const headersList = await headers();

  return getCurrencyForCountry(getCountryCode(headersList));
}
