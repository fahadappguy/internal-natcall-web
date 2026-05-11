"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const receiverEmail = "sadiomer02@gmail.com";
const contactEndpoint = `https://formsubmit.co/ajax/${receiverEmail}`;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function cleanValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
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

  return `${datePart} — ${timePart} UTC`;
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = cleanValue(formData, "name");
    const email = cleanValue(formData, "email");
    const inquiry = cleanValue(formData, "inquiry");
    const message = cleanValue(formData, "message");
    const submittedAt = formatSubmissionTime(new Date());

    const topic = inquiry || "General Support";
    const subject = "Website Inquiry Alert — Natcall";
    const notification = [
      "Dear Team,",
      "",
      "A new inquiry has been submitted through the official Natcall website.",
      "",
      "Customer Information:",
      `• Name: ${name}`,
      `• Email: ${email}`,
      "• Company: Natcall",
      `• Inquiry Type: ${topic}`,
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

    const payload = new FormData();
    payload.append("_subject", subject);
    payload.append("_template", "basic");
    payload.append("_captcha", "false");
    payload.append("_replyto", email);
    payload.append(
      "_autoresponse",
      "Thanks for contacting Natcall. We received your message and our team will get back to you as soon as possible.",
    );
    payload.append("Natcall Website Inquiry", notification);

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      setStatusMessage(
        "Message sent successfully. The Natcall team will reply as soon as possible.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not send the message right now. Please email sadiomer02@gmail.com directly.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {statusMessage ? (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-[14px] font-semibold leading-6 ${
            status === "success"
              ? "border-[#47e384]/35 bg-[#102018] text-[#bff5d2]"
              : "border-[#ff6b6b]/35 bg-[#261313] text-[#ffb8b8]"
          }`}
        >
          {statusMessage}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
            Name
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="min-h-[52px] min-w-0 rounded-xl border border-white/10 bg-[#171717] px-4 text-[16px] font-semibold text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="min-h-[52px] min-w-0 rounded-xl border border-white/10 bg-[#171717] px-4 text-[16px] font-semibold text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
          Inquiry type
        </span>
        <select
          name="inquiry"
          defaultValue="General Support"
          className="min-h-[52px] min-w-0 rounded-xl border border-white/10 bg-[#171717] px-4 text-[16px] font-semibold text-white outline-none transition hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
        >
          <option>General Support</option>
          <option>Account Help</option>
          <option>Top-up Question</option>
          <option>Call Quality</option>
          <option>Business Inquiry</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="min-h-[132px] min-w-0 resize-y rounded-xl border border-white/10 bg-[#171717] px-4 py-3 text-[16px] font-semibold leading-7 text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-4 rounded-xl bg-[#f6c617] px-6 text-[17px] font-extrabold text-black transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#f6c617]/40 focus:ring-offset-2 focus:ring-offset-[#101010] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      <p className="flex items-start justify-center gap-3 text-center text-[13px] font-semibold leading-5 text-[#777777] sm:items-center sm:text-[14px]">
        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#47e384] sm:mt-0" />
        Team is online - typically replies within 2 hours
      </p>
    </form>
  );
}
