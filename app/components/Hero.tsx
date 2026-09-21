"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Medal, Play, Trophy } from "lucide-react";
import { ease } from "./shared";

const portraits = [
  { name: "Данияр", position: "0%", tilt: "hero-tilt-left" },
  { name: "Айдана", position: "33.333%", tilt: "hero-tilt-right" },
  { name: "Мирас", position: "66.667%", tilt: "hero-tilt-left" },
  { name: "Аружан", position: "100%", tilt: "hero-tilt-right" },
];

export default function Hero() {
  const loop = [...portraits, ...portraits];

  return <section className="relative overflow-hidden bg-[#f1f2f4] pb-24 pt-28 sm:pt-32">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease }} className="hero-marquee-shell">
      <div className="hero-marquee-track">
        {loop.map((student, index) => <article
          key={`${student.name}-${index}`}
          className={`hero-student-card ${student.tilt}`}
          style={{ backgroundPosition: `${student.position} center` }}
          aria-label={`${student.name}, ALTYN School оқушысы`}
        />)}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f1f2f4] via-[#f1f2f4]/65 to-transparent"/>
      <motion.div animate={{ y: [0,-7,0] }} transition={{ duration: 4, repeat: Infinity }} className="hero-chip left-[12%] top-[58%]"><span className="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-500"><Trophy size={19}/></span><div><b>#1 олимпиадалық мектеп</b><small>Пәндік олимпиадалар</small></div></motion.div>
      <motion.div animate={{ y: [0,7,0] }} transition={{ duration: 4.4, repeat: Infinity }} className="hero-chip right-[12%] top-[52%]"><span className="grid size-10 place-items-center rounded-2xl bg-amber-50 text-amber-500"><Award size={19}/></span><div><b>100+ жүлдегер</b><small>3 жыл ішінде</small></div></motion.div>
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15, ease }} className="site-container relative mx-auto -mt-3 max-w-5xl text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#e4f5fd] px-5 py-2.5 text-[10px] font-black tracking-[.14em] text-[#1e7de5]"><Medal size={14}/> РЕСПУБЛИКАЛЫҚ ОЛИМПИАДАҒА ДАЙЫНДЫҚ</div>
      <h1 className="mt-7 text-[2.75rem] font-medium leading-[1.04] tracking-[-.055em] text-[#1d1d1d] sm:text-6xl lg:text-[4.75rem]">Бізбен бірге 4 айда <span className="text-[#2eb9eb]">+40% прогресс</span> жаса!</h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">Мектепішілік кезеңнен Республикалық пән олимпиадасының тұғырына дейін апаратын жүйелі бағдарлама.</p>
      <div className="juz-dark-cta mx-auto mt-9 flex max-w-3xl flex-col items-center gap-4 p-4 sm:flex-row sm:p-5"><a href="#contact" className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-[1.25rem] bg-[#2eb9eb] px-7 text-sm font-black text-white shadow-[0_0_28px_rgba(46,185,235,.35)]">Курсқа қосылу <ArrowRight size={18}/></a><a href="#results" className="flex flex-1 items-center justify-center gap-3 px-5 py-3 text-sm font-bold text-white"><Play size={16} fill="currentColor"/> Нәтижелерді көру</a></div>
    </motion.div>
  </section>;
}
