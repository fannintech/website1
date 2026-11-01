import {
  Cloud,
  DatabaseBackup,
  Headset,
  Network,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Managed IT Services",
    description:
      "Proactive IT monitoring, maintenance, troubleshooting, and ongoing technology support.",
    icon: Headset,
  },
  {
    title: "Cybersecurity",
    description:
      "Security solutions designed to protect business systems, networks, and sensitive information.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, Microsoft 365 support, cloud migration, and management.",
    icon: Cloud,
  },
  {
    title: "Network Management",
    description:
      "Network configuration, monitoring, optimization, and troubleshooting.",
    icon: Network,
  },
  {
    title: "IT Consulting",
    description:
      "Technology planning, infrastructure improvements, and strategic IT guidance.",
    icon: Waypoints,
  },
  {
    title: "Backup & Disaster Recovery",
    description:
      "Data protection, backup management, and business continuity planning.",
    icon: DatabaseBackup,
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-intro">
          <h2>IT Services Designed Around Your Business</h2>
          <p>
            Practical support and security for the systems your team depends on every day.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.icon} aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
