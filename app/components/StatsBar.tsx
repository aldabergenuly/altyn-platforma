"use client";

import { motion } from "framer-motion";
import { Atom, Dna, FlaskConical, Sigma } from "lucide-react";

const subjects = [
  { title:"Математика", text:"Логика, дәлелдеу және көпқадамды олимпиадалық есептер", Icon:Sigma, theme:"bg-white text-[#1d1d1d]" },
  { title:"Физика", text:"Модель құру, эксперимент және терең есептер стратегиясы", Icon:Atom, theme:"bg-gradient-to-br from-[#2eb9eb] to-[#1e7de5] text-white" },
  { title:"Химия", text:"Теориялық заңдылықтар, есептік және сапалық турлар", Icon:FlaskConical, theme:"bg-white text-[#1d1d1d]" },
  { title:"Биология", text:"Жүйелік білім, деректерді талдау және зертханалық ойлау", Icon:Dna, theme:"bg-[#05090e] text-white" },
];

export default function StatsBar() {
  return <section id="subjects" className="bg-[#f1f2f4] pb-28"><div className="site-container">
    <div className="mx-auto mb-12 max-w-4xl text-center"><p className="text-sm font-medium text-[#2eb9eb]">ПӘНДІК БАҒЫТТАР</p><h2 className="mt-3 text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">Өзіңнің олимпиадалық бағытыңды таңда</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">Алғашқы диагностикадан кейін тренер саған қай тақырыптан бастау керек екенін көрсетеді.</p></div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{subjects.map(({title,text,Icon,theme},index)=><motion.article key={title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} whileHover={{y:-8}} className={`relative min-h-[300px] overflow-hidden rounded-[2rem] p-7 shadow-[0_4px_80px_rgba(0,0,0,.05)] ${theme}`}>
      <span className={`grid size-12 place-items-center rounded-2xl ${index===1||index===3?"bg-white/15":"bg-[#e4f5fd] text-[#1e7de5]"}`}><Icon size={22}/></span><div className="absolute inset-x-7 bottom-7"><h3 className="text-2xl font-medium">{title}</h3><p className={`mt-3 text-sm leading-6 ${index===1||index===3?"text-white/70":"text-slate-500"}`}>{text}</p></div><div className={`absolute -right-16 -top-16 size-52 rounded-full border-[28px] ${index===1||index===3?"border-white/10":"border-sky-100/70"}`}/>
    </motion.article>)}</div>
  </div></section>;
}
