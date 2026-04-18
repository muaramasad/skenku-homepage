import styles from "./Stats.module.css";

const stats = [
  { value: "12M+", label: "QR scans tracked" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Brands protected" },
  { value: "<200ms", label: "Scan response" },
];

export default function Stats() {
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
