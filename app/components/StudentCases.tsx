"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Medal, Play, Plus, Quote, Trophy } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./shared";

const students = [
  { name: "Данияр Т.", city: "Алматы · 11-сынып", type: "Олимпиада жүлдегерлері", badge: "I орын", before: "54", after: "92", quote: "Есепті жаттамай, логикасын көруді үйрендім.", tone: "from-blue-100 to-cyan-100", initials: "ДТ" },
  { name: "Диас С.", city: "Астана · 11-сынып", type: "Top Leaderboard", badge: "TOP #1", before: "48", after: "90", quote: "Ментордың апталық талдауы ең үлкен серпін берді.", tone: "from-indigo-100 to-blue-100", initials: "ДС" },
  { name: "Аружан Б.", city: "Шымкент · 10-сынып", type: "Олимпиада жүлдегерлері", badge: "II орын", before: "61", after: "94", quote: "Үш айда облыстық кезеңнің жүлдегері атандым.", tone: "from-emerald-100 to-cyan-100", initials: "АБ" },
];
const filters = ["Барлығы", "Олимпиада жүлдегерлері", "Top Leaderboard"];

export default function StudentCases() {
  const [filter, setFilter] = useState("Барлығы");
  const shown = filter === "Барлығы" ? students : students.filter(s => s.type === filter);
  return <section id="results" className="section-space bg-white"><div className="site-container"><SectionHeading eyebrow="ОҚУШЫЛАР НӘТИЖЕСІ" title="A нүктеден" accent="жеңіске дейін" description="Нақты оқушылар, өлшенетін өсім және өз тәжірибесімен бөліскен шынайы пікірлер." />
    <div className="mb-10 flex flex-wrap justify-center gap-2">{filters.map(x => <button key={x} onClick={() => setFilter(x)} className={`rounded-full px-5 py-2.5 text-xs font-extrabold transition-all ${filter === x ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"}`}>{x}</button>)}</div>
    <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><AnimatePresence mode="popLayout">{shown.map((s) => <motion.article layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} whileHover={{ y: -7 }} key={s.name} className="premium-card overflow-hidden"><div className={`relative flex h-48 items-end justify-center overflow-hidden bg-gradient-to-br ${s.tone}`}><div className="student-mini"><span>{s.initials}</span></div><span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[9px] font-black text-blue-700 shadow-sm"><Trophy size={12} />{s.badge}</span></div><div className="p-6"><div className="flex items-start justify-between"><div><h3 className="text-lg font-extrabold text-slate-900">{s.name}</h3><p className="mt-1 text-[10px] text-slate-500">{s.city}</p></div><Medal className="text-amber-400" size={20} /></div><div className="my-5 flex items-center gap-2 rounded-xl bg-slate-50 p-3"><div className="flex-1 text-center"><small className="block text-[8px] font-black text-slate-400">A НҮКТЕ</small><b className="text-xl text-slate-500">{s.before}</b></div><ArrowRight size={16} className="text-blue-400" /><div className="flex-1 text-center"><small className="block text-[8px] font-black text-blue-500">B НҮКТЕ</small><b className="text-xl text-blue-600">{s.after}</b></div></div><p className="min-h-16 text-xs italic leading-5 text-slate-600"><Quote size={14} className="mb-1 text-blue-300" />“{s.quote}”</p><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 py-3 text-[10px] font-black text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"><Play size={12} fill="currentColor" /> Видео-пікірді көру</button></div></motion.article>)}</AnimatePresence>
      {filter === "Барлығы" && <motion.article layout whileHover={{ y: -5 }} className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/40 p-7 text-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl"><span className="grid size-16 place-items-center rounded-full bg-white text-blue-600 shadow-lg"><Plus size={26} /></span><h3 className="mt-6 text-xl font-extrabold text-slate-900">Төртінші орын сенікі болуы мүмкін!</h3><p className="mt-3 text-sm leading-6 text-slate-500">Келесі үлкен нәтижеңе бүгін алғашқы қадам жаса.</p><a href="#contact" className="mt-7 text-xs font-black text-blue-600">Диагностикадан өту →</a></motion.article>}
    </motion.div></div></section>;
}
