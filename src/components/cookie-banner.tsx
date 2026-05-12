"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  createAcceptedAllConsent,
  createRejectedOptionalConsent,
  getCookieConsentStorageSnapshot,
  parseCookieConsentSnapshot,
  saveCookieConsent,
  subscribeToCookieConsent,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const consentSnapshot = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsentStorageSnapshot,
    () => null,
  );
  const consent = parseCookieConsentSnapshot(consentSnapshot);

  if (consent) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#4b4020] bg-[#1c1c1c]/95 px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
          <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 12.5c0-2.5 1.8-4.5 4.2-4.5 1.8 0 3.2 1 3.8 2.5M7.5 14.8c.8 1.6 2.5 2.7 4.5 2.7 2.8 0 5-2.2 5-5 0-.2 0-.4-.1-.6M12 3.8a8.2 8.2 0 1 0 8.2 8.2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        <p className="text-[12px] leading-6 text-white">
          We use cookies to ensure you get the best experience on our website.{" "}
          <Link href="/privacy-policy#contact" className="underline underline-offset-4 text-[#d7d7d7]">
            Learn more
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        <button
          type="button"
          onClick={() => saveCookieConsent(createRejectedOptionalConsent())}
          className="px-4 py-2 text-[12px] text-[#d4d4d4] transition hover:text-white"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => saveCookieConsent(createAcceptedAllConsent())}
          className="btn-premium-primary inline-flex items-center justify-center rounded-full bg-[#f6c617] px-6 py-2 text-[12px] font-bold text-black"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
