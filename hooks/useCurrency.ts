"use client";

import { useEffect, useRef, useState } from "react";

import type { SupportedCurrency } from "@/data/pricing";

const STORAGE_KEY = "launchroom-preferred-currency";

type IpapiResponse = {
  country_code?: string | null;
  currency?: string | null;
};

function isSupportedCurrency(value: string | null | undefined): value is SupportedCurrency {
  return value === "INR" || value === "USD";
}

function getDetectedCurrency(data: IpapiResponse): SupportedCurrency {
  if (data.country_code === "IN" || data.currency === "INR") {
    return "INR";
  }

  return "USD";
}

export function useCurrency() {
  const [currency, setCurrencyState] = useState<SupportedCurrency>("INR");
  const [isLoading, setIsLoading] = useState(true);
  const manualOverrideRef = useRef(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY);

    if (isSupportedCurrency(savedPreference)) {
      setCurrencyState(savedPreference);
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    async function detectCurrency() {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Unable to detect currency");
        }

        const data = (await response.json()) as IpapiResponse;

        if (!cancelled && !manualOverrideRef.current) {
          setCurrencyState(getDetectedCurrency(data));
        }
      } catch {
        if (!cancelled && !manualOverrideRef.current) {
          setCurrencyState("INR");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void detectCurrency();

    return () => {
      cancelled = true;
    };
  }, []);

  const setCurrency = (nextCurrency: SupportedCurrency) => {
    manualOverrideRef.current = true;
    setCurrencyState(nextCurrency);
    window.localStorage.setItem(STORAGE_KEY, nextCurrency);
    setIsLoading(false);
  };

  return {
    currency,
    isLoading,
    setCurrency,
  };
}
