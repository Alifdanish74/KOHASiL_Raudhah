"use client";
// File: src/components/layout/footer.tsx
// Weddingcard-matched footer: ornamental divider before footer, large display brand name,
// whileInView entrance for footer content

import { motion } from "framer-motion";
import { Phone, Shield, Heart } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { staggerContainer, cardReveal, viewportOnce } from "@/lib/motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-brand-green)",
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(191,168,0,0.10) 0%, transparent 60%)",
        color: "#fff",
      }}
      role="contentinfo"
    >
      {/* Weddingcard Border.svg ornamental divider at top of footer */}
      <div className="pt-2">
        <OrnamentalDivider className="mx-auto max-w-2xl px-6 py-4" variant="white" />
      </div>

      <ResponsiveContainer className="py-10 lg:py-14">
        {/* Brand display — Weddingcard large italic brand center treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.0 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold"
              style={{ background: "var(--color-brand-green-dark)", color: "var(--color-brand-text)" }}
              aria-hidden="true"
            >
              KR
            </div>
            <h2
              className="display-heading-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              {BRAND.name}
            </h2>
          </div>
          <p
            className="eyebrow-cinzel text-[0.625rem]"
            style={{ color: "var(--color-brand-gold-light)", letterSpacing: "0.22em" }}
          >
            {BRAND.product}
          </p>
          <p
            className="mx-auto mt-3 max-w-sm text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            {BRAND.description}
          </p>

          {/* Hotline CTA */}
          <div className="mt-5 flex justify-center">
            <a
              href={BRAND.hotlineTel}
              className="hover-scale inline-flex items-center gap-3 rounded-full px-6 py-3"
              style={{
                background: "rgba(191,168,0,0.20)",
                border: "1px solid rgba(191,168,0,0.35)",
              }}
              aria-label={`Telefon hotline: ${BRAND.hotline}`}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: "var(--color-brand-gold)" }}
              >
                <Phone className="h-4 w-4 text-green-900" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Hotline 24 Jam
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-gold-light)" }}
                >
                  {BRAND.hotline}
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <OrnamentalDivider className="mb-10" variant="white" />

        {/* Grid links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Perlindungan links */}
          <motion.div variants={cardReveal}>
            <h3
              className="eyebrow-cinzel mb-4 text-[0.625rem]"
              style={{ color: "var(--color-brand-gold)", letterSpacing: "0.18em" }}
            >
              Perlindungan
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              {[
                { label: "Manfaat", href: `#${SECTION_IDS.manfaat}` },
                { label: "Pakej", href: `#${SECTION_IDS.pakej}` },
                { label: "Proses Bantuan", href: `#${SECTION_IDS.proses}` },
                { label: "Ibu Bapa", href: `#${SECTION_IDS.ibuBapa}` },
                { label: "Tuntutan", href: `#${SECTION_IDS.tuntutan}` },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                    style={{ color: "inherit" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Maklumat links */}
          <motion.div variants={cardReveal}>
            <h3
              className="eyebrow-cinzel mb-4 text-[0.625rem]"
              style={{ color: "var(--color-brand-gold)", letterSpacing: "0.18em" }}
            >
              Maklumat
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              {[
                { label: "Mengapa Kohasil", href: `#${SECTION_IDS.utama}` },
                { label: "Prinsip Syariah", href: `#${SECTION_IDS.syariah}` },
                { label: "Impak Kami", href: `#${SECTION_IDS.impak}` },
                { label: "Soalan Lazim", href: `#${SECTION_IDS.soalan}` },
                { label: "Hubungi Kami", href: `#${SECTION_IDS.hubungi}` },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                    style={{ color: "inherit" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Principles */}
          <motion.div variants={cardReveal}>
            <h3
              className="eyebrow-cinzel mb-4 text-[0.625rem]"
              style={{ color: "var(--color-brand-gold)", letterSpacing: "0.18em" }}
            >
              Prinsip
            </h3>
            <ul className="mb-5 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-white">Tabarru&apos;</span>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                    Sumbangan peserta ke dalam dana bersama
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-white">Wakalah</span>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                    Pelantikan pengendali untuk mengurus skim
                  </p>
                </div>
              </li>
            </ul>
            <div className="space-y-2 text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
              {/* TODO: Replace # with actual URLs */}
              <a href="#" className="block transition-colors hover:text-white">
                Dasar Privasi
              </a>
              <a href="#" className="block transition-colors hover:text-white">
                Terma &amp; Syarat
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-xs sm:flex-row"
          style={{
            borderColor: "rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          <p>&copy; {year} Kohasil Raudhah. Hak cipta terpelihara.</p>
          <p>Dibangunkan untuk {BRAND.product}</p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
