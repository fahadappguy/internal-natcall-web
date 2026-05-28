export type ContactInfo = {
  address: string;
  phone: string;
  supportEmail: string;
  supportWhatsapp: string;
};

type ContactInfoResponse = {
  address?: unknown;
  phone?: unknown;
  supportEmail?: unknown;
  supportWhatsapp?: unknown;
};

export const fallbackContactInfo: ContactInfo = {
  address: "Bergen, Kolstien 3B, Norway",
  phone: "+47 91393082",
  supportEmail: "support@natcall.com",
  supportWhatsapp: "+47 91393082",
};

function normalizeText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function normalizeContactInfo(data: unknown): ContactInfo {
  if (!data || typeof data !== "object") return fallbackContactInfo;

  const contact = data as ContactInfoResponse;

  return {
    address: normalizeText(contact.address, fallbackContactInfo.address),
    phone: normalizeText(contact.phone, fallbackContactInfo.phone),
    supportEmail: normalizeText(
      contact.supportEmail,
      fallbackContactInfo.supportEmail
    ),
    supportWhatsapp: normalizeText(
      contact.supportWhatsapp,
      fallbackContactInfo.supportWhatsapp
    ),
  };
}

export async function getContactInfo(): Promise<ContactInfo> {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "");

  if (!adminUrl) return fallbackContactInfo;

  try {
    const response = await fetch(`${adminUrl}/api/web/contact-info`, {
      cache: "no-store",
    });

    if (!response.ok) return fallbackContactInfo;

    return normalizeContactInfo(await response.json());
  } catch {
    return fallbackContactInfo;
  }
}
