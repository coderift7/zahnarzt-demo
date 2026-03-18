"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              FAQ
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Häufig gestellte Fragen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihren
              Zahnarztbesuch.
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <StaggerContainer className="mt-12 space-y-3" staggerDelay={0.06}>
          {siteConfig.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <StaggerItem key={i}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-200",
                    isOpen
                      ? "border-accent/20 bg-card shadow-sm"
                      : "border-border bg-card hover:border-border"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="pr-4 font-heading text-[15px] font-semibold text-primary">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2 },
                        }}
                      >
                        <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
