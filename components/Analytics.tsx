"use client";

import styles from "./Analytics.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const rows = [
  { name: "Jakarta, ID", pct: 82, count: "1,891" },
  { name: "Kuala Lumpur, MY", pct: 55, count: "1,204" },
  { name: "Singapore, SG", pct: 38, count: "834" },
  { name: "Surabaya, ID", pct: 20, count: "441" },
  { name: "Other", pct: 9, count: "208" },
];

export default function Analytics() {
  const { lang } = useLanguage();
  const tr = t[lang].analytics;

  return (
    <section className={styles.section}>
      <p className={styles.label}>{tr.label}</p>
      <h2 className={styles.heading}>{tr.heading}</h2>
      <p className={styles.sub}>{tr.sub}</p>
      <div className={styles.demo}>
        <div className={styles.demoHeader}>
          <span className={styles.demoTitle}>{tr.demo_title}</span>
          <span className={styles.demoTotal}>{tr.demo_total}</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className={styles.row}>
            <span className={styles.name}>{r.name}</span>
            <div className={styles.barWrap}>
              <div className={styles.bar} style={{ width: `${r.pct}%` }} />
            </div>
            <span className={styles.count}>{r.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
