"use client";
// File: src/components/layout/mobile-bottom-navigation.tsx
// Weddingcard-matched: rounded-t-3xl, backdropBlur, whileInView y:30→0 entrance,
// active indicator dot, hover scale (matches Weddingcard Navbar)

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { mobileNavItems } from "@/data/navigation";
import { scrollToSection } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";
import { Home, Shield, Package, ListChecks, PhoneCall, FileText, Star, HelpCircle } from "lucide-react";
import { viewportEager } from "@/lib/motion";

// Map icon string names to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Home,
  Shield,
  Package,
  ListChecks,
  PhoneCall,
  FileText,
  Star,
  HelpCircle,
};

// Physical order of sections on the home page
const PAGE_SECTION_IDS = [
  SECTION_IDS.utama,
  SECTION_IDS.proses,
  SECTION_IDS.manfaat,
  SECTION_IDS.pakej,
  SECTION_IDS.syariah,
  SECTION_IDS.soalan,
  SECTION_IDS.hubungi,
];

export function MobileBottomNavigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS.utama);

  const handleScroll = useCallback(() => {
    if (window.location.pathname !== "/") return;

    let current = PAGE_SECTION_IDS[0];

    for (const id of PAGE_SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      const hash = window.location.hash.replace("#", "");
      if (hash && PAGE_SECTION_IDS.includes(hash as (typeof PAGE_SECTION_IDS)[number])) {
        setActiveSection(hash);
      } else {
        handleScroll();
      }
    }, 0);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, pathname]);

  return (
    // Weddingcard Navbar: initial y:30 opacity:0, whileInView y:0 opacity:1, duration 0.6
    <motion.nav
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewportEager}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bottom-nav-weddingcard"
      style={{
        background: "rgba(250, 247, 240, 0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid var(--color-brand-border)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Navigasi bawah"
    >
      <ul className="flex h-16 items-stretch" role="list">
        {mobileNavItems.map((item) => {
          const isRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
          const sectionId = item.href.replace("/#", "").replace("#", "");

          const isActive = isRoute
            ? pathname === item.href
            : pathname === "/" && activeSection === sectionId;

          const IconComponent = iconMap[item.icon];

          return (
            <li key={item.href} className="flex flex-1">
              {/* Weddingcard nav button: whileHover scale:1.1, duration 0.4 */}
              <motion.a
                href={item.href}
                onClick={(e) => {
                  if (!isRoute) {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative flex flex-1 flex-col items-center justify-center gap-1",
                  "min-h-[48px] touch-manipulation",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
                  "transition-colors duration-200"
                )}
                style={{
                  color: isActive
                    ? "var(--color-brand-green)"
                    : "var(--color-brand-text-muted)",
                  "--tw-ring-color": "var(--color-brand-gold)",
                } as React.CSSProperties}
                aria-current={isActive ? "page" : undefined}
                aria-label={item.label}
              >
                {IconComponent && (
                  <IconComponent
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span className="text-[10px] font-semibold">{item.label}</span>

                {/* Active gold dot indicator (Weddingcard-style) */}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute bottom-1.5 h-1 w-6 rounded-full"
                    style={{ background: "var(--color-brand-gold)" }}
                    aria-hidden="true"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
