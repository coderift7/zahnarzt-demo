"use client";

import {
  Sparkles,
  Smile,
  ShieldCheck,
  Baby,
  Scan,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smile,
  ShieldCheck,
  Baby,
  Scan,
  HeartPulse,
};

export default function Services() {
  return (
    <section id="behandlungen" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Unsere Behandlungen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Zahnmedizin auf höchstem Niveau
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Von der Vorsorge bis zur Ästhetik — wir bieten das komplette
              Spektrum moderner Zahnmedizin.
            </p>
          </div>
        </Reveal>

        {/* Service Grid */}
        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Accent line top */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-accent to-cta transition-all duration-500 group-hover:w-full" />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 transition-colors duration-200 group-hover:bg-accent/15">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
