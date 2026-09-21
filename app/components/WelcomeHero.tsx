"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Atom, Braces, FlaskConical, Sigma, Sparkles } from "lucide-react";
import { ease } from "./shared";

const values = [
  ["30+", "академиялық дәріс"],
  ["30", "практикалық блок"],
  ["8", "апталық срез"],
];

const subjects = [
  { Icon: Sigma, label: "Математика", position: "left-[7%] top-[16%]" },
  { Icon: Atom, label: "Физика", position: "right-[7%] top-[9%]" },
  { Icon: FlaskConical, label: "Химия", position: "right-[3%] bottom-[16%]" },
  { Icon: Braces, label: "Информатика", position: "left-[4%] bottom-[10%]" },
];

export default function WelcomeHero() {
  return <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_72%_26%,rgba(46,185,235,.16),transparent_32%),radial-gradient(circle_at_18%_42%,rgba(37,99,235,.07),transparent_28%)]" />
    <div className="site-container relative grid min-h-[620px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
      <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.75,ease}} className="max-w-3xl text-center lg:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-bold tracking-[.08em] text-sky-700 sm:text-xs">
          <Sparkles size={15}/> РЕСПУБЛИКАЛЫҚ ОЛИМПИАДАҒА ЖҮЙЕЛІ ДАЙЫНДЫҚ
        </div>
        <h1 className="mt-7 text-[2.65rem] font-semibold leading-[1.02] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[4.65rem]">
          Жай ғана есеп шешпе. <span className="gradient-text">Жеңетіндей ойла.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:mx-0">
          ALTYN School оқушыны дайын жауапқа емес, күрделі есепті өз бетімен ашуға үйретеді. Халықаралық тәжірибесі бар тренерлер, жүйелі практика және әр аптадағы нақты кері байланыс.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a href="#pricing" className="primary-button min-h-14 px-7">Бағытыңды таңда <ArrowRight size={18}/></a>
          <a href="#program" className="secondary-button min-h-14 px-7">Қалай дайындаламыз? <ArrowDownRight size={18}/></a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 border-t border-slate-200 pt-6 sm:max-w-2xl sm:gap-5">
          {values.map(([value,label]) => <div key={label} className="text-left"><strong className="block text-xl font-semibold text-slate-950 sm:text-3xl">{value}</strong><span className="mt-1 block text-[10px] leading-4 text-slate-500 sm:text-xs">{label}</span></div>)}
        </div>
      </motion.div>

      <motion.div initial={{opacity:0,scale:.94,y:30}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.9,delay:.15,ease}} className="relative mx-auto aspect-square w-full max-w-[530px]">
        <div className="absolute inset-[7%] rounded-full border border-sky-200/80" />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-blue-300/80" />
        <div className="absolute inset-[29%] animate-[spin_18s_linear_infinite] rounded-full border border-sky-400/50" />
        <div className="absolute inset-[28%] grid place-items-center rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-sky-400 text-center text-white shadow-[0_35px_90px_rgba(37,99,235,.32)]">
          <div><span className="mx-auto grid size-11 place-items-center rounded-2xl bg-white/15"><Sparkles size={20}/></span><strong className="mt-4 block text-3xl font-semibold tracking-[-.04em] sm:text-4xl">ALTYN</strong><small className="mt-1 block text-[10px] font-semibold tracking-[.18em] text-blue-100 sm:text-xs">OLYMPIAD SCHOOL</small></div>
        </div>
        {subjects.map(({Icon,label,position},index) => <motion.div key={label} initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:.55+index*.1}} whileHover={{y:-5,scale:1.03}} className={`absolute ${position} flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 p-3 pr-4 text-xs font-semibold text-slate-800 shadow-[0_18px_45px_rgba(15,23,42,.12)] backdrop-blur sm:p-4 sm:pr-5 sm:text-sm`}>
          <span className="grid size-9 place-items-center rounded-xl bg-sky-50 text-blue-600 sm:size-10"><Icon size={19}/></span>{label}
        </motion.div>)}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-center text-[10px] font-bold text-amber-700 shadow-sm sm:text-xs">Теория → практика → срез → талдау</div>
      </motion.div>
    </div>
  </section>;
}
