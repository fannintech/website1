import PageHero from "../components/PageHero.jsx";
import Services from "../sections/Services.jsx";
import Button from "../components/Button.jsx";
import { useScrollTop } from "../hooks/useScrollTop.js";
import styles from "./ServicePage.module.css";

export default function ITServices() {
  useScrollTop();

  return (
    <>
      <PageHero
        eyebrow="IT Services"
        title="IT services designed around your business."
        description="Practical support and security for the systems your team depends on every day, from cybersecurity and cloud to networks, consulting, and backup."
        primaryCta={{ to: "/contact", label: "Contact Us" }}
        secondaryCta={{ to: "/managed-it", label: "View Managed IT" }}
      />
      <Services hideIntro />
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <p>Tell us what is getting in the way and we will help you sort the next step.</p>
          <Button to="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
