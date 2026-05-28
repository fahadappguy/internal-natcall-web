export type PopularDestination = {
  id: string;
  country: string;
  flag: string;
  description: string;
};

type PopularDestinationResponse = {
  id?: unknown;
  country?: unknown;
  flag?: unknown;
  description?: unknown;
};

export const defaultPopularDestinations: PopularDestination[] = [
  {
    id: "eritrea",
    country: "Eritrea",
    flag: "🇪🇷",
    description: "Direct calls to Eritrea at local-friendly rates.",
  },
  {
    id: "ethiopia",
    country: "Ethiopia",
    flag: "🇪🇹",
    description: "Crystal-clear connections across Ethiopia.",
  },
  {
    id: "norway",
    country: "Norway",
    flag: "🇳🇴",
    description: "Fast, reliable calls to Norway anytime.",
  },
  {
    id: "sudan",
    country: "Sudan",
    flag: "🇸🇩",
    description: "Affordable calling routes for families in Sudan.",
  },
  {
    id: "kenya",
    country: "Kenya",
    flag: "🇰🇪",
    description: "Clear international calls to Kenya with simple pricing.",
  },
  {
    id: "united-kingdom",
    country: "United Kingdom",
    flag: "🇬🇧",
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
    description: data.description.trim(),
  };
}

function normalizeDestinations(data: unknown): PopularDestination[] {
  if (!Array.isArray(data)) return defaultPopularDestinations;

  const destinations = data
    .map((item, index) =>
      item && typeof item === "object"
        ? normalizeDestination(item as PopularDestinationResponse, index)
        : null
    )
    .filter((item): item is PopularDestination => Boolean(item));

  return destinations.length ? destinations : defaultPopularDestinations;
}

export async function getPopularDestinations(): Promise<PopularDestination[]> {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "");

  if (!adminUrl) return defaultPopularDestinations;

  try {
    const response = await fetch(`${adminUrl}/api/web/popular-destinations`, {
      cache: "no-store",
    });

    if (!response.ok) return defaultPopularDestinations;

    return normalizeDestinations(await response.json());
  } catch {
    return defaultPopularDestinations;
  }
}
