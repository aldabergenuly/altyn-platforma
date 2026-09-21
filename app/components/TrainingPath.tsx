"use client";

import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit, ClipboardCheck, MessagesSquare, Trophy } from "lucide-react";
import { FadeIn, SectionHeading } from "./shared";

const steps = [
  { Icon:ClipboardCheck, number:"01", title:"Диагностика", text:"Қазіргі деңгейіңді, мықты және әлсіз тақырыптарыңды анықтаймыз." },
  { Icon:BrainCircuit, number:"02", title:"Жеке маршрут", text:"Пән, сынып және олимпиада кезеңіне сай дайындық жоспарын құрамыз." },
  { Icon:MessagesSquare, number:"03", title:"Тренермен жұмыс", text:"Теорияны түсініп, күрделі есептерді бірге талдап, қателерді жабамыз." },
  { Icon:Trophy, number:"04", title:"Сынақ және талдау", text:"Олимпиада форматындағы турдан кейін шешім стратегиясын күшейтеміз." },
];

export default function TrainingPath() {
  return <section id="program" className="section-space bg-white"><div className="site-container">
    <SectionHeading eyebrow="ДАЙЫНДЫҚ ЖҮЙЕСІ" title="Мақсатқа апаратын" accent="4 нақты қадам" description="Негізгі құндылық — тренердің әдістемесі, тұрақты практика және дер кезінде берілген кері байланыс."/>
    <div className="relative grid gap-5 lg:grid-cols-4">{steps.map(({Icon,number,title,text},index)=><FadeIn key={title} delay={index*.07}>
      <motion.article whileHover={{y:-8}} className="relative h-full min-h-[310px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#f8fafc] p-7 shadow-[0_4px_60px_rgba(0,0,0,.045)] transition-shadow hover:shadow-xl">
        <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#e4f5fd] text-[#1e7de5]"><Icon size={22}/></span><span className="text-4xl font-medium text-slate-200">{number}</span></div>
        <div className="absolute inset-x-7 bottom-7"><h3 className="text-xl font-medium text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>
        {index<steps.length-1&&<span className="absolute -bottom-3 left-1/2 z-10 grid size-7 -translate-x-1/2 place-items-center rounded-full bg-[#2eb9eb] text-white lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"><ArrowDown size={14} className="lg:-rotate-90"/></span>}
      </motion.article>
    </FadeIn>)}</div>
  </div></section>;
}
