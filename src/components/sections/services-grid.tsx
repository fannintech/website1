import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryServiceCards } from "@/data/services";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export function ServicesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-ft">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Services Built Around Your Business
              </h2>
              <p className="mt-3 text-muted-text">
                From daily support to cybersecurity and cloud projects, we help
                small and medium-sized businesses run technology with confidence.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {primaryServiceCards.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-md)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-dark text-white transition group-hover:bg-primary">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{service.shortTitle}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-text">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
