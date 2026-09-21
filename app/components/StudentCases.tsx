"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Quote, Trophy } from "lucide-react";
import { useState } from "react";

const students = [
  { name:"Данияр Т.", city:"Алматы · 11-сынып", medal:"Республикалық олимпиада · I орын", before:"Облыстық кезең — 54%", after:"Республикалық кезең — 92%", quote:"ALTYN-де есептің жауабын ғана емес, шешімнің логикасын түсіндім. Апталық сынақ пен ментор талдауы өзіме деген сенімді арттырды.", pos:"0%" },
  { name:"Айдана С.", city:"Астана · 10-сынып", medal:"Республикалық олимпиада · II орын", before:"Мектепішілік кезең — 61%", after:"Республикалық кезең — 89%", quote:"Күрделі тақырыптарды бөліктерге бөліп оқыған соң олимпиадалық есептер қорқынышты болмай қалды.", pos:"33.333%" },
  { name:"Мирас Ә.", city:"Қарағанды · 11-сынып", medal:"Облыстық олимпиада · I орын", before:"Диагностика — 48%", after:"Облыстық кезең — 94%", quote:"Жеке жоспар мен тұрақты кері байланыс нәтиженің тез өсуіне көмектесті.", pos:"66.667%" },
];

export default function StudentCases() {
  const [active,setActive] = useState(0);
  const student = students[active];
  const move = (direction:number) => setActive((active + direction + students.length) % students.length);

  return <section id="results" className="section-space bg-white"><div className="site-container">
    <div className="mb-14 text-center"><span className="text-xs font-black tracking-[.15em] text-blue-600">ОҚУШЫЛАРДЫҢ НӘТИЖЕСІ</span><h2 className="mt-4 text-4xl font-medium tracking-[-.04em] text-slate-900 sm:text-5xl">Әр медальдің артында — нақты жүйе</h2></div>
    <motion.div key={active} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_4px_100px_rgba(0,0,0,.06)] lg:grid-cols-[.85fr_1.15fr]">
      <div className="student-result-portrait relative min-h-[500px] overflow-hidden" style={{backgroundPosition:`${student.pos} center`}} role="img" aria-label={`${student.name} портреті`}>
        <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black text-blue-700 shadow-lg"><Trophy size={14}/>{student.medal}</span>
        <button className="absolute bottom-6 right-6 grid size-16 place-items-center rounded-full bg-white text-blue-600 shadow-xl" aria-label="Видео-пікірді көру"><Play size={22} fill="currentColor"/></button>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-12">
        <div className="flex flex-wrap items-center gap-4"><h3 className="text-3xl font-medium text-slate-900">{student.name}</h3><span className="rounded-full border border-blue-200 px-4 py-2 text-xs font-black text-blue-600">{student.city}</span></div>
        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr]"><div className="rounded-2xl bg-slate-50 p-5"><small className="font-black text-slate-400">A НҮКТЕ</small><p className="mt-2 text-sm font-bold text-slate-700">{student.before}</p></div><ArrowRight className="self-center text-blue-400"/><div className="rounded-2xl bg-[#1e7de5] p-5 text-white"><small className="font-black text-blue-200">B НҮКТЕ</small><p className="mt-2 text-sm font-bold">{student.after}</p></div></div>
        <Quote className="mt-8 text-blue-200" size={28}/><p className="mt-3 text-base leading-8 text-slate-600">“{student.quote}”</p>
        <div className="mt-9 flex items-center gap-3"><button onClick={()=>move(-1)} className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600" aria-label="Алдыңғы оқушы"><ArrowLeft size={18}/></button><button onClick={()=>move(1)} className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600" aria-label="Келесі оқушы"><ArrowRight size={18}/></button><span className="ml-2 text-xs font-bold text-slate-400">0{active+1} / 0{students.length}</span></div>
      </div>
    </motion.div>
  </div></section>;
}
