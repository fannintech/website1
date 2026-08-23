import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = createMetadata({
  title: "About Fannin Technologies",
  description:
    "Learn how Fannin Technologies partners with small and medium-sized businesses for managed IT, cybersecurity, and cloud technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Your Technology Partner. Not Just Your IT Company."
        description="Fannin Technologies helps small and medium-sized businesses run technology with less disruption, stronger security, and clearer guidance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <PageSection>
        <div className="prose-ft max-w-3xl space-y-4 text-base">
          <p>
            Technology should help your business move faster—not create another
            set of problems to manage. Fannin Technologies works as a managed
            service provider for organizations that want a practical partner for
            IT support, cybersecurity, cloud services, and long-term planning.
          </p>
          <p>
            We speak in business terms. Owners, executives, and office managers
            should understand the recommendation, the risk, and the expected
            outcome—without needing to translate jargon.
          </p>
          <p>
            Our approach is proactive. Monitoring, patching, security controls,
            and clear communication help reduce surprises. When projects are
            needed—migrations, office moves, infrastructure upgrades—we plan
            around your operations.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Trust",
              text: "Clear communication and accountable support relationships.",
            },
            {
              title: "Security",
              text: "Practical defenses built into everyday IT operations.",
            },
            {
              title: "Partnership",
              text: "Guidance that supports growth, continuity, and smarter decisions.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-text">{item.text}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
