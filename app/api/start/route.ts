import { Resend } from "resend";

import { siteConfig } from "@/lib/site";
import { getProjectInquiryLabel } from "@/lib/whatsapp";
import { startSchema } from "@/lib/validation";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = startSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid project intake payload." },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 },
      );
    }

    const data = parsed.data;
    const inquiryLabel = getProjectInquiryLabel(data.projectType);

    await resend.emails.send({
      from: "LaunchRoom Website <noreply@launchroom.in>",
      to: siteConfig.email,
      subject: `${inquiryLabel}: ${data.projectName} from ${data.fullName}`,
      html: `
        <h2>New LaunchRoom project brief</h2>
        <h3>Project snapshot</h3>
        <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryLabel)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
        <p><strong>Demo inspiration:</strong> ${escapeHtml(data.demoNiche || "N/A")}</p>
        <p><strong>Source reference:</strong> ${escapeHtml(data.sourceRef || "N/A")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
        <p><strong>Project name:</strong> ${escapeHtml(data.projectName)}</p>
        <p><strong>Brand assets:</strong> ${escapeHtml(data.brandAssets)}</p>
        <p><strong>Reference URL:</strong> ${escapeHtml(data.referenceUrl || "N/A")}</p>
        <p><strong>Brief:</strong></p>
        <p>${escapeHtml(data.brief).replaceAll("\n", "<br/>")}</p>
        <h3>Contact details</h3>
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "N/A")}</p>
        <p><strong>Country:</strong> ${escapeHtml(data.country)}</p>
        <p><strong>How they heard about us:</strong> ${escapeHtml(data.referralSource)}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
