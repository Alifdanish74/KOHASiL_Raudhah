"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Wallet, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { HotlineCard } from "@/components/ui/hotline-card";
import {
  staggerContainer,
  cardReveal,
  viewportEager,
} from "@/lib/motion";

const trustIndicators = [
  { icon: Clock, label: "Pengurusan 24 Jam" },
  { icon: Wallet, label: "Serendah RM10" },
  { icon: CreditCard, label: "Potongan Gaji" },
  { icon: ShieldCheck, label: "Tiada Pemeriksaan" },
];

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.utama}
      aria-label="Utama"
      className="hero-bg relative min-h-[92dvh] overflow-hidden flex items-center justify-center py-24 lg:py-20"
      style={
        {
          "--hero-bg-image": "url('/images/opening_background.png')",
        } as React.CSSProperties
      }
    >
      {/* Custom responsive dome arch curve for mobile & desktop */}
      <style jsx global>{`
        .hero-dome-card {
          border-radius: 40% 40% 2rem 2rem / 15% 15% 2rem 2rem;
        }
        @media (min-width: 640px) {
          .hero-dome-card {
            border-radius: 60% 60% 2.25rem 2.25rem / 35% 35% 2.25rem 2.25rem;
          }
        }
      `}</style>

      <ResponsiveContainer className="flex justify-center">
        {/* Center cramped container fitting the background image container frame */}
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-12 md:px-16 text-center flex flex-col items-center">

          {/* Mosque dome / arch glass container wrapping wording tightly */}
          <div
            className="hero-dome-card w-full p-5 pt-8 sm:p-10 sm:pt-16 md:p-12 md:pt-20 shadow-xl border flex flex-col items-center text-center backdrop-blur-md overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.78)",
              borderColor: "var(--color-brand-gold)",
              borderWidth: "1.5px",
              boxShadow: "0 16px 48px rgba(15,16,95,0.10)",
            }}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={viewportEager}
              className="eyebrow-cinzel mb-3 inline-block rounded-full px-4 py-1.5"
              style={{
                background: "rgba(191,168,0,0.15)",
                border: "1px solid var(--color-brand-gold)",
                color: "var(--color-brand-green-dark)",
              }}
            >
              {BRAND.product}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 1.0, ease: "backOut" }}
              className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-green-950"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-brand-green-dark)",
              }}
            >
              {BRAND.name}
            </motion.h1>

            {/* Sub-heading wording */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="mb-6 text-lg sm:text-xl font-semibold leading-relaxed text-slate-800"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ringankan Beban Orang Yang Tersayang Apabila Berlaku Kematian Yang Tidak Diduga Dengan Skim Khairat Potongan Gaji Bulanan Kohasil Raudhah.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full"
            >
              <div
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-slate-800 border"
                style={{
                  background: "#fff",
                  borderColor: "var(--color-brand-gold)",
                }}
              >
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>Tanpa Memerlukan Laporan Kesihatan Untuk Mendaftar</span>
              </div>
              <div
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-slate-800 border"
                style={{
                  background: "#fff",
                  borderColor: "var(--color-brand-gold)",
                }}
              >
                <Clock className="h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>Perlindungan Maksimum Sehingga Umur 70 Tahun</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row justify-center w-full max-w-md mb-8"
            >
              <a
                href={`#${SECTION_IDS.pakej}`}
                className="hover-scale flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 px-6 text-sm font-bold text-green-950 transition-all shadow-md"
                style={{
                  background: "var(--color-brand-gold)",
                }}
                aria-label="Lihat pilihan pakej perlindungan Kohasil Raudhah"
              >
                Lihat Pilihan Pakej
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BRAND.hotlineTel}
                className="hover-scale flex flex-1 items-center justify-center gap-2 rounded-full border py-3.5 px-6 text-sm font-bold transition-all shadow-sm"
                style={{
                  background: "#fff",
                  borderColor: "var(--color-brand-green)",
                  color: "var(--color-brand-green)",
                }}
                aria-label={`Hubungi bantuan 24 jam: ${BRAND.hotline}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Hubungi 24 Jam
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 1.1 }}
              className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 w-full"
            >
              {trustIndicators.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={cardReveal}
                  className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 border bg-white/90"
                  style={{ borderColor: "var(--color-brand-border)" }}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0 text-amber-700" />
                  <span className="text-[11px] font-bold text-slate-800">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Hotline banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-6 w-full"
            >
              <HotlineCard
                style={{
                  background: "var(--color-brand-green)",
                  color: "#fff",
                }}
              />
            </motion.div>

          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
