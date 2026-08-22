"use client";
// File: src/components/ui/section-heading.tsx
// Weddingcard-matched: eyebrow uses Cinzel-style (eyebrow-cinzel class),
// title animates with y:-30→0 (Weddingcard Content heading style),
// subtitle fades in with delay, ornamental divider between heading and subtitle.

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { OrnamentalDivider } from "./ornamental-divider";
import { viewportOnce } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  variant?: "default" | "white";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  subtitle2,
  align = "center",
  className,
  titleClassName,
  variant = "default",
}: SectionHeadingProps) {
  const isWhite = variant === "white";

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className
      )}
    >
      {/* Eyebrow — Cinzel-style uppercase tracking (matches Weddingcard "Walimatulurus" label) */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4 }}
          className="eyebrow-cinzel"
          style={{ color: isWhite ? "var(--color-brand-gold-light)" : "var(--color-brand-gold)" }}
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Section title — y: -30 → 0, duration 1.2 (Weddingcard WeddingInfo heading) */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className={cn("leading-tight", titleClassName)}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.875rem, 4vw, 3rem)",
          fontWeight: 600,
          color: isWhite ? "#fff" : "var(--color-brand-text)",
        }}
      >
        {title}
      </motion.h2>

      {/* Ornamental divider between heading and subtitle (Weddingcard Border.svg sections) */}
      {align === "center" && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <OrnamentalDivider
            className="my-3"
            variant={isWhite ? "white" : "gold"}
          />
        </motion.div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-base leading-relaxed"
          style={{
            color: isWhite ? "rgba(255,255,255,0.80)" : "var(--color-brand-text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtitle 2 */}
      {subtitle2 && (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-base leading-relaxed"
          style={{
            color: isWhite ? "rgba(255,255,255,0.80)" : "var(--color-brand-text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {subtitle2}
        </motion.p>
      )}
    </div>
  );
}
