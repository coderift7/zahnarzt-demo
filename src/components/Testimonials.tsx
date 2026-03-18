"use client";

import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

export default function Testimonials() {
  return (
    <section id="bewertungen" className="relative overflow-hidden bg-muted py-24 lg:py-32">
      {/* Subtle gradient accent */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Patientenstimmen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Das sagen unsere Patienten
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Über 3.500 zufriedene Patienten vertrauen {siteConfig.company.name}.
            </p>
          </div>
        </Reveal>

        {/* Testimonial Cards */}
        <StaggerContainer
          className="mt-14 grid gap-5 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {siteConfig.testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                {/* Accent line */}
                <div className="absolute left-7 top-0 h-1 w-12 rounded-b-full bg-gradient-to-r from-accent to-accent/50" />

                <Quote className="mb-4 h-8 w-8 text-accent/10" />

                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-relaxed text-card-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}${testimonial.image}`}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
