import { PrivacyNav } from "@/components/privacy-nav";
import { Reveal } from "@/components/reveal";
import {
  LegalContentBlock,
  formatLegalDate,
  getLegalContentBlocks,
  getLegalDocument,
} from "@/lib/legal-documents";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read how Natcall collects, uses, and protects personal information.",
  path: "/privacy-policy",
});

function isBulletLine(line: string) {
  return /^[-*•]\s+/.test(line.trim());
}

function cleanBulletLine(line: string) {
  return line.trim().replace(/^[-*•]\s+/, "");
}

function getSectionNumber(blocks: LegalContentBlock[], index: number) {
  return blocks.slice(0, index + 1).filter((item) => item.type === "section").length;
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function SectionBody({ paragraphs }: { paragraphs: string[] }) {
  const normalParagraphs = paragraphs.filter((paragraph) => !isBulletLine(paragraph));
  const bullets = paragraphs.filter(isBulletLine).map(cleanBulletLine);

  return (
    <>
      {normalParagraphs.map((paragraph) => (
        <p key={paragraph} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
      {bullets.length > 0 ? (
        <ul className="mt-2 grid gap-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
                <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6.5 12.3 3.4 3.4 7.6-7.6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default async function PrivacyPolicyPage() {
  const document = await getLegalDocument("privacy");
  const contentBlocks = getLegalContentBlocks(document.content);
  const sections = contentBlocks.filter((block) => block.type === "section");
  const navSections = sections.map((block, index) => ({
    id: sectionId(block.heading),
    label: `${index + 1}. ${block.heading}`,
  }));

  return (
    <main className="mx-auto w-full max-w-[1180px] px-4 pb-20 pt-10 sm:px-6 lg:px-12">
      <section className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-[8px] border border-[#3d3418] bg-[#19150b] px-4 py-2 text-sm text-[#e4dccd]">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
            <span className="block h-1.5 w-1.5 rounded-full bg-[#f6c617]" />
          </span>
          Legal Documentation
        </span>
        <Reveal>
          <h1 className="mt-4 font-display text-[clamp(3rem,7vw,4.9rem)] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#efe6d7]">
            {document.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-[1rem] text-[#c2b8aa]">
            Last updated: {formatLegalDate(document.effectiveDate ?? document.updatedAt)}
          </p>
        </Reveal>
      </section>

      <section className="grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <PrivacyNav sections={navSections} />
        </aside>

        <Reveal delay={0.2}>
          <div className="grid gap-9">
            {contentBlocks.length > 0 ? (
              contentBlocks.map((block, index) => {
                if (block.type === "section") {
                  const sectionNumber = getSectionNumber(contentBlocks, index);

                  return (
                    <article
                      key={`${document.slug}-${index}`}
                      id={sectionId(block.heading)}
                      className="scroll-mt-28 rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 text-[15px] leading-8 text-[#d3d3d3] sm:px-8 sm:py-7"
                    >
                      <h2 className="mb-4 text-[1.25rem] font-semibold tracking-[-0.03em] text-white">
                        <span className="mr-3 text-[#f6c617]">
                          {String(sectionNumber).padStart(2, "0")}.
                        </span>
                        {block.heading}
                      </h2>
                      <div className="grid gap-4">
                        <SectionBody paragraphs={block.paragraphs} />
                      </div>
                    </article>
                  );
                }

                return (
                  <p
                    key={`${document.slug}-${index}`}
                    className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 text-[15px] leading-8 text-[#d3d3d3] sm:px-8"
                  >
                    {block.text}
                  </p>
                );
              })
            ) : (
              <p className="rounded-[14px] border border-white/8 bg-[#1d1d1d] px-6 py-6 text-[#d3d3d3]">
                Privacy content is being prepared.
              </p>
            )}

            <div className="flex flex-col items-start justify-between gap-5 rounded-[14px] bg-[#f6c617] px-6 py-6 text-black sm:px-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                  Questions or Concerns?
                </h2>
                <p className="mt-2 text-[15px] text-black/80">
                  Our privacy team is available to assist you with any inquiries.
                </p>
              </div>
              <a
                href="mailto:privacy@natcall.io?subject=Natcall%20Privacy%20Request"
                className="btn-premium-secondary inline-flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-black/20 bg-[#111] px-7 text-sm font-semibold text-white"
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
