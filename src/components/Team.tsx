"use client";

import { Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const statIcons = [Users, Award, BookOpen];
const statColors = [
  "bg-accent/8 text-accent",
  "bg-emerald-500/10 text-emerald-600",
  "bg-amber-500/10 text-amber-600",
];

export default function Team() {
  const { team } = siteConfig;

  return (
    <section id="team" className="noise-overlay relative bg-white py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Lernen Sie uns kennen
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              {team.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {team.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-5">
          {/* Team members */}
          <Reveal variants={slideFromLeft} className="lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-3">
              {team.members.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.12,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Avatar */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}${member.image}`}
                    alt={member.name}
                    className="mb-4 h-20 w-20 rounded-2xl object-cover"
                  />
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal variants={slideFromRight} delay={0.15} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-cta/5 blur-2xl" />

              <div className="relative space-y-4">
                {team.stats.map((stat, i) => {
                  const Icon = statIcons[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.12,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                    >
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${statColors[i]}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-heading text-2xl font-bold tracking-tight text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
