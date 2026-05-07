"use client";

import { openCookiePreferences } from "@/lib/cookie-consent";

export function CookiePreferencesButton() {
  return (
    <button
      className="w-fit text-left transition-colors hover:text-brand-gold"
      onClick={openCookiePreferences}
      type="button"
    >
      Cookie Settings
    </button>
  );
}
