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
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const aboutLinks = [
  { href: "/about", label: "About Us", copy: "Our story, mission, and values" },
  { href: "/press", label: "Press", copy: "Media kit and brand information" },
  { href: "/#security", label: "Security", copy: "Encryption and trust measures" },
  { href: "/business", label: "Business Plans", copy: "Calling plans for teams" },
];

const exploreLinks = [
  { href: "/faq", label: "FAQ", copy: "Answers to common questions" },
  { href: "/terms", label: "Terms of Service", copy: "Service rules and usage terms" },
  { href: "/privacy-policy", label: "Privacy Policy", copy: "How Natcall protects data" },
];

function isActiveHref(pathname: string, href: string) {
  if (href.startsWith("/#")) {
    return false;
  }

  return pathname === href;
}

function isExploreActive(pathname: string) {
  return exploreLinks.some((link) => isActiveHref(pathname, link.href));
}

function isAboutActive(pathname: string) {
  return aboutLinks.some((link) => isActiveHref(pathname, link.href));
}

export function SiteHeader() {
  const pathname = usePathname();
  const reducedMotion = Boolean(useReducedMotion());
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const aboutActive = isAboutActive(pathname);
  const exploreActive = isExploreActive(pathname);

  return (
    <LazyMotion features={domAnimation}>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#2a2a2a] bg-[#111111]/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
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
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((value) => !value)}
                className={`nav-link-premium items-center gap-1.5 text-[14px] transition ${
                  aboutActive || aboutOpen
                    ? "is-active text-[#f6c617]"
                    : "text-[#aaaaaa] hover:text-white"
                }`}
              >
                Our Story
                <svg
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition ${aboutOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m7 10 5 5 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {aboutOpen ? (
                  <m.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="absolute left-0 top-9 w-[360px] p-1 xl:w-[380px]"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setAboutOpen(false)}
                          className="group rounded-xl border border-white/10 bg-[#151515]/92 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#f6c617]/50 hover:bg-[#1c1c1c]"
                        >
                          <span className="block text-[14px] font-medium text-white transition group-hover:text-[#f6c617]">
                            {link.label}
                          </span>
                          <span className="mt-1 block text-[12px] leading-5 text-[#8f8f8f]">
                            {link.copy}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => {
              const active = isActiveHref(pathname, link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link-premium text-[14px] transition ${
                    active
                      ? "is-active text-[#f6c617]"
                      : "text-[#aaaaaa] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                type="button"
                aria-expanded={exploreOpen}
                onClick={() => setExploreOpen((value) => !value)}
                className={`nav-link-premium items-center gap-1.5 text-[14px] transition ${
                  exploreActive || exploreOpen
                    ? "is-active text-[#f6c617]"
                    : "text-[#aaaaaa] hover:text-white"
                }`}
              >
                Support Hub
                <svg
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition ${exploreOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m7 10 5 5 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {exploreOpen ? (
                  <m.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="absolute right-0 top-9 w-[280px] p-1"
                  >
                    <div className="grid gap-3">
                      {exploreLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setExploreOpen(false)}
                          className="group rounded-xl border border-white/10 bg-[#151515]/92 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#f6c617]/50 hover:bg-[#1c1c1c]"
                        >
                          <span className="block text-[14px] font-medium text-white transition group-hover:text-[#f6c617]">
                            {link.label}
                          </span>
                          <span className="mt-1 block text-[12px] leading-5 text-[#8f8f8f]">
                            {link.copy}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#download"
              className="btn-premium-primary inline-flex items-center justify-center rounded-full bg-[#f6c617] px-6 py-2 text-[16px] font-bold text-black"
            >
              Download App
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => {
                if (value) {
                  setMobileAboutOpen(false);
                  setMobileExploreOpen(false);
                }

                return !value;
              });
            }}
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
              className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-[#2a2a2a] bg-[#111111] lg:hidden"
            >
              <div className="mx-auto grid w-full max-w-[1200px] gap-2 px-4 py-4 pb-6 sm:px-6">
                {navLinks.map((link) => {
                  const active = isActiveHref(pathname, link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-[12px] px-4 py-3 text-sm transition ${
                        active
                          ? "bg-[#211a08] font-medium text-[#f6c617]"
                          : "bg-[#1c1c1c] text-[#d0d0d0] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div>
                  <button
                    type="button"
                    aria-expanded={mobileAboutOpen}
                    onClick={() => setMobileAboutOpen((value) => !value)}
                    className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-sm transition ${
                      aboutActive || mobileAboutOpen
                        ? "bg-[#211a08] font-medium text-[#f6c617]"
                        : "bg-[#1c1c1c] text-[#d0d0d0] hover:text-white"
                    }`}
                  >
                    Our Story
                    <svg
                      aria-hidden="true"
                      className={`h-4 w-4 transition ${mobileAboutOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m7 10 5 5 5-5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileAboutOpen ? (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reducedMotion
                            ? { duration: 0 }
                            : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="grid overflow-hidden rounded-b-[12px] bg-[#151515]"
                      >
                        <div className="grid gap-1 px-2 pb-2 pt-2">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setMenuOpen(false)}
                              className="rounded-[10px] border border-white/8 bg-[#1c1c1c] px-3 py-2 text-sm text-[#d0d0d0] transition hover:border-[#f6c617]/45 hover:text-[#f6c617]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    type="button"
                    aria-expanded={mobileExploreOpen}
                    onClick={() => setMobileExploreOpen((value) => !value)}
                    className={`flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-sm transition ${
                      exploreActive || mobileExploreOpen
                        ? "bg-[#211a08] font-medium text-[#f6c617]"
                        : "bg-[#1c1c1c] text-[#d0d0d0] hover:text-white"
                    }`}
                  >
                    Support Hub
                    <svg
                      aria-hidden="true"
                      className={`h-4 w-4 transition ${mobileExploreOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m7 10 5 5 5-5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileExploreOpen ? (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reducedMotion
                            ? { duration: 0 }
                            : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="grid overflow-hidden rounded-b-[12px] bg-[#151515]"
                      >
                        <div className="grid gap-1 px-2 pb-2 pt-2">
                          {exploreLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setMenuOpen(false)}
                              className="rounded-[10px] border border-white/8 bg-[#1c1c1c] px-3 py-2 text-sm text-[#d0d0d0] transition hover:border-[#f6c617]/45 hover:text-[#f6c617]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </m.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <Link
                  href="/#download"
                  onClick={() => setMenuOpen(false)}
                  className="btn-premium-primary mt-2 inline-flex items-center justify-center rounded-full bg-[#f6c617] px-6 py-2.5 text-sm font-semibold text-black"
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
