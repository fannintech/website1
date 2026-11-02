import { Link } from "react-router-dom";
import Hero from "../sections/Hero.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import Button from "../components/Button.jsx";
import { useScrollTop } from "../hooks/useScrollTop.js";
import styles from "./Home.module.css";

export default function Home() {
  useScrollTop();

  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <h2>How we can help</h2>
            <p>
              Choose a complete managed IT partnership or focused technology
              services based on what your business needs right now.
            </p>
          </div>
          <div className={styles.cards}>
            <article className={styles.card}>
              <h3>Managed IT</h3>
              <p>
                Ongoing monitoring, maintenance, and support so technology stays
                reliable and your team can stay focused on the business.
              </p>
              <Link to="/managed-it">Learn about Managed IT</Link>
            </article>
            <article className={styles.card}>
              <h3>IT Services</h3>
              <p>
                Cybersecurity, cloud, network, consulting, and backup services
                designed around practical business outcomes.
              </p>
              <Link to="/it-services">View IT Services</Link>
            </article>
          </div>
        </div>
      </section>
      <WhyChoose />
      <section className="section">
        <div className={`container ${styles.ctaBlock}`}>
          <h2>Ready to talk through your technology needs?</h2>
          <p className={styles.ctaCopy}>
            Tell us about your environment and we will follow up to start the conversation.
          </p>
          <Button to="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
