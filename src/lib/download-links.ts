export type DownloadLinks = {
  iosUrl: string;
  androidUrl: string;
  iosIsLive: boolean;
  androidIsLive: boolean;
};

type DownloadLinksResponse = {
  iosUrl?: unknown;
  androidUrl?: unknown;
  iosIsLive?: unknown;
  androidIsLive?: unknown;
};

export const fallbackDownloadLinks: DownloadLinks = {
  androidIsLive: false,
  androidUrl: "",
  iosIsLive: false,
  iosUrl: "",
};

function normalizeDownloadLinks(data: unknown): DownloadLinks {
  if (!data || typeof data !== "object") return fallbackDownloadLinks;

  const links = data as DownloadLinksResponse;

  return {
    androidIsLive: Boolean(links.androidIsLive),
    androidUrl: typeof links.androidUrl === "string" ? links.androidUrl.trim() : "",
    iosIsLive: Boolean(links.iosIsLive),
    iosUrl: typeof links.iosUrl === "string" ? links.iosUrl.trim() : "",
  };
}

export async function getDownloadLinks(): Promise<DownloadLinks> {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "");

  if (!adminUrl) return fallbackDownloadLinks;

  try {
    const response = await fetch(`${adminUrl}/api/web/download-links`, {
      cache: "no-store",
    });

    if (!response.ok) return fallbackDownloadLinks;

    return normalizeDownloadLinks(await response.json());
  } catch {
    return fallbackDownloadLinks;
  }
}
