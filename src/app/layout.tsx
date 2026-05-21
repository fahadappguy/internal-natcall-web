import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { GoogleAnalytics } from "@/components/google-analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NatCall | Call Home Spend Less",
    template: "%s | Natcall",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Natcall",
    title: "Natcall | Call Home Spend Less",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Natcall | Call Home Spend Less",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <GoogleAnalytics />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
