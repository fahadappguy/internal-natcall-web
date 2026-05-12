import Link from "next/link";
import { CookieBanner } from "@/components/cookie-banner";
import { HeroParallax } from "@/components/hero-parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import {
  createMetadata,
  features,
  getAppStoreRating,
  howItWorks,
  trustMarks,
} from "@/lib/site";

export const metadata = createMetadata({
  title: "Call Home For Less",
  description:
    "Crystal clear international calling with transparent pricing, HD quality, and instant top-up.",
  path: "/",
});

const trustIcons = {
  globe: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.9 12h16.2M12 3.5c2.4 2.2 3.8 5.2 3.8 8.5S14.4 18.3 12 20.5M12 3.5C9.6 5.7 8.2 8.7 8.2 12s1.4 6.3 3.8 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  ),
  signal: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12.5c1.9-1.9 4.4-3 7-3s5.1 1.1 7 3M8.2 15.8a5.4 5.4 0 0 1 7.6 0M11 19a1.4 1.4 0 1 1 2 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  ),
  ban: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8.5 15.5 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  ),
  bolt: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.2 3.8 7.8 12h4l-1 8.2 5.4-8.2h-4l1-8.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  ),
} as const;

const howItWorksIcons = {
  download: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5v9m0 0 3.2-3.2M12 13.5l-3.2-3.2M5 16.5v1.2c0 .72.58 1.3 1.3 1.3h11.4c.72 0 1.3-.58 1.3-1.3v-1.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  credits: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <rect
        x="4.5"
        y="6.5"
        width="15"
        height="11"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.8 10.3h14.4M8.4 14h3.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  phone: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
        fill="currentColor"
      />
    </svg>
  ),
} as const;

const featureIcons = {
  rates: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <rect
        x="4.5"
        y="7"
        width="15"
        height="10"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="1.65"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7.9 12h.01M16.1 12h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
    </svg>
  ),
  quality: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 12v1.5M10 9v6M14 7v10M18 10.5v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  topup: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 8.6v5.4M9.3 11.3H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  world: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.9 12h16.2M12 3.5c2.4 2.2 3.8 5.2 3.8 8.5S14.4 18.3 12 20.5M12 3.5C9.6 5.7 8.2 8.7 8.2 12s1.4 6.3 3.8 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  nosub: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="m7.2 7.2 9.6 9.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M17.1 13.5v2.2a1.8 1.8 0 0 1-1.8 1.8h-6.6a1.8 1.8 0 0 1-1.8-1.8V13M8.4 10.5V8.3a1.8 1.8 0 0 1 1.8-1.8h6.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.5 12h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
  contacts: (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <rect
        x="4.5"
        y="5.5"
        width="15"
        height="13"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.4 9.3h.01M10.8 9.3h4.8M8.4 13.2h7.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ),
} as const;

const securityCards = [
  {
    title: "SSL Certificate",
    status: "Active",
    value: "TLS 1.3",
    copy: "Website and app traffic are protected in transit with modern encrypted sessions.",
    detail: "HTTPS enforced",
  },
  {
    title: "Encrypted Traffic",
    status: "Monitored",
    value: "24/7",
    copy: "Sensitive account, payment, and route data move through secured service layers.",
    detail: "Secure API calls",
  },
  {
    title: "Private Data",
    status: "Controlled",
    value: "Need-to-know",
    copy: "Access to customer records is limited to support and operational requirements.",
    detail: "Restricted access",
  },
];

