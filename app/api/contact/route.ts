import { Resend } from "resend";

import { siteConfig } from "@/lib/site";
import { contactSchema } from "@/lib/validation";

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
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { ok: false, error: "Invalid contact form payload." },
        { status: 400 },
      );
    }

    if (!resend) {
      return Response.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 },
      );
    }

    const { name, email, company, subject, message } = parsed.data;

    await resend.emails.send({
      from: "Launchroom Website <noreply@launchroom.in>",
      to: siteConfig.email,
      subject: `New contact: ${subject} from ${name}`,
      html: `
        <h2>New Launchroom contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
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
