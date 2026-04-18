import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          sken<span>ku</span>
        </div>
        {/* <div className={styles.links}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div> */}
        <div className={styles.cta}>
          <a href="#" className={styles.btnOutline}>Log in</a>
          <a href="#" className={styles.btnPrimary}>Get started</a>
        </div>
      </div>
    </nav>
  );
}
