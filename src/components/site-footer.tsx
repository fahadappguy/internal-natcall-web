"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  fallbackContactInfo,
  getContactInfo,
  type ContactInfo,
} from "@/lib/contact-info";
import {
  fallbackSocialLinks,
  getSocialLinks,
  SocialLink,
  SocialPlatform,
} from "@/lib/social-links";
import { useEffect, useState } from "react";

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
    lead: "Quality international calling you can trust.",
    columns: [
      {
        title: "Brand",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Press", href: "/press" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Rates", href: "/#pricing" },
          { label: "Security", href: "/#security" },
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
          { label: "About Us", href: "/about" },
          { label: "Press", href: "/press" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Rates", href: "/#pricing" },
          { label: "Coverage", href: "/#pricing" },
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
          { label: "About Us", href: "/about" },
          { label: "Press", href: "/press" },
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
          { label: "Status", href: "/contact" },
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
          { label: "About Us", href: "/about" },
          { label: "Press", href: "/press" },
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
          { label: "System Status", href: "/contact" },
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

const socialIconMap: Record<SocialPlatform, { icon: React.ReactNode; label: string }> = {
  instagram: {
    label: "Instagram",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16.2 8.1h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    ),
  },
  twitter: {
    label: "Twitter",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M5.2 5.5 18.6 18.5M18.8 5.5 5.5 18.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.9"
        />
      </svg>
    ),
  },
  linkedin: {
    label: "LinkedIn",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M6.4 10.1v7.2M6.4 7.2v.02M10.4 17.3v-7.2M10.4 13.2c.5-1.9 1.6-3.2 3.5-3.2 2.3 0 3.7 1.5 3.7 4.3v3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    ),
  },
  facebook: {
    label: "Facebook",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.2 8.2h2.2V5.1c-.38-.05-1.68-.16-3.19-.16-3.16 0-5.32 1.92-5.32 5.45v3.07H4.5v3.45h3.39V25h4.15v-8.09h3.25l.52-3.45h-3.77v-2.73c0-1 .28-1.68 2.16-1.68Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  tiktok: {
    label: "TikTok",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.5 4.8c.52 2.73 2.1 4.42 4.5 4.6v3.34a7.56 7.56 0 0 1-4.4-1.42v4.86c0 3.63-2.34 5.82-5.47 5.82-2.9 0-5.13-2.03-5.13-4.89 0-3.2 2.47-5.1 5.8-4.78v3.42c-1.3-.2-2.22.35-2.22 1.34 0 .86.67 1.43 1.55 1.43 1.03 0 1.75-.62 1.75-2.1V4.8h3.62Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  youtube: {
    label: "YouTube",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.3 8.2a3.08 3.08 0 0 0-2.17-2.18C17.22 5.5 12 5.5 12 5.5s-5.22 0-7.13.52A3.08 3.08 0 0 0 2.7 8.2 32.1 32.1 0 0 0 2.2 12a32.1 32.1 0 0 0 .5 3.8 3.08 3.08 0 0 0 2.17 2.18c1.91.52 7.13.52 7.13.52s5.22 0 7.13-.52a3.08 3.08 0 0 0 2.17-2.18 32.1 32.1 0 0 0 .5-3.8 32.1 32.1 0 0 0-.5-3.8ZM10 15.5v-7l6 3.5-6 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
};

const foundingYear = 2018;

export function SiteFooter() {
  const pathname = usePathname();
  const [socialLinks, setSocialLinks] =
    useState<SocialLink[]>(fallbackSocialLinks);
  const variant = getVariant(pathname);
  const titleClassName = variant.titleClassName ?? "text-[1.05rem] text-white";
  const currentYear = new Date().getFullYear();
  const lead =
    variant === footerVariants.home
      ? `Connecting families across borders since ${foundingYear}-${currentYear}. ${variant.lead}`
      : variant.lead;

  const [contact, setContact] =
    useState<ContactInfo>(fallbackContactInfo);

  useEffect(() => {
    let isMounted = true;

    Promise.all([getSocialLinks(), getContactInfo()]).then(
      ([links, contactInfo]) => {
        if (!isMounted) return;

        setSocialLinks(links);
        setContact(contactInfo);
      }
    );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="w-full border-t border-[#2a2a2a] bg-[#0d0d0d] pb-10 pt-14 sm:pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid justify-items-center gap-9 text-center sm:grid-cols-2 md:gap-12 xl:grid-cols-[1.25fr_repeat(4,minmax(0,1fr))] xl:text-left xl:justify-items-start">
          <div className="max-w-[280px]">
            <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">Natcall</h2>
            <p className="mt-4 text-[13px] leading-6 text-[#aaaaaa]">{lead}</p>
          </div>

          {variant.columns.map((column) => (
            <div key={column.title} className="w-full xl:w-auto">
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

          <div className="w-full xl:w-auto">
            <h2 className={`font-semibold ${titleClassName}`}>Contact</h2>
            <div className="mt-6 grid gap-2 text-[13px] text-[#aaaaaa]">
              <span>Address: {contact.address}</span>
              <span>Phone: {contact.phone}</span>
              <span>Support Email: {contact.supportEmail}</span>
              <span>Support WhatsApp: {contact.supportWhatsapp}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#2a2a2a] pt-8 text-center sm:mt-12 lg:flex-row lg:justify-between lg:text-left">
          <p className="text-[12px] text-[#aaaaaa]">
            Copyright {foundingYear}-{currentYear} Natcall. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 text-[#9d9d9d]">
            {socialLinks.map((link) => {
              const social = socialIconMap[link.platform];
              const href = link.url.trim();

              if (!href) {
                return (
                  <span
                    key={link.platform}
                    aria-label={`${social.label} link not set`}
                    aria-disabled="true"
                    title={`${social.label} link not set`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#6f6f6f]"
                  >
                    {social.icon}
                  </span>
                );
              }

              return (
                <a
                  key={link.platform}
                  href={href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-[#f6c617]/60 hover:text-[#f6c617]"
                >
                  {social.icon}
                </a>
              );
            })}

            {variant.rightIcons ? (
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
