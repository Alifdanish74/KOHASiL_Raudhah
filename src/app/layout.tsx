// File: src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNavigation } from "@/components/layout/mobile-bottom-navigation";
import { OpeningCover } from "@/components/sections/opening-cover";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { AudioPlayer } from "@/components/ui/audio-player";

// Heading font — Cormorant Garamond (variable font)
const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
});

// Body font — Inter (variable font)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "Kohasil Raudhah — Perlindungan Dengan Ketenangan",
  description:
    "Skim bantuan pengurusan jenazah 24 jam dan manfaat khairat yang Patuh Syariah untuk anda dan keluarga. Mulai dari RM10 sebulan sahaja melalui potongan gaji.",
  keywords: [
    "kohasil raudhah",
    "skim jenazah",
    "bantuan pengurusan jenazah",
    "khairat kematian",
    "my sakinah pro",
    "perlindungan keluarga",
    "patuh syariah",
    "takaful jenazah",
    "potongan gaji",
  ],
  authors: [{ name: "KOHASiL" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    title: "KOHASiL Raudhah — Perlindungan Dengan Ketenangan",
    description:
      "Skim bantuan pengurusan jenazah 24 jam dan manfaat khairat yang Patuh Syariah untuk anda dan keluarga.",
    siteName: "KOHASiL Raudhah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col antialiased" style={{ background: "var(--color-brand-ivory)" }}>
        {/* Accessibility skip link */}
        <a href="#main-content" className="skip-link">
          Langkau ke kandungan utama
        </a>

        {/* Full-screen Opening Cover / Entrance */}
        <OpeningCover />

        <Header />

        <main id="main-content" className="flex-1 pb-mobile-nav" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <MobileBottomNavigation />

        {/* Floating Utilities */}
        <AudioPlayer />
        <ScrollToTop />
      </body>
    </html>
  );
}
