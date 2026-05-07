"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type FooterVariant = {
  lead: string;
  columns: FooterColumn[];
  titleClassName?: string;
  rightIcons?: boolean;
};

const footerVariants: Record<string, FooterVariant> = {
  home: {
    lead: "Connecting families across borders since 2018. Quality international calling you can trust.",
    columns: [
      {
        title: "Brand",
        links: [
          { label: "About Us", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Press", href: "/" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Rates", href: "/#pricing" },
          { label: "Features", href: "/#product" },
          { label: "Security", href: "/privacy-policy" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/faq" },
          { label: "Contact Us", href: "/contact" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  faq: {
    lead: "Premium international calling for the modern world. Reliable, affordable, and crystal clear.",
    columns: [
      {
        title: "Brand",
        links: [
          { label: "About Us", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Press", href: "/" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Rates", href: "/#pricing" },
          { label: "Coverage", href: "/" },
          { label: "Enterprise", href: "/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
  privacy: {
    lead: "Premium international calling solutions for the modern global citizen. Reliable, secure, and clear.",
    columns: [
      {
        title: "Brand",
        links: [
          { label: "About Us", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Press", href: "/" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "/privacy-policy" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/faq" },
          { label: "Contact", href: "/contact" },
          { label: "Status", href: "/" },
        ],
      },
    ],
    rightIcons: true,
  },
  terms: {
    lead: "Premium international calling utility for a global world. Built for reliability, clarity, and trust.",
    columns: [
      {
        title: "BRAND",
        links: [
          { label: "About Us", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Press", href: "/" },
        ],
      },
      {
        title: "LEGAL",
        links: [
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Cookie Policy", href: "/privacy-policy" },
        ],
      },
      {
        title: "SUPPORT",
        links: [
          { label: "Help Center", href: "/faq" },
          { label: "Contact Support", href: "/contact" },
          { label: "System Status", href: "/" },
        ],
      },
    ],
    titleClassName: "text-[#f6c617] uppercase tracking-[0.1em] text-[0.78rem]",
  },
};

function getVariant(pathname: string) {
  if (pathname === "/faq") {
    return footerVariants.faq;
  }

  if (pathname === "/privacy-policy") {
    return footerVariants.privacy;
  }

  if (pathname === "/terms") {
    return footerVariants.terms;
  }

  return footerVariants.home;
}

export function SiteFooter() {
  const pathname = usePathname();
  const variant = getVariant(pathname);
  const titleClassName = variant.titleClassName ?? "text-[1.05rem] text-white";

  return (
    <footer className="w-full border-t border-[#2a2a2a] bg-[#0d0d0d] pb-10 pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-8">
        <div className="grid justify-items-center gap-12 text-center md:grid-cols-2 md:text-left md:justify-items-start xl:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-[220px]">
            <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">Natcall</h2>
            <p className="mt-4 text-[13px] leading-6 text-[#aaaaaa]">{variant.lead}</p>
          </div>

          {variant.columns.map((column) => (
            <div key={column.title} className="w-full md:w-auto">
              <h2 className={`font-semibold ${titleClassName}`}>{column.title}</h2>
              <div className="mt-6 grid gap-3 text-[13px] text-[#aaaaaa]">
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} className="transition hover:text-[#f6c617]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-[#2a2a2a] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[12px] text-[#aaaaaa]">Copyright 2024 Natcall. All rights reserved.</p>

          {variant.rightIcons ? (
            <div className="flex items-center gap-3 text-[#7f7f7f]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10">
                <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 4v16M4 12h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10">
                <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
