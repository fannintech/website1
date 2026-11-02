import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { company } from "../config.js";
import { footerOfferings, mainNav } from "../data/navigation.js";
import styles from "./Footer.module.css";

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
            {mainNav.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Offerings</h2>
          <ul>
            {footerOfferings.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
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
              <li>
                <Link to="/contact">Use the contact form to get in touch.</Link>
              </li>
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
