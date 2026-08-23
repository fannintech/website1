import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { CtaLink } from "@/components/ui/cta-link";
import type { Industry } from "@/types";

export function generateIndustryMetadata(industry: Industry) {
  return createMetadata({
    title: `IT Support for ${industry.title} | Fannin Technologies`,
    description: industry.description,
    path: industry.href,
  });
}

export function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: industry.href },
        ])}
      />
      <PageHero
        eyebrow="Industries"
        title={`Technology Support for ${industry.title}`}
        description={industry.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />
      <PageSection>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Common challenges</h2>
            <ul className="mt-4 space-y-3">
              {industry.challenges.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-text"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How we help</h2>
            <ul className="mt-4 space-y-3">
              {industry.solutions.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-text"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaLink href="/schedule-consultation">
                Schedule a Consultation
              </CtaLink>
            </div>
          </div>
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
