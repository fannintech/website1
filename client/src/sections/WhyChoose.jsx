import { CheckCircle2 } from "lucide-react";
import styles from "./WhyChoose.module.css";

const points = [
  "Proactive technology management",
  "Security-conscious IT practices",
  "Personalized business solutions",
  "Reliable technical support",
  "A focus on minimizing downtime",
  "AI solutions that improve productivity and provide a competitive advantage",
];

export default function WhyChoose() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <div>
          <h2>Why Choose Fannin Technologies?</h2>
          <p>
            A technology partner should make IT simpler, more secure, and easier
            to manage—not more complicated.
          </p>
        </div>
        <ul className={styles.list}>
          {points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
