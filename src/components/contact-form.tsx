"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const contactEndpoint = "/api/contact";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function cleanValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
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

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, inquiry, message }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        throw new Error(data?.error || "Contact request failed");
      }

      setStatus("success");
      setStatusMessage(
        "Message sent successfully. The Natcall team will reply as soon as possible.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? `We could not send the message right now. ${error.message}`
          : "We could not send the message right now. Please email support@natcall.com directly.",
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
        className="btn-premium-primary mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-4 rounded-xl bg-[#f6c617] px-6 text-[17px] font-extrabold text-black focus:outline-none focus:ring-2 focus:ring-[#f6c617]/40 focus:ring-offset-2 focus:ring-offset-[#101010] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
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
