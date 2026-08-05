"use client";

import { motion } from "framer-motion";
import { Award, BarChart3, Users } from "lucide-react";

const stats = [
  { value:"1 500+", title:"оқушы", text:"ALTYN жүйесімен дайындалды", Icon:Users, theme:"bg-white text-[#1d1d1d]" },
  { value:"100+", title:"жүлдегер", text:"облыстық және республикалық кезең", Icon:Award, theme:"bg-gradient-to-br from-[#2eb9eb] to-[#1e7de5] text-white" },
  { value:"85,8%", title:"тұрақты өсім", text:"оқушы нәтижесін айқын жақсартты", Icon:BarChart3, theme:"bg-white text-[#1d1d1d]" },
];

export default function StatsBar() {
  return <section className="bg-[#f1f2f4] pb-28"><div className="site-container">
    <div className="mx-auto mb-12 max-w-4xl text-center"><p className="text-sm font-medium text-[#2eb9eb]">3 жылдан бері</p><h2 className="mt-3 text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">оқушыларды олимпиада жеңісіне дайындап келеміз</h2></div>
    <div className="grid gap-6 md:grid-cols-3">{stats.map(({value,title,text,Icon,theme},i) => <motion.article key={value} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} whileHover={{y:-8}} className={`relative min-h-[355px] overflow-hidden rounded-[2rem] p-8 shadow-[0_4px_100px_rgba(0,0,0,.05)] ${theme}`}>
      <span className={`grid size-12 place-items-center rounded-2xl ${i===1?"bg-white/15":"bg-[#e4f5fd] text-[#1e7de5]"}`}><Icon size={22}/></span>
      <div className="absolute inset-x-8 bottom-8"><strong className="block text-5xl font-medium tracking-[-.05em]">{value}</strong><b className={`mt-2 block text-lg font-medium ${i===1?"text-white":"text-[#1d1d1d]"}`}>{title}</b><p className={`mt-2 text-sm leading-6 ${i===1?"text-blue-50":"text-slate-400"}`}>{text}</p></div>
      <div className={`absolute -right-16 -top-16 size-52 rounded-full border-[28px] ${i===1?"border-white/10":"border-sky-100/70"}`}/>
    </motion.article>)}</div>
  </div></section>;
}
