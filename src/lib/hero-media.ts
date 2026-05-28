import { connection } from "next/server";
import { fetchAdminApi } from "@/lib/admin-api";

export type HeroMedia = {
  mediaType: "video" | "image";
  mediaUrl: string;
  posterUrl?: string;
  altText?: string;
};

type HeroMediaResponse = {
  mediaType?: unknown;
  mediaUrl?: unknown;
  posterUrl?: unknown;
  altText?: unknown;
};

export const fallbackHeroMedia: HeroMedia = {
  mediaType: "video",
  mediaUrl: "/videos/hero-smiling-phone-call.mp4",
  altText: "Natcall international calling hero background",
};

function normalizeOptionalText(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function normalizeHeroMedia(data: unknown): HeroMedia {
  if (!data || typeof data !== "object") {
    return fallbackHeroMedia;
  }

  const heroMedia = data as HeroMediaResponse;
  const mediaType = heroMedia.mediaType;
  const mediaUrl = normalizeOptionalText(heroMedia.mediaUrl);

  if ((mediaType !== "video" && mediaType !== "image") || !mediaUrl) {
    return fallbackHeroMedia;
  }

  return {
    mediaType,
    mediaUrl,
    posterUrl: normalizeOptionalText(heroMedia.posterUrl),
    altText:
      normalizeOptionalText(heroMedia.altText) ?? fallbackHeroMedia.altText,
  };
}

export async function getHeroMedia(): Promise<HeroMedia | null> {
  await connection();

  try {
    const response = await fetchAdminApi("/api/web/hero-media", {
      cache: "no-store",
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      return fallbackHeroMedia;
    }

    return normalizeHeroMedia(await response.json());
  } catch {
    return fallbackHeroMedia;
  }
}
