import { Briefcase, Headphones, Shield } from "lucide-react";
import styles from "./About.module.css";

const values = [
  {
    title: "Reliable Support",
    text: "Clear communication and dependable help when technology needs attention.",
    icon: Headphones,
  },
  {
    title: "Proactive Approach",
    text: "Issues are identified and addressed before they interrupt the workday.",
    icon: Shield,
  },
  {
    title: "Business-Focused Solutions",
    text: "Recommendations stay practical, understandable, and aligned with your goals.",
    icon: Briefcase,
  },
];

export default function About({ hideIntro = false }) {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {hideIntro ? null : (
          <div className="section-intro">
            <h2>Technology You Can Depend On.</h2>
            <p>
              Fannin Technologies helps businesses simplify IT management and get more
              from their technology investments. We focus on reliable solutions,
              proactive support, and practical technology strategies that allow our
              clients to focus on running their businesses.
            </p>
          </div>
        )}
        <div className={styles.values}>
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card}>
                <Icon size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
