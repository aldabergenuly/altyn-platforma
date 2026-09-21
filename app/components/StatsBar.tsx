"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, ChartNoAxesCombined, Coffee, NotebookPen, UsersRound } from "lucide-react";

const intensive = [
  { value:"30+", title:"академиялық дәріс", text:"Халықаралық олимпиада жүлдегерлерінен концентрленген теория және күрделі концепттер талдауы.", Icon:BookOpenCheck, theme:"bg-white text-[#1d1d1d]" },
  { value:"30", title:"практикалық блок", text:"Әр дәрісті нақты олимпиадалық деңгейдегі есептермен бекітетін үй жұмысы.", Icon:NotebookPen, theme:"bg-gradient-to-br from-[#2eb9eb] to-[#1e7de5] text-white" },
  { value:"8", title:"апталық срез", text:"Динамиканы бақылауға және әлсіз тұстарды табуға арналған толық емтихан мен қате талдауы.", Icon:ChartNoAxesCombined, theme:"bg-white text-[#1d1d1d]" },
  { value:"LIVE", title:"ментор практикасы", text:"Республикалық олимпиада жүлдегерлерімен күрделі сәттерді толық түсініп алуға арналған апталық онлайн-разбор.", Icon:UsersRound, theme:"bg-[#05090e] text-white" },
  { value:"GUEST", title:"Lectures & Tea Time", text:"Шақырылған сарапшылар және топ университет студенттерімен мотивация, профориентация, нетворкинг.", Icon:Coffee, theme:"bg-gradient-to-br from-amber-300 to-amber-500 text-slate-950" },
];

export default function StatsBar() {
  return <section id="intensive" className="bg-[#f1f2f4] pb-28"><div className="site-container">
    <div className="mx-auto mb-12 max-w-4xl text-center"><p className="text-sm font-medium text-[#2eb9eb]">ALTYN SYSTEM</p><h2 className="mt-3 text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">ALTYN School интенсиві — нақты сандармен</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">Теория, практика, апта сайынғы бақылау және менторлық қолдау бір 8 апталық ритмге біріктірілген.</p></div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">{intensive.map(({value,title,text,Icon,theme},index)=><motion.article key={title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} whileHover={{y:-8}} className={`relative min-h-[320px] overflow-hidden rounded-[2rem] p-7 shadow-[0_4px_80px_rgba(0,0,0,.05)] ${index<3?"lg:col-span-2":"lg:col-span-3"} ${theme}`}>
      <span className={`grid size-12 place-items-center rounded-2xl ${index===1||index===3?"bg-white/15":index===4?"bg-white/35":"bg-[#e4f5fd] text-[#1e7de5]"}`}><Icon size={22}/></span><div className="absolute inset-x-7 bottom-7"><strong className="block text-4xl font-medium tracking-[-.04em]">{value}</strong><h3 className="mt-2 text-xl font-medium">{title}</h3><p className={`mt-3 text-sm leading-6 ${index===1||index===3?"text-white/70":index===4?"text-slate-800/75":"text-slate-500"}`}>{text}</p></div><div className={`absolute -right-16 -top-16 size-52 rounded-full border-[28px] ${index===1||index===3?"border-white/10":index===4?"border-white/20":"border-sky-100/70"}`}/>
    </motion.article>)}</div>
  </div></section>;
}
