import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  MessageCircle,
  Smartphone,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Booking & Appointment Website Development | LaunchRoom",
  description:
    "Custom appointment booking websites for salons, clinics, consultants, and fitness businesses in Kolkata and across India. Automated scheduling and WhatsApp notifications.",
  keywords: [
    "booking website development",
    "appointment booking website",
    "salon website development",
    "clinic booking website",
    "consultant appointment website",
    "automated scheduling website India",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/booking-website-development`,
  },
  openGraph: {
    title: "Booking & Appointment Website Development | LaunchRoom",
    description:
      "Custom appointment booking websites with automated scheduling, WhatsApp alerts, and seamless mobile checkout for service businesses.",
    url: `${siteConfig.url}/services/booking-website-development`,
    type: "website",
  },
};

const faqs = [
  {
    q: "How does the appointment booking flow work for clients?",
    a: "Clients visit your website, view your service offerings with pricing and duration, select an available date and time slot, enter their contact details, and receive an instant booking confirmation via WhatsApp or email.",
  },
  {
    q: "Can I collect payments or deposits when someone books?",
    a: "Yes. We can integrate payment gateways like Razorpay, Stripe, or UPI so clients can pay a booking deposit or the full appointment fee upfront before their slot is reserved.",
  },
  {
    q: "Will I get notified when a client books an appointment?",
    a: "Yes. You and your team receive instant WhatsApp and email notifications with the client's name, phone number, requested service, and selected time slot.",
  },
  {
    q: "Can I set my working hours, holidays, and buffer times?",
    a: "Yes. We configure custom availability rules, blackout dates, weekly off-days, and buffer intervals between appointments so your schedule never gets overloaded.",
  },
  {
    q: "Do my clients need to download an app to book?",
    a: "No. The booking system works directly inside any web browser on iOS, Android, and desktop computers without requiring client app downloads.",
  },
];

const niches = [
  {
    title: "Salons & Spas",
    desc: "Service menus, stylist selection, hair/skin treatment durations, and instant WhatsApp appointment reminders.",
    icon: Sparkles,
  },
  {
    title: "Medical & Dental Clinics",
    desc: "Doctor profiles, consultation slots, patient intake forms, and automated clinic confirmations.",
    icon: Stethoscope,
  },
  {
    title: "Consultants & Coaches",
    desc: "1-on-1 strategy sessions, paid consultation slots, Zoom/Google Meet link generation, and calendar sync.",
    icon: Users,
  },
  {
    title: "Fitness & Wellness",
    desc: "Personal training sessions, yoga classes, gym slot reservations, and trial workout passes.",
    icon: Clock,
  },
];

export default function BookingWebsitePage() {
  const whatsappUrl = getWhatsAppHref(
    "Hello LaunchRoom, I need an appointment booking website for my business.",
  );

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: "Booking Website Development", url: `${siteConfig.url}/services/booking-website-development` },
  ]);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Booking & Appointment Website Development",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "LaunchRoom",
      url: siteConfig.url,
    },
    areaServed: ["India", "Worldwide"],
    description:
      "Custom appointment booking and scheduling website development for salons, clinics, consultants, and service businesses.",
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
        <span className="text-accent">Booking Websites</span>
      </nav>

      {/* Hero */}
      <section className="section-shell">
        <AnimatedSection className="panel-dark p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5 text-[12px] font-mono uppercase text-accent">
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>Automated Scheduling Websites</span>
            </div>
            <h1 className="page-hero-title mt-6 text-on-dark font-display font-extrabold">
              Appointment booking websites that fill your calendar 24/7.
            </h1>
            <p className="mt-6 text-[19px] leading-[1.8] text-on-dark-muted">
              Stop wasting hours managing appointment messages manually. We build custom booking websites
              for salons, clinics, consultants, and service professionals with real-time calendar availability,
              instant WhatsApp alerts, and optional online payments.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/start">
                Build a Booking Website <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href={whatsappUrl} variant="outline">
                Discuss on WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Self-Serve Booking</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>WhatsApp Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Mobile First UI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-on-dark-muted">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Optional Payments</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Niches */}
      <section className="pb-20">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="section-title mt-4">
            Tailored booking flows for service businesses
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
            Every service business has distinct scheduling rules. We configure your calendar logic
            around how you actually serve clients.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {niches.map((item, idx) => {
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

      {/* Feature Breakdown */}
      <section className="pb-20">
        <AnimatedSection className="panel p-8 sm:p-12 lg:p-14">
          <div className="max-w-3xl">
            <p className="card-label">Core Features</p>
            <h2 className="section-title mt-4">
              Everything built in to automate your client intake
            </h2>
            <p className="mt-4 text-[17px] leading-[1.75] text-text-secondary">
              A complete booking platform that works smoothly for both your clients and your internal team.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Calendar className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Real-Time Availability</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Clients only see dates and time slots that are genuinely open. Prevents double-booking automatically.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <MessageCircle className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Instant WhatsApp Routing</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Automatic trigger messages sent to both the client and your staff with complete booking details.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <CreditCard className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Deposit &amp; Payment Gateway</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Collect advance deposits via UPI, Razorpay, or credit cards to reduce last-minute no-shows.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Smartphone className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Mobile-First Usability</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Over 80% of booking visitors are on smartphones. We design ultra-fast mobile booking forms.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <Bell className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Custom Intake Fields</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Collect medical notes, hair lengths, project requirements, or meeting preferences during checkout.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 p-5">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-base font-bold text-text-primary">Full Brand Integration</h3>
              <p className="mt-2 text-xs leading-[1.7] text-text-secondary">
                Your custom domain, logo, color palette, and business story—not an ugly third-party embed.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Demo Link */}
      <section className="pb-20">
        <AnimatedSection className="panel-accent p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase text-accent font-bold">Interactive Sample</p>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
              Explore Our Clinic &amp; Salon Demos
            </h3>
            <p className="text-sm text-text-secondary mt-1 max-w-2xl">
              See a live, clickable demo concept with appointment flows, service menus, and WhatsApp triggers.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/demos/salon" variant="outline">
              Salon Demo
            </Button>
            <Button href="/demos/clinic">
              Clinic Demo
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQs */}
      <section className="pb-20">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="section-title mt-4">
            Common questions about booking websites
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
            Ready to automate your appointment bookings?
          </h2>
          <p className="mt-4 text-[17px] text-on-dark-muted max-w-2xl mx-auto">
            Tell us about your services and schedule. We will build a custom booking website ready to launch.
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
