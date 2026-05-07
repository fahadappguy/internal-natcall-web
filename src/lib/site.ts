import type { Metadata } from "next";

type TrustIcon = "globe" | "signal" | "ban" | "bolt";
type HowItWorksIcon = "download" | "credits" | "phone";
type FeatureIcon = "rates" | "quality" | "topup" | "world" | "nosub" | "contacts";

export const siteConfig = {
  name: "Natcall",
  url: "https://natcall.com",
  description:
    "Crystal clear international calling with transparent pricing, premium voice quality, and instant top-up.",
};

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

export const testimonials = [
  {
    quote: '"Finally an app that actually has clear lines to Lagos. Been using it for 6 months now!"',
    initials: "AO",
    name: "Amara O.",
    meta: "Verified User",
  },
  {
    quote: '"The top-up is instant. I never have to worry about my credits running out mid-call."',
    initials: "MR",
    name: "Maria R.",
    meta: "Verified User",
  },
  {
    quote: '"Best rates for calling Accra. Crystal clear quality every single time, 10/10."',
    initials: "KS",
    name: "Kwame S.",
    meta: "Verified User",
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
];

export const privacySections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "collection", label: "2. Data Collection" },
  { id: "usage", label: "3. How We Use Data" },
  { id: "partners", label: "4. Third-Party Partners" },
  { id: "rights", label: "5. Your Rights" },
  { id: "contact", label: "6. Contact Us" },
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
    title: "2. Use of Service",
    paragraphs: [
      "Natcall grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal or internal business use. You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "The Service requires a stable internet connection for optimal performance. Natcall is not responsible for any data charges incurred from your mobile provider while using our applications.",
    ],
  },
  {
    title: "3. Payments & Refunds",
    paragraphs: [
      "Natcall operates on a pre-paid credit system or subscription basis. All fees are quoted in USD unless otherwise stated. Credits purchased for international calling are valid for the duration specified at the time of purchase.",
    ],
    bullets: [
      "Subscription fees are billed at the beginning of the billing cycle.",
      "Refunds are handled on a case-by-case basis and are generally only issued for technical failures of the Service.",
      "Automated top-ups can be disabled at any time through your account settings.",
    ],
  },
  {
    title: "4. Prohibited Use",
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
    title: "5. Termination",
    paragraphs: [
      "Natcall reserves the right to terminate or suspend your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of the Service, us, or third parties, or for any other reason.",
      "Upon termination, your right to use the Service will immediately cease. Any remaining credits may be forfeited unless required otherwise by applicable law.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NATCALL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.",
      "Our total liability for any claim arising out of or relating to these terms or the Service shall not exceed the amount paid by you to Natcall in the past six months.",
    ],
  },
];
