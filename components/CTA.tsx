import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.band}>
      <h2 className={styles.heading}>Ready to protect your products?</h2>
      <p className={styles.sub}>
        Join 500+ brands using skenku to fight counterfeits and understand their customers.
      </p>
      <a href="#" className={styles.btn}>
        Get started for free →
      </a>
    </section>
  );
}
