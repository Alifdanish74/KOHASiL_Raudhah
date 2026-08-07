"use client";
// File: src/components/sections/shariah-section.tsx
// Weddingcard Doa section: dark background with image texture overlay,
// Arabic verse centered (Weddingcard's Quranic verse), whileInView fadeUp,
// Cinzel eyebrow, ornamental divider

import { motion } from "framer-motion";
import { Shield, Heart, BookOpen, Star } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import {
  staggerContainer,
  cardReveal,
  viewportOnce,
} from "@/lib/motion";

const principles = [
  {
    icon: Shield,
    term: "Tabarru'",
    arabic: "تبرع",
    description:
      "Sumbangan ikhlas peserta ke dalam dana bersama dengan niat membantu sesama ahli yang memerlukan. Dana ini tidak dimiliki oleh mana-mana individu tetapi diurus bersama untuk kepentingan semua ahli.",
  },
  {
    icon: Heart,
    term: "Wakalah",
    arabic: "وكالة",
    description:
      "Pelantikan Kohasil sebagai wakil peserta untuk mengurus dan mentadbir dana tabarru' dengan beramanah. Kohasil bertindak sebagai pengurus yang dilantik, bukan pemilik dana.",
  },
];

const shariahPoints = [
  "Tiada unsur riba (faedah berganda)",
  "Tiada unsur gharar (ketidaktentuan melampau)",
  "Tiada unsur maisir (perjudian)",
  "Berasaskan tolong-menolong (ta'awun)",
  "Pengurusan dana mengikut prinsip syariah",
];

export function ShariahSection() {
  return (
    <section
      id={SECTION_IDS.syariah}
      aria-label="Prinsip Syariah"
      className="py-16 lg:py-24"
      style={{
        background: "var(--color-brand-green)",
        color: "#fff",
        // Subtle noise texture overlay (matches Weddingcard doa_bg feel)
        backgroundImage:
          "radial-gradient(circle at 20% 80%, rgba(191,168,0,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
      }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Patuh Syariah"
          title="Skim Berteraskan Prinsip Islam"
          subtitle="Kohasil Raudhah dibangunkan berdasarkan nilai-nilai Islam — patuh syariah dengan sokongan Jabatan Mufti Negeri Selangor."
          className="mb-12 [&_h2]:text-white [&_p]:!text-white/80"
          variant="white"
        />

        {/* Arabic calligraphic banner — Weddingcard Doa verse section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 overflow-hidden rounded-3xl py-10 text-center"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backgroundImage:
              "radial-gradient(circle at center, rgba(191,168,0,0.10) 0%, transparent 70%)",
          }}
        >
          <OrnamentalDivider className="mb-6 mx-auto max-w-sm" variant="white" />

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.0, ease: "backOut", delay: 0.2 }}
            className="mb-4 text-4xl leading-loose sm:text-5xl"
            style={{
              fontFamily: "serif",
              direction: "rtl",
              color: "var(--color-brand-gold-light)",
              letterSpacing: "0.05em",
            }}
            lang="ar"
            aria-label="Tolong-menolong dalam kebaikan dan takwa"
          >
            وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-medium italic"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            &ldquo;Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-1 text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            &mdash; Al-Ma&apos;idah: 2
          </motion.p>

          <OrnamentalDivider className="mt-6 mx-auto max-w-sm" variant="white" />
        </motion.div>

        {/* Principles — stagger (Weddingcard WeddingInfo cards) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--color-brand-gold)" }}
                  >
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                      style={{ color: "var(--color-brand-green-dark)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3
                        className="text-xl font-semibold"
                        style={{ fontFamily: "var(--font-heading)", color: "#fff" }}
                      >
                        {principle.term}
                      </h3>
                      <span
                        className="text-lg"
                        style={{ color: "var(--color-brand-gold-light)", fontFamily: "serif" }}
                        lang="ar"
                        aria-hidden="true"
                      >
                        {principle.arabic}
                      </span>
                    </div>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.80)" }}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Shariah compliance checklist */}
        <OrnamentalDivider className="mb-8" variant="white" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center"
        >
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "var(--color-brand-gold)", color: "var(--color-brand-green-dark)" }}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-bold">Elemen Syariah Dipatuhi</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {shariahPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                }}
              >
                <Star
                  className="h-3 w-3"
                  aria-hidden="true"
                  style={{ color: "var(--color-brand-gold-light)" } as React.CSSProperties}
                />
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          * Maklumat pematuhan syariah ini adalah berdasarkan prinsip am. Sila rujuk pihak Kohasil atau jawatankuasa syariah yang dilantik untuk pengesahan rasmi.
        </motion.p>
      </ResponsiveContainer>
    </section>
  );
}
