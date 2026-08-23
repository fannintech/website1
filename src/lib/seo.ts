import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

const siteName = "Fannin Technologies";
const defaultDescription =
  "Fannin Technologies provides managed IT, cybersecurity, Microsoft 365, and cloud solutions for small and medium-sized businesses. Your technology partner—not just your IT company.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteName)
    ? title
    : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(absoluteUrl()),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: absoluteUrl("/logos/fannin-technologies-logo.png"),
          width: 421,
          height: 118,
          alt: "Fannin Technologies logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/logos/fannin-technologies-logo.png")],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fannin Technologies",
  url: absoluteUrl(),
  logo: absoluteUrl("/logos/fannin-technologies-logo.png"),
  description: defaultDescription,
  slogan: "Your Technology Partner. Not Just Your IT Company.",
  areaServed: {
    "@type": "Place",
    name: "North Texas",
  },
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#organization"),
    name: "Fannin Technologies",
    url: absoluteUrl(),
    image: absoluteUrl("/logos/fannin-technologies-logo.png"),
    description: defaultDescription,
    priceRange: "$$",
    areaServed: [
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
    ].map((name) => ({ "@type": "City", name })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Fannin Technologies",
      url: absoluteUrl(),
    },
    areaServed: "North Texas",
    url: absoluteUrl(path),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
