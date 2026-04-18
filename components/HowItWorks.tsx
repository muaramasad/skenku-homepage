import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01 — Register",
    title: "Create a product profile",
    description: "Add product details, photos, and documents. skenku generates a unique signed QR code.",
  },
  {
    num: "02 — Attach",
    title: "Print & apply",
    description: "Download and print the QR code. Apply it to packaging, tags, or the product itself.",
  },
  {
    num: "03 — Scan",
    title: "Instant verification",
    description: "Any smartphone camera verifies authenticity in under a second — no app required.",
  },
  {
    num: "04 — Monitor",
    title: "Track & act",
    description: "View real-time scan data, detect anomalies, and update product content on the fly.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>How it works</p>
      <h2 className={styles.heading}>Up and running in minutes</h2>
      <p className={styles.sub}>No special hardware. No complex setup. Generate, print, and protect.</p>
      <div className={styles.grid}>
        {steps.map((s) => (
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
