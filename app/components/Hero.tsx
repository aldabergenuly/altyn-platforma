"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Play, Sparkles, TrendingUp } from "lucide-react";
import { ease } from "./shared";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="hero-glow left-[-14rem] top-20 bg-blue-300/30" /><div className="hero-glow bottom-0 right-[-12rem] bg-cyan-300/25" />
      <div className="site-container relative grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, ease }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[10px] font-black tracking-[0.14em] text-blue-700 shadow-sm backdrop-blur"><Sparkles size={14} /> #1 ОЛИМПИАДАЛЫҚ ОНЛАЙН МЕКТЕП</div>
          <h1 className="mt-7 text-[2.65rem] font-extrabold leading-[1.03] tracking-[-0.055em] text-slate-900 sm:text-6xl lg:text-[4.15rem]">Қазақстанда олимпиадалар мен емтихандарға <span className="gradient-text">ең жүйелі дайындық</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Химияны жай жаттама. Түсін, тәжірибе жаса және жеке ментордың қолдауымен нақты нәтижеге жет.</p>
          <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/80 p-2.5 pr-5 shadow-sm"><span className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-black text-white">4 айда +40%</span><span className="text-sm font-bold text-slate-700">орташа академиялық өсім</span></div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="primary-button">Тегін диагностика <ArrowRight size={18} /></a><a href="#results" className="secondary-button"><span className="grid size-7 place-items-center rounded-full bg-blue-100 text-blue-600"><Play size={12} fill="currentColor" /></span> Нәтижелерді көру</a></div>
          <div className="mt-9 flex items-center gap-4"><div className="flex -space-x-2">{["Д", "А", "М", "+"].map((x, i) => <span key={i} className={`grid size-9 place-items-center rounded-full border-2 border-white text-[10px] font-black ${i === 3 ? "bg-slate-900 text-white" : "bg-blue-100 text-blue-700"}`}>{x}</span>)}</div><p className="text-xs leading-5 text-slate-500"><b className="text-slate-900">1 500+ оқушы</b><br />ALTYN-мен бірге өсіп келеді</p></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .1, ease }} className="relative mx-auto h-[530px] w-full max-w-[520px]">
          <div className="absolute inset-7 rounded-[3rem] border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-cyan-100 shadow-[0_40px_100px_rgba(37,99,235,.16)]" />
          <div className="absolute inset-14 overflow-hidden rounded-[2.6rem] border border-white/80 bg-gradient-to-b from-blue-500 to-blue-800 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.35),transparent_70%)]" />
            <div className="student-figure"><span>AT</span></div>
            <div className="absolute inset-x-0 bottom-0 bg-white/95 p-6 backdrop-blur"><p className="text-[10px] font-black tracking-[.13em] text-blue-600">ALTYN STUDENT</p><h3 className="mt-1 text-xl font-extrabold text-slate-900">Айдана Т.</h3><p className="mt-1 text-xs text-slate-500">Республикалық олимпиада · I орын</p></div>
          </div>
          <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity }} className="floating-proof left-0 top-16"><span className="icon-box bg-amber-50 text-amber-500"><Award size={20} /></span><div><b>100+</b><small>Олимпиада жүлдегерлері</small></div></motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="floating-proof bottom-20 right-0"><span className="icon-box bg-emerald-50 text-emerald-600"><TrendingUp size={20} /></span><div><b>87.8%</b><small>Мемлекеттік грант</small></div></motion.div>
          <div className="absolute right-4 top-9 grid size-12 place-items-center rounded-2xl border border-blue-100 bg-white text-blue-600 shadow-lg"><CheckCircle2 size={22} /></div>
        </motion.div>
      </div>
    </section>
  );
}
