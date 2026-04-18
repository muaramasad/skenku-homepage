"use client";

import styles from "./HowItWorks.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function HowItWorks() {
  const { lang } = useLanguage();
  const tr = t[lang].howItWorks;

  return (
    <section className={styles.section}>
      <p className={styles.label}>{tr.label}</p>
      <h2 className={styles.heading}>{tr.heading}</h2>
      <p className={styles.sub}>{tr.sub}</p>
      <div className={styles.grid}>
        {tr.steps.map((s) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
