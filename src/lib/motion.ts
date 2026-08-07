// File: src/lib/motion.ts
// Shared Framer Motion variants — timing matched to Weddingcard reference project.
// Weddingcard used: duration 1.2 for section reveals, 0.8 for cover exit, 0.6 for nav entrance,
// scale 0.5→1 duration 1.0 with stagger 0.4/0.6, y:100→0 for info reveals.

import type { Variants } from "framer-motion";

// ─── Section reveal: y: -30 → 0 (Weddingcard Content/WeddingInfo heading style) ─
export const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

// ─── Fast fade up for quick elements ─
export const fadeUpFast: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Large title scale: scale 0.5 → 1 (Weddingcard names style) ─
export const scaleIn: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.0, ease: "backOut" },
  },
};

// ─── Info block reveal: y: 100 → 0 (Weddingcard WeddingInfo style) ─
export const riseUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

// ─── Stagger container for lists/grids ─
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger card item ─
export const cardReveal: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// ─── Opening cover exit (Weddingcard Entrance: y: 0 → y:-1000, duration: 0.8) ─
export const coverExit: Variants = {
  open: { y: 0, opacity: 1 },
  closed: { y: "-100vh", opacity: 0 },
};

export const coverExitTransition = { duration: 0.8, ease: "easeInOut" as const };

// ─── Navbar entrance: y: 30 → 0 (Weddingcard Navbar whileInView) ─
export const navbarEntrance: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Timeline step reveal ─
export const timelineStep: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Accordion body expand ─
export const accordionBody = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
};

// ─── Shared viewport settings (once: true matches Weddingcard) ─
export const viewportOnce = { once: true, amount: 0.15 } as const;
export const viewportEager = { once: true, amount: 0.05 } as const;
