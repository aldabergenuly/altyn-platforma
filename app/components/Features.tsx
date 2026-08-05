"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Clock3, ClipboardCheck, Medal, MessagesSquare } from "lucide-react";
import { FadeIn, SectionHeading } from "./shared";

const features = [
  [ClipboardCheck,"Олимпиадалық сынақ","Апта сайын нақты олимпиада форматындағы сынақ пен толық талдау.","blue"],
  [Activity,"Жеке прогресс","Әлсіз тақырыптарды көріп, өсу динамикасын нақты метрикамен бақыла.","white"],
  [MessagesSquare,"Жеке ментор","Жоспар, мотивация және күрделі есептер бойынша тұрақты қолдау.","dark"],
  [BrainCircuit,"Терең пәндік база","Пәнді жаттамай, идеялар мен заңдылықтарды өзара байланысты жүйе ретінде түсіну.","white"],
  [Medal,"Жеңімпаздар ортасы","Мақсаты биік оқушылармен бірге дамып, жоғары стандарт қалыптастыру.","blue"],
  [Clock3,"24/7 қолжетімділік","Сабақ пен материалдар кез келген уақытта барлық құрылғыда ашық.","dark"],
] as const;

export default function Features() {
  return <section id="features" className="section-space bg-[#f1f2f4]"><div className="site-container">
    <SectionHeading eyebrow="НЕЛІКТЕН ALTYN?" title="ALTYN-ның басты" accent="артықшылықтары" description="Білім, бақылау және қолдау бір жүйеге біріктірілгенде тұрақты нәтиже пайда болады."/>
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
