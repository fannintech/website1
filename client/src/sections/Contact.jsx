import { useState } from "react";
import Button from "../components/Button.jsx";
import { contactEndpoint } from "../config.js";
import styles from "./Contact.module.css";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone && !/^[0-9+().\-\s]{7,30}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please include a brief message.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch(contactEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message || "Unable to send your message right now. Please try again.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(data.message || "Thank you. Your message has been sent.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("Unable to send your message right now. Please try again.");
    }
  };

  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <h2>Send a message</h2>
          <p className={styles.lead}>
            Share a few details and we will follow up. Do not include passwords
            or other sensitive credentials in your message.
          </p>
        </div>
        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={styles.row}>
            <Field label="Name" name="name" value={values.name} onChange={onChange} error={errors.name} required />
            <Field label="Company" name="company" value={values.company} onChange={onChange} error={errors.company} required />
          </div>
          <div className={styles.row}>
            <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} required />
            <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={onChange} error={errors.phone} optional />
          </div>
          <Field label="Subject" name="subject" value={values.subject} onChange={onChange} error={errors.subject} required />
          <Field
            label="Message"
            name="message"
            as="textarea"
            value={values.message}
            onChange={onChange}
            error={errors.message}
            required
          />
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={onChange}
            />
          </div>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
          <p className={styles.status} role="status" aria-live="polite">
            {status === "success" ? <span className={styles.success}>{serverMessage}</span> : null}
            {status === "error" ? <span className={styles.error}>{serverMessage}</span> : null}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  required = false,
  optional = false,
}) {
  const id = `contact-${name}`;
  const Control = as;

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {optional ? <span> (optional)</span> : null}
      </label>
      <Control
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === "textarea" ? 5 : undefined}
      />
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
