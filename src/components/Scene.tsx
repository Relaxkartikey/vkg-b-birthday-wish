"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Scene({
  children,
  className = "",
  background,
}: {
  children: ReactNode;
  className?: string;
  background?: string;
}) {
  const reduced = useReducedMotion();

  const variants = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
      };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: reduced ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden px-6 ${className}`}
      style={{ background: background ?? "#0b0b0c" }}
    >
      {children}
    </motion.section>
  );
}

export default Scene;
