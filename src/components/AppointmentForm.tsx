"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Reveal, slideFromLeft, slideFromRight } from "./Motion";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm transition-all duration-200 focus:border-accent/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-white/70";

export default function AppointmentForm() {
  const { appointment } = siteConfig;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="termin" className="grain relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(8,145,178,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(13,148,136,0.1),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <Reveal variants={slideFromLeft}>
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-semibold uppercase tracking-widest text-cta">
                Online-Terminbuchung
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {appointment.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/50">
                {appointment.subheading}
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Kein Anruf nötig — einfach online buchen",
                  "Bestätigung innerhalb von 24 Stunden",
                  "Erinnerung per SMS oder E-Mail",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal variants={slideFromRight} delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                      className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
                    >
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    </motion.div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Terminanfrage gesendet!
                    </h3>
                    <p className="mt-2 max-w-sm text-white/50">
                      {appointment.successMessage}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClasses}>
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Max Mustermann"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="max@beispiel.de"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Phone & Treatment Type */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+49 123 456 789"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="treatment" className={labelClasses}>
                          Behandlung *
                        </label>
                        <select
                          id="treatment"
                          required
                          className={inputClasses}
                        >
                          <option value="">Bitte wählen</option>
                          {appointment.treatmentTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time preference */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="date" className={labelClasses}>
                          Wunschtermin *
                        </label>
                        <input
                          type="date"
                          id="date"
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="timeSlot" className={labelClasses}>
                          Zeitfenster
                        </label>
                        <select
                          id="timeSlot"
                          className={inputClasses}
                        >
                          <option value="">Bitte wählen</option>
                          {appointment.timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={labelClasses}>
                        Anmerkungen
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Besondere Wünsche, Angstpatient, Erstbesuch..."
                        className={inputClasses}
                      />
                    </div>

                    {/* Privacy */}
                    <label className="flex cursor-pointer items-start gap-2.5">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 rounded border-white/20 bg-white/5"
                      />
                      <span className="text-xs leading-relaxed text-white/40">
                        Ich stimme der{" "}
                        <a
                          href="/datenschutz"
                          className="text-accent underline decoration-accent/30 hover:decoration-accent/60"
                        >
                          Datenschutzerklärung
                        </a>{" "}
                        zu. *
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-semibold text-white shadow-[0_4px_16px_rgba(13,148,136,0.3)] transition-all duration-200 hover:bg-cta/90 hover:shadow-[0_6px_24px_rgba(13,148,136,0.4)] hover:-translate-y-0.5"
                    >
                      <CalendarDays className="h-4 w-4" />
                      {appointment.submitLabel}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
