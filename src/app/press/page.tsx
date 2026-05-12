import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Press & Media Kit",
  description:
    "Natcall press resources, company boilerplate, media angles, and contact information.",
  path: "/press",
});

const facts = [
  { label: "Founded", value: "2026" },
  { label: "Category", value: "International calling" },
  { label: "Coverage", value: "200+ countries" },
  { label: "Model", value: "Prepaid credits" },
];

const mediaAngles = [
  {
    title: "Diaspora-first communication",
    copy: "Natcall is built around the everyday need to call family abroad without confusing rates, contracts, or carrier surprises.",
  },
  {
    title: "Transparent global calling",
    copy: "The product focuses on prepaid credits, clear destination pricing, instant top-up, and simple calling workflows.",
  },
  {
    title: "Reliable voice for real conversations",
    copy: "Natcall positions HD voice quality and route monitoring as essential infrastructure for families and teams across borders.",
  },
];

const kitItems = [
  "Natcall logo and brand mark",
  "Product screenshots and app mockups",
  "Founder and company background",
  "Approved company boilerplate",
  "Product positioning notes",
  "Media contact details",
];

export default function PressPage() {
  return (
    <main className="px-4 pb-16 pt-24 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-[1180px]">
        <section className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] sm:rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="p-6 text-center sm:p-8 lg:p-10 lg:text-left">
              <span className="inline-flex rounded-[6px] border border-[#3c3418] bg-[#19150b] px-3 py-1 text-[13px] font-medium text-[#f6c617]">
                Press & Media Kit
              </span>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,6vw,64px)] font-extrabold leading-[1.06] text-white sm:leading-[1.02]">
                The calling app helping global families stay close.
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#c9c9c9] sm:text-[17px] sm:leading-8">
                Natcall is an international calling service created for
                diaspora communities who need affordable rates, clear voice
                quality, and a simpler way to call home.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                <a
                  href="mailto:natcallapp@gmail.com?subject=Natcall%20Media%20Inquiry"
                  className="btn-premium-primary inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] px-7 py-3 text-sm font-bold text-black sm:w-auto sm:py-2"
                >
                  Contact Media Team
                </a>
                <Link
                  href="/about"
                  className="btn-premium-secondary inline-flex w-full items-center justify-center rounded-full border border-[#383838] px-7 py-3 text-sm font-semibold text-white sm:w-auto sm:py-2"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

            <aside className="border-t border-[#2a2a2a] bg-[#151515] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
                Company snapshot
              </p>
              <div className="mt-5 grid gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-lg border border-[#2a2a2a] bg-[#101010] p-4"
                  >
                    <p className="text-[12px] uppercase tracking-[0.12em] text-[#8f8f8f]">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-5 text-center lg:grid-cols-[0.9fr_1.1fr] lg:text-left">
          <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
              Boilerplate
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              About Natcall
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[#c8c8c8]">
              Natcall is a diaspora-focused international calling app built to
              make cross-border conversations more affordable, transparent, and
              reliable. With prepaid credits, instant top-up, HD voice quality,
              and support for 200+ countries, Natcall helps people stay
              connected to family, friends, customers, and communities abroad.
            </p>
          </article>

          <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
              Media angles
            </p>
            <div className="mt-5 grid gap-4">
              {mediaAngles.map((angle) => (
                <div key={angle.title} className="border-t border-[#2a2a2a] pt-4 first:border-t-0 first:pt-0">
                  <h2 className="text-lg font-semibold text-white">
                    {angle.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-7 text-[#bdbdbd]">
                    {angle.copy}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-5 text-center lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
          <article className="rounded-xl border border-[#2a2a2a] bg-[#151515] p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
              Available on request
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Media kit assets
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {kitItems.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#2a2a2a] bg-[#101010] px-4 py-3 text-[14px] text-[#d8d8d8]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="shimmer-border rounded-xl border border-[#3c3418] bg-[#19150b] p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
              Press contact
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              For interviews, assets, and company background.
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-[#d8d0b6]">
              For media requests, product screenshots, founder background, or
              approved brand assets, contact the Natcall team directly.
            </p>
            <a
              href="mailto:natcallapp@gmail.com?subject=Natcall%20Press%20Request"
              className="btn-premium-primary mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] px-4 py-3 text-sm font-bold text-black"
            >
              natcallapp@gmail.com
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
