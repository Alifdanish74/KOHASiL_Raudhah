"use client";
// File: src/components/sections/opening-cover.tsx
// KOHASiL Entrance Component — 100% matched to Weddingcard's Entrance.tsx
// Features:
// - Shows entrance overlay when user first loads the site
// - Full screen overlay at z-[9999] covering header, footer & nav
// - Locks document.body overflow while open (prevents scrolling behind cover)
// - Blurred full-screen background image (/images/family-hero.png)
// - Eyebrow in Cinzel uppercase tracking
// - Product Name in Cormorant Garamond display with scale 0.5 → 1 entrance
// - Gold "Buka" button with hover/tap animations
// - Slide-up exit animation: y: 0 → y: -1000, opacity: 1 → 0, duration 0.8s

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
      // Trigger background music playback after opening cover is opened
      window.dispatchEvent(new CustomEvent("start_bg_audio"));
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
            style={{ background: "rgba(240,238,233,0.18)" }}
            aria-hidden="true"
          />

          {/* Central Card — sits above the background, uses dark text to suit the light image */}
          <div className="relative z-10 flex max-w-sm flex-col items-center px-6 text-center sm:max-w-md">
            {/* Arch border container — translucent glass card on the light bg */}
            <div
              className="mb-8 w-full max-w-xs overflow-hidden px-6 pb-18 pt-20"
              style={{
                borderRadius: "60% 60% 0 0 / 40% 40% 0 0",
                border: "1.5px solid var(--color-brand-gold)",
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(156,4,9,0.10)",
              }}
            >
              {/* Eyebrow — Cinzel Font Style (matches "Walimatulurus") */}
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="eyebrow-cinzel mb-3"
                style={{ color: "var(--color-brand-gold)", letterSpacing: "0.22em" }}
              >
                {BRAND.product}
              </motion.p>

              {/* Product Name — Scale 0.5 → 1 (matches Weddingcard Names) */}
              <div className="mb-3">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
                  style={{
                    fontSize: "clamp(2.25rem, 7vw, 3.5rem)",
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "var(--color-brand-green-dark)",
                    lineHeight: 1.1,
                  }}
                >
                  {BRAND.name}
                </motion.h1>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm font-medium italic leading-relaxed"
                style={{
                  color: "var(--color-brand-text-muted)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {BRAND.tagline}
              </motion.p>
            </div>

            {/* Buka Button — Matches Weddingcard Entrance Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex w-full max-w-xs flex-col items-center gap-3"
            >
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-brand-text-muted)" }}
              >
                Ketahui bantuan pengurusan jenazah 24 jam.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
