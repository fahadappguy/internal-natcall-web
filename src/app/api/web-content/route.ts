import { fetchAdminApi } from "@/lib/admin-api";

const allowedPaths = new Set([
  "/api/web/contact-info",
  "/api/web/download-links",
  "/api/web/hero-media",
  "/api/web/popular-destinations",
  "/api/web/pricing-rates",
  "/api/web/social-links",
]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") ?? "";

  if (!allowedPaths.has(path)) {
    return Response.json({ error: "Unsupported content path" }, { status: 400 });
  }

  const response = await fetchAdminApi(path, { cache: "no-store" });
  const body = await response.text();

  return new Response(body, {
    status: response.status,
    headers: {
      "content-type": response.headers.get("content-type") ?? "application/json",
      "cache-control": "no-store",
    },
  });
}
