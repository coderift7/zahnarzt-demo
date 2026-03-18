"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 shrink-0">
                <defs>
                  <linearGradient id="toothGradF" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
                <path
                  d="M16 3C12.2 3 10 5 9 7c-1.3 2.5-.5 5.5.5 8 .75 1.9 1.75 4.25 2.5 7 .6 2.3 1.4 4 2.3 4 .5-.2.8-1.5 1-2.5.2-1 .3-1.5.5-1.5s.3.5.5 1.5c.2 1 .5 2.3 1 2.5.9 0 1.7-1.7 2.3-4 .75-2.75 1.75-5.1 2.5-7 1-2.5 1.8-5.5.5-8C21.5 5 19.3 3 16 3z"
                  fill="url(#toothGradF)"
                />
                <path
                  d="M12.5 8c.8-1.2 1.8-2.2 3.8-2.2"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <span className="block text-xs font-light tracking-wide text-white/50">Dr.</span>
                <span className="block font-heading text-lg font-bold leading-tight tracking-tight text-white">
                  Weber
                </span>
              </div>
              <div className="h-7 w-px bg-white/10" />
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] leading-tight text-white/35">
                Zahnarzt
                <br />
                praxis
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
