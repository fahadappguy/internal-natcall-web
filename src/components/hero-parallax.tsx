"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const floatY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const floatScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex w-full max-w-[520px] justify-center lg:justify-end"
    >
      <motion.div
        style={{ y: floatY2 }}
        className="absolute left-[115px] top-[300px] z-10 hidden w-[158px] rounded-xl border border-[#2a2a2a] bg-[#1c1c1c]/90 px-3 py-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f6c617]/10 text-[#f6c617]">
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4.8c2.24 0 4.4.9 5.98 2.5v4.22c0 4.1-2.47 7.84-5.98 9.48-3.51-1.64-5.98-5.38-5.98-9.48V7.3A8.45 8.45 0 0 1 12 4.8Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="3.7"
              />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none text-white">
              Lowest Rates
            </p>
            <p className="mt-1 text-[9px] leading-none text-[#a3a3a3]">
              Global Routes
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: floatY }}
        className="absolute right-[-126px] top-[84px] z-10 hidden w-[148px] rounded-xl border border-[#2a2a2a] bg-[#1c1c1c]/90 px-3 py-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f6c617]/10 text-[#f6c617]">
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12v1.5M10 9v6M14 7v10M18 10.5v3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.7"
              />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none text-white">
              HD Quality
            </p>
            <p className="mt-1 text-[9px] leading-none text-[#a3a3a3]">
              VoIP Optimized
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: floatY, scale: floatScale }}
        className="relative h-[500px] w-[250px] overflow-hidden rounded-[32px] border-[6px] border-[#2a2a2a] bg-black shadow-2xl lg:rounded-[40px] lg:border-[8px]"
        transition={{ type: "spring", stiffness: 140, damping: 25 }}
      >
        <div className="absolute top-0 flex h-8 w-full items-end justify-center bg-black pb-1">
          <div className="h-4 w-20 rounded-full bg-black" />
        </div>
        <div className="flex h-full flex-col bg-[#111111] px-6 pb-6 pt-12">
          <div className="mb-8 text-center">
            <p className="text-xs text-[#aaaaaa]">Calling...</p>
            <p className="mt-1 text-xl font-bold text-white">Nigeria</p>
          </div>

          <div className="grid grid-cols-3 gap-4 place-items-center">
            {Array.from({ length: 6 }, (_, index) => (
              <span
                key={index}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#1c1c1c] text-sm font-bold text-white"
              >
                {index + 1}
              </span>
            ))}
          </div>

          <span className="mt-auto mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_36px_rgba(37,196,91,0.3)]">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
