// File: src/components/ui/ornamental-divider.tsx
// Weddingcard-inspired decorative divider.
// Uses the Border.svg motif spirit (gold wave line with central ornament).
// Border.svg was copied from Weddingcard to /public/assets/Border.svg

import { cn } from "@/lib/utils";

interface OrnamentalDividerProps {
  className?: string;
  label?: string;
  variant?: "gold" | "white" | "muted";
}

export function OrnamentalDivider({
  className,
  label,
  variant = "gold",
}: OrnamentalDividerProps) {
  const colors = {
    gold: "var(--color-brand-gold)",
    white: "rgba(255,255,255,0.4)",
    muted: "var(--color-brand-border)",
  };

  const color = colors[variant];

  return (
    <div
      className={cn("gold-divider my-2", className)}
      aria-hidden="true"
      style={
        {
          "--ornament-color": color,
          "--line-color": color,
        } as React.CSSProperties
      }
    >
      {/* Left wave line with CSS — Weddingcard Border.svg spirit */}
      <div className="flex flex-1 items-center gap-1" aria-hidden="true">
        <div
          className="flex-1"
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, ${color} 70%, transparent 100%)`,
            opacity: 0.55,
          }}
        />
        {/* Small diamond (matches Weddingcard border ornament left side) */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill={color}
          aria-hidden="true"
          style={{ opacity: 0.7, flexShrink: 0 }}
        >
          <path d="M4 0L8 4L4 8L0 4Z" />
        </svg>
      </div>

      {/* Central ornament */}
      {label ? (
        <span
          className="flex-shrink-0 px-2 font-heading text-sm italic"
          style={{ color, fontFamily: "var(--font-heading)" }}
        >
          {label}
        </span>
      ) : (
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          aria-hidden="true"
          className="flex-shrink-0"
          style={{ opacity: 0.8 }}
        >
          {/* Weddingcard-inspired central ornament: star + lines */}
          <path d="M11 1L12.5 5.5H17L13.5 8.5L15 13L11 10.5L7 13L8.5 8.5L5 5.5H9.5L11 1Z" fill={color} />
          <line x1="0" y1="7" x2="4" y2="7" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="18" y1="7" x2="22" y2="7" stroke={color} strokeWidth="0.8" strokeOpacity="0.6" />
        </svg>
      )}

      {/* Right wave line */}
      <div className="flex flex-1 items-center gap-1" aria-hidden="true">
        {/* Small diamond */}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill={color}
          aria-hidden="true"
          style={{ opacity: 0.7, flexShrink: 0 }}
        >
          <path d="M4 0L8 4L4 8L0 4Z" />
        </svg>
        <div
          className="flex-1"
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 0%, ${color} 30%, transparent 100%)`,
            opacity: 0.55,
          }}
        />
      </div>
    </div>
  );
}
