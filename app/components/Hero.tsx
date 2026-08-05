"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Medal, Play, Trophy } from "lucide-react";
import { ease } from "./shared";

export default function Hero() {
  return <section className="relative overflow-hidden bg-[#f1f2f4] pb-24 pt-32 sm:pt-36">
    <div className="site-container relative">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease }} className="relative overflow-hidden rounded-[2.35rem] bg-white shadow-[0_4px_80px_rgba(0,0,0,.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(46,185,235,.22),transparent_42%)]"/>
        <img src="/altyn-students-v2.png" alt="ALTYN School олимпиада жүлдегерлері" className="relative h-[360px] w-full object-cover object-center sm:h-[470px] lg:h-[520px]"/>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent"/>
        <motion.div animate={{ y: [0,-8,0], rotate: [-1,0,-1] }} transition={{ duration: 4, repeat: Infinity }} className="hero-chip left-[5%] top-[60%]"><span className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-500"><Trophy size={19}/></span><div><b>#1 олимпиадалық мектеп</b><small>Пәндік олимпиадалар</small></div></motion.div>
        <motion.div animate={{ y: [0,8,0], rotate: [1,0,1] }} transition={{ duration: 4.4, repeat: Infinity }} className="hero-chip right-[5%] top-[55%]"><span className="grid size-10 place-items-center rounded-2xl bg-amber-50 text-amber-500"><Award size={19}/></span><div><b>100+ жүлдегер</b><small>3 жыл ішінде</small></div></motion.div>
        <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 rounded-full bg-white/90 px-5 py-2.5 text-[10px] font-black tracking-[.16em] text-[#1e7de5] shadow-lg backdrop-blur sm:block">ALTYN · OLYMPIAD SCHOOL</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15, ease }} className="mx-auto mt-12 max-w-5xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#e4f5fd] px-5 py-2.5 text-[10px] font-black tracking-[.14em] text-[#1e7de5]"><Medal size={14}/> РЕСПУБЛИКАЛЫҚ ОЛИМПИАДАҒА ДАЙЫНДЫҚ</div>
        <h1 className="mt-7 text-[2.75rem] font-medium leading-[1.04] tracking-[-.055em] text-[#1d1d1d] sm:text-6xl lg:text-[4.75rem]">Бізбен бірге 4 айда <span className="text-[#2eb9eb]">+40% прогресс</span> жаса!</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">Мектепішілік кезеңнен Республикалық пән олимпиадасының тұғырына дейін апаратын жүйелі бағдарлама.</p>
        <div className="juz-dark-cta mx-auto mt-9 flex max-w-3xl flex-col items-center gap-4 p-4 sm:flex-row sm:p-5"><a href="#contact" className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-[1.25rem] bg-[#2eb9eb] px-7 text-sm font-black text-white shadow-[0_0_28px_rgba(46,185,235,.35)]">Курсқа қосылу <ArrowRight size={18}/></a><a href="#results" className="flex flex-1 items-center justify-center gap-3 px-5 py-3 text-sm font-bold text-white"><Play size={16} fill="currentColor"/> Нәтижелерді көру</a></div>
      </motion.div>
    </div>
  </section>;
}
