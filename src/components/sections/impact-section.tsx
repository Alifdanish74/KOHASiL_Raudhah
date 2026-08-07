"use client";
// File: src/components/sections/impact-section.tsx
import { motion } from "framer-motion";
import { Users, Clock, HeartHandshake, TrendingUp } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, cardReveal, viewportOnce } from "@/lib/motion";

// NOTE: These figures are ILLUSTRATIVE PLACEHOLDERS.
// Replace with real, verified data from Kohasil before publication.
const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Ahli Terdaftar",
    note: "Contoh angka — perlu disahkan",
  },
  {
    icon: Clock,
    value: "24 Jam",
    label: "Perkhidmatan Berterusan",
    note: "Setiap hari tanpa henti",
  },
  {
    icon: HeartHandshake,
    value: "100+",
    label: "Kes Diuruskan",
    note: "Contoh angka — perlu disahkan",
  },
  {
    icon: TrendingUp,
    value: "RM10",
    label: "Caruman Terendah",
    note: "Bermula dari RM10 sebulan",
  },
];

export function ImpactSection() {
  return (
    <section
      id={SECTION_IDS.impak}
      aria-label="Impak Kohasil Raudhah"
      className="section-texture py-16 lg:py-24"
      style={{ background: "var(--color-brand-cream)" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Impak Kami"
          title="Bersama Kami, Anda Tidak Keseorangan"
          subtitle="Kohasil Raudhah hadir untuk memastikan setiap warga pekerja Malaysia mempunyai perlindungan yang mereka perlukan."
          className="mb-12"
        />

        {/* Stats grid — Weddingcard stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-6 text-center"
                style={{
                  background: idx % 2 === 0 ? "var(--color-brand-green)" : "#fff",
                  border: `1px solid ${idx % 2 === 0 ? "var(--color-brand-green-dark)" : "var(--color-brand-border)"}`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "rgba(255,255,255,0.15)"
                        : "var(--color-brand-sage-soft)",
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                    style={{
                      color: idx % 2 === 0 ? "#fff" : "var(--color-brand-green)",
                    } as React.CSSProperties}
                  />
                </div>

                <div>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: idx % 2 === 0 ? "#fff" : "var(--color-brand-green)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-sm font-semibold leading-snug"
                    style={{ color: idx % 2 === 0 ? "rgba(255,255,255,0.9)" : "var(--color-brand-text)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="mt-1 text-xs leading-tight"
                    style={{
                      color: idx % 2 === 0 ? "rgba(255,255,255,0.55)" : "var(--color-brand-text-muted)",
                    }}
                  >
                    {stat.note}
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-10"
                  style={{
                    background: idx % 2 === 0 ? "#fff" : "var(--color-brand-gold)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <p
          className="mt-6 text-center text-xs leading-relaxed"
          style={{ color: "var(--color-brand-text-muted)" }}
        >
          * Angka dengan nota &ldquo;contoh angka&rdquo; merupakan data ilustrasi dan perlu disahkan oleh pihak Kohasil sebelum penerbitan rasmi.
        </p>
      </ResponsiveContainer>
    </section>
  );
}
