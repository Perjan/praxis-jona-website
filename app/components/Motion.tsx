"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type MotionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  delay?: number;
};

export function MotionSection({ children, className = "", delay = 0, ...props }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      {...props}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}

export function MotionCard({ children, className = "", delay = 0, ...props }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
