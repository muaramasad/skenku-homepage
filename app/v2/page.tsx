"use client";

import { useEffect, useRef, useState } from "react";
import s from "./page.module.css";
import { t } from "@/lib/translations";

const stepIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" fill="none" stroke="#0f172a" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" fill="none" stroke="#0f172a" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" fill="none" stroke="#0f172a" strokeWidth="1.5"/><rect x="12" y="12" width="3" height="3" rx="0.5" fill="#0f172a"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="6" y="2" width="8" height="14" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5"/><line x1="10" y1="14" x2="10" y2="14" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" fill="none" stroke="#0f172a" strokeWidth="1.5"/><polyline points="7,10 9.5,12.5 13.5,7.5" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 20 20" fill="none"><polyline points="2,14 6,9 9,11 13,5 18,8" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="9" r="1.5" fill="#0f172a" opacity="0.4"/><circle cx="13" cy="5" r="1.5" fill="#0f172a" opacity="0.4"/></svg>,
];

const featIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="8" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.8"/><rect x="12" y="2" width="8" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.8"/><rect x="2" y="12" width="8" height="8" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.8"/><rect x="13" y="13" width="3" height="3" rx="0.5" fill="#0f172a"/><rect x="17" y="13" width="3" height="3" rx="0.5" fill="#0f172a"/><rect x="13" y="17" width="3" height="3" rx="0.5" fill="#0f172a"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L20 6V12Q20 18 11 21Q2 18 2 12V6Z" fill="none" stroke="#0f172a" strokeWidth="1.8"/><polyline points="7,11 10,14 15,9" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="5" width="18" height="14" rx="2.5" fill="none" stroke="#0f172a" strokeWidth="1.8"/><line x1="2" y1="10" x2="20" y2="10" stroke="#0f172a" strokeWidth="1.5"/><line x1="7" y1="2" x2="7" y2="8" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round"/><line x1="15" y1="2" x2="15" y2="8" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none"><polyline points="2,16 7,10 11,13 15,6 20,9" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7" cy="10" r="2" fill="#0f172a" opacity="0.3"/><circle cx="15" cy="6" r="2" fill="#0f172a" opacity="0.3"/></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" fill="none" stroke="#0f172a" strokeWidth="1.8"/><path d="M3 20C3 16.7 6.6 14 11 14C15.4 14 19 16.7 19 20" fill="none" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="6" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="3" width="14" height="16" rx="2.5" fill="none" stroke="#0f172a" strokeWidth="1.8"/><line x1="7" y1="8" x2="15" y2="8" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="12" x2="13" y2="12" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

