"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/#product", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy & Policies" },
];

function isActiveLink(pathname: string, label: string) {
  if (label === "Contact") {
    return pathname === "/contact";
  }

  if (label === "FAQ") {
    return pathname === "/faq";
  }

  if (label === "Terms") {
    return pathname === "/terms";
  }

  if (label === "Privacy & Policies") {
    return pathname === "/privacy-policy";
  }

  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const reducedMotion = Boolean(useReducedMotion());
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#2a2a2a] bg-[#111111]/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold tracking-[-0.03em] text-white"
          >
            <span
              className="inline-block h-3 w-3 rounded-full bg-[#f6c617]"
              aria-hidden="true"
            />
            Natcall
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.label);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[14px] transition ${
                    active
                      ? "font-medium text-[#f6c617]"
                      : "font-medium text-[#aaaaaa] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#download"
              className="inline-flex items-center justify-center rounded-full bg-[#f6c617] px-6 py-2 text-[16px] font-bold text-black transition hover:brightness-95"
            >
              Download App
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#383838] bg-[#1c1c1c] text-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
              }
              className="overflow-hidden border-t border-[#2a2a2a] bg-[#111111] lg:hidden"
            >
              <div className="mx-auto grid w-full max-w-[1200px] gap-2 px-6 py-4">
                {navLinks.map((link) => {
                  const active = isActiveLink(pathname, link.label);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-[12px] px-4 py-3 text-sm transition ${
                        active
                          ? "bg-[#211a08] font-semibold text-[#f6c617]"
                          : "bg-[#1c1c1c] text-[#d0d0d0] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href="/#download"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f6c617] px-6 py-2.5 text-sm font-semibold text-black"
                >
                  Download App
                </Link>
              </div>
            </m.div>
          ) : null}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
