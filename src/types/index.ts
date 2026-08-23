export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
};

export type Industry = {
  id: string;
  title: string;
  href: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  industry: string;
  image?: string;
  isPlaceholder: true;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export type LocationStub = {
  slug: string;
  name: string;
  region: string;
  status: "placeholder";
};
