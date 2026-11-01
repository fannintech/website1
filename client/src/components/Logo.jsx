import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`${styles.logo} ${className}`} aria-label="Fannin Technologies home">
      <img
        src="/assets/fannin-technologies-logo-alt.png"
        alt="Fannin Technologies — Your Technology Partner"
        width="210"
        height="59"
      />
    </Link>
  );
}
