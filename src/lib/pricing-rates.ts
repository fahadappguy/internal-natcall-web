export type PricingRate = {
  country: string;
  natcall: string;
  carrier: string;
  savings: string;
};

type RateCardResponse = {
  countryName?: string;
  country_name?: string;
  ratePerMinuteCents?: number;
  rate_per_minute_cents?: number;
  typicalCarrier?: string;
  typical_carrier?: string;
  savings?: string;
};

const fallbackPricingRates: PricingRate[] = [
  { country: "Eritrea", natcall: "TBC", carrier: "TBC", savings: "TBC" },
  { country: "Ethiopia", natcall: "TBC", carrier: "TBC", savings: "TBC" },
  { country: "Ghana", natcall: "TBC", carrier: "TBC", savings: "TBC" },
  { country: "India", natcall: "TBC", carrier: "TBC", savings: "TBC" },
  { country: "Philippines", natcall: "TBC", carrier: "TBC", savings: "TBC" },
];

export async function getPricingRates(): Promise<PricingRate[]> {
  try {
    const response = await fetch(getAdminApiUrl("/api/web/pricing-rates"), {
      cache: "no-store",
    });

    if (!response.ok) {
      return fallbackPricingRates;
    }

    const data = (await response.json()) as RateCardResponse[];
    const rates = data.map(normalizePricingRate).filter(Boolean) as PricingRate[];

    return rates.length ? rates : fallbackPricingRates;
  } catch {
    return fallbackPricingRates;
  }
}

function getAdminApiUrl(path: string) {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "");

  if (!adminUrl) {
    return path;
  }

  return `${adminUrl}${path}`;
}

function normalizePricingRate(rate: RateCardResponse): PricingRate | null {
  const country = rate.countryName || rate.country_name || "";
  const rateCents = rate.ratePerMinuteCents ?? rate.rate_per_minute_cents ?? 0;

  if (!country) {
    return null;
  }

  return {
    country,
    natcall: rateCents > 0 ? `$${(rateCents / 100).toFixed(2)}` : "TBC",
    carrier: rate.typicalCarrier || rate.typical_carrier || "TBC",
    savings: rate.savings || "TBC",
  };
}
