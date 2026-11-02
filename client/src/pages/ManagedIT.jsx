import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Button from "../components/Button.jsx";
import { useScrollTop } from "../hooks/useScrollTop.js";
import styles from "./ServicePage.module.css";

const items = [
  "Proactive monitoring and maintenance",
  "Help desk troubleshooting and remote support",
  "Patch and endpoint management",
  "On-site support when it is needed",
  "Vendor coordination",
  "Practical guidance for day-to-day technology decisions",
];

export default function ManagedIT() {
  useScrollTop();

  return (
    <>
      <PageHero
        eyebrow="Managed IT"
        title="Managed IT that keeps your systems working."
        description="Fannin Technologies provides proactive IT monitoring, maintenance, troubleshooting, and ongoing technology support so your team can stay focused on the business."
        primaryCta={{ to: "/contact", label: "Contact Us" }}
        secondaryCta={{ to: "/it-services", label: "View IT Services" }}
      />
      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div>
            <h2>What managed IT includes</h2>
            <p>
              A managed IT partnership is designed for businesses that want one
              team accountable for keeping technology reliable, secure, and
              easier to manage.
            </p>
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <h2>Need a technology partner, not just a ticket queue?</h2>
          <p>We can review your current environment and recommend a practical next step.</p>
          <Button to="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
