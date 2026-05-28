import { siteConfig } from "@/lib/site";

export type SocialPlatform =
  | "instagram"
  | "twitter"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

type SocialLinkResponse = {
  platform?: unknown;
  url?: unknown;
};

const socialPlatforms = new Set<SocialPlatform>([
  "instagram",
  "twitter",
  "facebook",
  "tiktok",
  "youtube",
  "linkedin",
]);

export const fallbackSocialLinks: SocialLink[] = [
  {
    platform: "instagram",
    url: siteConfig.social.instagram,
  },
  {
    platform: "twitter",
    url: siteConfig.social.twitter,
  },
  {
    platform: "linkedin",
    url: siteConfig.social.linkedin,
  },
];

function normalizeSocialLinks(data: unknown): SocialLink[] {
  if (!Array.isArray(data)) return fallbackSocialLinks;

  const links = data
    .map((item) => {
      if (!item || typeof item !== "object") return null;

      const link = item as SocialLinkResponse;

      if (
        typeof link.platform !== "string" ||
        !socialPlatforms.has(link.platform as SocialPlatform) ||
        typeof link.url !== "string"
      ) {
        return null;
      }

      return {
        platform: link.platform as SocialPlatform,
        url: link.url.trim(),
      };
    })
    .filter((link): link is SocialLink => Boolean(link));

  return links;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "");

  if (!adminUrl) return fallbackSocialLinks;

  try {
    const response = await fetch(`${adminUrl}/api/web/social-links`, {
      cache: "no-store",
    });

    if (!response.ok) return fallbackSocialLinks;

    return normalizeSocialLinks(await response.json());
  } catch {
    return fallbackSocialLinks;
  }
}
