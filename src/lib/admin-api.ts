const defaultAdminUrl = "https://natcall-admindashboard.vercel.app";

type AdminCollectionResponse<T> = {
  value?: T[];
};

function isLocalAdminUrl(url: string) {
  return /\/\/(localhost|127\.0\.0\.1)(:|\/|$)/i.test(url);
}

function normalizeAdminUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/admin\/?$/i, "");
    parsedUrl.search = "";
    parsedUrl.hash = "";

    return parsedUrl.toString().replace(/\/+$/, "");
  } catch {
    return url.replace(/\/admin\/?$/i, "").replace(/\/+$/, "");
  }
}

function getAdminApiUrls(path: string) {
  if (typeof window !== "undefined") {
    return [`/api/web-content?path=${encodeURIComponent(path)}`];
  }

  const configuredUrl = process.env.NEXT_PUBLIC_ADMIN_URL
    ? normalizeAdminUrl(process.env.NEXT_PUBLIC_ADMIN_URL)
    : "";
  const urls = configuredUrl && !isLocalAdminUrl(configuredUrl)
    ? [`${configuredUrl}${path}`, `${defaultAdminUrl}${path}`]
    : [`${defaultAdminUrl}${path}`];

  return Array.from(new Set(urls));
}

export async function fetchAdminApi(path: string, init?: RequestInit) {
  let lastResponse: Response | null = null;

  for (const url of getAdminApiUrls(path)) {
    try {
      const response = await fetch(url, init);
      const contentType = response.headers.get("content-type") ?? "";

      if (response.ok && contentType.includes("application/json")) {
        return response;
      }

      lastResponse = response;
    } catch {
      lastResponse = null;
    }
  }

  return lastResponse ?? new Response(null, { status: 502 });
}

export function unwrapAdminCollection<T>(data: unknown): T[] | null {
  if (Array.isArray(data)) {
    return data as T[];
  }

  if (!data || typeof data !== "object") {
    return null;
  }

  const collection = data as AdminCollectionResponse<T>;

  return Array.isArray(collection.value) ? collection.value : null;
}
