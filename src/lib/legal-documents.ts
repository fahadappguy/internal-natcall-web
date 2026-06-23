export type LegalDocumentSlug = "terms" | "privacy" | "delete-account";

export type LegalDocument = {
  id: string;
  slug: LegalDocumentSlug;
  title: string;
  content: string;
  effectiveDate?: string;
  isPublished: boolean;
  updatedAt?: string;
};

export type LegalContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "section"; heading: string; paragraphs: string[] };

type SupabaseLegalDocumentRow = {
  id: string;
  slug: LegalDocumentSlug;
  title: string;
  content: string;
  effective_date?: string | null;
  is_published: boolean;
  updated_at?: string | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const legalDocumentsTable =
  process.env.NEXT_PUBLIC_SUPABASE_LEGAL_DOCUMENTS_TABLE ?? "legal_documents";

const fallbackLegalContent: Record<LegalDocumentSlug, string> = {
  terms: "",
  privacy: "",
  "delete-account": `Overview
NatCall allows you to create an account to manage your credits, call history, and payment methods. If you no longer wish to use NatCall, you can request to delete your account and associated data at any time.

How to Delete Your Account
- Open the NatCall app.
- Go to Account > Settings > Delete Account.
- Confirm your choice.
- Once confirmed, your account and personal data will be permanently deleted.

What Happens When You Delete
- Removed immediately:
Your profile (name, email, phone number).
Saved contacts inside the app.
Call history records.
Stored payment methods.
- Retained temporarily (legal/compliance):
Transaction records (e.g., top-ups, invoices) may be kept for up to 7 years as required by financial regulations.
These records are stored securely and are not used for any other purpose.

Impact on Credits & Subscriptions
- Any remaining credits in your wallet will be forfeited once the account is deleted.
- Active subscriptions or payments will be canceled.
- You will not be charged after deletion.

Additional Notes
- If you signed up using Apple Pay, Google Pay, or Klarna, those payment tokens will be revoked.
- If you used Sign in with Apple, your authorization token will also be revoked.
- Deletion is permanent - once completed, your account cannot be restored.

Support
If you face any issues deleting your account in-app, you can contact us:
- Email: support@natcall.com.`,
};

const fallbackLegalTitle: Record<LegalDocumentSlug, string> = {
  terms: "Terms of Service",
  privacy: "Privacy Policy",
  "delete-account": "Delete Account",
};

export function getFallbackLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  return {
    id: slug,
    slug,
    title: fallbackLegalTitle[slug],
    content: fallbackLegalContent[slug],
    isPublished: true,
  };
}

export function formatLegalDate(date?: string) {
  if (!date) return "May 2026";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function stripMarkdownHeading(line: string) {
  return line.replace(/^#{1,3}\s+/, "").trim();
}

function isSectionHeading(line: string, hasBody: boolean) {
  const trimmedLine = stripMarkdownHeading(line);

  if (!trimmedLine || trimmedLine.length > 90) return false;
  if (/^#{1,3}\s+/.test(line)) return true;
  if (!hasBody) return false;

  return !/[.!?]$/.test(trimmedLine);
}

export function getLegalContentBlocks(content: string): LegalContentBlock[] {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    )
    .filter((lines) => lines.length > 0);

  const contentBlocks: LegalContentBlock[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const lines = blocks[index];
    const [firstLine, ...bodyLines] = lines;
    const hasBody = bodyLines.length > 0;

    if (isSectionHeading(firstLine, hasBody)) {
      contentBlocks.push({
        type: "section",
        heading: stripMarkdownHeading(firstLine),
        paragraphs: bodyLines,
      });
      continue;
    }

    const nextLines = blocks[index + 1];
    const isStandaloneHeading =
      lines.length === 1 &&
      nextLines?.length > 0 &&
      isSectionHeading(firstLine, true);

    if (isStandaloneHeading) {
      contentBlocks.push({
        type: "section",
        heading: stripMarkdownHeading(firstLine),
        paragraphs: nextLines,
      });
      index += 1;
      continue;
    }

    contentBlocks.push({
      type: "paragraph",
      text: lines.join("\n"),
    });
  }

  return contentBlocks;
}

export async function getLegalDocument(
  slug: LegalDocumentSlug,
): Promise<LegalDocument> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return getFallbackLegalDocument(slug);
  }

  const params = new URLSearchParams({
    select: "id,slug,title,content,effective_date,is_published,updated_at",
    slug: `eq.${slug}`,
    is_published: "eq.true",
    limit: "1",
  });

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/${legalDocumentsTable}?${params.toString()}`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      return getFallbackLegalDocument(slug);
    }

    const rows = (await response.json()) as SupabaseLegalDocumentRow[];
    const row = rows[0];

    if (!row) {
      return getFallbackLegalDocument(slug);
    }

    return {
      id: row.id,
      slug: row.slug,
      title: row.title,
      content: row.content,
      effectiveDate: row.effective_date ?? undefined,
      isPublished: row.is_published,
      updatedAt: row.updated_at ?? undefined,
    };
  } catch {
    return getFallbackLegalDocument(slug);
  }
}
