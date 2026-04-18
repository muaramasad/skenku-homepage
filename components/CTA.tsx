"use client";

import styles from "./CTA.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function CTA() {
  const { lang } = useLanguage();
  const tr = t[lang].cta;

  return (
    <section className={styles.band}>
      <h2 className={styles.heading}>{tr.heading}</h2>
      <p className={styles.sub}>{tr.sub}</p>
      <a href="#" className={styles.btn}>{tr.btn}</a>
    </section>
  );
}
