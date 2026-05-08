import { createMetadata, termsSections } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Review Natcall's service terms, billing rules, usage limits, and contact details.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-[800px]">
        <section className="mb-20 border-b border-[#2a2a2a] pb-6">
          <h1 className="text-[clamp(3rem,6vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-[16px] text-[#aaaaaa]">Last updated: May 2026</p>
        </section>

        <section className="grid gap-12 pb-8 text-[16px] leading-[1.6]">
        {termsSections.map((section) => (
          <article key={section.title} className="grid gap-5">
            <h2 className="text-[20px] font-semibold leading-[1.5] text-white">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[#aaaaaa]">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mb-6 grid gap-2 pl-6 text-[#aaaaaa] marker:text-[#9f9f9f]">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}

        <article className="grid gap-5">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-white">8. Contact Information</h2>
          <p className="text-[#aaaaaa]">
            If you have any questions about these Terms of Service, please contact our legal team
            at:
          </p>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
            <div className="grid gap-4 text-[16px] text-[#aaaaaa]">
              <strong className="font-semibold text-white">Natcall Legal Department</strong>
              <p>
                Email:{" "}
                <a href="mailto:legal@natcall.io" className="transition hover:text-white">
                  legal@natcall.io
                </a>
              </p>
              <p>Address: 123 Communication Plaza, Tech District, SV 94025</p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-[20px] font-medium leading-[1.5] text-white">Need a copy?</h2>
            <p className="mt-1 text-[13px] leading-[1.4] text-[#aaaaaa]">
              Download a PDF version of our terms for your records.
            </p>
          </div>
          <a
            href="mailto:legal@natcall.io?subject=Natcall%20Terms%20PDF%20Request"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#383838] bg-[#242424] px-6 py-2 text-[16px] font-bold text-white transition hover:bg-[#333333]"
          >
            <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4.5v8.8m0 0 3-3M12 13.3l-3-3M5.5 17.5v1c0 .83.67 1.5 1.5 1.5h10c.83 0 1.5-.67 1.5-1.5v-1"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
            Download PDF
          </a>
        </div>
        </section>
      </div>
    </main>
  );
}
