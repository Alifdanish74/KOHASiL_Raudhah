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
          {/* Responsive background: mobile portrait vs desktop landscape */}
          <picture className="absolute inset-0 z-0">
            {/* Desktop: landscape image */}
            <source
              media="(min-width: 1024px)"
              srcSet="/images/opening_background_desktop.png"
            />
            {/* Tablet: desktop image works fine */}
            <source
              media="(min-width: 640px)"
              srcSet="/images/opening_background_desktop.png"
            />
            {/* Mobile default: portrait image */}
            <img
              src="/images/opening_background.png"
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </picture>

          {/* Subtle white/cream overlay to keep text readable without hiding the image */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "rgba(240,238,233,0.22)" }}
            aria-hidden="true"
          />

          {/* Central Card — glassmorphism container, arch shape removed */}
          <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-4 text-center sm:max-w-md">
            <div
              className="w-full rounded-3xl px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center"
              style={{
                border: "1.5px solid var(--color-brand-gold)",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 16px 48px rgba(156,4,9,0.12)",
              }}
            >
              {/* KOHASiL Official Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5 rounded-2xl bg-white p-3 shadow-md border border-slate-100 flex items-center justify-center"
              >
                <img
                  src="/images/kohasil_logo.jpg"
                  alt="Logo KOHASiL"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </motion.div>

              {/* Eyebrow — Cinzel Font Style */}
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="eyebrow-cinzel mb-2"
                style={{ color: "var(--color-brand-gold)", letterSpacing: "0.2em" }}
              >
                {BRAND.product}
              </motion.p>

              {/* Product Name */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-2 font-bold italic"
                style={{
                  fontSize: "clamp(2.25rem, 7vw, 3.25rem)",
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-brand-green-dark)",
                  lineHeight: 1.1,
                }}
              >
                {BRAND.name}
              </motion.h1>

              {/* Gold Line Accent */}
              <div
                className="my-3 h-0.5 w-16 rounded-full"
                style={{ background: "var(--color-brand-gold)", opacity: 0.7 }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm sm:text-base font-semibold italic leading-relaxed mb-6"
                style={{
                  color: "var(--color-brand-text)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {BRAND.tagline}
              </motion.p>

              {/* Buka Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-full flex flex-col items-center gap-3"
              >
                <motion.button
                  onClick={handleClick}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 px-6 text-base font-bold shadow-lg transition-all"
                  style={{
                    background: "var(--color-brand-gold)",
                    color: "var(--color-brand-green-dark)",
                    boxShadow: "0 6px 24px rgba(191,168,0,0.45)",
                    touchAction: "manipulation",
                  }}
                  type="button"
                  aria-label="Buka penerangan KOHASiL Raudhah"
                >
                  Buka
                  <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
                </motion.button>

                <p
                  className="text-xs font-medium leading-relaxed"
                  style={{ color: "var(--color-brand-text-muted)" }}
                >
                  Klik untuk terokai khidmat bantuan 24 jam.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
