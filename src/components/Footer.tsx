"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ToothIcon } from "./ToothIcon";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
                <ToothIcon className="h-4 w-4 text-accent" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">
                {siteConfig.company.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/45">
              {siteConfig.company.tagline} Ihre Zahnarztpraxis in Berlin
              Prenzlauer Berg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Schnellzugriff
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/impressum"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                <span className="text-sm text-white/50">
                  {siteConfig.company.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent/70" />
                <a
                  href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent/70" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {siteConfig.company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
              Sprechzeiten
            </h3>
            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
              <div className="whitespace-pre-line text-sm leading-relaxed text-white/50">
                {siteConfig.company.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-white/30"
          >
            © {new Date().getFullYear()} {siteConfig.company.legalName}. Alle
            Rechte vorbehalten.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
