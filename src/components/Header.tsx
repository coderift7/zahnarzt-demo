"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            {/* Tooth icon */}
            <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9 shrink-0">
              <defs>
                <linearGradient id="toothGradH" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0891B2" />
                  <stop offset="100%" stopColor="#0D9488" />
                </linearGradient>
              </defs>
              <path
                d="M16 3C12.2 3 10 5 9 7c-1.3 2.5-.5 5.5.5 8 .75 1.9 1.75 4.25 2.5 7 .6 2.3 1.4 4 2.3 4 .5-.2.8-1.5 1-2.5.2-1 .3-1.5.5-1.5s.3.5.5 1.5c.2 1 .5 2.3 1 2.5.9 0 1.7-1.7 2.3-4 .75-2.75 1.75-5.1 2.5-7 1-2.5 1.8-5.5.5-8C21.5 5 19.3 3 16 3z"
                fill="url(#toothGradH)"
              />
              <path
                d="M12.5 8c.8-1.2 1.8-2.2 3.8-2.2"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            {/* Name + Tagline */}
            <div className="flex items-center gap-3">
              <div>
                <span
                  className={`block text-xs font-light tracking-wide transition-colors duration-300 ${
                    isScrolled ? "text-muted-foreground" : "text-white/60"
                  }`}
                >
                  Dr.
                </span>
                <span
                  className={`block font-heading text-xl font-bold leading-tight tracking-tight transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  Weber
                </span>
              </div>
              <div
                className={`hidden h-8 w-px sm:block transition-colors duration-300 ${
                  isScrolled ? "bg-border" : "bg-white/20"
                }`}
              />
              <span
                className={`hidden text-[10px] font-medium uppercase tracking-[0.15em] leading-tight sm:block transition-colors duration-300 ${
                  isScrolled ? "text-muted-foreground" : "text-white/50"
                }`}
              >
                Zahnarzt
                <br />
                praxis
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  isScrolled
                    ? "text-secondary hover:bg-muted hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/75"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.company.phone}
            </a>
            <a
              href="#termin"
              className="cursor-pointer rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(13,148,136,0.35)] transition-all duration-200 hover:bg-cta/90 hover:shadow-[0_4px_16px_rgba(13,148,136,0.4)] hover:-translate-y-0.5"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`cursor-pointer rounded-lg p-2 transition-colors lg:hidden ${
              isScrolled
                ? "text-primary hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menü öffnen"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-white shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-3 py-2.5 text-secondary transition-colors hover:bg-muted"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#termin"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 cursor-pointer rounded-lg bg-cta px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Termin buchen
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
