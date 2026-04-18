"use client";

import styles from "./Pricing.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  const { lang } = useLanguage();
  const tr = t[lang].pricing;

  return (
    <section className={styles.section} id="pricing">
      <p className={styles.label}>{tr.label}</p>
      <h2 className={styles.heading}>{tr.heading}</h2>
      <p className={styles.sub}>{tr.sub}</p>
      <div className={styles.grid}>
        {tr.plans.map((plan) => (
          <div key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}>
            {plan.featured && <span className={styles.badge}>{tr.most_popular}</span>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.price}>
              {plan.price}
              {plan.period && <span className={styles.period}>{plan.period}</span>}
            </div>
            <p className={styles.planDesc}>{plan.description}</p>
            <ul className={styles.featureList}>
              {plan.features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <div className={styles.check}><CheckIcon /></div>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className={`${styles.planBtn} ${plan.featured ? styles.planBtnPrimary : styles.planBtnOutline}`}>
              {plan.price === "Custom" || plan.price === "Kustom" ? tr.contact_sales : tr.get_started}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
