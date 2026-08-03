"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, TrendingUp } from "lucide-react";

const stats = [["1 500+", "оқушы", "3 жыл ішінде", GraduationCap], ["100+", "жүлдегер", "олимпиада мен грант", Award], ["85,8%", "нәтиже өсімі", "бағасын жақсартты", TrendingUp]];

export default function StatsBar() {
  return <section className="relative z-10 -mt-3 pb-8"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="site-container grid overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/70 p-3 shadow-[0_20px_55px_rgba(37,99,235,.10)] backdrop-blur md:grid-cols-3">{stats.map(([value, label, sub, Icon], i) => <div key={String(value)} className={`flex items-center gap-4 px-7 py-6 ${i < 2 ? "md:border-r md:border-blue-100" : ""}`}><span className="grid size-12 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm"><Icon size={22} /></span><div><strong className="text-3xl font-extrabold tracking-tight text-slate-900">{value}</strong><p className="text-xs font-bold text-slate-700">{label}</p><small className="text-[10px] text-slate-500">{sub}</small></div></div>)}</motion.div></section>;
}
