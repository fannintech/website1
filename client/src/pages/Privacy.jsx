import { useEffect } from "react";
import styles from "./Privacy.module.css";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="section">
      <div className={`container ${styles.page}`}>
        <h1>Privacy Policy</h1>
        <p>
          Fannin Technologies uses information submitted through this website to
          respond to inquiries and provide requested services.
        </p>
        <h2>Information we collect</h2>
        <p>
          The contact form may collect your name, company, email address, phone
          number, subject, and message.
        </p>
        <h2>How information is used</h2>
        <p>
          Submissions are stored so we can follow up on your request. We do not
          sell this information.
        </p>
        <h2>Questions</h2>
        <p>
          Use the contact form on the homepage for privacy questions until
          verified contact details are published.
        </p>
      </div>
    </section>
  );
}
