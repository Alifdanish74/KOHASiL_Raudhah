// File: src/components/layout/header.tsx
// Weddingcard-matched: gold bottom border accent, Cinzel-style product eyebrow
import { BRAND } from "@/lib/constants";
import { SECTION_IDS } from "@/lib/constants";
import { DesktopNavigation } from "./desktop-navigation";

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: "rgba(250, 247, 240, 0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-brand-border)",
        boxShadow: "0 1px 0 0 rgba(191,168,0,0.15), 0 2px 12px rgba(220,7,18,0.04)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href={`#${SECTION_IDS.utama}`}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 rounded-lg"
          style={{ "--tw-ring-color": "var(--color-brand-gold)" } as React.CSSProperties}
          aria-label="Kohasil Raudhah — kembali ke bahagian utama"
        >
          {/* Logo placeholder — replace with real SVG logo */}
          <div
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-white text-xs font-bold"
            style={{ background: "var(--color-brand-green)" }}
            aria-hidden="true"
          >
            KR
          </div>
          <div className="hidden sm:block">
            <p
              className="text-base font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
            >
              {BRAND.name}
            </p>
            <p
              className="eyebrow-cinzel text-[0.5rem]"
              style={{ color: "var(--color-brand-gold)", letterSpacing: "0.18em" }}
            >
              {BRAND.product}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <DesktopNavigation />

        {/* CTA */}
        <a
          href={`#${SECTION_IDS.pakej}`}
          className="btn-primary hidden text-sm lg:inline-flex"
          style={{ padding: "0.625rem 1.25rem", minHeight: "40px" }}
          aria-label="Daftar sebagai ahli Kohasil Raudhah"
        >
          Langgan Sekarang
        </a>

        {/* Mobile hotline */}
        <a
          href={BRAND.hotlineTel}
          className="btn-outline flex items-center gap-1.5 text-sm lg:hidden"
          style={{ padding: "0.5rem 0.875rem", minHeight: "40px" }}
          aria-label={`Hubungi hotline: ${BRAND.hotline}`}
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="sr-only sm:not-sr-only">Hubungi</span>
        </a>
      </div>
    </header>
  );
}
