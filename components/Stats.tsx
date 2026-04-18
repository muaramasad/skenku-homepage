"use client";

import styles from "./Stats.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Stats() {
  const { lang } = useLanguage();
  const stats = t[lang].stats;

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.val}>{s.value}</div>
            <div className={styles.lbl}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
