"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MotionReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: reduceMotion ? 0 : .55, delay, ease: [.2, .65, .25, 1] }}>{children}</motion.div>;
}
