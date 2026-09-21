"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Atom, Bell, Binary, Calculator, CalendarDays, Check, Dna, FlaskConical, LockKeyhole, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { SectionHeading, ease } from "./shared";

type Status = "available" | "soon" | "locked";
type Program = { name: string; description: string; status: Status; oldPrice?: string; price?: string; start?: string };
type Subject = { id: string; name: string; short: string; icon: LucideIcon; programs: Program[] };

const subjects: Subject[] = [
  {
    id: "chemistry", name: "Химия", short: "Химия олимпиадасының бағыттары", icon: FlaskConical,
    programs: [
      { name: "Фундамент", description: "Олимпиадалық химияға қажет есептеу, атом құрылысы, байланыс және реакция заңдылықтарының берік базасы.", status: "available", oldPrice: "50 000", price: "35 000", start: "Жаңа топ 1 қазанда басталады" },
      { name: "Физхимия", description: "Термодинамика, химиялық тепе-теңдік, кинетика және ерітінділер бойынша терең есептер.", status: "soon", oldPrice: "60 000", price: "45 000", start: "Жақында іске қосылады" },
      { name: "Органика", description: "Реакция механизмдері, синтез тізбектері және құрылымды анықтауға арналған олимпиадалық модуль.", status: "locked" },
      { name: "Аналитика", description: "Сапалық талдау, титрлеу, ерітінді құрамы және эксперименттік деректермен жұмыс.", status: "locked" },
      { name: "Неорганика", description: "Элементтер химиясы, күрделі айналымдар және бейорганикалық реакцияларды болжау.", status: "locked" },
    ],
  },
  {
    id: "physics", name: "Физика", short: "Физикалық модель және олимпиадалық есеп", icon: Atom,
    programs: [
      { name: "Механика негіздері", description: "Кинематика, динамика, сақталу заңдары және есепті дұрыс модельдеу жүйесі.", status: "available", oldPrice: "50 000", price: "35 000", start: "Жаңа топ 1 қазанда басталады" },
      { name: "Электродинамика", description: "Электр өрісі, тізбектер, магнит өрісі және күрделі олимпиадалық есептер.", status: "soon", oldPrice: "60 000", price: "45 000", start: "Жақында іске қосылады" },
      { name: "Термодинамика", description: "Жылу құбылыстары, газ заңдары және термодинамикалық процестер.", status: "locked" },
      { name: "Оптика", description: "Геометриялық және толқындық оптиканың олимпиадалық есептері.", status: "locked" },
      { name: "Эксперимент", description: "Өлшеу, қателікті бағалау және эксперименттік турға дайындық.", status: "locked" },
    ],
  },
  {
    id: "math", name: "Математика", short: "Дәлелдеу және есеп шығару мәдениеті", icon: Calculator,
    programs: [
      { name: "Олимпиадалық база", description: "Логика, дәлелдеу, теңсіздіктер және күрделі есепті кезеңдерге бөлу.", status: "available", oldPrice: "50 000", price: "35 000", start: "Жаңа топ 1 қазанда басталады" },
      { name: "Алгебра және теңсіздік", description: "Түрлендірулер, көпмүшелер және негізгі олимпиадалық теңсіздік әдістері.", status: "soon", oldPrice: "60 000", price: "45 000", start: "Жақында іске қосылады" },
      { name: "Геометрия", description: "Конфигурацияны көру, қосымша салу және дәлелдеу стратегиялары.", status: "locked" },
      { name: "Комбинаторика", description: "Санау, инварианттар, графтар және конструктивті есептер.", status: "locked" },
      { name: "Сандар теориясы", description: "Бөлінгіштік, салыстырулар және бүтін сандардағы теңдеулер.", status: "locked" },
    ],
  },
  {
    id: "biology", name: "Биология", short: "Жүйелік ойлау және ғылыми талдау", icon: Dna,
    programs: [
      { name: "Биология негіздері", description: "Жасуша, биохимия, эволюция және олимпиадаға қажет негізгі ұғымдар.", status: "available", oldPrice: "50 000", price: "35 000", start: "Жаңа топ 1 қазанда басталады" },
      { name: "Молекулалық генетика", description: "Тұқымқуалау, молекулалық процестер және генетикалық есептер.", status: "soon", oldPrice: "60 000", price: "45 000", start: "Жақында іске қосылады" },
      { name: "Адам физиологиясы", description: "Мүшелер жүйесі, реттелу және физиологиялық деректерді талдау.", status: "locked" },
      { name: "Ботаника", description: "Өсімдік анатомиясы, физиологиясы және жүйеленуі.", status: "locked" },
      { name: "Экология", description: "Экожүйелер, популяциялар және экологиялық есептер.", status: "locked" },
    ],
  },
  {
    id: "informatics", name: "Информатика", short: "Алгоритм және олимпиадалық программалау", icon: Binary,
    programs: [
      { name: "Алгоритмдік фундамент", description: "C++, күрделілік, сұрыптау, іздеу және есепті алгоритмге айналдыру.", status: "available", oldPrice: "50 000", price: "35 000", start: "Жаңа топ 1 қазанда басталады" },
      { name: "Деректер құрылымы", description: "Стек, кезек, ағаштар және тиімді шешім құру әдістері.", status: "soon", oldPrice: "60 000", price: "45 000", start: "Жақында іске қосылады" },
      { name: "Динамикалық программалау", description: "Күйді таңдау, рекурренттік байланыс және оптимизация есептері.", status: "locked" },
      { name: "Граф алгоритмдері", description: "Графты айналып өту, қысқа жол және байланысты компоненттер.", status: "locked" },
      { name: "Олимпиадалық C++", description: "Жылдам әрі сенімді код жазу және контест стратегиясы.", status: "locked" },
    ],
  },
];

