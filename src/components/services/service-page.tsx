import { services } from "@/data/services";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { Icon } from "@/components/ui/icon";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { createMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { CtaLink } from "@/components/ui/cta-link";

type Props = {
  serviceId: string;
};

export function generateServiceMetadata(serviceId: string) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) {
    return createMetadata({ title: "Service", path: "/services" });
  }
  return createMetadata({
    title: `${service.title} | Fannin Technologies`,
    description: service.description,
    path: service.href,
  });
}

export function ServicePage({ serviceId }: Props) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: service.href },
          ]),
          serviceSchema(service.title, service.description, service.href),
          ...(service.faqs
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: service.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                },
              ]
            : []),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.longDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        secondaryCta={{ href: "/contact", label: "Talk to an IT Expert" }}
      />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold">What’s included</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary-dark"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-lg border border-border bg-surface p-6">
            <h2 className="text-xl font-bold">Business benefits</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="text-sm text-muted-text">
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaLink href="/schedule-consultation" className="w-full">
                Schedule a Consultation
              </CtaLink>
            </div>
          </aside>
        </div>
      </PageSection>

      {service.faqs?.length ? (
        <PageSection className="bg-surface">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-lg border border-border bg-white p-4"
              >
                <summary className="cursor-pointer font-semibold text-primary-dark">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-muted-text">{faq.answer}</p>
              </details>
            ))}
          </div>
        </PageSection>
      ) : null}

      <FinalCtaSection />
    </>
  );
}
