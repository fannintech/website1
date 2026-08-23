import Link from "next/link";
import { leadMagnets } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";

export function LeadMagnetsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Start With a Practical Assessment
            </h2>
            <p className="mt-3 text-muted-text">
              Choose a focused review to clarify priorities, risks, and next
              steps for your technology environment.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {leadMagnets.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Link
                href={item.href}
                className="block h-full rounded-lg border border-border bg-surface/60 p-5 transition hover:border-primary hover:bg-white"
              >
                <h3 className="font-semibold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-text">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Request this review
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