const statusCopy: Record<Status, string> = { available: "Қолжетімді", soon: "Жақында", locked: "Қолжетімсіз" };

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const locked = program.status === "locked";
  const soon = program.status === "soon";
  return <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: index * .06, ease }} className={`flex min-h-[390px] flex-col rounded-[1.75rem] border p-6 sm:p-7 ${locked ? "border-slate-200 bg-slate-50/80" : soon ? "border-amber-200 bg-white shadow-[0_18px_55px_rgba(245,158,11,.08)]" : "border-sky-200 bg-white shadow-[0_22px_65px_rgba(46,185,235,.12)]"}`}>
    <div className="flex items-center justify-between gap-4">
      <span className={`inline-flex items-center gap-2 text-xs font-extrabold ${locked ? "text-slate-400" : soon ? "text-amber-600" : "text-emerald-600"}`}>{locked ? <LockKeyhole size={15}/> : soon ? <Bell size={15}/> : <Check size={15}/>} {statusCopy[program.status]}</span>
      <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
    </div>
    <h3 className={`mt-7 text-2xl font-extrabold tracking-[-.035em] ${locked ? "text-slate-500" : "text-slate-900"}`}>{program.name}</h3>
    <p className="mt-4 text-sm leading-6 text-slate-500">{program.description}</p>
    <div className="mt-auto pt-8">
      {program.start && <p className={`mb-5 flex items-center gap-2 text-xs font-bold ${soon ? "text-amber-600" : "text-blue-600"}`}><CalendarDays size={15}/>{program.start}</p>}
      {program.price ? <div className="mb-6 flex items-end gap-3"><strong className="text-3xl font-extrabold tracking-tight text-slate-900">{program.price} ₸</strong><del className="pb-1 text-sm font-bold text-slate-400">{program.oldPrice} ₸</del></div> : <p className="mb-6 text-sm font-bold text-slate-400">Бағдарлама әзірленуде</p>}
      {locked ? <button disabled className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-slate-200 px-5 py-4 text-sm font-extrabold text-slate-400"><LockKeyhole size={16}/> Қазір қолжетімсіз</button> : <a href="#contact" className={soon ? "secondary-button w-full border-amber-200 text-amber-700 hover:border-amber-400" : "primary-button w-full"}>{soon ? "Хабарлама алу" : "Курсқа жазылу"} <span>→</span></a>}
    </div>
  </motion.article>;
}

export default function Pricing() {
  const [selected, setSelected] = useState("chemistry");
  const active = subjects.find(subject => subject.id === selected) ?? subjects[0];

  return <section id="pricing" className="section-space bg-white"><div className="site-container">
    <SectionHeading eyebrow="" title="Дайындық" accent="бағытын таңда" description="Пәнді таңдағаннан кейін қолжетімді бағдарламаларды, басталу уақытын және бағасын көре аласың." />
    <div role="tablist" aria-label="Олимпиада пәндері" className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {subjects.map(subject => { const Icon = subject.icon; const isActive = selected === subject.id; return <motion.button whileHover={{ y: -4 }} key={subject.id} role="tab" aria-selected={isActive} aria-controls="subject-programs" onClick={() => setSelected(subject.id)} className={`group flex min-h-40 flex-col items-start justify-between rounded-[1.6rem] border p-5 text-left transition-all duration-300 ${isActive ? "border-blue-600 bg-gradient-to-br from-[#2eb9eb] to-[#2563eb] text-white shadow-[0_20px_55px_rgba(37,99,235,.24)]" : "border-slate-200 bg-[#f8fafc] text-slate-900 hover:border-sky-300 hover:bg-white hover:shadow-xl"}`}>
        <span className={`grid size-11 place-items-center rounded-2xl ${isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}><Icon size={22}/></span><span><b className="block text-base font-extrabold">{subject.name}</b><small className={`mt-2 block text-[11px] leading-4 ${isActive ? "text-blue-100" : "text-slate-500"}`}>{subject.short}</small></span>
      </motion.button>})}
    </div>

    <AnimatePresence mode="wait">
      <motion.div id="subject-programs" role="tabpanel" key={active.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .35, ease }} className="mt-12">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-extrabold text-blue-600">{active.name}</p><h3 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-slate-900">Дайындық бағдарламалары</h3></div><p className="max-w-md text-sm leading-6 text-slate-500">Алдымен фундаментті таңдауға болады. Маманданған модульдер кезең-кезеңімен ашылады.</p></div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{active.programs.map((program, index) => <ProgramCard key={program.name} program={program} index={index}/>)}</div>
      </motion.div>
    </AnimatePresence>
  </div></section>;
}
