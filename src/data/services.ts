import type { ServiceCategory } from "@/types";

export const services: ServiceCategory[] = [
  {
    id: "managed-it",
    title: "Managed IT Services",
    shortTitle: "Managed IT",
    href: "/services/managed-it",
    description:
      "Day-to-day IT support and proactive management so your team can stay focused on the business.",
    longDescription:
      "Fannin Technologies manages your technology environment end to end—help desk, monitoring, patching, endpoints, networks, and strategic guidance—so issues are addressed before they disrupt work.",
    icon: "MonitorSmartphone",
    features: [
      "Fully managed IT",
      "Help desk and remote support",
      "On-site support when needed",
      "Proactive monitoring",
      "Patch and endpoint management",
      "Network and server management",
      "IT strategy and vCIO guidance",
    ],
    benefits: [
      "Fewer surprises and less downtime",
      "Predictable technology support",
      "A single partner accountable for outcomes",
      "Guidance aligned to business priorities",
    ],
    faqs: [
      {
        question: "What does managed IT include?",
        answer:
          "Managed IT typically covers help desk support, monitoring, patching, endpoint and network management, and ongoing technology guidance tailored to your business.",
      },
      {
        question: "Is managed IT only for companies without an IT person?",
        answer:
          "No. Some businesses need full management; others pair us with an internal team through co-managed IT. We match the model to your needs.",
      },
    ],
  },
  {
    id: "co-managed-it",
    title: "Co-Managed IT",
    shortTitle: "Co-Managed IT",
    href: "/services/co-managed-it",
    description:
      "Extra capacity, specialized skills, and after-hours coverage that strengthen your internal IT team.",
    longDescription:
      "Co-managed IT lets your internal team keep ownership while Fannin Technologies adds monitoring, cybersecurity depth, project capacity, and reliable escalation support.",
    icon: "Users",
    features: [
      "Shared responsibility with your IT staff",
      "Monitoring and alerting support",
      "Security tooling and expertise",
      "Project and overflow capacity",
      "Documentation and process support",
      "Vendor coordination assistance",
    ],
    benefits: [
      "Reduce burnout on lean IT teams",
      "Fill skill gaps without adding headcount",
      "Improve response and coverage",
      "Keep strategic control in-house",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    href: "/services/cybersecurity",
    description:
      "Practical security controls that reduce risk without slowing your people down.",
    longDescription:
      "We help protect endpoints, email, identities, and cloud environments with monitoring, MFA, assessments, awareness training, and a clear plan for when something goes wrong.",
    icon: "ShieldCheck",
    features: [
      "Endpoint protection",
      "Managed detection and response",
      "Email security",
      "Identity security and MFA",
      "Vulnerability management",
      "Security assessments",
      "Security awareness training",
      "Incident response planning",
    ],
    benefits: [
      "Lower likelihood of costly incidents",
      "Stronger protection for customer and business data",
      "Clearer visibility into threats",
      "Security that supports daily operations",
    ],
    faqs: [
      {
        question: "Do small businesses really need managed cybersecurity?",
        answer:
          "Yes. Smaller organizations are frequent targets because attackers assume defenses are lighter. Practical controls and monitoring make a meaningful difference.",
      },
    ],
  },
  {
    id: "cloud-microsoft-365",
    title: "Cloud & Microsoft 365",
    shortTitle: "Cloud & Microsoft 365",
    href: "/services/cloud-microsoft-365",
    description:
      "Microsoft 365, Teams, Exchange, SharePoint, OneDrive, and Azure—set up, secured, and managed.",
    longDescription:
      "From migrations to ongoing administration and security, we help businesses get more value from Microsoft 365 and related cloud services.",
    icon: "Cloud",
    features: [
      "Microsoft 365 setup and management",
      "Teams, Exchange, SharePoint, and OneDrive",
      "Azure and cloud migrations",
      "Microsoft 365 security",
      "User administration",
      "Cloud security and governance",
    ],
    benefits: [
      "Smoother collaboration across teams",
      "Better control of users and access",
      "Secure cloud productivity tools",
      "Migrations planned around business continuity",
    ],
  },
  {
    id: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    shortTitle: "Backup & DR",
    href: "/services/backup-disaster-recovery",
    description:
      "Reliable backups and recovery plans so a outage, ransomware event, or mistake does not become a crisis.",
    longDescription:
      "We design, monitor, and test backup strategies for servers, cloud workloads, and Microsoft 365 so your business can recover with confidence.",
    icon: "DatabaseBackup",
    features: [
      "Cloud and server backup",
      "Microsoft 365 backup",
      "Disaster recovery planning",
      "Business continuity planning",
      "Backup monitoring",
      "Recovery testing",
    ],
    benefits: [
      "Faster recovery when something fails",
      "Protection beyond built-in cloud recycle bins",
      "Clearer recovery expectations",
      "Reduced business disruption risk",
    ],
  },
  {
    id: "network-infrastructure",
    title: "Network & Infrastructure",
    shortTitle: "Network & Infrastructure",
    href: "/services/network-infrastructure",
    description:
      "Stable networks, Wi-Fi, firewalls, and infrastructure that keep offices productive.",
    longDescription:
      "We design and support the networks and infrastructure your business depends on—including Wi-Fi, firewalls, switching, servers, and hardware upgrades.",
    icon: "Network",
    features: [
      "Network design and monitoring",
      "Business Wi-Fi",
      "Firewalls and switching",
      "Server infrastructure",
      "Hardware procurement support",
      "Infrastructure upgrades",
      "Cabling coordination",
    ],
    benefits: [
      "More reliable connectivity",
      "Better performance for daily work",
      "Security-conscious network design",
      "Infrastructure that scales with growth",
    ],
  },
  {
    id: "it-projects",
    title: "IT Projects",
    shortTitle: "IT Projects",
    href: "/services/it-projects",
    description:
      "Office moves, migrations, security projects, and technology upgrades delivered with a clear plan.",
    longDescription:
      "When your business needs change, we run focused IT projects—from Microsoft 365 and Google Workspace migrations to network deployments and hardware rollouts.",
    icon: "FolderKanban",
    features: [
      "Office moves",
      "Network deployments",
      "Server and cloud migrations",
      "Microsoft 365 migrations",
      "Google Workspace migrations",
      "Hardware deployments",
      "Cybersecurity projects",
      "Technology upgrades",
    ],
    benefits: [
      "Projects scoped around business timelines",
      "Less disruption during transitions",
      "Clear communication throughout delivery",
      "Outcomes that support long-term operations",
    ],
  },
  {
    id: "ai-education",
    title: "AI Education and Consulting",
    shortTitle: "AI Education & Consulting",
    href: "/services/ai-education-consulting",
    description:
      "Practical guidance to help your team understand and adopt AI tools responsibly.",
    longDescription:
      "We help business leaders evaluate AI opportunities, set guardrails, and educate teams so new tools improve productivity without creating unnecessary risk.",
    icon: "Sparkles",
    features: [
      "AI readiness discussions",
      "Use-case workshops",
      "Policy and risk guidance",
      "Team education sessions",
      "Tool evaluation support",
    ],
    benefits: [
      "Clearer decisions about AI adoption",
      "Better awareness of data and security risks",
      "Practical training for staff",
      "Technology choices aligned to business goals",
    ],
  },
];

export const primaryServiceCards = services.filter((s) =>
  [
    "managed-it",
    "cybersecurity",
    "cloud-microsoft-365",
    "backup-disaster-recovery",
    "network-infrastructure",
    "it-projects",
    "ai-education",
  ].includes(s.id),
);

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.id === slug);
}
