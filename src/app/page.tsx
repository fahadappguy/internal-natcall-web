import Link from "next/link";
import { CookieBanner } from "@/components/cookie-banner";
import { HeroParallax } from "@/components/hero-parallax";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import {
  createMetadata,
  features,
  howItWorks,
  testimonials,
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

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center lg:px-8 lg:pt-20">
        <div className="max-w-[560px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[6px] border border-[#3c3418] bg-[#19150b] px-3 py-1 text-[13px] font-medium text-[#f6c617]">
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
            <p className="mt-5 max-w-lg text-[20px] leading-[1.5] text-[#aaaaaa]">
              Crystal clear international calling with no hidden fees. Connect
              with loved ones across the globe at local rates.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1c1c1c] px-4 py-2 text-[13px] text-[#aaaaaa]">
                <strong className="text-sm font-bold text-[#f6c617]">
                  $0.02
                </strong>
                <span>/ min</span>
              </span>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Reveal delay={0.35}>
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-medium text-white transition hover:border-white/20"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-medium text-white transition hover:border-white/20"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
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
          <HeroParallax />
        </Reveal>
      </section>

      <section className="border-y border-[#2a2a2a] bg-[#0d0d0d] py-8">
        <Reveal>
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 px-8 opacity-60 grayscale transition-all hover:grayscale-0 md:justify-between">
            {trustMarks.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="flex items-center gap-2 font-medium text-white">
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

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-20 sm:px-6 lg:px-8">
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
          className="mt-10 grid gap-8 md:grid-cols-3"
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
              <article className="relative overflow-visible rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 shadow-black/30 transition-all duration-300 hover:border-[#f6c617]/30">
                <span className="absolute -left-4 -top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f6c617] text-sm font-bold text-black">
                  {index + 1}
                </span>
                <span className="inline-flex text-[#f6c617] [&_svg]:h-[38px] [&_svg]:w-[38px]">
                  {howItWorksIcons[item.icon]}
                </span>
                <h3 className="mt-4 text-[20px] font-medium leading-[1.5] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[260px] text-[16px] leading-[1.6] text-[#bdbdbd]">
                  {item.copy}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="pricing"
        className="relative mx-auto mb-20 w-full max-w-[1200px] overflow-hidden rounded-3xl border border-[#f5c518]/10 bg-[#171309] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute right-[-128px] top-[-128px] h-64 w-64 rounded-full bg-[#f5c518]/5 blur-3xl" />
        <Reveal>
          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div className="flex max-w-[520px] flex-col gap-4">
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
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
                      <span className="block h-1.5 w-1.5 rounded-full bg-[#f6c617]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#f5c518]/30 bg-[#242424] p-10">
              <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#f6c617]">
                  Most Popular
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <strong className="text-5xl font-bold text-white">$6</strong>
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
                className="inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] py-4 text-lg font-bold text-black transition hover:brightness-95"
              >
                Start Calling Now
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="product"
        className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-20 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
              Everything You Need
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-10 grid gap-6 md:grid-cols-3"
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
              <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 transition-all duration-300 hover:border-[#f6c617]/30">
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

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white mb-10">
              Testimonials
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="grid gap-8 md:grid-cols-3"
          delay={0.1}
          stagger={0.08}
        >
          {testimonials.map((item) => (
            <RevealItem
              key={item.name}
              direction="up"
              duration={0.55}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <article className="rounded-xl border border-[#2a2a2a] border-l-4 border-l-[#f6c617] bg-[#1c1c1c] p-6 transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <p className="text-[14px] uppercase tracking-[0.28em] text-[#f6c617]">
                  *****
                </p>
                <p className="mt-4 text-[14px] leading-6 text-white">
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2f2a17] text-[10px] font-semibold text-[#f6c617]">
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-[#9d9d9d]">{item.meta}</p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="download"
        className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
          Ready to Call Home?
        </h2>
        <p className="mt-6 text-[20px] leading-[1.5] text-[#d0d0d0]">
          Join 500,000+ users worldwide saving on international calls.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Reveal delay={0.1}>
            <Link
              href="/#download"
              className="inline-flex items-center justify-center rounded-full bg-[#f6c617] px-10 py-4 text-lg font-semibold text-black transition hover:brightness-95"
            >
              Download for iOS
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/#download"
              className="inline-flex items-center justify-center rounded-full border border-[#383838] bg-[#1c1c1c] px-10 py-4 text-lg font-semibold text-white transition hover:border-white/20"
            >
              Get it on Android
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
