"use client";

import { Clock, Heart, Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { StaggerContainer, StaggerItem } from "./Motion";

const icons = [Clock, Heart, Star, ShieldCheck];

export default function TrustSignals() {
  return (
    <section id="trust" className="relative border-b border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4" staggerDelay={0.1}>
          {siteConfig.trustStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i}>
                <div className="group text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 transition-colors duration-200 group-hover:bg-accent/15">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-heading text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
