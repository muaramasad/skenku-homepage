"use client";

import styles from "./Footer.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t, Lang } from "@/lib/translations";

const languages = [
  { code: "en" as Lang, label: "🇺🇸 English" },
  { code: "id" as Lang, label: "🇮🇩 Indonesia" },
];

export default function Footer() {
  const { lang, setLang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          sken<span>ku</span>
        </div>
        <nav className={styles.links}>
          {tr.links.map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </nav>
        <div className={styles.right}>
          <div className={styles.langWrapper}>
            <GlobeIcon />
            <select
              className={styles.langSelect}
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>
          <p className={styles.copy}>{tr.copy}</p>
        </div>
      </div>
    </footer>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
