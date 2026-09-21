"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ease } from "./shared";

const coaches = [
  { name:"Алишер Қазтаев", subject:"Информатика", image:"/alisher-qaztayev.jpg", tilt:"hero-tilt-left", focus:"Олимпиадалық программалау және алгоритмдер", skills:["Алгоритмдік ойлау және есепті модельдеу", "Деректер құрылымдары мен тиімді шешімдер", "Олимпиада форматында код жазу және талдау"] },
  { name:"Ақберді Алиби", subject:"Физика", image:"/akberdi-alibi.jpg", tilt:"hero-tilt-right", focus:"Физикалық модель құру және күрделі есептер", skills:["Механика есептерінің негізгі әдістері", "Электродинамикадағы байланыстарды түсіну", "Олимпиадалық есепті жүйелі талдау"] },
];

export default function Hero() {
  const [active,setActive] = useState<number|null>(null);
  const loop = [...coaches,...coaches,...coaches,...coaches];
  const coach = active === null ? null : coaches[active];

  useEffect(() => {
    if (active === null) return;
    const close = (event:KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown",close);
    return () => window.removeEventListener("keydown",close);
  },[active]);

  return <section id="coaches" className="relative overflow-hidden bg-[#f1f2f4] pb-24 pt-28 sm:pt-32">
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75,ease}} className="hero-marquee-shell">
      <div className="hero-marquee-track">
        {loop.map((item,index) => <button key={`${item.name}-${index}`} type="button" onClick={()=>setActive(index%coaches.length)} className={`hero-coach-card ${item.tilt}`} style={{backgroundImage:`url(${item.image})`}} aria-label={`${item.name}, ${item.subject} тренері туралы ашу`}>
          <span className="coach-card-label"><span><b>{item.name}</b><small>{item.subject}</small></span><small>Толығырақ</small></span>
        </button>)}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f1f2f4] via-[#f1f2f4]/65 to-transparent"/>
    </motion.div>

    <motion.div initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15,ease}} className="site-container relative mx-auto -mt-3 max-w-5xl text-center">
      <h1 className="text-[2.75rem] font-semibold leading-[1.04] tracking-[-.055em] text-[#1d1d1d] sm:text-6xl lg:text-[4.75rem]">8 аптада <span className="text-[#2eb9eb]">олимпиадалық ойлауыңды</span> жүйеле.</h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">30+ дәріс, 30 практикалық блок, 8 срез және республикалық олимпиада жүлдегерлерімен апталық live-практика.</p>
      <div className="juz-dark-cta mx-auto mt-9 flex max-w-3xl flex-col items-center gap-4 p-4 sm:flex-row sm:p-5"><a href="#contact" className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-[1.25rem] bg-[#2eb9eb] px-7 text-sm font-black text-white shadow-[0_0_28px_rgba(46,185,235,.35)]">Интенсивке жазылу <ArrowRight size={18}/></a><a href="#intensive" className="flex flex-1 items-center justify-center gap-3 px-5 py-3 text-sm font-bold text-white"><BookOpenCheck size={17}/> Жүйені көру</a></div>
    </motion.div>

    <AnimatePresence>{coach && <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(event)=>event.currentTarget===event.target&&setActive(null)} role="presentation">
      <motion.div initial={{opacity:0,y:25,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:.96}} transition={{duration:.3,ease}} className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-[.8fr_1.2fr]" role="dialog" aria-modal="true" aria-label={`${coach.subject} тренерінің профилі`}>
        <div className="coach-modal-portrait min-h-[330px] md:min-h-[560px]" style={{backgroundImage:`url(${coach.image})`}}/>
        <div className="p-7 sm:p-10"><button onClick={()=>setActive(null)} className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-900 hover:text-white" aria-label="Жабу"><X size={18}/></button><h2 className="pr-12 text-3xl font-semibold text-slate-900 sm:text-4xl">{coach.name}</h2><p className="mt-2 text-lg font-bold text-[#2eb9eb]">{coach.subject} тренері</p><div className="mt-7 rounded-2xl bg-slate-50 p-5"><p className="text-sm font-extrabold text-slate-400">Негізгі бағыт</p><p className="mt-2 font-bold text-slate-800">{coach.focus}</p></div><h3 className="mt-7 flex items-center gap-2 text-sm font-extrabold text-slate-900"><Sparkles size={17} className="text-amber-500"/> Тренермен не үйренесің?</h3><ul className="mt-4 space-y-3">{coach.skills.map(skill=><li key={skill} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2eb9eb]"/>{skill}</li>)}</ul><a href="#contact" onClick={()=>setActive(null)} className="primary-button mt-8 w-full">Осы бағытқа жазылу <ArrowRight size={16}/></a></div>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </section>;
}
