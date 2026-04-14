import { siteConfig } from "@/lib/site";

export type SupportedCurrency = "INR" | "USD";

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
  launch: PricingPlan;
  scale: PricingPlan;
  addons: PricingAddon[];
};

export const pricingData: Record<SupportedCurrency, PricingCurrencyData> = {
  INR: {
    launch: {
      name: "LAUNCH",
      price: "₹24,999",
      tagline: "Get Your Business Online Today",
      features: [
        "Upto 5 Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "WhatsApp Button Integration",
        "Google Maps Integration",
        "Basic SEO Setup",
        "Social Media Links",
        "SSL Certificate",
        "Fast Loading Website",
        "1 Month Free Support",
        "Domain + Hosting Setup",
      ],
      whatsapp:
        "Hi, I am interested in the Launch package (₹24,999). Please share more details.",
      cta: "Get Started",
    },
    scale: {
      name: "SCALE",
      price: "₹44,999",
      tagline: "Complete Digital Presence",
      popular: true,
      features: [
        "Upto 10 Pages",
        "Everything in Launch",
        "Logo Design",
        "Google My Business Setup",
        "Advanced SEO Setup",
        "Google Analytics Setup",
        "Speed Optimization",
        "Basic Content Writing",
        "3 Months Free Support",
        "2 Free Revisions",
        "Social Media Setup",
        "Priority Support",
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
    launch: {
      name: "LAUNCH",
      price: "$799",
      tagline: "Get Your Business Online Today",
      features: [
        "Upto 5 Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "WhatsApp Button Integration",
        "Google Maps Integration",
        "Basic SEO Setup",
        "Social Media Links",
        "SSL Certificate",
        "Fast Loading Website",
        "1 Month Free Support",
        "Domain + Hosting Setup",
      ],
      whatsapp:
        "Hi, I am interested in the Launch package ($799). Please share more details.",
      cta: "Get Started",
    },
    scale: {
      name: "SCALE",
      price: "$1,499",
      tagline: "Complete Digital Presence",
      popular: true,
      features: [
        "Upto 10 Pages",
        "Everything in Launch",
        "Logo Design",
        "Google My Business Setup",
        "Advanced SEO Setup",
        "Google Analytics Setup",
        "Speed Optimization",
        "Basic Content Writing",
        "3 Months Free Support",
        "2 Free Revisions",
        "Social Media Setup",
        "Priority Support",
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
  launch: {
    INR: pricingData.INR.launch.price,
    USD: pricingData.USD.launch.price,
  },
  scale: {
    INR: pricingData.INR.scale.price,
    USD: pricingData.USD.scale.price,
  },
  monthlyMaintenance: {
    INR: getAddonPrice("INR", "Monthly Maintenance"),
    USD: getAddonPrice("USD", "Monthly Maintenance"),
  },
  extraRevision: {
    INR: getAddonPrice("INR", "Extra Revision"),
    USD: getAddonPrice("USD", "Extra Revision"),
  },
  launchCombined: `${pricingData.INR.launch.price} / ${pricingData.USD.launch.price}`,
  scaleCombined: `${pricingData.INR.scale.price} / ${pricingData.USD.scale.price}`,
  monthlyMaintenanceCombined: `${getAddonPrice("INR", "Monthly Maintenance")} / ${getAddonPrice("USD", "Monthly Maintenance")}`,
  extraRevisionCombined: `${getAddonPrice("INR", "Extra Revision")} / ${getAddonPrice("USD", "Extra Revision")}`,
};

export const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
