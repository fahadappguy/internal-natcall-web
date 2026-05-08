import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-28">
      <section className="mx-auto max-w-[760px] text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f6c617]">
          404
        </p>
        <h1 className="mt-4 text-[clamp(3rem,7vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
          This page could not be found.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-8 text-[#aaaaaa]">
          The link may have moved, but Natcall is still ready to help you call
          home for less.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex rounded-full bg-[#f6c617] px-8 py-3 font-bold text-black">
            Back Home
          </Link>
          <Link href="/contact" className="inline-flex rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 font-bold text-white">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
