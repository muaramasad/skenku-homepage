import styles from "./Hero.module.css";
import QRIllustration from "./QRIllustration";

export default function Hero() {
  return (
    <section className={styles.hero}>
<h1 className={styles.heading}>
        Secure QR code for<br />
        <em className={styles.accent}>every product</em>
      </h1>

      <p className={styles.subheading}>
        Protect your brand, showcase your products, and track real-time
        analytics — all through one scannable code.
      </p>

      <div className={styles.cta}>
        <a href="#" className={styles.btnPrimary}>Start for free →</a>
        <a href="#" className={styles.btnOutline}>See a demo</a>
      </div>

      <div className={styles.preview}>
        <div className={styles.qrBlock}>
          <QRIllustration />
        </div>
        <div className={styles.scanCard}>
          <p className={styles.prodName}>Nike Air Max 270 — SN #A82910</p>
          <p className={styles.meta}>Manufactured: Jan 2026 · Jakarta, ID</p>
          <span className={styles.verified}>
            <CheckIcon />
            Verified authentic
          </span>
        </div>
        <div className={styles.scanCard}>
          <div className={styles.scanCardRow}>
            <div>
              <p className={styles.prodName}>Scan analytics</p>
              <p className={styles.meta}>Last 7 days</p>
            </div>
            <div className={styles.statsRow}>
              <div>
                <div className={styles.statVal}>1,284</div>
                <div className={styles.statLbl}>total scans</div>
              </div>
              <div>
                <div className={styles.statVal}>14</div>
                <div className={styles.statLbl}>countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
