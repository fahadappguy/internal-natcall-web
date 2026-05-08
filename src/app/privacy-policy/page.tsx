import {
  createMetadata,
  privacyHighlights,
  privacyPartners,
  privacyRights,
} from "@/lib/site";
import { PrivacyNav } from "@/components/privacy-nav";
import { Reveal } from "@/components/reveal";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read how Natcall collects, uses, and protects personal information.",
  path: "/privacy-policy",
});

const highlightIcons = [
  <svg
    key="user"
    aria-hidden="true"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 5.2a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6ZM5.8 18.8c0-2.4 2.8-4.2 6.2-4.2s6.2 1.8 6.2 4.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.7"
    />
  </svg>,
  <svg
    key="device"
    aria-hidden="true"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect
      x="4.5"
      y="6.5"
      width="8"
      height="11"
      rx="1.8"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M7.2 9.4h2.6M15.3 9.8h4.2M15.3 13.2h4.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    />
  </svg>,
  <svg
    key="call"
    aria-hidden="true"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>,
  <svg
    key="billing"
    aria-hidden="true"
    className="h-7 w-7"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="4.5" y="6.5" width="15" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4.8 10.3h14.4M8.4 14h3.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
  </svg>,
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-[1260px] px-4 pb-20 pt-10 sm:px-6 lg:px-12">
      <section>
        <span className="inline-flex items-center gap-2 rounded-[8px] border border-[#3d3418] bg-[#19150b] px-4 py-2 text-sm text-[#e4dccd]">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
            <span className="block h-1.5 w-1.5 rounded-full bg-[#f6c617]" />
          </span>
          Legal Documentation
        </span>
        <Reveal>
          <h1 className="mt-4 text-[clamp(2.4rem,6vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#efe6d7]">
            Privacy Policy
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-[1rem] text-[#c2b8aa]">
            Last updated: May 2026
          </p>
        </Reveal>
      </section>

      <section className="mt-10 grid items-start gap-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-7">
        <aside className="w-full lg:sticky lg:top-24 lg:self-start">
          <Reveal direction="left" delay={0.1}>
            <PrivacyNav />
          </Reveal>
        </aside>

        <Reveal delay={0.2}>
          <div className="grid gap-7">
              <article
                id="introduction"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[1.85rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    01.
                  </span>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                    Introduction
                  </h2>
                </div>
                <p className="mt-4 text-[14px] leading-8 text-[#d3d3d3]">
                  Welcome to Natcall. Your privacy is paramount to us. This
                  policy describes how we collect, protect, and handle your
                  personal information when you use our global communication
                  services. By using Natcall, you consent to the practices
                  described in this document.
                </p>
                <p className="mt-4 text-[15px] leading-9 text-[#d3d3d3]">
                  We are committed to ensuring that your data is handled with
                  strong security controls and in compliance with applicable
                  international data protection regulations, including GDPR
                  where it applies.
                </p>
              </article>

              <div id="collection" className="grid gap-5 md:grid-cols-2">
                {privacyHighlights.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6"
                  >
                    <span className="text-[#f6c617]">
                      {highlightIcons[index]}
                    </span>
                    <h2 className="mt-5 text-[1rem] font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[13px] leading-7 text-[#c4c4c4]">
                      {item.copy}
                    </p>
                  </article>
                ))}
              </div>

              <article
                id="usage"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    03.
                  </span>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                    How We Use Data
                  </h2>
                </div>
                <ul className="mt-5 grid gap-4">
                  {[
                    "To connect international calls, calculate credit usage, and show transparent destination rates.",
                    "To process payments and prevent fraudulent transactions on your account.",
                    "To provide technical support and respond to user inquiries effectively.",
                    "To improve call quality, diagnose failed calls, and optimize international routes.",
                    "To send service updates, security notices, receipts, and optional marketing messages.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[15px] leading-8 text-[#d0d0d0]"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="m6.5 12.3 3.4 3.4 7.6-7.6"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                id="security"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    04.
                  </span>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                    Data Security Measures
                  </h2>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {[
                    "Encrypted app and website traffic using HTTPS/TLS.",
                    "Restricted internal access to user records based on operational need.",
                    "Payment processing through specialized providers so full card details are not stored by Natcall.",
                  ].map((item) => (
                    <p
                      key={item}
                      className="rounded-[10px] bg-[#262626] p-4 text-[13px] leading-7 text-[#c4c4c4]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article
                id="partners"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d]"
              >
                <div className="px-6 py-6 sm:px-8 sm:py-7">
                  <div className="flex items-center gap-4">
                    <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    05.
                    </span>
                    <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                      Third-Party Partners
                    </h2>
                  </div>
                  <p className="mt-3 text-[14px] leading-7 text-[#c4c4c4]">
                    We partner with industry leaders to provide a secure and
                    reliable experience.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#262626]">
                        <th className="px-6 py-4 text-left text-[13px] uppercase tracking-[0.08em] text-white">
                          Partner
                        </th>
                        <th className="px-6 py-4 text-left text-[13px] uppercase tracking-[0.08em] text-white">
                          Purpose
                        </th>
                        <th className="px-6 py-4 text-left text-[13px] uppercase tracking-[0.08em] text-white">
                          Data Shared
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {privacyPartners.map((partner) => (
                        <tr
                          key={partner.type}
                          className="border-t border-white/8"
                        >
                          <td className="px-6 py-4 text-[15px] font-semibold text-white">
                            {partner.type}
                          </td>
                          <td className="px-6 py-4 text-[14px] text-[#c4c4c4]">
                            {partner.purpose}
                          </td>
                          <td className="px-6 py-4 text-[14px] font-medium text-[#f6c617]">
                            {partner.data}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <article
                id="rights"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    06.
                  </span>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                    Your Rights
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {privacyRights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[8px] bg-[#262626] px-4 py-4"
                    >
                      <h3 className="text-[15px] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#c6c6c6]">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article
                id="gdpr"
                className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[2rem] font-semibold tracking-[-0.05em] text-[#f6c617]">
                    07.
                  </span>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.2rem]">
                    GDPR Compliance
                  </h2>
                </div>
                <p className="mt-4 text-[14px] leading-8 text-[#d3d3d3]">
                  Where GDPR applies, Natcall processes personal data on lawful
                  bases such as contract performance, legitimate interests,
                  consent, and legal obligations. Users may request access,
                  correction, deletion, portability, restriction, or objection
                  by contacting our privacy team.
                </p>
              </article>

              <div
                id="contact"
                className="flex flex-col items-start justify-between gap-5 rounded-[14px] bg-[#f6c617] px-6 py-6 text-black sm:px-8 md:flex-row md:items-center"
              >
                <div>
                  <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                    Contact for privacy concerns
                  </h2>
                  <p className="mt-2 text-[15px] text-black/80">
                    Our privacy team is available to assist with privacy
                    inquiries, data requests, and account information concerns.
                  </p>
                </div>
                <a
                  href="mailto:privacy@natcall.io?subject=Natcall%20Privacy%20Request"
                  className="inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#111] px-7 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Email Privacy Team
                </a>
              </div>
            </div>
        </Reveal>
      </section>
    </main>
  );
}
