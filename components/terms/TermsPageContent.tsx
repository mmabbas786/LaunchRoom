"use client";

import { useVisitorPreferences } from "@/components/providers/VisitorPreferencesProvider";
import { pricingSummary } from "@/data/pricing";

export function TermsPageContent() {
  const { currency } = useVisitorPreferences();

  return (
    <div className="page-shell section-shell">
      <article className="prose-legal">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: April 2026</p>

        <h2>Services</h2>
        <p>
          LaunchRoom provides web development, app development, design support,
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
          Revisions depend on the selected package or written proposal. Scale
          includes 2 free revisions. Additional revisions are billed separately
          at {pricingSummary.extraRevision[currency]} each unless otherwise agreed
          in writing.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Full intellectual property transfers to the client after final payment
          is received. LaunchRoom retains the right to display completed work in
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
          LaunchRoom is not liable for indirect, incidental, or consequential
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
          <a className="preserve-case text-accent" href="mailto:infolaunchroom@gmail.com">
            infolaunchroom@gmail.com
          </a>
          .
        </p>
      </article>
    </div>
  );
}
