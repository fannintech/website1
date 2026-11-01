import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (to) {
    return (
      <Link className={className} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
