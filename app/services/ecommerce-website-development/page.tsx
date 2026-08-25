import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Lock,
  Package,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Custom Online Stores | LaunchRoom",
  description:
    "Custom e-commerce website development for direct-to-consumer brands, retail stores, and online catalogues in Kolkata and across India. Secure Razorpay & Stripe checkouts.",
  keywords: [
    "ecommerce website development",
    "online store development India",
    "ecommerce website development Kolkata",
    "D2C website development",
    "Razorpay store integration",
    "custom ecommerce builder",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/ecommerce-website-development`,
  },
  openGraph: {
    title: "E-Commerce Website Development | LaunchRoom",
    description:
      "Fast, custom online stores and product catalogues engineered for seamless mobile shopping and automated payment checkout.",
    url: `${siteConfig.url}/services/ecommerce-website-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Which payment gateways can you integrate for Indian and international customers?",
    a: "We integrate Razorpay, Cashfree, PayU, and UPI for Indian payments (supporting UPI QR, Google Pay, PhonePe, Netbanking, Cards), and Stripe or PayPal for international credit card payments in multiple currencies.",
  },
  {
    q: "Can I manage products, inventory, and order statuses easily?",
    a: "Yes. We configure clean, lightweight product and order management dashboards so you can easily update prices, upload product photos, track shipments, and manage inventory without technical skills.",
  },
  {
    q: "Do you charge recurring monthly percentage fees on my sales?",
    a: "No. You own 100% of your website and software code. Unlike Shopify which takes monthly app fees and transaction percentages, you only pay your standard payment gateway processing fee.",
  },
  {
    q: "Can customers receive automated order confirmations on WhatsApp?",
    a: "Yes. We can trigger instant WhatsApp and email notifications with order summaries and shipping tracking details as soon as a customer completes payment.",
  },
];

const features = [
  {
    title: "Fast Mobile Catalogue",
    desc: "Clean product grids, category filtering, search, and high-resolution product galleries optimized for mobile shoppers.",
    icon: ShoppingBag,
  },
  {
    title: "Frictionless Checkout",
    desc: "1-step checkout flow with UPI intent, credit/debit cards, and auto-filled addresses for maximum conversion.",
    icon: ShoppingCart,
  },
  {
    title: "Automated WhatsApp Alerts",
    desc: "Instant notifications sent to your team and the buyer upon successful order placement.",
    icon: Zap,
  },
  {
    title: "Secure Cloud Architecture",
    desc: "SSL encrypted transactions, automated database backups, and zero server maintenance overhead.",
    icon: ShieldCheck,
  },
];

export default function EcommerceWebsitePage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I want to build an e-commerce website for my products.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "E-Commerce Website Development", url: `${siteConfig.url}/services/ecommerce-website-development` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce Website Development Services",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
    },
    areaServed: ["India", "Worldwide"],
    description:
      "Custom e-commerce website development, product catalogues, and secure payment checkout systems by LaunchRoom.",
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="pt-6 flex items-center gap-2 font-mono text-[12px] uppercase text-text-muted"
      >
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/services" className="hover:text-accent">
          Services
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">E-Commerce Websites</span>
      </nav>

      {/* Hero */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Online Stores &amp; E-Commerce</span>
            </div>
            <h1 className="page-hero-title mt-6 text-on-dark font-display font-extrabold">
              Custom e-commerce websites built to sell products without template bloat.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Sell your products directly to customers with a blazing-fast online storefront.
              We build custom e-commerce websites with smooth mobile navigation, automated payment gateway
              integrations (UPI, Razorpay, Stripe), and instant WhatsApp order notifications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Build an Online Store <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>UPI &amp; Cards Enabled</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Zero Monthly App Bloat</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>WhatsApp Order Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>100% Code Ownership</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Store Capabilities</p>
          <h2 className="section-title mt-4">
            Engineered for smooth shopping on every phone
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                delay={idx * 0.04}
                className="panel p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-dim border border-accent-border text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about e-commerce websites
          </h2>
        </AnimatedSection>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={faq.q} delay={idx * 0.03} className="panel p-6">
              <h3 className="text-lg font-bold text-text-primary">{faq.q}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-text-secondary">{faq.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <AnimatedSection className="panel-dark p-8 sm:p-12 text-center rounded-2xl">
          <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-on-dark">
            Ready to launch your online store?
          </h2>
          <p className="mt-4 text-[17px] text-on-dark-muted max-w-2xl mx-auto">
            Tell us about your product range and target customers. We will engineer a custom online store ready to accept orders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/start" className="px-8 py-3.5">
              Start a Project
            </Button>
            <Button href={whatsappUrl} variant="outline" className="px-6 py-3.5">
              Discuss on WhatsApp
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
