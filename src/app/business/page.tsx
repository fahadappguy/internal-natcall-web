import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Business Calling Plans",
  description:
    "Natcall business calling plans for teams with global customers and families.",
  path: "/business",
});

const plans = [
  {
    name: "Basic",
    eyebrow: "Small teams",
    description:
      "For lean teams that need shared international calling without extra administration.",
    features: [
      "Shared business calling balance",
      "2 to 5 team members",
      "Standard destination rates",
      "Monthly usage summary",
      "Email support",
    ],
    cta: "Start Basic",
  },
  {
    name: "Professional",
    eyebrow: "Growing operations",
    description:
      "For support, sales, and operations teams managing regular international conversations.",
    features: [
      "Everything in Basic",
      "Up to 25 team members",
      "Admin controls and user roles",
      "Department-level usage tracking",
      "Priority support response",
    ],
    cta: "Talk to Sales",
  },
  {
    name: "Premium",
    eyebrow: "High-volume teams",
    description:
      "For businesses that need stronger reporting, better controls, and higher call volume support.",
    features: [
      "Everything in Professional",
      "Volume-based rate review",
      "Advanced usage reports",
      "Dedicated success check-ins",
      "Invoice-ready billing exports",
    ],
    cta: "Choose Premium",
  },
  {
    name: "Enterprise",
    eyebrow: "Custom programs",
    description:
      "For larger organizations with custom routing, procurement, compliance, or account needs.",
    features: [
      "Custom call volume agreements",
      "Dedicated account manager",
      "Security and compliance review",
      "Custom onboarding workflow",
      "Tailored reporting requirements",
    ],
    cta: "Contact Enterprise",
  },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="m6 12.4 3.7 3.7L18.5 7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function BusinessPage() {
  return (
    <main className="pb-12 pt-4">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-[1200px] flex-col justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f6c617]">
            Business plans
          </span>
          <h2 className="mt-2 text-[clamp(2rem,4vw,36px)] font-extrabold leading-[1.12] text-white">
            Simple calling plans for every team.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-6 text-[#aaaaaa]">
            Choose a plan based on team size, call volume, and the level of
            billing and support your business needs.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative flex min-h-[390px] flex-col rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] p-4 transition duration-300 hover:border-[#f6c617]/45"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f6c617]">
                {plan.eyebrow}
              </p>
              <h3 className="mt-3 text-[22px] font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-[#bdbdbd]">
                {plan.description}
              </p>

              <ul className="mt-4 grid gap-2.5 text-[12px] leading-5 text-[#e5e5e5]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f6c617]/12 text-[#f6c617]">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-[#383838] px-5 text-[13px] font-bold text-white transition hover:border-[#f6c617]/70 hover:text-[#f6c617]"
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
