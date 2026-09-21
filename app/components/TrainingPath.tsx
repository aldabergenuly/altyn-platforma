"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, ClipboardCheck, MessagesSquare, NotebookPen, Sparkles } from "lucide-react";
import { FadeIn, SectionHeading } from "./shared";

const steps = [
  { Icon:BookOpen, number:"01", title:"Дәрісті қара", text:"Халықаралық олимпиада жүлдегерінен концентрленген теория мен күрделі концептті үйрен." },
  { Icon:NotebookPen, number:"02", title:"Практиканы орында", text:"Әр тақырыпты олимпиадалық деңгейдегі үй тапсырмасымен бірден бекіт." },
  { Icon:ClipboardCheck, number:"03", title:"Апталық срез тапсыр", text:"Емтихан арқылы динамикаңды көріп, әлсіз тұстарыңды нақты анықта." },
  { Icon:MessagesSquare, number:"04", title:"Ментормен талда", text:"Жанды практикада қиын есептерді қайта қарап, сұрағыңа тікелей жауап ал." },
];

export default function TrainingPath() {
  return <section id="program" className="section-space bg-white"><div className="site-container">
    <SectionHeading eyebrow="8 АПТАЛЫҚ РИТМ" title="Әр аптада қайталанатын" accent="нәтиже циклі" description="Көру → орындау → тексеру → талдау. Осы цикл сегіз апта бойы күрделеніп, олимпиадалық ойлау дағдыңды жүйелейді."/>
    <div className="relative grid gap-5 lg:grid-cols-4">{steps.map(({Icon,number,title,text},index)=><FadeIn key={title} delay={index*.07}>
      <motion.article whileHover={{y:-8}} className="relative h-full min-h-[310px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#f8fafc] p-7 shadow-[0_4px_60px_rgba(0,0,0,.045)] transition-shadow hover:shadow-xl">
        <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#e4f5fd] text-[#1e7de5]"><Icon size={22}/></span><span className="text-4xl font-medium text-slate-200">{number}</span></div>
        <div className="absolute inset-x-7 bottom-7"><h3 className="text-xl font-medium text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div>
        {index<steps.length-1&&<span className="absolute -bottom-3 left-1/2 z-10 grid size-7 -translate-x-1/2 place-items-center rounded-full bg-[#2eb9eb] text-white lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"><ArrowDown size={14} className="lg:-rotate-90"/></span>}
      </motion.article>
    </FadeIn>)}</div>
    <FadeIn className="mt-6"><div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-gradient-to-r from-amber-300 to-amber-500 p-7 text-slate-950 shadow-[0_20px_60px_rgba(245,158,11,.18)] sm:flex-row sm:items-center"><div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/45"><Sparkles size={22}/></span><div><h3 className="text-xl font-bold">Guest Lectures & Tea Time</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-800/75">Сарапшылар және Қазақстан мен әлемнің топ университет студенттерімен еркін кездесулер: мотивация, мамандық таңдау және нетворкинг.</p></div></div><span className="shrink-0 rounded-full bg-slate-950 px-5 py-3 text-[10px] font-black tracking-[.12em] text-white">АРНАЙЫ СЕССИЯ</span></div></FadeIn>
  </div></section>;
}
