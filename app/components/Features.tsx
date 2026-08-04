"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Clock3, ClipboardCheck, Medal, MessagesSquare } from "lucide-react";
import { FadeIn, SectionHeading } from "./shared";

const features = [[ClipboardCheck, "Олимпиадалық сынақ", "Апта сайын нақты олимпиада форматындағы сынақ пен толық талдау."], [Activity, "Жеке прогресс", "Әлсіз тақырыптарды көріп, өсу динамикасын нақты метрикамен бақыла."], [MessagesSquare, "Жеке ментор", "Жоспар, мотивация және күрделі есептер бойынша тұрақты қолдау."], [BrainCircuit, "Терең пәндік база", "Пәнді жаттамай, идеялар мен заңдылықтарды өзара байланысты жүйе ретінде түсіну."], [Medal, "Жеңімпаздар ортасы", "Мақсаты биік оқушылармен бірге дамып, жоғары стандарт қалыптастыру."], [Clock3, "24/7 қолжетімділік", "Сабақ пен материалдар кез келген уақытта барлық құрылғыда ашық."]];

export default function Features() {
  return <section id="features" className="section-space bg-gradient-to-b from-slate-50 to-blue-50/40"><div className="site-container"><SectionHeading eyebrow="НЕЛІКТЕН ALTYN?" title="Нәтижеге жеткізетін" accent="6 артықшылық" description="Білім, бақылау және қолдау бір жүйеге біріктірілгенде тұрақты нәтиже пайда болады." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(([Icon, title, text], i) => <FadeIn key={String(title)} delay={i * .06}><motion.article whileHover={{ y: -7 }} className="premium-card group relative h-full overflow-hidden p-7"><span className="absolute right-5 top-4 text-4xl font-black text-slate-100">0{i + 1}</span><span className="icon-box transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><Icon size={22} /></span><h3 className="mt-6 text-lg font-extrabold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p><div className="mt-7 flex items-center gap-2 text-xs font-bold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Толығырақ <span>→</span></div></motion.article></FadeIn>)}</div></div></section>;
}
