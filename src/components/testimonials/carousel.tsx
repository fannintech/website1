"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () =>
    setIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  const next = () =>
    setIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );

  return (
    <section className="section-padding bg-surface">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-sm text-warning">
              Placeholder testimonials — replace with verified customer quotes
              before launch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="relative mx-auto mt-10 max-w-3xl rounded-lg border border-border bg-white p-8 shadow-[var(--shadow-sm)]">
            <Quote className="mb-4 h-8 w-8 text-primary/40" aria-hidden />
            <blockquote className="text-lg text-primary-dark">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-semibold text-primary-dark">{item.name}</p>
              <p className="text-sm text-muted-text">
                {item.company} · {item.industry}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-warning">
                [PLACEHOLDER CONTENT]
              </p>
            </figcaption>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-muted-text">
                {index + 1} / {testimonials.length}
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Previous testimonial"
                  onClick={prev}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Next testimonial"
                  onClick={next}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
