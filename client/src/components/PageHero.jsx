import Button from "./Button.jsx";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className={styles.lead}>{description}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className={styles.actions}>
            {primaryCta ? <Button to={primaryCta.to}>{primaryCta.label}</Button> : null}
            {secondaryCta ? (
              <Button to={secondaryCta.to} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
