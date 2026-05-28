import { fetchAdminApi, unwrapAdminCollection } from "@/lib/admin-api";

export type PopularDestination = {
  id: string;
  country: string;
  flag: string;
  flagUrl: string;
  description: string;
};

type PopularDestinationResponse = {
  id?: unknown;
  country?: unknown;
  flag?: unknown;
  flagUrl?: unknown;
  flag_url?: unknown;
  description?: unknown;
};

export const defaultPopularDestinations: PopularDestination[] = [
  {
    id: "eritrea",
    country: "Eritrea",
    flag: "🇪🇷",
    flagUrl: "https://flagcdn.com/w160/er.png",
    description: "Direct calls to Eritrea at local-friendly rates.",
  },
  {
    id: "ethiopia",
    country: "Ethiopia",
    flag: "🇪🇹",
    flagUrl: "https://flagcdn.com/w160/et.png",
    description: "Crystal-clear connections across Ethiopia.",
  },
  {
    id: "norway",
    country: "Norway",
    flag: "🇳🇴",
    flagUrl: "https://flagcdn.com/w160/no.png",
    description: "Fast, reliable calls to Norway anytime.",
  },
  {
    id: "sudan",
    country: "Sudan",
    flag: "🇸🇩",
    flagUrl: "https://flagcdn.com/w160/sd.png",
    description: "Affordable calling routes for families in Sudan.",
  },
  {
    id: "kenya",
    country: "Kenya",
    flag: "🇰🇪",
    flagUrl: "https://flagcdn.com/w160/ke.png",
    description: "Clear international calls to Kenya with simple pricing.",
  },
  {
    id: "united-kingdom",
    country: "United Kingdom",
    flag: "🇬🇧",
    flagUrl: "https://flagcdn.com/w160/gb.png",
    description: "Reliable calls to the UK for work, friends, and family.",
  },
];

function normalizeDestination(
  data: PopularDestinationResponse,
  index: number
): PopularDestination | null {
  if (
    typeof data.country !== "string" ||
    !data.country.trim() ||
    typeof data.flag !== "string" ||
    !data.flag.trim() ||
    typeof data.description !== "string" ||
    !data.description.trim()
  ) {
    return null;
  }

  return {
    id:
      typeof data.id === "string" && data.id.trim()
        ? data.id.trim()
        : `${data.country}-${index}`,
    country: data.country.trim(),
    flag: data.flag.trim(),
    flagUrl:
      typeof data.flagUrl === "string" && data.flagUrl.trim()
        ? data.flagUrl.trim()
        : typeof data.flag_url === "string" && data.flag_url.trim()
          ? data.flag_url.trim()
          : "",
    description: data.description.trim(),
  };
}

function normalizeDestinations(data: unknown): PopularDestination[] {
  const rawDestinations =
    unwrapAdminCollection<PopularDestinationResponse>(data);

  if (!rawDestinations) return defaultPopularDestinations;

  const destinations = rawDestinations
    .map((item, index) =>
      item && typeof item === "object"
        ? normalizeDestination(item as PopularDestinationResponse, index)
        : null
    )
    .filter((item): item is PopularDestination => Boolean(item));

  return destinations.length ? destinations : defaultPopularDestinations;
}

export async function getPopularDestinations(): Promise<PopularDestination[]> {
  try {
    const response = await fetchAdminApi("/api/web/popular-destinations", {
      cache: "no-store",
    });

    if (!response.ok) return defaultPopularDestinations;

    return normalizeDestinations(await response.json());
  } catch {
    return defaultPopularDestinations;
  }
}
