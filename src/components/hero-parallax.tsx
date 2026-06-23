"use client";

import Image from "next/image";
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
        className="relative h-[390px] w-[206px] overflow-hidden rounded-[30px] border-[6px] border-[#2a2a2a] bg-black shadow-2xl sm:h-[440px] sm:w-[232px] lg:h-[500px] lg:w-[266px] lg:rounded-[40px] lg:border-[8px]"
        transition={{ type: "spring", stiffness: 140, damping: 25 }}
      >
        <div className="absolute inset-0 bg-black p-2 sm:p-2.5 lg:p-3">
          <div className="relative h-full w-full bg-black">
            <Image
              src="/images/mockups/natcall-dialpad-mobile.jpg"
              alt="Natcall mobile app dialpad screen"
              fill
              preload
              sizes="(min-width: 1024px) 226px, (min-width: 640px) 200px, 178px"
              className="object-contain object-top"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
