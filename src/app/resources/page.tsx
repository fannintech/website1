import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import {
  PageHero,
  PageSection,
  JsonLd,
} from "@/components/layout/page-shell";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { leadMagnets } from "@/data/industries";

export const metadata: Metadata = createMetadata({
  title: "IT Resources & Assessments",
  description:
    "Practical IT and cybersecurity resources from Fannin Technologies, including assessment request options for growing businesses.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Resources"
        title="Helpful Starting Points for Better IT Decisions"
        description="Use these assessment options and future guides to clarify priorities before you invest in tools, projects, or a new support model."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
        secondaryCta={{ href: "/blog", label: "Visit the Blog" }}
      />
      <PageSection>
        <div className="grid gap-4 md:grid-cols-2">
          {leadMagnets.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg border border-border bg-surface/70 p-6 transition hover:border-primary hover:bg-white"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-text">{item.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-dashed border-border bg-white p-6">
          <h2 className="text-lg font-semibold">Future content library</h2>
          <p className="mt-2 text-sm text-muted-text">
            [CONTENT PLACEHOLDER] Guides, checklists, and downloadable resources
            can be added here without changing the site architecture.
          </p>
        </div>
      </PageSection>
      <FinalCtaSection />
    </>
  );
}
