"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./shared";

const links = [["Тренерлер", "#coaches"], ["Интенсив", "#intensive"], ["Бағдарлама", "#program"], ["Оқу форматы", "#pricing"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <motion.header initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .65 }} className="fixed inset-x-0 top-5 z-50 px-3">
    <div className="mx-auto flex h-[82px] max-w-[1180px] items-center rounded-[2rem] bg-white px-6 shadow-[0_4px_50px_rgba(0,0,0,.07)] sm:px-8">
      <Logo />
      <span className="hidden border-l border-slate-200 pl-5 text-[10px] font-medium leading-4 text-slate-400 xl:block">Республикалық<br/>олимпиадаға дайындық</span>
      <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex">{links.map(([l,h]) => <a key={h} href={h} className="text-[13px] font-medium text-[#1d1d1d] transition hover:text-sky-500">{l}</a>)}</nav>
      <div className="ml-auto hidden items-center gap-3 sm:flex"><a href="#intensive" className="rounded-[15px] border border-sky-300 px-4 py-3 text-xs font-bold text-sky-600">Бағдарлама</a><a href="#contact" className="rounded-[15px] bg-[#2eb9eb] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#1e7de5]">Интенсивке жазылу</a></div>
      <button onClick={() => setOpen(!open)} className="ml-auto grid size-11 place-items-center rounded-[15px] bg-sky-50 text-sky-600 sm:hidden" aria-label="Мәзір">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-[680px] rounded-[1.75rem] bg-white p-4 shadow-2xl sm:hidden">{links.map(([l,h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-slate-100 px-3 py-4 text-sm font-bold">{l}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="primary-button mt-4 w-full">Курсқа қосылу</a></motion.nav>}</AnimatePresence>
  </motion.header>;
}
