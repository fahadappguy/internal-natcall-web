"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const routesWithoutSiteChrome = new Set(["/email-verified"]);

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const hideSiteChrome = routesWithoutSiteChrome.has(pathname);

  if (hideSiteChrome) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen pt-[73px]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
