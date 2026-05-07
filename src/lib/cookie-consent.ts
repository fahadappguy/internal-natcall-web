"use client";

export const COOKIE_CONSENT_STORAGE_KEY = "natcall-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "natcall_cookie_consent";
export const COOKIE_CONSENT_EVENT = "natcall-cookie-consent-change";
export const COOKIE_PREFERENCES_OPEN_EVENT = "natcall-cookie-preferences-open";

const COOKIE_CONSENT_VERSION = 1;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentDecision =
  | "accepted_all"
  | "rejected_optional"
  | "saved_preferences";

export type CookieConsentRecord = {
  decision: CookieConsentDecision;
  preferences: CookieConsentPreferences;
  updatedAt: string;
  version: number;
};

function isCookieConsentPreferences(
  value: unknown,
): value is CookieConsentPreferences {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<CookieConsentPreferences>;
  return (
    candidate.necessary === true &&
    typeof candidate.analytics === "boolean" &&
    typeof candidate.marketing === "boolean"
  );
}

function isCookieConsentRecord(value: unknown): value is CookieConsentRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<CookieConsentRecord>;
  const validDecision =
    candidate.decision === "accepted_all" ||
    candidate.decision === "rejected_optional" ||
    candidate.decision === "saved_preferences";

  return (
    candidate.version === COOKIE_CONSENT_VERSION &&
    validDecision &&
    typeof candidate.updatedAt === "string" &&
    isCookieConsentPreferences(candidate.preferences)
  );
}

function readRecordFromCookie() {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_CONSENT_COOKIE_NAME}=([^;]*)`),
  );

  if (!match) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(match[1])) as unknown;
    return isCookieConsentRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function persistRecord(record: CookieConsentRecord) {
  if (typeof window === "undefined") {
    return;
  }

  const serialized = JSON.stringify(record);
  const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);
  document.cookie =
    `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(serialized)}; ` +
    `Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secureFlag}`;
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function createDefaultCookiePreferences(): CookieConsentPreferences {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
  };
}

export function createAcceptedAllConsent(): CookieConsentRecord {
  return {
    decision: "accepted_all",
    preferences: {
      necessary: true,
      analytics: true,
      marketing: true,
    },
    updatedAt: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };
}

export function createRejectedOptionalConsent(): CookieConsentRecord {
  return {
    decision: "rejected_optional",
    preferences: createDefaultCookiePreferences(),
    updatedAt: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };
}

export function createCustomCookieConsent(
  preferences: Pick<CookieConsentPreferences, "analytics" | "marketing">,
): CookieConsentRecord {
  return {
    decision: "saved_preferences",
    preferences: {
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    },
    updatedAt: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };
}

export function getCookieConsentSnapshot() {
  const snapshot = getCookieConsentStorageSnapshot();

  if (!snapshot) {
    return null;
  }

  return parseCookieConsentSnapshot(snapshot);
}

export function parseCookieConsentSnapshot(snapshot: string | null) {
  if (!snapshot) {
    return null;
  }

  try {
    const parsed = JSON.parse(snapshot) as unknown;
    return isCookieConsentRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function getCookieConsentStorageSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

  if (stored) {
    if (parseCookieConsentSnapshot(stored)) {
      return stored;
    }

    try {
      window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  const cookieRecord = readRecordFromCookie();

  if (cookieRecord) {
    const serialized = JSON.stringify(cookieRecord);
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);
    return serialized;
  }

  return null;
}

export function saveCookieConsent(record: CookieConsentRecord) {
  persistRecord(record);
}

export function subscribeToCookieConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(COOKIE_CONSENT_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange);
  };
}

export function openCookiePreferences() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}
