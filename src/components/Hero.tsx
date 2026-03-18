"use client";

import { ArrowRight, ChevronDown, Heart, Shield, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { hero, trustStats } = siteConfig;

  return (
    <section className="grain relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-primary">
      {/* Background photo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/hero-bg.jpg`}
          alt="Moderne Zahnarztpraxis mit Behandlungsstuhl"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-primary/70" />
        {/* Gradient mesh on top of photo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(8,145,178,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(13,148,136,0.1),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/60" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:w-64" />
      <div className="absolute right-0 bottom-1/3 h-px w-32 bg-gradient-to-l from-transparent via-cta/20 to-transparent lg:w-48" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md"
          >
            <Heart className="h-4 w-4 text-cta" />
            <span className="text-sm font-medium tracking-wide text-white/80">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="font-heading text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Ihr Lächeln.{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              In besten Händen.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#termin"
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-cta px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(13,148,136,0.35)] transition-all duration-200 hover:bg-cta/90 hover:shadow-[0_8px_32px_rgba(13,148,136,0.45)] hover:-translate-y-0.5"
            >
              {hero.cta1}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#behandlungen"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-base font-medium text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            >
              {hero.cta2}
            </a>
          </motion.div>

          {/* Trust micro-bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {trustStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                {i === 0 && <Clock className="h-4 w-4 text-accent" />}
                {i === 1 && <Heart className="h-4 w-4 text-accent" />}
                {i === 2 && (
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
                {i === 3 && <Shield className="h-4 w-4 text-accent" />}
                <span className="text-sm text-white/50">
                  <span className="font-semibold text-white/80">
                    {stat.value}
                  </span>{" "}
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60"
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
