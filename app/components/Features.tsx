"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, ClipboardCheck, Medal, MessagesSquare, Route } from "lucide-react";
import { FadeIn, SectionHeading } from "./shared";

const features = [
  [ClipboardCheck,"Олимпиада форматы","Уақыт, бағалау және есеп күрделілігі нақты турға жақын сынақтар.","blue"],
  [Activity,"Қателер картасы","Әр жұмыстан кейін қай тақырыпты күшейту керегін нақты анықтаймыз.","white"],
  [MessagesSquare,"Тренер кері байланысы","Шешімнің жауабын ғана емес, ойлау жолын бірге талдаймыз.","dark"],
  [BrainCircuit,"Терең пәндік база","Формуланы жаттамай, заңдылықты түсініп қолдануға үйретеміз.","white"],
  [Medal,"Олимпиадалық орта","Мақсаты бір оқушылармен бірге жоғары стандартта дайындаласың.","blue"],
  [Route,"Жеке маршрут","Диагностика нәтижесіне қарай тақырыптардың реті мен қарқыны өзгереді.","dark"],
] as const;

export default function Features() {
  return <section id="features" className="section-space bg-[#f1f2f4]"><div className="site-container">
    <SectionHeading eyebrow="НЕЛІКТЕН ALTYN?" title="Дайындықты күшейтетін" accent="6 қағида" description="Жаңа мектеп үшін басты дәлел — жалған статистика емес, түсінікті әдістеме мен мықты тренерлік жұмыс."/>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(([Icon,title,copy,theme],i) => {
      const dark=theme==="dark", blue=theme==="blue";
      return <FadeIn key={title} delay={i*.05}><motion.article whileHover={{y:-8}} className={`group relative min-h-[320px] overflow-hidden rounded-[2rem] p-8 shadow-[0_4px_80px_rgba(0,0,0,.06)] ${dark?"bg-[#05090e] text-white":blue?"bg-[#1e7de5] text-white":"bg-white text-[#1d1d1d]"}`}>
        <span className={`grid size-12 place-items-center rounded-2xl ${dark||blue?"bg-white/12 text-white":"bg-[#e4f5fd] text-[#1e7de5]"}`}><Icon size={22}/></span>
        <span className={`absolute right-6 top-5 text-5xl font-black ${dark||blue?"text-white/10":"text-slate-100"}`}>0{i+1}</span>
        <div className="absolute inset-x-8 bottom-8"><h3 className="text-xl font-medium">{title}</h3><p className={`mt-3 text-sm leading-6 ${dark||blue?"text-white/70":"text-slate-500"}`}>{copy}</p></div>
        <div className={`absolute -bottom-24 -right-20 size-56 rounded-full border-[30px] ${dark||blue?"border-white/5":"border-sky-100/70"}`}/>
      </motion.article></FadeIn>;
    })}</div>
  </div></section>;
}
