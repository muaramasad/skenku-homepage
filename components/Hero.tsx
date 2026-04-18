"use client";

import styles from "./Hero.module.css";
import QRIllustration from "./QRIllustration";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const tr = t[lang].hero;

  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        {tr.heading}<br />
        <em className={styles.accent}>{tr.accent}</em>
      </h1>

      <p className={styles.subheading}>{tr.subheading}</p>

      <div className={styles.cta}>
        <a href="#" className={styles.btnPrimary}>{tr.cta_primary}</a>
      </div>

      <div className={styles.preview}>
        <div className={styles.qrBlock}>
          <QRIllustration />
        </div>
        <div className={styles.scanCard}>
          <div className={styles.verifiedBanner}>
            <div className={styles.verifiedLeft}>
              <ShieldIcon />
              <span>{tr.verified}</span>
            </div>
            <span className={styles.liveDot} />
          </div>
          <p className={styles.prodName}>Nike Air Max 270</p>
          <p className={styles.snText}>SN #A82910</p>
          <div className={styles.metaRow}>
            <ActivityIcon />
            <p className={styles.meta}>{tr.scan_activity}</p>
          </div>
        </div>
        <div className={styles.scanCard}>
          <div className={styles.analyticsHeader}>
            <p className={styles.prodName}>{tr.scan_analytics}</p>
            <span className={styles.periodBadge}>{tr.last_7_days}</span>
          </div>
          <div className={styles.analyticsDivider} />
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <ScanIcon />
              </div>
              <div className={styles.statVal}>1,284</div>
              <div className={styles.statLbl}>{tr.total_scans}</div>
              <div className={styles.statTrend}>↑ 12%</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statIcon}>
                <GlobeIcon />
              </div>
              <div className={styles.statVal}>14</div>
              <div className={styles.statLbl}>{tr.countries}</div>
              <div className={styles.statTrend}>↑ 3 {tr.new_label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 13l-3-3 1.41-1.41L11 11.17l4.59-4.58L17 8l-6 6z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
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

