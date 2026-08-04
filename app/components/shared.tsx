"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay, ease }}>{children}</motion.div>;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="group inline-flex min-w-[9.5rem] flex-col leading-none" aria-label="ALTYN Olympiad School басты бет">
      <b className="text-[1.65rem] font-black tracking-[0.09em] text-amber-500 transition-colors duration-300 group-hover:text-amber-400">ALTYN</b>
      <span className={`mt-1 flex items-center gap-1.5 text-[7px] font-extrabold tracking-[0.16em] ${light ? "text-slate-300" : "text-slate-700"}`}>
        <span>OLYMPIAD</span>
        <span className={`h-px w-5 ${light ? "bg-slate-500" : "bg-slate-400"}`} aria-hidden="true" />
        <span>SCHOOL</span>
      </span>
    </a>
  );
}

export function SectionHeading({ eyebrow, title, accent, description, centered = true }: { eyebrow: string; title: string; accent: string; description: string; centered?: boolean }) {
  return (
    <FadeIn className={centered ? "mx-auto mb-14 max-w-3xl text-center" : "mb-12 max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-4 py-2 text-[11px] font-extrabold tracking-[0.14em] text-blue-700"><span className="size-1.5 rounded-full bg-blue-500" />{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] text-slate-900 sm:text-5xl">{title} <span className="text-blue-600">{accent}</span></h2>
      <p className={`mt-5 text-base leading-7 text-slate-600 ${centered ? "mx-auto max-w-2xl" : ""}`}>{description}</p>
    </FadeIn>
  );
}
