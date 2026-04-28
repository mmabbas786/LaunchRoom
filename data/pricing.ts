import { siteConfig } from "@/lib/site";

export type SupportedCurrency = "INR" | "USD";
export type CurrencyAmount = Record<SupportedCurrency, string>;

export type PricingPlan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  whatsapp: string;
  cta: string;
  popular?: boolean;
};

export type PricingAddon = {
  name: string;
  price: string;
};

export type PricingCurrencyData = {
  basic: PricingPlan;
  launch: PricingPlan;
  scale: PricingPlan;
  addons: PricingAddon[];
};

export const pricingData: Record<SupportedCurrency, PricingCurrencyData> = {
  INR: {
    basic: {
      name: "BASIC",
      price: "₹14,999",
      tagline: "A lean one-page website package for businesses that need a polished web presence fast.",
      features: [
        "1-Page Website",
        "Mobile-Optimized Design",
        "Fast, Secure Website",
        "Domain + Hosting Setup",
        "1 Month Support",
      ],
      whatsapp:
        "Hi, I am interested in the Basic package (₹14,999). Please share more details.",
      cta: "Get Started",
    },
    launch: {
      name: "LAUNCH",
      price: "₹24,999",
      tagline: "A focused website package for a clean first launch",
      features: [
        "5 Pages Website",
        "Mobile-Optimized Design",
        "Lead Capture System",
        "WhatsApp Integration",
        "Basic SEO Setup",
        "Fast, Secure Website",
        "Domain + Hosting Setup",
        "1 Month Support",
      ],
      whatsapp:
        "Hi, I am interested in the Launch package (₹24,999). Please share more details.",
      cta: "Get Started",
    },
    scale: {
      name: "SCALE",
      price: "₹44,999",
      tagline: "A stronger package for visibility, branding, and growth",
      popular: true,
      features: [
        "Everything in Launch",
        "Up to 10 Pages",
        "Logo + Branding",
        "Google Business Setup",
        "Analytics + Tracking",
        "Advanced SEO",
        "Conversion Strategy",
        "Speed Optimization",
        "3 Months Priority Support",
      ],
      whatsapp:
        "Hi, I am interested in the Scale package (₹44,999). Please share more details.",
      cta: "Get Started",
    },
    addons: [
      { name: "Extra Page", price: "₹1,999" },
      { name: "Monthly Maintenance", price: "₹2,999/mo" },
      { name: "SEO Monthly", price: "₹4,999/mo" },
      { name: "Logo Only", price: "₹2,999" },
      { name: "Extra Revision", price: "₹499" },
      { name: "Speed Optimization", price: "₹1,999" },
      { name: "E-commerce Addition", price: "₹9,999" },
      { name: "Content Per Page", price: "₹499" },
      { name: "Google My Business", price: "₹2,499" },
    ],
  },
  USD: {
    basic: {
      name: "BASIC",
      price: "$499",
      tagline: "A lean one-page website package for businesses that need a polished web presence fast.",
      features: [
        "1-Page Website",
        "Mobile-Optimized Design",
        "Fast, Secure Website",
        "Domain + Hosting Setup",
        "1 Month Support",
      ],
      whatsapp:
        "Hi, I am interested in the Basic package ($499). Please share more details.",
      cta: "Get Started",
    },
    launch: {
      name: "LAUNCH",
      price: "$799",
      tagline: "A focused website package for a clean first launch",
      features: [
        "5 Pages Website",
        "Mobile-Optimized Design",
        "Lead Capture System",
        "WhatsApp Integration",
        "Basic SEO Setup",
        "Fast, Secure Website",
        "Domain + Hosting Setup",
        "1 Month Support",
      ],
      whatsapp:
        "Hi, I am interested in the Launch package ($799). Please share more details.",
      cta: "Get Started",
    },
    scale: {
      name: "SCALE",
      price: "$1,499",
      tagline: "A stronger package for visibility, branding, and growth",
      popular: true,
      features: [
        "Everything in Launch",
        "Up to 10 Pages",
        "Logo + Branding",
        "Google Business Setup",
        "Analytics + Tracking",
        "Advanced SEO",
        "Conversion Strategy",
        "Speed Optimization",
        "3 Months Priority Support",
      ],
      whatsapp:
        "Hi, I am interested in the Scale package ($1,499). Please share more details.",
      cta: "Get Started",
    },
    addons: [
      { name: "Extra Page", price: "$49" },
      { name: "Monthly Maintenance", price: "$79/mo" },
      { name: "SEO Monthly", price: "$149/mo" },
      { name: "Logo Only", price: "$79" },
      { name: "Extra Revision", price: "$19" },
      { name: "Speed Optimization", price: "$49" },
      { name: "E-commerce Addition", price: "$249" },
      { name: "Content Per Page", price: "$19" },
      { name: "Google My Business", price: "$69" },
    ],
  },
};

function getAddonPrice(currency: SupportedCurrency, name: string) {
  const addon = pricingData[currency].addons.find((item) => item.name === name);

  if (!addon) {
    throw new Error(`Missing addon price for ${name} in ${currency}`);
  }

  return addon.price;
}

export const pricingSummary = {
  basic: {
    INR: pricingData.INR.basic.price,
    USD: pricingData.USD.basic.price,
  } satisfies CurrencyAmount,
  launch: {
    INR: pricingData.INR.launch.price,
    USD: pricingData.USD.launch.price,
  } satisfies CurrencyAmount,
  scale: {
    INR: pricingData.INR.scale.price,
    USD: pricingData.USD.scale.price,
  } satisfies CurrencyAmount,
  monthlyMaintenance: {
    INR: getAddonPrice("INR", "Monthly Maintenance"),
    USD: getAddonPrice("USD", "Monthly Maintenance"),
  } satisfies CurrencyAmount,
  extraRevision: {
    INR: getAddonPrice("INR", "Extra Revision"),
    USD: getAddonPrice("USD", "Extra Revision"),
  } satisfies CurrencyAmount,
};

export const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

export function formatRecurringPrice(price: string) {
  return price.replace("/mo", " per month");
}
