import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { company } from "../config.js";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Managed IT Services", href: "/#services" },
  { label: "Cybersecurity", href: "/#services" },
  { label: "Cloud Solutions", href: "/#services" },
  { label: "Network Management", href: "/#services" },
  { label: "IT Consulting", href: "/#services" },
  { label: "Backup & Disaster Recovery", href: "/#services" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.logoWrap}>
            <Logo />
          </div>
          <p className={styles.blurb}>
            Managed IT services, cybersecurity, and practical technology support
            for businesses that need reliable systems and a partner they can count on.
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className={styles.contact}>
            {company.email ? <li>{company.email}</li> : null}
            {company.phone ? <li>{company.phone}</li> : null}
            {company.address ? <li>{company.address}</li> : null}
            {!company.email && !company.phone && !company.address ? (
              <li>Contact details can be added through environment configuration.</li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Fannin Technologies. All rights reserved.</p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