export default async function HomePage() {
  const appStoreRating = await getAppStoreRating();

  return (
    <main className="pb-16">
      <section className="relative isolate overflow-hidden">
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero-smiling-phone-call.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[#111111]/62" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,17,17,0.95)_0%,rgba(17,17,17,0.78)_44%,rgba(17,17,17,0.46)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

        <div className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-[1200px] gap-8 px-4 py-9 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:items-center md:gap-7 md:py-12 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12 lg:px-8 lg:py-16">
        <div className="flex max-w-[560px] flex-col items-center text-center lg:items-start lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#3c3418] bg-[#19150b] px-3 py-1 text-[13px] font-medium text-[#f6c617] lg:self-start">
              <span className="inline-block h-2.5 w-2.5 rounded-[2px] border border-current" />
              Available on iOS &amp; Android
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-[620px] text-[clamp(2.5rem,4.55vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white lg:whitespace-nowrap">
              Call Home <span className="text-[#f6c617]">Spend Less.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-[#aaaaaa] sm:text-[20px] sm:leading-[1.5]">
              Crystal clear international calling with no hidden fees. Connect
              with loved ones across the globe at local rates.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2 text-[13px] text-[#aaaaaa]">
                <strong className="text-sm font-bold text-[#f6c617]">
                  $0.02
                </strong>
                <span>/ min</span>
              </span>
              <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2 text-[13px] text-[#aaaaaa]">
                <strong className="text-sm font-bold text-[#f6c617]">
                  {appStoreRating.value}
                </strong>
                <span>
                  App Store rating
                  {appStoreRating.count
                    ? ` (${appStoreRating.count.toLocaleString()} reviews)`
                    : ""}
                </span>
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid w-full gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <Reveal delay={0.35}>
              <Link
                href="/#download"
                className="btn-premium-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-medium text-white sm:w-auto"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.765 9.558c-.015-1.642 1.342-2.426 1.403-2.463-.767-1.118-1.956-1.271-2.38-1.289-1.012-.106-1.978.6-2.49.6-.525 0-1.318-.585-2.17-.57-1.114.017-2.16.663-2.732 1.663-1.184 2.05-.301 5.06.833 6.698.567.802 1.228 1.696 2.094 1.664.848-.035 1.165-.54 2.17-.54.995 0 1.293.54 2.178.52.91-.015 1.485-.814 2.032-1.623.656-.92.918-1.826.928-1.872-.02-.007-1.76-.672-1.796-2.788Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.637 5.072c.455-.57.767-1.346.68-2.135-.66.03-1.485.456-1.96 1.011-.423.492-.8 1.3-.703 2.058.74.055 1.5-.373 1.983-.934Z"
                    fill="currentColor"
                  />
                </svg>
                App Store
              </Link>
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                href="/#download"
                aria-label="Open Android download"
                className="btn-premium-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-medium text-white sm:w-auto"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.8 3.1 11.8 8.85 3.8 14.9V3.1Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.8 8.85 14.2 7.2c.42-.3.42-.92 0-1.22L12 4.4 9.5 6.22l2.3 2.63Z"
                    fill="currentColor"
                    opacity="0.78"
                  />
                  <path
                    d="M11.8 8.85 14.2 10.5c.42.3.42.92 0 1.22L12 13.3 9.5 11.48l2.3-2.63Z"
                    fill="currentColor"
                    opacity="0.58"
                  />
                </svg>
                Play Store
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal direction="right" delay={0.2}>
          <div className="relative mx-auto flex min-h-[390px] w-full max-w-[560px] items-center justify-center px-2 py-2 sm:min-h-[460px] sm:px-6 sm:py-8 md:min-h-[480px] lg:min-h-[520px] [&>div]:mx-auto">
            <HeroParallax />
          </div>
        </Reveal>
        </div>
      </section>

      <section className="border-y border-[#2a2a2a] bg-[#0d0d0d] py-6 sm:py-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 text-center opacity-70 grayscale transition-all hover:grayscale-0 sm:gap-8 sm:px-8 md:justify-between">
            {trustMarks.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="flex min-w-[138px] items-center justify-center gap-2 font-medium text-white sm:min-w-0">
                  <span className="text-[#f6c617]">
                    {trustIcons[item.icon]}
                  </span>
                  <span>{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pt-4 sm:px-6 lg:px-8">
        <CookieBanner />
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
              How it Works
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[16px] text-[#b7b7b7]">
              Three simple steps to start saving on your calls.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-8"
          delay={0.1}
          stagger={0.12}
        >
          {howItWorks.map((item, index) => (
            <RevealItem
              key={item.title}
              direction="up"
              duration={0.55}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <article className="relative mx-auto w-[calc(100%-28px)] max-w-[315px] overflow-visible rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-5 text-center shadow-black/30 transition-all duration-300 hover:border-[#f6c617]/30 sm:w-full sm:max-w-none md:p-6 md:text-left">
                <span className="absolute -left-3 -top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6c617] text-sm font-bold text-black md:-left-4 md:-top-4 md:h-10 md:w-10">
                  {index + 1}
                </span>
                <span className="inline-flex text-[#f6c617] [&_svg]:h-[32px] [&_svg]:w-[32px] md:[&_svg]:h-[38px] md:[&_svg]:w-[38px]">
                  {howItWorksIcons[item.icon]}
                </span>
                <h3 className="mt-3 text-[18px] font-medium leading-[1.4] text-white md:mt-4 md:text-[20px] md:leading-[1.5]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[14px] leading-6 text-[#bdbdbd] md:mx-0 md:max-w-[260px] md:text-[16px] md:leading-[1.6]">
                  {item.copy}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="pricing"
        className="relative mx-auto mb-14 w-full max-w-[1200px] overflow-hidden rounded-2xl border border-[#f5c518]/10 bg-[#171309] px-4 py-12 sm:mb-20 sm:rounded-3xl sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="absolute right-[-128px] top-[-128px] h-64 w-64 rounded-full bg-[#f5c518]/5 blur-3xl" />
        <Reveal>
          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div className="mx-auto flex max-w-[520px] flex-col gap-4 text-center lg:mx-0 lg:text-left">
              <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
                Transparent Pricing
              </h2>
              <p className="text-[16px] leading-[1.6] text-[#aaaaaa]">
                No hidden fees, no connection charges, no expiry on credits.
                <br />
                Pay only for the minutes you use.
              </p>
              <ul className="grid gap-4 text-[15px] tracking-[0.01em] text-white">
                {[
                  "Crystal clear HD voice quality",
                  "Real-time balance updates",
                  "Credits never expire",
                ].map((item) => (
                  <li key={item} className="flex items-center justify-center gap-3 lg:justify-start">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
                      <span className="block h-1.5 w-1.5 rounded-full bg-[#f6c617]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shimmer-border rounded-xl border border-[#f5c518]/30 bg-[#242424] p-5 sm:p-10">
              <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#f6c617]">
                  Most Popular
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <strong className="text-4xl font-bold text-white sm:text-5xl">$6</strong>
                  <span className="text-[#aaaaaa]">/ 60 mins</span>
                </div>
                <p className="mt-2 text-sm text-[#aaaaaa]">
                  Average rate of $0.10/min
                </p>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {["+$5", "+$10", "+$20", "+$50"].map((amount, index) => (
                  <span
                    key={amount}
                    className={`inline-flex min-w-[72px] flex-1 items-center justify-center rounded-full border px-3 py-2 text-xs ${
                      index === 0
                        ? "border-[#f5c518] text-[#f5c518]"
                        : "border-[#383838] text-white"
                    }`}
                  >
                    {amount}
                  </span>
                ))}
              </div>

              <Link
                href="/#download"
                className="btn-premium-primary inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] py-3 text-base font-bold text-black sm:text-lg"
              >
                Start Calling Now
              </Link>
            </div>
          </div>
        </Reveal>

      </section>

      <section
        id="security"
        className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-4 lg:px-8"
      >
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-[#2a2a2a] bg-[#151515] p-6 text-center md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
            <div>
              <span className="inline-flex rounded-[6px] border border-[#3c3418] bg-[#19150b] px-3 py-1 text-[13px] font-medium text-[#f6c617]">
                Security & Encryption
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,36px)] font-extrabold leading-[1.15] tracking-[-0.01em] text-white">
                Built to protect every account, payment, and call route.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#bdbdbd]">
                Natcall uses encrypted app traffic, secure payment processors,
                route monitoring, and private account controls so families can
                stay connected with confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {securityCards.map((item) => (
                  <article
                    key={item.title}
                    className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f6c617]/50 hover:bg-[#211f17] xl:min-h-[282px]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#f6c617]" />
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f6c617]/30 bg-[#f6c617]/10 text-[#f6c617]">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </span>
                      <span className="rounded-full border border-[#3c3418] bg-[#19150b] px-2.5 py-1 text-[11px] font-semibold text-[#f6c617]">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[16px] font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] uppercase tracking-[0.12em] text-[#f6c617]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-[13px] leading-7 text-[#c9c9c9]">
                      {item.copy}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-[12px] text-[#aaaaaa]">
                      <span>{item.detail}</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f6c617] text-black transition group-hover:scale-105">
                        <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <path d="m7 12 3 3 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </span>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="product"
        className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8"
      >
        <div className="text-center">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
              Everything You Need
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.1}
          stagger={0.08}
        >
          {features.map((feature) => (
            <RevealItem
              key={feature.title}
              direction="up"
              duration={0.55}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <article className="shimmer-border rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 transition-all duration-300 hover:border-[#f6c617]/30">
                <span className="inline-flex text-[#f6c617] [&_svg]:h-[38px] [&_svg]:w-[38px]">
                  {featureIcons[feature.icon]}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#bdbdbd]">
                  {feature.copy}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="download"
        className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8"
      >
        <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
          Ready to Call Home?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-[#d0d0d0] sm:mt-6 sm:text-[20px] sm:leading-[1.5]">
          Join 500,000+ users worldwide saving on international calls.
        </p>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          <Reveal delay={0.1}>
            <Link
              href="/#download"
              className="btn-premium-primary inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] px-10 py-3 text-base font-semibold text-black sm:w-auto sm:py-2 sm:text-lg"
            >
              Download for iOS
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/#download"
              className="btn-premium-secondary inline-flex w-full items-center justify-center rounded-full border border-[#383838] bg-[#1c1c1c] px-10 py-3 text-base font-semibold text-white sm:w-auto sm:py-2 sm:text-lg"
            >
              Get it on Android
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
