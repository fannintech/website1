import Button from "../components/Button.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Fannin Technologies</p>
        <h1>Technology Solutions That Keep Your Business Moving.</h1>
        <p className={styles.lead}>
          Fannin Technologies provides dependable managed IT services,
          cybersecurity, and technology solutions that help businesses operate
          efficiently, securely, and confidently.
        </p>
        <div className={styles.actions}>
          <Button href="#contact">Contact Us</Button>
          <Button href="#services" variant="secondary">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
