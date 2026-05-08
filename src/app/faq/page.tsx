import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { createMetadata, faqItems } from "@/lib/site";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Everything you need to know about making crystal-clear international calls with Natcall.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-[1200px]">
        <section className="mb-20 text-center">
          <span className="inline-block rounded-[4px] bg-[#1f1900] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f5c518]">
          Help Center
        </span>
          <h1 className="mx-auto mt-4 max-w-[1000px] text-[clamp(3rem,6vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#ebe1d1]">
          Frequently Asked Questions
        </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[clamp(1.1rem,2vw,20px)] font-medium leading-[1.5] text-[#aaaaaa]">
          Everything you need to know about making crystal-clear international calls with Natcall.
        </p>
        </section>

        <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <aside className="space-y-4 lg:sticky lg:top-32 lg:col-span-4">
            <article className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
              <h2 className="mb-4 text-[20px] font-semibold leading-[1.5] text-white">
              Still have questions?
            </h2>
              <p className="mb-6 max-w-[310px] text-[16px] leading-[1.7] text-[#aaaaaa]">
                Can&apos;t find the answer you&apos;re looking for? Our elite support team is ready to assist you 24/7.
            </p>
              <a
                href="mailto:natcallapp@gmail.com?subject=Natcall%20Support"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#383838] bg-[#242424] py-3 text-base font-bold text-white transition hover:bg-[#2a2a2a]"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center text-[#f5c518]">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6.75h16v10.5H4zm.7.55 7.3 5.7 7.3-5.7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                Contact Support
              </a>
            </article>

            <div className="relative aspect-square overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] lg:h-64 lg:aspect-auto">
              <Image
                src="/images/faq-support-card.png"
                alt="Global Presence support card"
                width={440}
                height={291}
                className="absolute inset-0 h-full w-full object-cover opacity-40"
                preload
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </aside>

          <div className="lg:col-span-8">
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      </div>
    </main>
  );
}
