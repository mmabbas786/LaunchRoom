import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Launchroom",
  description: "Privacy policy for Launchroom enquiries, proposals, and website data handling.",
};

export default function PrivacyPage() {
  return (
    <div className="page-shell section-shell">
      <article className="prose-legal">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: April 2026</p>

        <h2>What data we collect</h2>
        <p>
          We collect data you submit through our contact form and project brief
          form. This may include your name, email, company, message, budget,
          timeline, and other project details you choose to share.
        </p>

        <h2>How we use it</h2>
        <p>
          We use this information to respond to enquiries, prepare proposals,
          and communicate about potential work. We do not sell your data and we
          do not share it for advertising purposes.
        </p>

        <h2>Cookies</h2>
        <p>
          We do not use non-essential cookies beyond simple analytics and
          performance measurement tools that help us understand site usage.
        </p>

        <h2>Third-party services</h2>
        <p>
          We may use third-party services such as Google Analytics and Resend to
          help operate the website and send enquiry emails.
        </p>

        <h2>GDPR rights</h2>
        <p>
          If you are located in a region with data rights protections, you may
          request access to, correction of, or deletion of your data by emailing
          {" "}
          <span className="preserve-case">hello@launchroom.in</span>.
        </p>

        <h2>Data retention</h2>
        <p>
          Enquiry and intake data is typically retained for up to 12 months so
          we can follow up and maintain proposal history, after which it is
          deleted unless ongoing work requires it.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy-related questions, contact{" "}
          <a className="preserve-case text-accent" href="mailto:hello@launchroom.in">
            hello@launchroom.in
          </a>
          .
        </p>
      </article>
    </div>
  );
}
