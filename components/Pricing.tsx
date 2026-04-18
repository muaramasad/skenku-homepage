import styles from "./Pricing.module.css";

type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "/ forever",
    description: "For small brands getting started with product authentication.",
    features: [
      "Up to 50 products",
      "Basic analytics",
      "Standard QR design",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$49",
    period: "/ mo",
    description: "For growing brands that need full analytics and anti-counterfeit protection.",
    features: [
      "Up to 5,000 products",
      "Full scan analytics",
      "Custom QR branding",
      "Tamper alerts",
      "API access",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large manufacturers with complex supply chain requirements.",
    features: [
      "Unlimited products",
      "Geo intelligence",
      "SSO & advanced roles",
      "Dedicated support",
      "SLA guarantee",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="8"
      height="8"
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

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <p className={styles.label}>Pricing</p>
      <h2 className={styles.heading}>Simple, transparent pricing</h2>
      <p className={styles.sub}>Start free, scale as you grow. No per-scan fees ever.</p>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}
          >
            {plan.featured && (
              <span className={styles.badge}>Most popular</span>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.price}>
              {plan.price}
              {plan.period && (
                <span className={styles.period}>{plan.period}</span>
              )}
            </div>
            <p className={styles.planDesc}>{plan.description}</p>
            <ul className={styles.featureList}>
              {plan.features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <div className={styles.check}>
                    <CheckIcon />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`${styles.planBtn} ${plan.featured ? styles.planBtnPrimary : styles.planBtnOutline}`}
            >
              {plan.price === "Custom" ? "Contact sales" : "Get started"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
