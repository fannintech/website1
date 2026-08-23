"use client";

import { processSteps } from "@/data/industries";
import { Reveal } from "@/components/ui/reveal";
import { motion, useReducedMotion } from "framer-motion";

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-ft">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How We Work</h2>
            <p className="mt-3 text-muted-text">
              A clear process that starts with your business goals and builds
              toward reliable, secure technology operations.
            </p>
          </div>
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <li className="relative h-full rounded-lg border border-border bg-surface/70 p-5">
                <motion.div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  initial={reduce ? false : { scale: 0.85, opacity: 0 }}
                  whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  aria-hidden
                >
                  {step.step}
                </motion.div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-text">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
