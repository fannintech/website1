import type { NavItem } from "@/types";

export const serviceNav: NavItem[] = [
  {
    label: "Managed IT Services",
    href: "/services/managed-it",
    description: "Proactive IT management for growing businesses",
  },
  {
    label: "Co-Managed IT",
    href: "/services/co-managed-it",
    description: "Partnership support for internal IT teams",
  },
  {
    label: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Security built around your business risk",
  },
  {
    label: "Cloud & Microsoft 365",
    href: "/services/cloud-microsoft-365",
    description: "Cloud productivity, migration, and management",
  },
  {
    label: "Backup & Disaster Recovery",
    href: "/services/backup-disaster-recovery",
    description: "Protect data and keep operations recoverable",
  },
  {
    label: "Network & Infrastructure",
    href: "/services/network-infrastructure",
    description: "Reliable networks, Wi-Fi, and infrastructure",
  },
  {
    label: "IT Projects",
    href: "/services/it-projects",
    description: "Migrations, deployments, and technology upgrades",
  },
];

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: serviceNav,
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: serviceNav,
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing / Plans", href: "/pricing" },
    { label: "Schedule a Consultation", href: "/schedule-consultation" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};
