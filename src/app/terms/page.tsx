import { createMetadata } from "@/lib/site";
import {
  LegalContentBlock,
  formatLegalDate,
  getLegalContentBlocks,
  getLegalDocument,
} from "@/lib/legal-documents";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Review Natcall's service terms, billing rules, usage limits, and contact details.",
  path: "/terms",
});

function isBulletLine(line: string) {
  return /^[-*•]\s+/.test(line.trim());
}

function cleanBulletLine(line: string) {
  return line.trim().replace(/^[-*•]\s+/, "");
}

function SectionBody({ paragraphs }: { paragraphs: string[] }) {
  const normalParagraphs = paragraphs.filter((paragraph) => !isBulletLine(paragraph));
  const bullets = paragraphs.filter(isBulletLine).map(cleanBulletLine);

  return (
    <>
      {normalParagraphs.map((paragraph) => (
        <p key={paragraph} className="whitespace-pre-line text-[#bdbdbd]">
          {paragraph}
        </p>
      ))}
      {bullets.length > 0 ? (
        <ul className="grid gap-2 pl-5 text-[#bdbdbd] marker:text-[#f6c617]">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function getSectionNumber(blocks: LegalContentBlock[], index: number) {
  return blocks.slice(0, index + 1).filter((item) => item.type === "section").length;
}

export default async function TermsPage() {
  const document = await getLegalDocument("terms");
  const contentBlocks = getLegalContentBlocks(document.content);

  return (
    <main className="px-6 pb-20 pt-10 sm:pt-14">
      <div className="mx-auto max-w-[700px]">
        <section className="mb-14 border-b border-[#2a2a2a] pb-8">
          <h1 className="font-display text-[clamp(2.75rem,6vw,4.1rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white">
            {document.title}
          </h1>
          <p className="mt-4 text-[16px] text-[#c8c8c8]">
            Last updated: {formatLegalDate(document.effectiveDate ?? document.updatedAt)}
          </p>
        </section>

        <section className="grid gap-12 pb-8 text-[15px] leading-8">
          {contentBlocks.length > 0 ? (
            contentBlocks.map((block, index) => {
              if (block.type === "section") {
                const sectionNumber = getSectionNumber(contentBlocks, index);

                return (
                  <article key={`${document.slug}-${index}`} className="grid gap-5">
                    <h2 className="text-[20px] font-bold leading-[1.45] text-white">
                      {sectionNumber}. {block.heading}
                    </h2>
                    <SectionBody paragraphs={block.paragraphs} />
                  </article>
                );
              }

              return (
                <p key={`${document.slug}-${index}`} className="whitespace-pre-line text-[#bdbdbd]">
                  {block.text}
                </p>
              );
            })
          ) : (
            <div className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 text-[#aaaaaa]">
              Terms content is being prepared.
            </div>
          )}

          <article className="mt-8 grid gap-5">
            <h2 className="text-[20px] font-semibold leading-[1.5] text-white">
              Contact Information
            </h2>
            <div className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6">
              <div className="grid gap-4 text-[16px] text-[#aaaaaa]">
                <strong className="font-semibold text-white">
                  Natcall Legal Department
                </strong>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@natcall.io"
                    className="transition hover:text-white"
                  >
                    legal@natcall.io
                  </a>
                </p>
              </div>
            </div>
          </article>

          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-[18px] font-semibold leading-[1.5] text-white">
                Need a copy?
              </h2>
              <p className="mt-1 text-[13px] leading-6 text-[#aaaaaa]">
                Download a PDF version of our terms for your records.
              </p>
            </div>
            <a
              href="mailto:legal@natcall.io?subject=Natcall%20Terms%20PDF%20Request"
              className="btn-premium-secondary inline-flex items-center justify-center rounded-full border border-[#383838] bg-[#242424] px-6 py-2 text-[14px] font-bold text-white"
            >
              Download PDF
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
