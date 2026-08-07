"use client";
// File: src/components/sections/assistance-process-section.tsx
// Weddingcard-matched: vertical timeline steps animate as stagger (timelineStep variants)
// Hotline card uses glass-effect (Weddingcard modal surface)

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Truck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SECTION_IDS, BRAND } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { assistanceSteps } from "@/data/assistance-process";
import {
  staggerContainer,
  timelineStep,
  viewportOnce,
} from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  ClipboardCheck,
  Truck,
  HeartHandshake,
  CheckCircle2,
};

export function AssistanceProcessSection() {
  return (
    <section
      id={SECTION_IDS.proses}
      aria-label="Proses Bantuan 24 Jam"
      className="section-texture py-16 lg:py-24"
      style={{ background: "#fff" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Bagaimana Bantuan 24 Jam Berfungsi"
          subtitle="Apabila berlaku kematian, hanya satu panggilan sudah mencukupi. Kami akan menguruskan selebihnya."
          className="mb-12"
        />

        {/* Vertical timeline — Weddingcard stagger reveal */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical connector line */}
          <div
            className="pointer-events-none absolute left-6 top-8 hidden w-0.5 sm:block"
            style={{
              bottom: "4rem",
              background:
                "linear-gradient(to bottom, var(--color-brand-gold), rgba(191,168,0,0.1))",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
            aria-label="Langkah-langkah proses bantuan"
          >
            {assistanceSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] ?? CheckCircle2;
              const isLast = idx === assistanceSteps.length - 1;

              return (
                <motion.li
                  key={step.id}
                  variants={timelineStep}
                  className="flex gap-5"
                >
                  {/* Step number + icon */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{
                        background:
                          idx === 0
                            ? "var(--color-brand-green)"
                            : "var(--color-brand-sage-soft)",
                        border: `2px solid ${idx === 0 ? "var(--color-brand-green)" : "var(--color-brand-sage-muted)"}`,
                      }}
                      aria-label={`Langkah ${step.step}`}
                    >
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                        style={{
                          color:
                            idx === 0 ? "#fff" : "var(--color-brand-green)",
                        } as React.CSSProperties}
                      />
                    </motion.div>
                    {/* Step connector dot (hidden on last) */}
                    {!isLast && (
                      <div
                        className="mt-2 w-0.5 flex-1 sm:hidden"
                        style={{
                          background:
                            "linear-gradient(to bottom, var(--color-brand-gold), transparent)",
                          minHeight: "1.5rem",
                          opacity: 0.3,
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Step content */}
                  <div
                    className="flex-1 rounded-2xl p-5 pb-6"
                    style={{
                      background:
                        idx === 0
                          ? "var(--color-brand-sage-soft)"
                          : "transparent",
                      border:
                        idx === 0
                          ? "1px solid var(--color-brand-sage-muted)"
                          : "1px solid transparent",
                    }}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span
                        className="eyebrow-cinzel text-[0.625rem]"
                        style={{ color: "var(--color-brand-gold)", letterSpacing: "0.18em" }}
                      >
                        Langkah {step.step}
                      </span>
                    </div>
                    <h3
                      className="mb-1.5 text-base font-semibold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--color-brand-text)",
                        fontSize: "1.0625rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-brand-text-muted)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <OrnamentalDivider className="my-12" />

        {/* Prominent hotline CTA (Weddingcard green card surface) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-6 lg:p-10"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand-green) 0%, var(--color-brand-green-light) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <p
                className="eyebrow-cinzel mb-3"
                style={{ color: "var(--color-brand-gold-light)" }}
              >
                Perlukan Bantuan Sekarang?
              </p>
              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Hubungi kami pada bila-bila masa. Pasukan kami sedia membantu
                anda 24 jam sehari, 7 hari seminggu.
              </p>
            </div>
            <div className="w-full max-w-xs lg:w-auto lg:flex-shrink-0">
              <a
                href={BRAND.hotlineTel}
                className="hover-scale flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-center"
                style={{
                  background: "var(--color-brand-gold)",
                  color: "var(--color-brand-green-dark)",
                }}
                aria-label={`Hubungi Hotline 24 Jam: ${BRAND.hotline}`}
              >
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-75">
                    Hotline 24 Jam
                  </p>
                  <p
                    className="text-2xl font-bold tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {BRAND.hotline}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
