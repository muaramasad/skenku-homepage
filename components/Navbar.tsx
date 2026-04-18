"use client";

import styles from "./Navbar.module.css";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { lang } = useLanguage();
  const tr = t[lang].navbar;

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          sken<span>ku</span>
        </div>
        <div className={styles.cta}>
          <a href="#" className={styles.btnOutline}>{tr.login}</a>
        </div>
      </div>
    </nav>
  );
}
