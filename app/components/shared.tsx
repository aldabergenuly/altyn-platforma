"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay, ease }}>{children}</motion.div>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`inline-flex shrink-0 items-center overflow-hidden ${light ? "rounded-xl bg-white px-3 py-2" : ""}`} aria-label="ALTYN Olympiad School басты бет">
      <img src="/altyn-logo.jpg" alt="ALTYN olympiad school" className="h-auto w-[135px] object-contain sm:w-[150px]" />
    </a>
  );
}

export function SectionHeading({ title, accent, description, centered = true }: { eyebrow: string; title: string; accent: string; description: string; centered?: boolean }) {
  return (
    <FadeIn className={centered ? "mx-auto mb-14 max-w-3xl text-center" : "mb-12 max-w-2xl"}>
      <h2 className="text-4xl font-semibold tracking-[-0.045em] text-slate-900 sm:text-5xl">{title} <span className="text-blue-600">{accent}</span></h2>
      <p className={`mt-5 text-base leading-7 text-slate-600 ${centered ? "mx-auto max-w-2xl" : ""}`}>{description}</p>
    </FadeIn>
  );
}
