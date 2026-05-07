"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type ScrollScaleTextProps = {
  children: ReactNode;
  className?: string;
  fromScale?: number;
  toScale?: number;
  origin?: string;
};

export function ScrollScaleText({
  children,
  className,
  fromScale = 0.92,
  toScale = 1,
  origin = "center center",
}: ScrollScaleTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 28%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, toScale]);

  return (
    <motion.div
      ref={ref}
      className={className ? `relative ${className}` : "relative"}
      style={reducedMotion ? undefined : { scale, transformOrigin: origin, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
