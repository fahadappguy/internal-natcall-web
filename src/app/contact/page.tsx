import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Natcall support for help with international calling, top-ups, account questions, and general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="px-4 pb-8 pt-0 sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-[1320px] overflow-hidden rounded-b-[24px] bg-[#101010] shadow-[0_28px_90px_rgba(0,0,0,0.18)] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.98fr_1.02fr]">
        <div className="flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10 lg:py-8 xl:px-12">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#5b4a08] bg-[#1b1708] px-4 py-1.5 text-[13px] font-semibold text-[#f6c617]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f6c617]" />
              Contact Natcall
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-[520px] text-[clamp(2rem,4vw,48px)] font-extrabold leading-[1.08] tracking-normal text-white">
              Need help with your{" "}
              <span className="text-[#f6c617]">calls?</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[500px] text-[15px] font-medium leading-[1.7] text-[#9d9d9d] sm:text-[16px]">
              Send us a message and we&apos;ll get back to you about your
              Natcall account, calling experience, or general questions.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 max-w-[520px] rounded-[18px] border border-white/8 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#f6c617] text-black shadow-[0_18px_36px_rgba(246,198,23,0.18)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 6.8h15v10.4h-15V6.8Zm.8.7 6.7 5.2 6.7-5.2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8f8f8f]">
                    Direct support
                  </p>
                  <p className="mt-1 break-all text-[15px] font-bold text-white sm:text-[17px]">
                    support@natcall.app
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#777777]">
                    Response
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#d8d8d8]">
                    Usually within 2 hours
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#777777]">
                    Availability
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#d8d8d8]">
                    Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.15}>
          <div className="flex h-full flex-col justify-center px-5 py-8 sm:px-8 lg:px-10 lg:py-8 xl:px-12">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.025] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] sm:p-6 lg:p-7">
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <h2 className="text-[clamp(1.8rem,2.5vw,32px)] font-extrabold leading-[1.1] tracking-normal text-white">
                  Send a message
                </h2>
                <p className="mt-1.5 text-[15px] font-semibold leading-6 text-[#777777]">
                  We usually respond as soon as possible.
                </p>
              </div>
              <span
                className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6c617] text-black sm:inline-flex lg:h-10 lg:w-10"
                aria-hidden="true"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 6.8h15v10.4h-15V6.8Zm.8.7 6.7 5.2 6.7-5.2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>
            </div>

            <form
              action="mailto:natcallapp@gmail.com"
              method="post"
              encType="text/plain"
              className="grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="min-h-[52px] rounded-xl border border-white/10 bg-[#171717] px-4 text-[16px] font-semibold text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="min-h-[52px] rounded-xl border border-white/10 bg-[#171717] px-4 text-[16px] font-semibold text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#9b9b9b]">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="min-h-[132px] resize-y rounded-xl border border-white/10 bg-[#171717] px-4 py-3 text-[16px] font-semibold leading-7 text-white outline-none transition placeholder:text-[#696969] hover:border-white/20 focus:border-[#f6c617] focus:bg-[#1d1d1d] focus:ring-2 focus:ring-[#f6c617]/15"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-4 rounded-xl bg-[#f6c617] px-6 text-[17px] font-extrabold text-black transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#f6c617]/40 focus:ring-offset-2 focus:ring-offset-[#101010]"
              >
                Send Message
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>

              <p className="flex items-center justify-center gap-3 text-center text-[13px] font-semibold leading-5 text-[#777777] sm:text-[14px]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#47e384]" />
                Team is online - typically replies within 2 hours
              </p>
            </form>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
