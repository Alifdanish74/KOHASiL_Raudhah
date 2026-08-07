"use client";
// File: src/components/ui/benefit-card.tsx
// Weddingcard-matched: whileInView card reveal (cardReveal variant),
// hover scale 1.04 (Weddingcard nav button hover spirit), smooth transition.

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { cardReveal, viewportOnce } from "@/lib/motion";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
  className?: string;
}

export function BenefitCard({
  icon,
  title,
  description,
  highlight,
  className,
}: BenefitCardProps) {
  // Dynamically resolve Lucide icon by name
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon];

  return (
    <motion.div
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      // Weddingcard nav button hover: scale 1.1 → we use 1.04 for cards
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "card group relative flex flex-col gap-4 p-6 transition-shadow duration-200 hover:shadow-elevated cursor-default",
        className
      )}
      style={{
        "--shadow-elevated": "0 8px 32px 0 rgba(31, 77, 58, 0.1)",
      } as React.CSSProperties}
    >
      {highlight && (
        <span
          className="absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{
            background: "var(--color-brand-sage-soft)",
            color: "var(--color-brand-green)",
            border: "1px solid var(--color-brand-sage-muted)",
          }}
        >
          {highlight}
        </span>
      )}

      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ background: "var(--color-brand-sage-soft)" }}
      >
        {IconComponent ? (
          <IconComponent
            className="h-6 w-6"
            aria-hidden={true}
            style={{ color: "var(--color-brand-green)" }}
          />
        ) : (
          <Icons.Circle className="h-6 w-6" aria-hidden={true} />
        )}
      </div>

      <div>
        <h3
          className="mb-2 text-base font-semibold leading-snug"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)", fontSize: "1.0625rem" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-brand-text-muted)", fontFamily: "var(--font-body)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
