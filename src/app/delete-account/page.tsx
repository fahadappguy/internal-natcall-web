import {
  getLegalContentBlocks,
  getLegalDocument,
} from "@/lib/legal-documents";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Delete Account",
  description:
    "Learn how to delete your Natcall account, what data is removed, what records may be retained, and how to contact support.",
  path: "/delete-account",
});

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#f6c617] text-[#f6c617]">
      <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 24 24" fill="none">
        <path
          d="m6.5 12.2 3.4 3.4 7.6-7.6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </span>
  );
}

function isBulletLine(line: string) {
  return /^[-*]\s+/.test(line.trim());
}

function cleanBulletLine(line: string) {
  return line.trim().replace(/^[-*]\s+/, "");
}

function renderText(text: string) {
  const emailMatch = text.match(/^(Email:\s*)(\S+@\S+?)(\.?)$/i);

  if (!emailMatch) return text;

  const [, label, email, punctuation] = emailMatch;

  return (
    <>
      {label}
      <a href={`mailto:${email}`} className="text-[#f6c617] transition hover:text-white">
        {email}
      </a>
      {punctuation}
    </>
  );
}

function SectionBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="grid gap-3">
      {paragraphs.map((paragraph) => {
        if (isBulletLine(paragraph)) {
          const bullet = cleanBulletLine(paragraph);

          return (
            <p key={paragraph} className="flex gap-3">
              <CheckIcon />
              <span>{renderText(bullet)}</span>
            </p>
          );
        }

        return (
          <p key={paragraph} className="whitespace-pre-line">
            {renderText(paragraph)}
          </p>
        );
      })}
    </div>
  );
}