export default function V2() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<"en" | "id">("en");
  const tr = t[lang].v2;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
          (e.target as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
      });
    }, { threshold: 0.1 });

    pageRef.current?.querySelectorAll<HTMLElement>(
      `.${s.featCard}, .${s.step}, .${s.priceCard}, .${s.statNum}`
    ).forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      observer.observe(el);
    });

    return () => { observer.disconnect(); };
  }, []);

  return (
    <div className={s.page} ref={pageRef}>

      {/* NAV */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="#" className={s.navLogo}>skenku</a>
          <ul className={s.navLinks}>
            <li><a href="#how">{tr.nav.how}</a></li>
            <li><a href="#features">{tr.nav.features}</a></li>
            <li><a href="#waitlist">{tr.nav.early_access}</a></li>
          </ul>
          <div className={s.langToggle}>
            <button onClick={() => setLang("en")} className={`${s.langBtn} ${lang === "en" ? s.langBtnActive : ""}`}>EN</button>
            <button onClick={() => setLang("id")} className={`${s.langBtn} ${lang === "id" ? s.langBtnActive : ""}`}>ID</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className={s.heroGridLines} />
        <div className={s.heroInner}>
          <div>
            <h1 className={s.heroH1}>
              {tr.hero.heading} <em>{tr.hero.accent}</em>.
            </h1>
            <p className={s.heroSub}>{tr.hero.sub}</p>
            <div className={s.heroActions}>
              <a href="#waitlist" className={s.btnPrimary}>{tr.hero.btn_primary}</a>
              <a href="#how" className={s.btnGhost}>{tr.hero.btn_ghost}</a>
            </div>
          </div>
          <div className={s.heroVisual}>
            <svg viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="20" width="220" height="340" rx="28" fill="white" stroke="#E8EAED" strokeWidth="2"/>
              <rect x="68" y="28" width="204" height="324" rx="22" fill="#F1F3F7"/>
              <rect x="80" y="50" width="180" height="280" rx="16" fill="white"/>
              <rect x="80" y="50" width="180" height="48" rx="16" fill="#000000"/>
              <rect x="80" y="78" width="180" height="20" fill="#000000"/>
              <text x="170" y="80" fontFamily="sans-serif" fontSize="11" fill="white" textAnchor="middle" fontWeight="600">Your Product</text>
              <rect x="95" y="112" width="150" height="150" rx="10" fill="#E8EAED"/>
              <rect x="108" y="124" width="30" height="30" rx="4" fill="none" stroke="#0f172a" strokeWidth="3"/>
              <rect x="202" y="124" width="30" height="30" rx="4" fill="none" stroke="#0f172a" strokeWidth="3"/>
              <rect x="108" y="208" width="30" height="30" rx="4" fill="none" stroke="#0f172a" strokeWidth="3"/>
              <line x1="98" y1="187" x2="242" y2="187" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 3" opacity="0.7"/>
              <rect x="148" y="128" width="8" height="8" rx="1" fill="#0f172a" opacity="0.5"/>
              <rect x="162" y="128" width="8" height="8" rx="1" fill="#0f172a" opacity="0.5"/>
              <rect x="176" y="128" width="8" height="8" rx="1" fill="#0f172a" opacity="0.7"/>
              <rect x="148" y="142" width="8" height="8" rx="1" fill="#0f172a" opacity="0.7"/>
              <rect x="162" y="142" width="8" height="8" rx="1" fill="#0f172a" opacity="0.4"/>
              <rect x="176" y="156" width="8" height="8" rx="1" fill="#0f172a" opacity="0.6"/>
              <rect x="192" y="156" width="8" height="8" rx="1" fill="#0f172a" opacity="0.5"/>
              <rect x="148" y="156" width="8" height="8" rx="1" fill="#0f172a" opacity="0.8"/>
              <rect x="192" y="170" width="8" height="8" rx="1" fill="#0f172a" opacity="0.6"/>
              <rect x="162" y="170" width="8" height="8" rx="1" fill="#0f172a" opacity="0.5"/>
              <rect x="88" y="274" width="164" height="48" rx="10" fill="#059669"/>
              <circle cx="110" cy="298" r="12" fill="rgba(255,255,255,0.2)"/>
              <polyline points="104,298 109,303 117,292" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="127" y="294" fontFamily="sans-serif" fontSize="10" fill="white" fontWeight="700">Authentic Product</text>
              <text x="127" y="308" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,0.75)">Verified · 2 sec ago</text>
              <rect x="204" y="38" width="68" height="22" rx="11" fill="#EF4444"/>
              <circle cx="216" cy="49" r="3" fill="white" opacity="0.9"/>
              <text x="244" y="53" fontFamily="sans-serif" fontSize="8.5" fill="white" textAnchor="middle" fontWeight="600">VERIFYING</text>
            </svg>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={s.how} id="how">
        <div className={s.sectionInner}>
          <p className={s.sectionTag}>{tr.how.tag}</p>
          <h2 className={s.sectionTitle}>{tr.how.title}</h2>
          <p className={s.sectionSub}>{tr.how.sub}</p>
          <div className={s.steps}>
            {tr.how.steps.map((step, i) => (
              <div key={step.num} className={s.step}>
                <div className={s.stepIcon}>{stepIcons[i]}</div>
                <div className={s.stepNum}>{step.num}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={s.section} id="features">
        <div className={s.sectionInner}>
          <p className={s.sectionTag}>{tr.features.tag}</p>
          <h2 className={s.sectionTitle}>{tr.features.title}</h2>
          <p className={s.sectionSub}>{tr.features.sub}</p>
          <div className={s.featuresGrid}>
            {tr.features.items.map((f, i) => (
              <div key={f.title} className={s.featCard}>
                <div className={s.featIcon}>{featIcons[i]}</div>
                <h3 className={s.featTitle}>{f.title}</h3>
                <p className={s.featDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className={s.waitlistSection} id="waitlist">
        <div className={s.waitlistInner}>
          <div className={s.waitlistBadge}>{tr.waitlist.badge}</div>
          <h2 className={s.waitlistH2}>{tr.waitlist.heading}</h2>
          <p className={s.waitlistP}>{tr.waitlist.p}</p>
          <div className={s.waitlistForm}>
            <input type="email" placeholder="your@brand.com" className={s.waitlistInput} />
            <button type="button" className={s.waitlistBtn}>{tr.waitlist.btn}</button>
          </div>
          <p className={s.waitlistNote}>{tr.waitlist.note}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <a href="#" className={s.footerLogo}>skenku</a>
          <p className={s.footerCopy}>{tr.footer.copy}</p>
        </div>
      </footer>

    </div>
  );
}
