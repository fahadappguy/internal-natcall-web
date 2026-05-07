"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type ProductShowcaseCardProps = {
  badge: string;
  title: string;
  image: string;
  alt: string;
  imageClassName: string;
  visualClassName: string;
  index: number;
};

export function ProductShowcaseCard({
  badge,
  title,
  image,
  alt,
  imageClassName,
  visualClassName,
  index,
}: ProductShowcaseCardProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        className="group grid h-full gap-4 overflow-hidden rounded-[24px] border border-white/8 bg-brand-surface/95 p-4 sm:p-5"
        initial={reducedMotion ? false : { opacity: 0, y: 26 }}
        transition={{
          duration: reducedMotion ? 0 : 0.7,
          delay: reducedMotion ? 0 : index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.22 }}
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -8,
                borderColor: "rgba(245,197,24,0.2)",
                boxShadow: "0 26px 70px rgba(0,0,0,0.34)",
              }
        }
        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      >
        <m.span
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#F5C518_0%,#C9A000_100%)] font-extrabold text-[#111]"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { rotate: 8, scale: 1.06 }}
        >
          {badge}
        </m.span>

        <div className="grid gap-1">
          <h3 className="font-display text-[1.55rem] font-bold tracking-[-0.045em] text-brand-text">
            {title}
          </h3>
        </div>

        <m.div
          className={`relative aspect-[0.62] min-h-[460px] overflow-hidden rounded-[26px] border border-white/8 ${visualClassName} sm:min-h-[520px]`}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { scale: 1.01 }}
        >
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_34%)] opacity-70"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reducedMotion ? undefined : { opacity: 1 }}
          />
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-[-22%] z-[2] w-[42%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={
              reducedMotion
                ? undefined
                : { x: "340%", opacity: [0, 0.42, 0] }
            }
          />
          <m.div
            className="absolute inset-0"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reducedMotion ? undefined : { y: -12, scale: 1.02 }}
          >
            <Image
              className={`${imageClassName} transition-transform duration-500`}
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </m.div>
        </m.div>
      </m.article>
    </LazyMotion>
  );
}
