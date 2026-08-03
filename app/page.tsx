"use client";

import { FormEvent, useState } from "react";

const platformItems = [
  ["▤", "Үй тапсырмалары", "Әр тақырыптан кейін деңгейіңе сай тапсырма"],
  ["◫", "Академиялық конспект", "Қысқа да түсінікті авторлық материалдар"],
  ["↗", "Жеке прогресс", "Нәтижеңді күн сайын бақылап отыр"],
  ["✓", "Self-check & mentor", "Тексеру, кері байланыс және қолдау"],
];

const features = [
  ["♙", "Олимпиадалық сынақ", "Апта сайын білімді нақты олимпиада форматында тексереміз."],
  ["⌁", "Жеке прогресті бақылау", "Әлсіз тақырыптарды анықтап, жеке өсу траекториясын құрамыз."],
  ["♧", "Ментормен жеке қолдау", "Сұрақ, мотивация және жоспар бойынша әрдайым қасыңдамыз."],
  ["▣", "Пәндік база", "Химияның негізгі тақырыптары жүйелі әрі терең түсіндіріледі."],
  ["✦", "Интерактивті тапсырмалар", "Теорияны бірден практикамен бекітетін заманауи формат."],
  ["◷", "24/7 қолжетімділік", "Сабақты өзіңе ыңғайлы уақытта, кез келген құрылғыдан оқы."],
];

const results = [
  { initials: "ДТ", name: "Данияр Т.", city: "Алматы · 11-сынып", badge: "I орын", result: "+41%", text: "4 айда республикалық олимпиада финалына дейін жетіп, органикалық химиядан ең жоғары нәтиже көрсетті." },
  { initials: "ДС", name: "Диас С.", city: "Астана · 11-сынып", badge: "Алтын медаль", result: "+52%", text: "Жеке жоспар мен ментор қолдауының арқасында теориялық турдағы нәтижесін екі есе арттырды." },
  { initials: "АБ", name: "Аружан Б.", city: "Шымкент · 10-сынып", badge: "II орын", result: "+38%", text: "Үш ай ішінде күрделі есептерді шешу жылдамдығын өсіріп, облыстық кезеңде жүлдегер атанды." },
];

