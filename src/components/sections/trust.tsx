import { trustPoints } from "@/data/industries";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Technology You Can Count On.
            </h2>
            <p className="mt-3 text-muted-text">
              Businesses choose Fannin Technologies for dependable support,
              practical security, and a partner mindset—not break/fix IT.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-border bg-surface/60 p-6 transition hover:border-primary/40 hover:bg-white hover:shadow-[var(--shadow-sm)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-text">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
