import styles from "./Analytics.module.css";

const rows = [
  { name: "Jakarta, ID", pct: 82, count: "1,891" },
  { name: "Kuala Lumpur, MY", pct: 55, count: "1,204" },
  { name: "Singapore, SG", pct: 38, count: "834" },
  { name: "Surabaya, ID", pct: 20, count: "441" },
  { name: "Other", pct: 9, count: "208" },
];

export default function Analytics() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Analytics</p>
      <h2 className={styles.heading}>Know your product&apos;s journey</h2>
      <p className={styles.sub}>
        Every scan tells a story. skenku turns scan data into actionable intelligence.
      </p>
      <div className={styles.demo}>
        <div className={styles.demoHeader}>
          <span className={styles.demoTitle}>Top scan locations — last 30 days</span>
          <span className={styles.demoTotal}>4,812 total scans</span>
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
