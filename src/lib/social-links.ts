import { fetchAdminApi, unwrapAdminCollection } from "@/lib/admin-api";
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
  {
    platform: "facebook",
    url: siteConfig.social.facebook,
  },
  {
    platform: "tiktok",
    url: siteConfig.social.tiktok,
  },
  {
    platform: "youtube",
    url: siteConfig.social.youtube,
  },
];

function normalizeSocialLinks(data: unknown): SocialLink[] {
  const rawLinks = unwrapAdminCollection<SocialLinkResponse>(data);

  if (!rawLinks) return fallbackSocialLinks;

  const links = rawLinks
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
  try {
    const response = await fetchAdminApi("/api/web/social-links", {
      cache: "no-store",
    });

    if (!response.ok) return fallbackSocialLinks;

    return normalizeSocialLinks(await response.json());
  } catch {
    return fallbackSocialLinks;
  }
}
