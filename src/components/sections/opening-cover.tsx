"use client";
// File: src/components/sections/opening-cover.tsx
// KOHASiL Entrance Component — Revised UI with Logo & Glassmorphic Container (Arch Removed)

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

// Exact variants from Weddingcard Entrance.tsx
const entranceVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -1000 },
};

export function OpeningCover() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [visible, setVisible] = useState(pathname === "/");

  useEffect(() => {
    // Only hide cover on subpages like /syarat; on home page keep state
    if (pathname !== "/") {
      setVisible(false);
    }
  }, [pathname]);

  // Lock body scroll while entrance cover is visible and open
  useEffect(() => {
    if (visible && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [visible, isOpen]);

  const handleClick = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      // Trigger background music playback & slow auto-scroll after opening cover is opened
      window.dispatchEvent(new CustomEvent("start_bg_audio"));
      window.dispatchEvent(new CustomEvent("start_auto_scroll"));
    }
    // Reset window scroll to top of page immediately on click
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    // Ensure this matches the transition duration (800ms) like Weddingcard
    setTimeout(() => {
      setVisible(false);
      scrollToSection(SECTION_IDS.utama);
    }, 800);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="entrance-cover"
          initial={{ y: 0, opacity: 1 }}
          animate={isOpen ? "open" : "closed"}
          variants={entranceVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex h-dvh w-screen flex-col items-center justify-center overflow-hidden px-4 text-center touch-none overscroll-none"
          role="dialog"
          aria-modal="true"
          aria-label="Selamat datang ke KOHASiL Raudhah"
        >
          {/* Full screen background image for mobile portrait vs desktop landscape */}
          <picture className="absolute inset-0 z-0 h-full w-full">
            {/* Desktop: landscape image */}
            <source
              media="(min-width: 768px)"
              srcSet="/images/opening_background_desktop.png"
            />
            {/* Mobile default: portrait image */}
            <img
              src="/images/opening_background.png"
              alt=""
              className="h-full w-full object-cover object-center"
              aria-hidden="true"
            />
          </picture>

          {/* Subtle white/cream overlay to keep text readable without hiding the image */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "rgba(240,238,233,0.22)" }}
            aria-hidden="true"
          />

          {/* Central Content — proportioned to sit strictly inside the arc frame of the background */}
          <div className="relative z-10 flex w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px] flex-col items-center px-3 sm:px-4 text-center my-auto">
            {/* KOHASiL Official Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 sm:mb-3 lg:mb-4 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-2.5 shadow-md border border-slate-100 flex items-center justify-center"
            >
              <img
                src="/images/kohasil_logo.jpg"
                alt="Logo KOHASiL"
                className="h-15 sm:h-15 lg:h-15 w-auto object-contain"
              />
            </motion.div>

            {/* Eyebrow — Cinzel Font Style */}
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="eyebrow-cinzel my-5 sm:my-5 text-2xl sm:text-2xl lg:text-3xl"
              style={{ color: "var(--color-brand-text)", letterSpacing: "0.18em" }}
            >
              {BRAND.product}
            </motion.p>

            {/* Product Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-1 sm:mb-1.5 font-bold italic text-3xl sm:text-3xl lg:text-4xl"
              style={{
                // fontSize: "clamp(1.25rem, 3.5vw, 2.25rem)",
                fontFamily: "var(--font-heading)",
                color: "var(--color-brand-green-dark)",
                lineHeight: 1.1,
              }}
            >
              {BRAND.name}
            </motion.h1>

            {/* Gold Line Accent */}
            <div
              className="my-1.5 sm:my-2 h-0.5 w-10 sm:w-14 rounded-full"
              style={{ background: "var(--color-brand-gold)", opacity: 0.7 }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[11px] sm:text-xs lg:text-sm font-semibold italic leading-snug my-5 sm:mb-4 sm:mb-5"
              style={{
                color: "var(--color-brand-text)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {BRAND.tagline}
            </motion.p>

            {/* Buka Button & Notice */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-full flex flex-col items-center gap-1.5 sm:gap-2.5"
            >
              {/* Notice Button above Buka */}
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex flex-col my-2 items-center justify-center rounded-xl sm:rounded-2xl py-1.5 px-3 sm:py-2.5 sm:px-4 text-white border-2 shadow-md transition-all"
                style={{
                  background: "#242FA4",
                  borderColor: "#F0F00E",
                  boxShadow: "0 4px 16px rgba(10 75 155 / 0.35)",
                  touchAction: "manipulation",
                }}
                type="button"
              >
                <span className="text-[10px] sm:text-xs lg:text-sm font-extrabold tracking-wide uppercase text-white leading-tight">
                  TERBUKA KEPADA BUKAN AHLI KOHASIL
                </span>
                <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold tracking-wider uppercase mt-0.5 leading-tight" style={{ color: "#F0F00E" }}>
                  SEMUA STAF LHDN DIJEMPUT MENYERTAI
                </span>
              </motion.button>

              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-full py-2 px-4 sm:py-2.5 sm:px-5 text-xs sm:text-sm lg:text-base font-bold shadow-md transition-all"
                style={{
                  background: "var(--color-brand-gold)",
                  color: "var(--color-brand-green-dark)",
                  boxShadow: "0 5px 20px rgba(191,168,0,0.4)",
                  touchAction: "manipulation",
                }}
                type="button"
                aria-label="Buka penerangan KOHASiL Raudhah"
              >
                Buka
                <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 animate-bounce" aria-hidden="true" />
              </motion.button>

              <p
                className="text-[9px] sm:text-[11px] lg:text-xs font-medium leading-tight"
                style={{ color: "var(--color-brand-text-muted)" }}
              >
                Klik untuk terokai khidmat bantuan 24 jam.
              </p>
            </motion.div>
            {/* Notice Button above Buka */}
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex flex-col my-2 items-center justify-center rounded-xl sm:rounded-2xl py-1.5 px-3 sm:py-2.5 sm:px-4 text-white border-2 shadow-md transition-all"
              style={{
                background: "#242FA4",
                borderColor: "#F0F00E",
                boxShadow: "0 4px 16px rgba(10 75 155 / 0.35)",
                touchAction: "manipulation",
              }}
              type="button"
            >
              <span className="text-[10px] sm:text-xs lg:text-sm font-extrabold tracking-wide uppercase text-white leading-tight">
                JUGA TERBUKA KEPADA NON-MUSLIM
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
