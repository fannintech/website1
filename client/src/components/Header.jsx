import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { mainNav } from "../data/navigation.js";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Logo />
        <nav className={styles.desktop} aria-label="Primary">
          {mainNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button to="/contact">Get in Touch</Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className={styles.mobile} aria-label="Mobile">
          {mainNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" onClick={() => setOpen(false)}>
            Get in Touch
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
