const defaultAdminUrl = "https://natcall-admindashboard.vercel.app";

export function getAdminApiUrl(path: string) {
  const adminUrl =
    process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/+$/, "") || defaultAdminUrl;

  return `${adminUrl}${path}`;
}
