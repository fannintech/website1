import type { Industry, LocationStub, PricingPlan, Testimonial } from "@/types";

export const industries: Industry[] = [
  {
    id: "professional-services",
    title: "Professional Services",
    href: "/industries/professional-services",
    description:
      "Secure collaboration, reliable access, and support that keeps client work moving.",
    challenges: [
      "Client data confidentiality",
      "Remote and hybrid work support",
      "Dependable document collaboration",
    ],
    solutions: [
      "Managed Microsoft 365",
      "Identity and access controls",
      "Proactive IT support",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries/healthcare",
    description:
      "Technology support for medical practices that need availability, privacy, and responsive help.",
    challenges: [
      "Sensitive patient information",
      "Uptime for clinical operations",
      "Vendor and system complexity",
    ],
    solutions: [
      "Security-focused managed IT",
      "Backup and recovery",
      "Endpoint and email protection",
    ],
  },
  {
    id: "legal",
    title: "Legal",
    href: "/industries/legal",
    description:
      "IT and security practices designed around confidentiality, deadlines, and client trust.",
    challenges: [
      "Confidential case information",
      "Secure remote access",
      "Reliable email and document systems",
    ],
    solutions: [
      "Identity security and MFA",
      "Microsoft 365 management",
      "Business continuity planning",
    ],
  },
  {
    id: "accounting",
    title: "Accounting",
    href: "/industries/accounting",
    description:
      "Seasonal workload support, secure file sharing, and technology that stays out of the way.",
    challenges: [
      "Peak-season demand",
      "Client portal and file security",
      "Application reliability",
    ],
    solutions: [
      "Proactive monitoring",
      "Cloud collaboration tools",
      "Fast help desk support",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description:
      "Networks, systems, and support that keep production and office operations connected.",
    challenges: [
      "Plant and office connectivity",
      "Aging infrastructure",
      "Operational downtime risk",
    ],
    solutions: [
      "Network and infrastructure support",
      "Endpoint management",
      "Backup and recovery planning",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    href: "/industries/construction",
    description:
      "Field-friendly technology support for offices, jobsites, and distributed teams.",
    challenges: [
      "Mobile workforce access",
      "Jobsite connectivity",
      "Project file collaboration",
    ],
    solutions: [
      "Cloud productivity tools",
      "Secure remote access",
      "Device and identity management",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Reliable email, cloud tools, and support for brokers, teams, and property operations.",
    challenges: [
      "Mobile communication needs",
      "Shared document access",
      "Phishing and email risk",
    ],
    solutions: [
      "Microsoft 365 support",
      "Email security",
      "Managed IT support",
    ],
  },
  {
    id: "nonprofit",
    title: "Nonprofit",
    href: "/industries/nonprofit",
    description:
      "Practical technology partnerships that stretch budgets and protect donor trust.",
    challenges: [
      "Limited IT staff",
      "Donor and constituent data protection",
      "Cost-conscious tooling",
    ],
    solutions: [
      "Managed IT services",
      "Microsoft 365 optimization",
      "Security awareness support",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.id === slug);
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "[PLACEHOLDER TESTIMONIAL] Fannin Technologies helped us move from reactive IT issues to a more predictable support model. Our team spends less time waiting on technology problems.",
    name: "[Customer Name Placeholder]",
    company: "[Company Name Placeholder]",
    industry: "Professional Services",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "[PLACEHOLDER TESTIMONIAL] The cybersecurity recommendations were practical and easy for our staff to follow. We finally feel like security is part of everyday operations.",
    name: "[Customer Name Placeholder]",
    company: "[Company Name Placeholder]",
    industry: "Healthcare",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "[PLACEHOLDER TESTIMONIAL] Their Microsoft 365 migration was well planned and clearly communicated. We stayed productive throughout the transition.",
    name: "[Customer Name Placeholder]",
    company: "[Company Name Placeholder]",
    industry: "Legal",
    isPlaceholder: true,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "essentials",
    name: "Essentials Support",
    description:
      "A starting point for businesses that need dependable help desk coverage and core monitoring.",
    highlights: [
      "Remote help desk support",
      "Endpoint monitoring fundamentals",
      "Patch management basics",
      "Monthly technology review",
    ],
    cta: "Request a Consultation",
    href: "/schedule-consultation",
  },
  {
    id: "managed",
    name: "Fully Managed IT",
    description:
      "Comprehensive IT partnership for organizations that want proactive management and strategic guidance.",
    highlights: [
      "Proactive monitoring and management",
      "Help desk and on-site coordination",
      "Security-focused defaults",
      "vCIO / IT strategy guidance",
      "Vendor coordination",
    ],
    cta: "Schedule a Consultation",
    href: "/schedule-consultation",
    featured: true,
  },
  {
    id: "co-managed",
    name: "Co-Managed Partnership",
    description:
      "Designed for companies with internal IT that need added capacity, tooling, and specialized support.",
    highlights: [
      "Shared responsibility model",
      "Security and monitoring support",
      "Project overflow capacity",
      "Documentation assistance",
    ],
    cta: "Talk to an IT Expert",
    href: "/contact",
  },
];

export const locationStubs: LocationStub[] = [
  "Bonham",
  "McKinney",
  "Sherman",
  "Paris",
  "Anna",
  "Melissa",
  "Princeton",
  "Dallas",
  "Plano",
  "Allen",
  "Frisco",
  "Van Alstyne",
  "Commerce",
  "Denison",
  "Greenville",
  "North Texas",
].map((name) => ({
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  name,
  region: "North Texas",
  status: "placeholder" as const,
}));

export const trustPoints = [
  {
    title: "Proactive IT Support",
    description: "We watch for issues early so your team spends less time firefighting.",
    icon: "Activity",
  },
  {
    title: "Cybersecurity First",
    description: "Security is built into daily operations—not treated as an afterthought.",
    icon: "Shield",
  },
  {
    title: "Fast Response",
    description: "Clear support paths help your people get help when work is blocked.",
    icon: "Zap",
  },
  {
    title: "Business-Focused Technology",
    description: "Recommendations are framed around productivity, risk, and growth.",
    icon: "Briefcase",
  },
  {
    title: "Local Support",
    description: "A partner that understands North Texas businesses and how they operate.",
    icon: "MapPin",
  },
  {
    title: "Strategic IT Guidance",
    description: "We help you plan technology investments with the long term in mind.",
    icon: "Compass",
  },
];

export const whyPoints = [
  {
    title: "Proactive Instead of Reactive",
    description:
      "We identify and address issues before they become business problems.",
  },
  {
    title: "Security Built In",
    description: "Cybersecurity is part of everything we do.",
  },
  {
    title: "Business-Focused",
    description:
      "Technology should support your business—not get in its way.",
  },
  {
    title: "Personal Service",
    description:
      "Customers should know who they’re calling and who is taking care of their technology.",
  },
  {
    title: "Strategic Guidance",
    description: "We help businesses make smarter technology decisions.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Understand",
    description:
      "We learn about your business, goals, and technology challenges.",
  },
  {
    step: 2,
    title: "Secure",
    description:
      "We identify and address security and technology risks.",
  },
  {
    step: 3,
    title: "Optimize",
    description:
      "We improve performance, reliability, and productivity.",
  },
  {
    step: 4,
    title: "Support",
    description:
      "We provide ongoing support and proactive management.",
  },
  {
    step: 5,
    title: "Strategize",
    description:
      "We help you plan technology investments for the future.",
  },
];

export const leadMagnets = [
  {
    title: "Free IT Assessment",
    description: "A practical review of your current technology environment and priorities.",
    href: "/schedule-consultation?interest=it-assessment",
  },
  {
    title: "Cybersecurity Assessment",
    description: "Identify security gaps that put your business and customer data at risk.",
    href: "/schedule-consultation?interest=cybersecurity-assessment",
  },
  {
    title: "Microsoft 365 Security Review",
    description: "Review access, email security, and Microsoft 365 configuration basics.",
    href: "/schedule-consultation?interest=m365-security-review",
  },
  {
    title: "Technology Roadmap",
    description: "A clear plan for upgrades, risk reduction, and better productivity.",
    href: "/schedule-consultation?interest=technology-roadmap",
  },
  {
    title: "Network Assessment",
    description: "Evaluate performance, reliability, and security of your network foundation.",
    href: "/schedule-consultation?interest=network-assessment",
  },
];
