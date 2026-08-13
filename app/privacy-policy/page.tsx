import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LaunchRoom",
  description: "LaunchRoom privacy policy details regarding data collection, analytics, cookies, and user protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-14">
      <div className="page-shell">
        <div className="prose-legal space-y-6">
          <div className="space-y-2">
            <span className="card-label">Legal Information</span>
            <h1 className="font-display font-extrabold text-text-primary">Privacy Policy</h1>
            <p className="text-[14px] font-mono text-text-muted">Last Updated: August 13, 2026</p>
          </div>

          <div className="panel p-8 space-y-6 text-text-secondary">
            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">1. Overview</h2>
              <p>
                LaunchRoom (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as an independent technology publication located at launchroom.in. We respect your privacy and are committed to protecting personal data collected through your interaction with our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">2. Information We Collect</h2>
              <p>
                We collect minimal, necessary data required to deliver reliable web performance and newsletter dispatches:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Newsletter Subscriptions:</strong> Email address provided voluntarily for the LaunchRoom Brief.</li>
                <li><strong>Usage & Performance Data:</strong> Anonymous telemetry, browser types, and page views via privacy-conscious analytics tools.</li>
                <li><strong>Cookies & Ad Technologies:</strong> Third-party advertising partners (including Google AdSense) may utilize cookies to serve ads based on prior website visits.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">3. Google AdSense & Cookies</h2>
              <p>
                Google uses cookies to serve advertisements on LaunchRoom. You may opt out of personalized advertising by visiting Google&apos;s Ads Settings or aboutads.info.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-bold text-text-primary">4. Data Rights & Contact</h2>
              <p>
                You may request deletion of your email subscription or inquire about your data at any time by contacting our newsroom at <strong>infolaunchroom@gmail.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
