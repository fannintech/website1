import { whyPoints } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";

export function WhySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ft grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            More Than IT Support. A Technology Partner.
          </h2>
          <p className="mt-4 text-muted-text">
            Generic break/fix providers wait for something to fail. Fannin
            Technologies works alongside your business to keep systems healthy,
            secure, and aligned with how you operate.
          </p>
        </Reveal>
        <div className="space-y-4">
          {whyPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-lg border border-border bg-surface/50 p-5">
                <h3 className="text-lg font-semibold text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-text">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
