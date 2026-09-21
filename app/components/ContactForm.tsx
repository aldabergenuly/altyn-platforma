"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent,setSent] = useState(false);
  function submit(event:FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return <section id="contact" className="section-space bg-[#f1f2f4]"><div className="site-container">
    <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative grid min-h-[650px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3f5f8] shadow-[0_4px_100px_rgba(0,0,0,.06)] lg:grid-cols-[.9fr_1.1fr]">
      <div className="relative z-10 flex flex-col justify-center p-7 sm:p-12">
        <h2 className="text-[2rem] font-bold leading-[1.15] tracking-[-.025em] text-slate-900 sm:text-5xl">Сұрағың болса, <span className="text-[#2eb9eb]">бірге талқылайық</span></h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">Форманы толтыр. Менеджер 8 апталық интенсив жүйесін, сабақ кестесін және саған лайық дайындық форматын түсіндіреді.</p>
        <form onSubmit={submit} className="mt-8 max-w-md rounded-[1.75rem] bg-white p-6 shadow-xl">{sent ? <div className="grid min-h-[260px] place-items-center text-center"><div><span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check size={25}/></span><h3 className="mt-5 text-xl font-extrabold">Өтінім қабылданды!</h3><p className="mt-2 text-xs text-slate-500">Жақын арада хабарласамыз.</p></div></div> : <><div className="flex items-center gap-3"><PhoneCall size={18} className="text-[#2eb9eb]"/><b className="text-sm">Байланыс деректеріңіз</b></div><input required name="name" placeholder="Аты-жөніңіз" className="form-input mt-5"/><input required name="phone" inputMode="tel" placeholder="+7 (700) 000 00 00" className="form-input"/><label className="mt-4 flex items-start gap-3 text-[10px] leading-4 text-slate-500"><input required type="checkbox" className="mt-0.5"/>Жеке деректерді өңдеуге келісім беремін</label><button className="primary-button mt-5 w-full" type="submit">Өтінім қалдыру <ArrowRight size={16}/></button></>}</form>
      </div>
      <div className="coach-contact-portrait relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-0" role="img" aria-label="Алишер Қазтаев, ALTYN School информатика тренері">
        <div className="absolute bottom-7 right-7 rounded-2xl bg-slate-900/85 px-5 py-4 text-white shadow-xl backdrop-blur"><b className="block text-lg">Алишер Қазтаев</b><small className="mt-1 block text-slate-300">Информатика тренері</small></div>
      </div>
    </motion.div>
  </div></section>;
}
