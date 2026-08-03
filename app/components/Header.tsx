"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./shared";

const links = [["Платформа", "#platform"], ["Артықшылықтар", "#features"], ["Нәтижелер", "#results"], ["Тарифтер", "#pricing"], ["FAQ", "#faq"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: .6 }} className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
      <div className="site-container flex h-[76px] items-center gap-8">
        <Logo />
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex" aria-label="Негізгі навигация">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600">{label}</a>)}
        </nav>
        <div className="ml-auto hidden items-center gap-3 sm:flex">
          <a href="#platform" className="rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg">LMS-ке кіру</a>
          <a href="#contact" className="primary-button !px-5 !py-3">Курсқа қосылу</a>
        </div>
        <button onClick={() => setOpen(!open)} className="ml-auto grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 sm:hidden" aria-label="Мәзір" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-100 bg-white px-5 pb-5 sm:hidden">{links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="block border-b border-slate-100 py-4 text-sm font-bold text-slate-700">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="primary-button mt-5 w-full">Курсқа қосылу</a></motion.nav>}</AnimatePresence>
    </motion.header>
  );
}
