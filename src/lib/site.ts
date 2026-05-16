import type { Metadata } from "next";

type TrustIcon = "globe" | "signal" | "ban" | "bolt";
type HowItWorksIcon = "download" | "credits" | "phone";
type FeatureIcon =
  | "rates"
  | "quality"
  | "topup"
  | "world"
  | "nosub"
  | "contacts";

type AppStoreLookupResponse = {
  resultCount: number;
  results: Array<{
    averageUserRating?: number;
    userRatingCount?: number;
  }>;
};

export const siteConfig = {
  name: "Natcall",
  url: "https://natcall.com",
  description:
    "Crystal clear international calling with transparent pricing, premium voice quality, and instant top-up.",
  social: {
    instagram: "https://www.instagram.com/natcallapp",
    twitter: "https://twitter.com/natcallapp",
    linkedin: "https://www.linkedin.com/company/natcall",
  },
};

export const fallbackAppStoreRating = {
  value: "4.8/5",
  count: null as number | null,
};

export async function getAppStoreRating() {
  const appId = process.env.APPLE_APP_ID;
  const country = process.env.APPLE_APP_COUNTRY ?? "us";

  if (!appId) {
    return fallbackAppStoreRating;
  }

  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${appId}&country=${country}`,
      {
        next: { revalidate: 60 * 60 * 12 },
      },
    );

    if (!response.ok) {
      return fallbackAppStoreRating;
    }

    const data = (await response.json()) as AppStoreLookupResponse;
    const app = data.results[0];

    if (!app?.averageUserRating) {
      return fallbackAppStoreRating;
    }

    return {
      value: `${app.averageUserRating.toFixed(1)}/5`,
      count: app.userRatingCount ?? null,
    };
  } catch {
    return fallbackAppStoreRating;
  }
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Natcall`,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Natcall`,
      description,
    },
  };
}

export const trustMarks: Array<{ title: string; icon: TrustIcon }> = [
  { title: "200+ Countries", icon: "globe" },
  { title: "HD Quality", icon: "signal" },
  { title: "No Subscription", icon: "ban" },
  { title: "Instant Top-Up", icon: "bolt" },
];

export const howItWorks: Array<{ title: string; copy: string; icon: HowItWorksIcon }> = [
  {
    title: "Download",
    copy: "Install Natcall from the App Store or Google Play for free.",
    icon: "download",
  },
  {
    title: "Add Credits",
    copy: "Top up your account starting from as low as $1.",
    icon: "credits",
  },
  {
    title: "Call Home",
    copy: "Dial any international number and talk for hours.",
    icon: "phone",
  },
];

export const features: Array<{ icon: FeatureIcon; title: string; copy: string }> = [
  {
    icon: "rates",
    title: "Affordable Rates",
    copy: "Saving you up to 90% on international calls compared to your local carrier.",
  },
  {
    icon: "quality",
    title: "HD Quality",
    copy: "Advanced codecs ensure your calls sound like the person is standing next to you.",
  },
  {
    icon: "topup",
    title: "Instant Top-up",
    copy: "Credits are added to your account immediately after payment is confirmed.",
  },
  {
    icon: "world",
    title: "Works Worldwide",
    copy: "Make calls from any country with a stable internet connection.",
  },
  {
    icon: "nosub",
    title: "No Subscription",
    copy: "No monthly fees. No contracts. Pay for what you use, when you need it.",
  },
  {
    icon: "contacts",
    title: "Easy Contacts",
    copy: "Automatically syncs with your phone book for seamless dialing.",
  },
];

export const pricingRates = [
  {
    country: "Nigeria",
    natcall: "$0.07/min",
    carrier: "$0.89/min",
    savings: "92%",
  },
  {
    country: "Ghana",
    natcall: "$0.08/min",
    carrier: "$0.75/min",
    savings: "89%",
  },
  {
    country: "India",
    natcall: "$0.03/min",
    carrier: "$0.35/min",
    savings: "91%",
  },
  {
    country: "Ethiopia",
    natcall: "$0.12/min",
    carrier: "$1.05/min",
    savings: "89%",
  },
  {
    country: "Philippines",
    natcall: "$0.05/min",
    carrier: "$0.49/min",
    savings: "90%",
  },
];

export const testimonials = [
  {
    quote: '"Finally an app that actually has clear lines to Lagos. Been using it for 6 months now!"',
    name: "Amara O.",
    meta: "Calls Nigeria weekly",
    photo: "/images/testimonials/amara-o.png",
  },
  {
    quote: '"The top-up is instant. I never have to worry about my credits running out mid-call."',
    name: "Maria R.",
    meta: "Calls Colombia daily",
    photo: "/images/testimonials/maria-r.png",
  },
  {
    quote: '"Best rates for calling Accra. Crystal clear quality every single time, 10/10."',
    name: "Kwame S.",
    meta: "Calls Ghana weekly",
    photo: "/images/testimonials/kwame-s.png",
  },
  {
    quote: '"My parents can hear me clearly now, and I spend a fraction of what my carrier used to charge."',
    name: "Priya M.",
    meta: "Calls India every weekend",
    photo: "/images/testimonials/priya-m.png",
  },
  {
    quote: '"The app makes long family calls feel simple again. Transparent rates, no surprise deductions."',
    name: "Lina C.",
    meta: "Calls the Philippines",
    photo: "/images/testimonials/lina-c.png",
  },
  {
    quote: '"I use Natcall for business and family calls. The quality has been reliable across countries."',
    name: "Samir A.",
    meta: "Calls Morocco and France",
    photo: "/images/testimonials/samir-a.png",
  },
];

export const faqItems = [
  {
    question: "How does Natcall work?",
    answer:
      "Natcall uses prepaid credits to place international calls through the app. Download Natcall, add credits, choose the number you want to call, and enjoy clear voice quality with transparent per-minute pricing.",
  },
  {
    question: "What countries can I call?",
    answer:
      "Natcall supports calling across 200+ countries and regions worldwide. Coverage can vary by destination, but our core routes are designed for reliable global access.",
  },
  {
    question: "How do I add credits?",
    answer:
      "Open the app, choose a top-up amount, and complete payment through the available checkout method. Credits are added to your account as soon as the payment is confirmed.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Accepted payment methods depend on the platform and region, but typically include major cards and supported app store payment options.",
  },
  {
    question: "Is there a monthly fee?",
    answer:
      "No. Natcall is a pay-as-you-go service. There are no subscriptions or contracts, and your credits do not expire.",
  },
  {
    question: "What is the call quality like?",
    answer:
      "Natcall is optimized for HD international calling with low-latency routes and modern audio codecs, helping conversations stay crisp and stable.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team by email and we will help with account issues, call quality concerns, top-up questions, or anything else you need.",
  },
  {
    question: "Are my calls encrypted?",
    answer:
      "Natcall protects account access, payments, and app traffic with modern encryption. We also monitor calling routes for reliability and suspicious activity.",
  },
  {
    question: "Can I cancel or request a refund?",
    answer:
      "You can stop using Natcall at any time. Refund requests are reviewed case by case, especially when a verified technical issue prevented successful calling.",
  },
];

export const privacySections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "collection", label: "2. Data Collection" },
  { id: "usage", label: "3. How We Use Data" },
  { id: "security", label: "4. Data Security" },
  { id: "partners", label: "5. Third-Party Partners" },
  { id: "rights", label: "6. Your Rights" },
  { id: "gdpr", label: "7. GDPR Compliance" },
  { id: "contact", label: "8. Contact Us" },
];

export const privacyHighlights = [
  {
    title: "Personal Information",
    copy: "We collect account details such as your name, email address, and phone number to verify your identity and maintain account security.",
  },
  {
    title: "Technical Data",
    copy: "This includes your IP address, device type, operating system, and app usage logs to optimize our network routing.",
  },
  {
    title: "Calling Data",
    copy: "We process phone numbers dialed, call duration, destination country, route quality, and credit usage to connect calls and calculate transparent charges.",
  },
  {
    title: "Billing Data",
    copy: "Payment providers process transaction details. Natcall stores payment status, receipt metadata, and credit balance history, not full card numbers.",
  },
];

export const privacyPartners = [
  {
    type: "Supabase",
    purpose: "Database & Auth",
    data: "User Profile",
  },
  {
    type: "Stripe",
    purpose: "Billing & Payments",
    data: "Payment Metadata",
  },
  {
    type: "Twilio",
    purpose: "Telecommunications",
    data: "Phone Numbers",
  },
];

export const privacyRights = [
  {
    title: "Access",
    copy: "Request a copy of your personal data at any time.",
  },
  {
    title: "Erasure",
    copy: "Request the permanent deletion of your account and data.",
  },
  {
    title: "Portability",
    copy: "Transfer your data to another service provider easily.",
  },
  {
    title: "Correction",
    copy: "Ask us to correct inaccurate account information.",
  },
  {
    title: "Restriction",
    copy: "Request limits on certain processing where applicable by law.",
  },
  {
    title: "Objection",
    copy: "Object to processing based on legitimate interests or marketing.",
  },
];

export const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      'By accessing or using the Natcall platform, website, or mobile applications (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our Service. We provide a premium international calling and messaging utility designed for professional and personal reliability.',
      "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service following the posting of revised Terms of Service means that you accept and agree to the changes.",
    ],
  },
  {
    title: "2. User Responsibilities",
    paragraphs: [
      "Natcall grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal or internal business use. You must be at least 18 years old to create an account. You are responsible for maintaining accurate account information, protecting your credentials, and for all activity that occurs under your account.",
      "The Service requires a stable internet connection for optimal performance. Natcall is not responsible for any data charges incurred from your mobile provider while using our applications.",
    ],
  },
  {
    title: "3. Payments, Refunds & Cancellations",
    paragraphs: [
      "Natcall operates on a prepaid credit system or subscription basis. All fees are quoted in USD unless otherwise stated. Credits purchased for international calling are available in your account after payment confirmation.",
    ],
    bullets: [
      "Subscription fees are billed at the beginning of the billing cycle.",
      "Refunds are handled case by case and are generally issued when a verified technical failure prevented successful use of paid credits.",
      "You may cancel subscriptions or automated top-ups through your account settings or the relevant app store billing controls.",
      "Automated top-ups can be disabled at any time through your account settings.",
    ],
  },
  {
    title: "4. Acceptable Use Policy",
    paragraphs: [
      "You agree not to use the Service for any unlawful purpose. Prohibited activities include, but are not limited to:",
    ],
    bullets: [
      "Transmitting unsolicited communications (spam).",
      "Impersonating another person or entity.",
      "Attempting to gain unauthorized access to our systems or user accounts.",
      "Using the service for automated telemarketing or robocalling.",
    ],
  },
  {
    title: "5. Service Modifications & Termination",
    paragraphs: [
      "Natcall may modify calling rates, routes, app features, supported countries, or service availability as network, legal, and carrier conditions change. We aim to provide notice for material changes when practical.",
      "Natcall reserves the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of the Service, us, or third parties, or for any other reason.",
      "Upon termination, your right to use the Service will immediately cease. Any remaining credits may be forfeited unless required otherwise by applicable law.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Natcall shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
      "Our total liability for any claim arising out of or relating to these terms or the Service shall not exceed the amount paid by you to Natcall in the past six months.",
    ],
  },
  {
    title: "7. Dispute Resolution",
    paragraphs: [
      "If a dispute arises, please contact us first so we can try to resolve the issue informally. If we cannot resolve it, disputes will be handled through binding arbitration or small claims court where permitted by applicable law.",
      "You agree to bring claims only on your own behalf and not as part of a class or representative action, unless applicable law gives you rights that cannot be waived.",
    ],
  },
];

export const aboutStats = [
  { value: "500,000+", label: "users worldwide" },
  { value: "200+", label: "countries supported" },
  { value: "10M+", label: "minutes called" },
  { value: "99.9%", label: "call success rate" },
];

export const values = [
  {
    title: "Transparency",
    copy: "No hidden fees, no surprises",
  },
  {
    title: "Quality",
    copy: "HD voice quality on every call",
  },
  {
    title: "Affordability",
    copy: "Up to 90% cheaper than local carriers",
  },
  {
    title: "Trust",
    copy: "Your data is secure and private",
  },
];

export const team = [
  {
    name: "Yonatan Rezene",
    role: "Founder & CEO",
    bio: "Leads Natcall's mission, customer promise, and diaspora-first product vision.",
  },
  {
    name: "Hafiz Fahad",
    role: "Lead Developer",
    bio: "Builds the Natcall platform, app experience, and reliable calling workflows.",
  },
];

export const blogPosts = [
  {
    title: "Why Natcall Was Built for Diaspora Families",
    date: "May 7, 2026",
    excerpt:
      "A note from the team on affordability, clear calling, and why staying connected home should be simple.",
    image: "/images/generated/natcall-hero-calling.png",
  },
  {
    title: "How We Keep International Calling Rates Transparent",
    date: "April 28, 2026",
    excerpt:
      "A practical look at destination pricing, prepaid credits, and how Natcall avoids hidden fees.",
    image: "/images/mockups/billing-desktop.png",
  },
  {
    title: "Improving HD Voice Routes Across 200+ Countries",
    date: "April 12, 2026",
    excerpt:
      "Product updates focused on lower latency, better route monitoring, and clearer conversations.",
    image: "/images/mockups/audio-mobile.png",
  },
  {
    title: "What to Check Before Calling Family Abroad",
    date: "March 26, 2026",
    excerpt:
      "Quick tips for better call quality, stronger connections, and fewer interruptions during long conversations.",
    image: "/images/mockups/contacts-mobile.png",
  },
  {
    title: "How Natcall Protects Customer Data",
    date: "February 18, 2026",
    excerpt:
      "A closer look at encrypted traffic, restricted access, and the security practices behind Natcall.",
    image: "/images/privacy.png",
  },
];
