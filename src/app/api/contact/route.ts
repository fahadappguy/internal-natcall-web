import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  inquiry?: unknown;
  message?: unknown;
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function formatSubmissionTime(date: Date) {
  const datePart = date.toLocaleDateString("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
  });
  const timePart = date.toLocaleTimeString("en-US", {
    timeStyle: "short",
    timeZone: "UTC",
  });

  return `${datePart} - ${timePart} UTC`;
}

function getRequiredEnv(key: string) {
  const value = process.env[key]?.trim();
  if (!value) {
    throw new Error(`Missing ${key}`);
  }

  return value;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = cleanValue(payload.name);
  const email = cleanValue(payload.email);
  const inquiry = cleanValue(payload.inquiry) || "General Support";
  const message = cleanValue(payload.message);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  try {
    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS").replace(/\s+/g, "");
    const smtpFrom = getRequiredEnv("SMTP_FROM");
    const receiverEmail = getRequiredEnv("CONTACT_RECEIVER_EMAIL");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const fromName = process.env.SMTP_FROM_NAME?.trim() || "Natcall Support";
    const submittedAt = formatSubmissionTime(new Date());

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const text = [
      "Dear Team,",
      "",
      "A new inquiry has been submitted through the official Natcall website.",
      "",
      "Customer Information:",
      `- Name: ${name}`,
      `- Email: ${email}`,
      "- Company: Natcall",
      `- Inquiry Type: ${inquiry}`,
      "",
      "Customer Message:",
      message,
      "",
      "Submission Time:",
      submittedAt,
      "",
      "Please ensure timely follow-up and support assistance.",
      "",
      "Best regards,",
      "Natcall Notification Service",
    ].join("\n");

    await transporter.sendMail({
      from: `"${fromName}" <${smtpFrom}>`,
      to: receiverEmail,
      replyTo: email,
      subject: "Website Inquiry Alert - Natcall",
      text,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${smtpFrom}>`,
      to: email,
      replyTo: smtpFrom,
      subject: "Thanks for contacting Natcall",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for contacting Natcall. We received your message and our team will get back to you as soon as possible.",
        "",
        "Best regards,",
        "Natcall Support",
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed", error);

    return Response.json(
      {
        error:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : "Contact request failed.",
      },
      { status: 500 },
    );
  }
}
