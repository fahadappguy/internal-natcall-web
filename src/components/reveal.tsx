"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  direction?: Direction;
} & Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "variants" | "transition" | "whileInView" | "viewport"
>;

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  stagger?: number;
  delay?: number;
} & Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "variants" | "transition" | "whileInView" | "viewport"
>;

const baseTransitions = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

function getVariants(direction: Direction, reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }

  if (direction === "left") {
    return {
      hidden: { opacity: 0, x: 28 },
      visible: { opacity: 1, x: 0, transition: baseTransitions },
    };
  }

  if (direction === "right") {
    return {
      hidden: { opacity: 0, x: -28 },
      visible: { opacity: 1, x: 0, transition: baseTransitions },
    };
  }

  if (direction === "scale") {
    return {
      hidden: { opacity: 0, scale: 0.96, y: 12 },
      visible: { opacity: 1, scale: 1, y: 0, transition: baseTransitions },
    };
  }

  return {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: baseTransitions },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  direction = "up",
  ...rest
}: RevealProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const variants = getVariants(direction, reducedMotion);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={variants}
        transition={{ ...baseTransitions, delay, duration }}
        {...rest}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function RevealGroup({
  children,
  className,
  once = true,
  amount = 0.15,
  stagger = 0.1,
  delay = 0,
  ...rest
}: RevealGroupProps) {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={{
          hidden: {},
          visible: {
            transition: reducedMotion
              ? { staggerChildren: 0, delayChildren: 0 }
              : { staggerChildren: stagger, delayChildren: delay },
          },
        }}
        {...rest}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  duration = 0.6,
  ...rest
}: Omit<RevealProps, "delay" | "once" | "amount">) {
  const reducedMotion = Boolean(useReducedMotion());
  const variants = getVariants(direction, reducedMotion);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        variants={variants}
        layout
        transition={{
          ...baseTransitions,
          duration,
          type: "spring",
          stiffness: 170,
          damping: 24,
        }}
        {...rest}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