function normalizeHeading(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function stripTrailingColon(line: string) {
  return line.trim().replace(/:\s*$/, "");
}

function isWhatHappensHeading(heading: string) {
  return normalizeHeading(heading) === "what happens when you delete";
}

function isRetainedTemporarilyHeading(heading: string) {
  return normalizeHeading(cleanBulletLine(heading)).startsWith("retained temporarily");
}

function isEmailParagraph(text: string) {
  return /(^|\n)[-*]?\s*Email:\s*[\w.+-]+@[\w.-]+\.\w+/i.test(text.trim());
}

type DeleteAccountRenderBlock =
  | { type: "paragraph"; text: string }
  | { type: "section"; heading: string; paragraphs: string[] };

function getDeleteAccountBlocks(
  contentBlocks: ReturnType<typeof getLegalContentBlocks>,
) {
  const renderBlocks: DeleteAccountRenderBlock[] = [];

  contentBlocks.forEach((block) => {
    const previousBlock = renderBlocks[renderBlocks.length - 1];

    if (block.type === "section") {
      if (
        isRetainedTemporarilyHeading(block.heading) &&
        previousBlock?.type === "section"
      ) {
        previousBlock.paragraphs.push(
          `- ${stripTrailingColon(cleanBulletLine(block.heading))}:`,
          ...block.paragraphs,
        );
        return;
      }

      renderBlocks.push({
        type: "section",
        heading: block.heading,
        paragraphs: [...block.paragraphs],
      });
      return;
    }

    if (previousBlock?.type === "section" && isEmailParagraph(block.text)) {
      previousBlock.paragraphs.push(
        ...block.text
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      );
      return;
    }

    renderBlocks.push(block);
  });

  return renderBlocks;
}

function getWhatHappensBlockIndex(blocks: DeleteAccountRenderBlock[]) {
  const matchedIndex = blocks.findIndex(
    (block) => block.type === "section" && isWhatHappensHeading(block.heading),
  );

  if (matchedIndex >= 0) return matchedIndex;

  let sectionCount = 0;

  for (let index = 0; index < blocks.length; index += 1) {
    if (blocks[index].type !== "section") continue;
    if (sectionCount === 2) return index;
    sectionCount += 1;
  }

  return -1;
}

function splitWhatHappens(paragraphs: string[]) {
  const groups = {
    removedTitle: "Removed immediately",
    retainedTitle: "Retained temporarily (legal/compliance)",
    removed: [] as string[],
    retained: [] as string[],
  };
  let activeGroup: keyof typeof groups | null = null;
  let markerCount = 0;

  for (const paragraph of paragraphs) {
    const text = isBulletLine(paragraph)
      ? cleanBulletLine(paragraph)
      : paragraph.trim();
    const normalized = normalizeHeading(text);
    const isMarker = /:\s*$/.test(text);

    if (isMarker && markerCount < 2) {
      const group =
        normalized.startsWith("retained temporarily") || markerCount === 1
          ? "retained"
          : "removed";

      if (group === "removed") {
        groups.removedTitle = stripTrailingColon(text);
      } else {
        groups.retainedTitle = stripTrailingColon(text);
      }

      activeGroup = group;
      markerCount += 1;
      continue;
    }

    if (normalized.startsWith("removed immediately")) {
      activeGroup = "removed";
      groups.removedTitle = stripTrailingColon(text);
      continue;
    }

    if (normalized.startsWith("retained temporarily")) {
      activeGroup = "retained";
      groups.retainedTitle = stripTrailingColon(text);
      continue;
    }

    if (activeGroup === "removed" && text) {
      groups.removed.push(text);
    }

    if (activeGroup === "retained" && text) {
      groups[activeGroup].push(text);
    }
  }

  return groups;
}

function SubsectionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[14px] border border-white/8 bg-[#151515] p-5">
      <h3 className="text-[18px] font-bold leading-7 text-white">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3">
            <CheckIcon />
            <span>{renderText(item)}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function WhatHappensCard({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  const groups = splitWhatHappens(paragraphs);

  return (
    <article className="rounded-[16px] border border-white/8 bg-[#1c1c1c] p-6 text-[15px] leading-8 text-[#d4d4d4] sm:p-8">
      <h2 className="mb-5 text-[22px] font-extrabold leading-tight tracking-normal text-white">
        {heading}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <SubsectionList
          title={groups.removedTitle}
          items={groups.removed}
        />
        <SubsectionList
          title={groups.retainedTitle}
          items={groups.retained}
        />
      </div>
    </article>
  );
}

export default async function DeleteAccountPage() {
  const document = await getLegalDocument("delete-account");
  const contentBlocks = getLegalContentBlocks(document.content);
  const deleteAccountBlocks = getDeleteAccountBlocks(contentBlocks);
  const whatHappensBlockIndex = getWhatHappensBlockIndex(deleteAccountBlocks);

  return (
    <main className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-[900px]">
        <header className="border-b border-[#2a2a2a] pb-8">
          <h1 className="text-[clamp(2.6rem,6vw,64px)] font-extrabold leading-[1.02] tracking-normal text-white">
            {document.title}
          </h1>
        </header>

        <div className="mt-8 grid gap-6">
          {deleteAccountBlocks.map((block, index) => {
            if (block.type === "section") {
              if (index === whatHappensBlockIndex) {
                return (
                  <WhatHappensCard
                    key={`delete-account-${index}`}
                    heading={block.heading}
                    paragraphs={block.paragraphs}
                  />
                );
              }

              return (
                <article
                  key={`delete-account-${index}`}
                  className="rounded-[16px] border border-white/8 bg-[#1c1c1c] p-6 text-[15px] leading-8 text-[#d4d4d4] sm:p-8"
                >
                  <h2 className="mb-4 text-[22px] font-extrabold leading-tight tracking-normal text-white">
                    {block.heading}
                  </h2>
                  <SectionBody paragraphs={block.paragraphs} />
                </article>
              );
            }

            return (
              <p
                key={`delete-account-${index}`}
                className="rounded-[16px] border border-white/8 bg-[#1c1c1c] p-6 text-[15px] leading-8 text-[#d4d4d4] sm:p-8"
              >
                {renderText(block.text)}
              </p>
            );
          })}
        </div>
      </section>
    </main>
  );
}
