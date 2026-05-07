"use client";

import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <LazyMotion features={domAnimation}>
      <div className="grid gap-2">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <m.div
              key={item.question}
              layout
              className={`overflow-hidden rounded-xl border bg-[#1c1c1c] transition-all duration-300 ${
                isOpen ? "border-[#f5c518]/30" : "border-[#2a2a2a]"
              }`}
            >
              <m.button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 28 }
                }
                className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left text-[20px] font-medium leading-[1.5] text-white"
              >
                <span className="transition-colors hover:text-[#f5c518]">
                  {item.question}
                </span>
                <m.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={
                    reducedMotion ? { duration: 0 } : { duration: 0.22 }
                  }
                  className="shrink-0 text-[#f6c617]"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m7 10 5 5 5-5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                  </svg>
                </m.span>
              </m.button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <m.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 240, damping: 28 }
                    }
                  >
                    <div className="px-6 pb-6 text-[16px] leading-relaxed text-[#aaaaaa]">
                      {item.answer}
                    </div>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
}
