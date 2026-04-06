import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Launchroom",
  description: "Terms of service for Launchroom web development, app development, and support work.",
};

export default function TermsPage() {
  return (
    <div className="page-shell section-shell">
      <article className="prose-legal">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: April 2026</p>

        <h2>Services</h2>
        <p>
          Launchroom provides web development, app development, design support,
          and maintenance services as described in project proposals and written
          agreements.
        </p>

        <h2>Payments</h2>
        <p>
          A 50% advance is required before work begins unless otherwise agreed
          in writing. The remaining balance is due at project completion before
          final handover.
        </p>

        <h2>Revisions</h2>
        <p>
          Two rounds of revisions are included in standard project pricing.
          Additional revisions are billed at INR 2,000/hr or $30/hr for
          international clients.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Full intellectual property transfers to the client after final payment
          is received. Launchroom retains the right to display completed work in
          its portfolio unless an NDA or separate agreement states otherwise.
        </p>

        <h2>Timelines</h2>
        <p>
          Estimated timelines are provided in proposals. Delays caused by late
          feedback, missing content, or approval bottlenecks extend delivery
          timelines accordingly.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Launchroom is not liable for indirect, incidental, or consequential
          damages arising from the use of delivered work or delays outside its
          reasonable control.
        </p>

        <h2>Governing Law</h2>
        <p>
          Disputes are subject to the courts of Kolkata, West Bengal, India.
          International clients may agree to Singapore arbitration in writing.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions about these terms, contact{" "}
          <a className="preserve-case text-accent" href="mailto:hello@launchroom.in">
            hello@launchroom.in
          </a>
          .
        </p>
      </article>
    </div>
  );
}
