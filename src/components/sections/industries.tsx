import Link from "next/link";
import { industries } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";

export function IndustriesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Industries We Support
            </h2>
            <p className="mt-3 text-muted-text">
              We work with business owners, executives, and office managers
              across professional and community-focused organizations.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.id} delay={index * 0.03}>
              <Link
                href={industry.href}
                className="block h-full rounded-lg border border-border bg-white p-5 transition hover:border-primary hover:shadow-[var(--shadow-sm)]"
              >
                <h3 className="font-semibold text-primary-dark">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text">
                  {industry.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
