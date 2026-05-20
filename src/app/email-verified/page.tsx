import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Email Verified",
  description:
    "Your Natcall email address has been verified successfully.",
  path: "/email-verified",
});

export default function EmailVerifiedPage() {
  return (
    <main className="relative isolate min-h-[calc(100vh-73px)] overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#111111]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[58%] bg-[linear-gradient(180deg,rgba(246,198,23,0.12)_0%,rgba(17,17,17,0)_100%)]" />
      <div className="absolute left-1/2 top-12 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#f6c617]/8 blur-3xl sm:h-[520px] sm:w-[520px]" />

      <section className="mx-auto flex min-h-[calc(100vh-153px)] w-full max-w-[920px] items-center justify-center">
        <Reveal>
          <div className="shimmer-border w-full overflow-hidden rounded-[24px] border border-[#2a2a2a] bg-[#151515]/92 p-6 text-center shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur sm:p-8 md:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f6c617]/35 bg-[#f6c617] text-black shadow-[0_20px_60px_rgba(246,198,23,0.2)] sm:h-24 sm:w-24">
              <svg
                aria-hidden="true"
                className="h-10 w-10 sm:h-12 sm:w-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m6.8 12.2 3.2 3.2 7.2-7.2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                />
              </svg>
            </div>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#5b4a08] bg-[#1b1708] px-4 py-1.5 text-[13px] font-semibold text-[#f6c617]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f6c617]" />
              Natcall account verified
            </span>

            <h1 className="mx-auto mt-6 max-w-[680px] text-[clamp(2.35rem,7vw,64px)] font-extrabold leading-[1.05] tracking-normal text-white">
              Congratulations!
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] text-[20px] font-semibold leading-[1.45] text-[#f6c617] sm:text-[24px]">
              Your email has been verified.
            </p>

            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-7 text-[#bdbdbd] sm:text-[16px]">
              You can safely return to the Natcall app and continue with your
              account.
            </p>

            <div className="mx-auto mt-8 grid max-w-[420px] gap-3 sm:flex sm:max-w-none sm:justify-center">
              <Link
                href="/#download"
                className="btn-premium-primary inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] px-8 py-3 text-sm font-bold text-black sm:w-auto"
              >
                Open Natcall
              </Link>
              <Link
                href="/"
                className="btn-premium-secondary inline-flex w-full items-center justify-center rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Back to website
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
