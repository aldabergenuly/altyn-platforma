"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Medal, Sparkles, Target, Trophy } from "lucide-react";
import { ease } from "./shared";

const values = [
  ["30+", "академиялық дәріс"],
  ["30", "практикалық блок"],
  ["8", "апталық срез"],
];

export default function WelcomeHero() {
  return <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40">
    <div className="pointer-events-none absolute -left-28 top-28 size-72 rounded-full bg-sky-100/70 blur-3xl" />
    <div className="site-container relative grid min-h-[650px] items-center gap-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-8">
      <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.75,ease}} className="relative z-10 max-w-3xl text-center lg:text-left">
        <h1 className="text-[2.7rem] font-semibold leading-[1.01] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[4.6rem]">
          Жеңіс кездейсоқ келмейді. <span className="gradient-text">Оған жүйелі дайындалады.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:mx-0">
          ALTYN School — республикалық олимпиадаға апаратын нақты жүйе: мықты тренер, тұрақты практика, апталық срез және әр қатеге берілетін кері байланыс.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#pricing" className="primary-button min-h-14 px-7">Бағытыңды таңда <ArrowRight size={18}/></a>
          <a href="#program" className="secondary-button min-h-14 px-7">Дайындық жүйесі <ArrowDownRight size={18}/></a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 border-t border-slate-200 pt-6 sm:max-w-2xl sm:gap-5">
          {values.map(([value,label]) => <div key={label} className="text-left"><strong className="block text-xl font-semibold text-slate-950 sm:text-3xl">{value}</strong><span className="mt-1 block text-[10px] leading-4 text-slate-500 sm:text-xs">{label}</span></div>)}
        </div>
      </motion.div>

      <motion.div initial={{opacity:0,scale:.95,y:30}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.9,delay:.12,ease}} className="relative mx-auto min-h-[520px] w-full max-w-[570px] sm:min-h-[620px]">
        <div className="absolute inset-x-[6%] bottom-[3%] top-[9%] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1247e8] via-[#2563eb] to-[#28b9ef] shadow-[0_35px_90px_rgba(37,99,235,.28)]">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[44px] border-white/10" />
          <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-[#facc15] opacity-95" />
          <div className="absolute left-7 top-7 flex items-center gap-2 text-[10px] font-bold tracking-[.12em] text-blue-100 sm:text-xs"><Sparkles size={15}/> ОЛИМПИАДАЛЫҚ ОЙЛАУ</div>
        </div>

        {/* Static public asset: direct loading keeps it compatible with the preview and deployment runtime. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/olympiad-student-v1.png" alt="ALTYN School олимпиадаға дайындалып жатқан оқушы" width="1024" height="1536" fetchPriority="high" className="absolute bottom-[2%] left-1/2 z-10 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_28px_35px_rgba(15,23,42,.25)]" />

        <motion.div whileHover={{y:-5}} className="absolute left-0 top-[23%] z-20 flex max-w-[185px] items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,.14)] backdrop-blur sm:max-w-[220px] sm:p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-500"><Trophy size={20}/></span><span><b className="block text-xs text-slate-900 sm:text-sm">Республикалық деңгей</b><small className="mt-1 block text-[9px] text-slate-500 sm:text-[10px]">мақсатқа бағытталған жүйе</small></span>
        </motion.div>
        <motion.div whileHover={{y:-5}} className="absolute bottom-[15%] right-0 z-20 flex max-w-[180px] items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,.14)] backdrop-blur sm:max-w-[215px] sm:p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-blue-600"><Target size={20}/></span><span><b className="block text-xs text-slate-900 sm:text-sm">Әр апта — прогресс</b><small className="mt-1 block text-[9px] text-slate-500 sm:text-[10px]">срез, талдау, жаңа мақсат</small></span>
        </motion.div>
        <div className="absolute bottom-[4%] left-[5%] z-20 flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-[10px] font-semibold text-white shadow-xl sm:text-xs"><Medal size={16} className="text-amber-400"/> Тренер + практика + кері байланыс</div>
      </motion.div>
    </div>
  </section>;
}
