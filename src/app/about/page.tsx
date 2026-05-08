import Image from "next/image";
import { createMetadata, aboutStats, team, values } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn why Natcall was started, our mission, team, values, and trust commitments.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="px-6 pb-20 pt-6">
      <div className="mx-auto max-w-[1100px]">
        <section className="relative min-h-[calc(100vh-112px)] overflow-hidden rounded-3xl border border-[#2a2a2a] bg-black">
          <Image
            src="/images/generated/natcall-hero-calling.png"
            alt="Natcall phone calling experience on a desk"
            fill
            priority
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.86)_42%,rgba(0,0,0,0.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

          <div className="relative flex min-h-[calc(100vh-112px)] flex-col justify-center px-6 py-5 sm:px-8 lg:px-10 lg:py-7">
            <div className="max-w-[760px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[13px] font-medium text-[#f6c617] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f6c617]" />
                About Natcall
              </span>

              <h1 className="mt-5 max-w-[760px] text-[clamp(2.55rem,6vw,62px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-white">
                Affordable calling home, built by people who understand the distance.
              </h1>

              <div className="mt-5 max-w-[690px] border-l-2 border-[#f6c617] pl-5">
                <p className="text-[15px] leading-7 text-[#dedede] sm:text-[16px]">
                  NatCall was founded to solve a real problem. We grew up in the
                  diaspora and experienced the pain of expensive international
                  calls to family and friends back home. We realized millions of
                  people worldwide face the same struggle. In 2026, we launched
                  NatCall to give diaspora communities an affordable, transparent
                  way to stay connected with loved ones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-16 md:grid-cols-2">
          <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
            <h2 className="text-2xl font-bold text-white">Mission</h2>
            <p className="mt-4 text-[16px] leading-8 text-[#c8c8c8]">
              To empower diaspora communities to stay connected with family
              without breaking the bank. We believe everyone deserves crystal
              clear, affordable calling home.
            </p>
          </article>
          <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
            <h2 className="text-2xl font-bold text-white">Trust & Security</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#d6d6d6]">
              {["SSL certificate", "Encrypted app traffic", "Private account data"].map((item) => (
                <span key={item} className="inline-flex items-center gap-3 rounded-[8px] bg-[#262626] px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f6c617]/10 text-[#f6c617]">
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
                    </svg>
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-4 border-y border-[#2a2a2a] py-12 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-[#151515] p-5">
              <p className="text-3xl font-extrabold text-[#f6c617]">{stat.value}</p>
              <p className="mt-2 text-sm text-[#aaaaaa]">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-white">The Team</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
                <p className="text-xl font-semibold text-white">{member.name}</p>
                <p className="mt-1 text-sm font-semibold text-[#f6c617]">{member.role}</p>
                <p className="mt-4 text-[15px] leading-7 text-[#bdbdbd]">{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white">Our Values</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-5">
                <p className="font-semibold text-white">{value.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#bdbdbd]">{value.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