const faqs = [
  ["Курс кімдерге арналған?", "8–11 сынып оқушыларына, химия олимпиадаларына немесе академиялық емтихандарға жүйелі дайындалғысы келетін оқушыларға арналған."],
  ["Сабақтар қалай өтеді?", "Платформада видео сабақ, қысқа конспект, интерактивті тапсырма және апталық сынақ болады. Ментор оқу жоспарын бақылап, кері байланыс береді."],
  ["Дайындықты нөлден бастауға бола ма?", "Иә. Алғашқы диагностикадан кейін деңгейің анықталып, базадан олимпиадалық деңгейге дейін жеке маршрут құрылады."],
  ["Курсқа қалай қосыламын?", "Өтінім қалдырыңыз. Командамыз сізбен байланысып, деңгейді анықтау мен ыңғайлы тарифті таңдауға көмектеседі."],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="ALTYN School басты бет">
      <span className="brand-mark">A</span>
      <span><b>ALTYN</b><small>chemistry olympiad</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-button" aria-label="Мәзірді ашу" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Негізгі мәзір">
            <a href="#platform" onClick={() => setMenuOpen(false)}>Платформа</a>
            <a href="#advantages" onClick={() => setMenuOpen(false)}>Артықшылықтар</a>
            <a href="#results" onClick={() => setMenuOpen(false)}>Нәтижелер</a>
            <a href="#tariffs" onClick={() => setMenuOpen(false)}>Тарифтер</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-ghost" href="#platform">LMS-ке кіру</a>
            <a className="button button-small" href="#contact">Курсқа жазылу</a>
          </div>
        </div>
      </header>

      <section className="hero section">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> #1 ОЛИМПИАДАЛЫҚ ОНЛАЙН МЕКТЕП</div>
            <h1>Химияны түсін. <em>Жеңіске</em> жүйелі дайындал.</h1>
            <p className="hero-lead">Қазақстанда химия олимпиадалары мен академиялық емтихандарға арналған біртұтас онлайн орта.</p>
            <div className="offer"><strong>4 айда</strong><span>олимпиадалық және академиялық деңгейіңді</span><b>+40%-ға арттыр</b></div>
            <div className="hero-buttons">
              <a className="button button-large" href="#contact">Тегін диагностика <span>→</span></a>
              <a className="text-link" href="#results"><i>▶</i> Нәтижелерді көру</a>
            </div>
            <div className="trust-row">
              <div className="mini-avatars"><span>Д</span><span>А</span><span>М</span><span>+</span></div>
              <p><b>1 500+ оқушы</b><br />ALTYN-мен бірге дамып келеді</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="ALTYN School оқушыларының нәтижелері">
            <div className="chem-symbol chem-one">H<sub>2</sub>O</div>
            <div className="chem-symbol chem-two">Au<small>79</small></div>
            <div className="visual-card main-student">
              <div className="student-portrait"><span>AT</span></div>
              <div className="student-info"><small>ALTYN STUDENT</small><strong>Айдана Т.</strong><span>Республикалық олимпиада</span></div>
            </div>
            <div className="floating-card medal-card"><span>🏅</span><div><strong>100+</strong><small>олимпиада жүлдегері</small></div></div>
            <div className="floating-card score-card"><span>↗</span><div><strong>+47%</strong><small>орташа прогресс</small></div></div>
            <div className="visual-ring ring-one" /><div className="visual-ring ring-two" />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="ALTYN School нәтижелері">
        <div className="container stats-grid">
          <div><strong>1 500<span>+</span></strong><p>түлек пен оқушы<br />3 жыл ішінде</p></div>
          <div><strong>100<span>+</span></strong><p>олимпиада<br />жүлдегері</p></div>
          <div><strong>85,8<span>%</span></strong><p>оқушы нәтижесін<br />екі есе жақсартты</p></div>
          <div className="stats-note"><span>Қазақстан бойынша</span><b>Бір мақсат. Бір жүйе.</b></div>
        </div>
      </section>

      <section className="section platform" id="platform">
        <div className="container platform-grid">
          <div>
            <div className="section-kicker">ALTYN LMS</div>
            <h2>Бәрі бір <span>платформада</span></h2>
            <p className="section-lead">Сабақтан бастап, ментордың кері байланысына дейін — нәтижеңді өсіретін барлық құрал бір жерде.</p>
            <div className="platform-list">
              {platformItems.map(([icon, title, text]) => <article className="platform-item" key={title}><i>{icon}</i><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
          <div className="dashboard-wrap">
            <div className="dashboard">
              <div className="dash-top"><Brand /><span>Сәлем, Айдана! 👋</span></div>
              <div className="dash-body">
                <aside><i className="active">⌂</i><i>▤</i><i>◫</i><i>♙</i></aside>
                <div className="dash-content">
                  <div className="dash-heading"><div><small>ЖАЛПЫ ПРОГРЕСС</small><strong>Химия олимпиадасы</strong></div><span>12 апта</span></div>
                  <div className="progress-card"><div className="progress-ring"><b>78%</b></div><div><small>ОСЫ АПТАДА</small><b>+12% өсу</b><p>Тамаша нәтиже! Келесі мақсатқа 3 қадам қалды.</p></div></div>
                  <div className="lesson-row"><div><span>01</span><p><b>Органикалық химия</b><small>8 сабақ · 6 тест</small></p></div><em>86%</em></div>
                  <div className="lesson-row"><div><span>02</span><p><b>Термодинамика</b><small>6 сабақ · 4 тест</small></p></div><em>72%</em></div>
                </div>
              </div>
            </div>
            <div className="phone"><div className="phone-notch" /><small>Бүгінгі жоспар</small><strong>3 тапсырма</strong><div className="phone-progress"><span /></div><p>✓ Теориялық сабақ</p><p>✓ Тақырыптық тест</p><p>○ Ментормен талдау</p></div>
          </div>
        </div>
      </section>

      <section className="section features" id="advantages">
        <div className="container">
          <div className="section-heading centered"><div className="section-kicker">НЕЛІКТЕН ALTYN?</div><h2>Нәтижеге жеткізетін <span>6 артықшылық</span></h2><p className="section-lead">Біз жай ғана сабақ бермейміз — оқушының толық даму жүйесін құрамыз.</p></div>
          <div className="feature-grid">{features.map(([icon, title, text], index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><i>{icon}</i><h3>{title}</h3><p>{text}</p><span className="card-arrow">↗</span></article>)}</div>
        </div>
      </section>

      <section className="section results" id="results">
        <div className="container">
          <div className="section-heading split"><div><div className="section-kicker">ОҚУШЫЛАРЫМЫЗ</div><h2>Ең мықты дәлел — <span>нәтиже</span></h2></div><p className="section-lead">Әр нәтиженің артында тұрақты еңбек, ментор қолдауы және нақты жүйе тұр.</p></div>
          <div className="result-grid">
            {results.map((student, index) => <article className="result-card" key={student.name}>
              <div className={`result-photo photo-${index + 1}`}><div className="result-initials">{student.initials}</div><span className="result-badge">{student.badge}</span><b>{student.result}</b></div>
              <div className="result-content"><h3>{student.name}</h3><small>{student.city}</small><p>{student.text}</p><button type="button"><i>▶</i> Видео-пікірді көру</button></div>
            </article>)}
            <article className="result-card future-card"><span>＋</span><h3>Келесі жеңімпаз сен бол!</h3><p>Төртінші орын сенікі болуы мүмкін.</p><a href="#contact">Алғашқы қадамды жасау →</a></article>
          </div>
        </div>
      </section>

      <section className="section pricing" id="tariffs">
        <div className="container">
          <div className="section-heading centered"><div className="section-kicker">ТАРИФТЕР</div><h2>Өзіңе сай <span>форматты таңда</span></h2><p className="section-lead">Екі формат та сапалы білім береді. Айырмашылық — жеке қолдау деңгейінде.</p></div>
          <div className="pricing-grid">
            <article className="price-card"><div className="plan-icon">J</div><p className="plan-label">БАЗАЛЫҚ ДАЙЫНДЫҚ</p><h3>Junior</h3><p className="price-subtitle">Foundation Focus</p><div className="price"><strong>35 000</strong><span>₸ / ай</span></div><ul><li>Апталық олимпиадалық сынақ</li><li>Онлайн сабақтар мен конспект</li><li>Тақырыптық тесттер</li><li>Топтық ментор қолдауы</li><li>Прогресс есебі</li></ul><a className="button button-plan" href="#contact">Junior таңдау <span>→</span></a></article>
            <article className="price-card price-featured"><div className="top-choice">🔥 ТОП ТАҢДАУ</div><div className="plan-icon">P</div><p className="plan-label">ЖЕКЕ НӘТИЖЕГЕ ФОКУС</p><h3>Pro Mentor</h3><p className="price-subtitle">Olympiad Focus</p><div className="price"><strong>30 000</strong><span>₸ / ай</span></div><div className="saving">6 айлық пакетпен · 180 000 ₸</div><ul><li>Junior тарифінің барлық мүмкіндігі</li><li>Жеке ментормен оқу жоспары</li><li>Апталық 1-on-1 талдау</li><li>Қателермен жеке жұмыс</li><li>Байқауға дейін толық сүйемелдеу</li></ul><a className="button button-plan" href="#contact">Pro Mentor таңдау <span>→</span></a></article>
          </div>
          <p className="pricing-note">✦ Қай тарифті таңдарыңды білмесең, тегін диагностикадан өт — біз саған көмектесеміз.</p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><div className="section-kicker light-kicker">АЛҒАШҚЫ ҚАДАМ</div><h2>Олимпиадаға дайындықты <span>бүгін баста</span></h2><p>Өтінім қалдыр — оқу кеңесшісі саған хабарласып, тегін диагностикаға жазады.</p><div className="contact-points"><div><b>01</b><span><strong>Деңгейіңді анықтаймыз</strong><small>Қысқа диагностика арқылы</small></span></div><div><b>02</b><span><strong>Жеке жоспар құрамыз</strong><small>Мақсатың мен уақытыңа сай</small></span></div><div><b>03</b><span><strong>Нәтижеге бірге жетеміз</strong><small>Ментор қолдауы әр қадамда</small></span></div></div></div>
          <form className="contact-form" onSubmit={submitForm}>
            {sent ? <div className="success-message"><span>✓</span><h3>Өтінім қабылданды!</h3><p>Рақмет! Кеңесшіміз жақын арада сізбен байланысады.</p><button type="button" className="button" onClick={() => setSent(false)}>Тағы өтінім беру</button></div> : <>
              <span className="form-badge">ТЕГІН</span><h3>Диагностикаға жазылу</h3><p>Байланыс деректеріңізді қалдырыңыз</p>
              <label>Аты-жөніңіз<input required name="name" placeholder="Мысалы, Айдана" /></label>
              <label>Телефон нөмірі<div className="phone-input"><span>+7</span><input required name="phone" inputMode="tel" placeholder="700 000 00 00" /></div></label>
              <label>Сыныбыңыз<select name="grade" defaultValue=""><option value="" disabled>Сыныпты таңдаңыз</option><option>8-сынып</option><option>9-сынып</option><option>10-сынып</option><option>11-сынып</option></select></label>
              <button className="button button-large form-submit" type="submit">Тегін диагностикаға жазылу <span>→</span></button><small className="privacy">Батырманы басу арқылы дербес деректерді өңдеуге келісесіз</small>
            </>}
          </form>
        </div>
      </section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><div className="section-kicker">СҰРАҚТАР</div><h2>Жиі қойылатын <span>сұрақтар</span></h2><p className="section-lead">Жауап таппадыңыз ба? Бізге жазыңыз — көмектесеміз.</p><a className="text-link" href="#contact">Сұрақ қою →</a></div><div className="accordion">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item faq-open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i>+</i></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>

      <footer><div className="container footer-grid"><div><Brand light /><p>Химия олимпиадаларына жүйелі дайындық беретін Қазақстандағы заманауи онлайн мектеп.</p><div className="socials"><a href="#" aria-label="Instagram">in</a><a href="#" aria-label="Telegram">tg</a><a href="#" aria-label="YouTube">▶</a></div></div><div><h3>Навигация</h3><a href="#platform">Платформа</a><a href="#advantages">Артықшылықтар</a><a href="#results">Нәтижелер</a><a href="#tariffs">Тарифтер</a></div><div><h3>Байланыс</h3><a href="#contact">Кеңес алу</a><a href="#faq">Жиі қойылатын сұрақтар</a><span>Қазақстан · Онлайн</span></div><div className="footer-cta"><h3>Бірінші сабаққа дайынсың ба?</h3><a className="button" href="#contact">Тегін бастау →</a></div></div><div className="container footer-bottom"><span>© 2026 ALTYN School. Барлық құқық қорғалған.</span><a href="#top">Жоғарыға ↑</a></div></footer>
    </main>
  );
}
