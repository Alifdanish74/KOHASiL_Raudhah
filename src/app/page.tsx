"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { PackageSection } from "@/components/sections/package-section";
import { ShariahSection } from "@/components/sections/shariah-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  // Shared state: when user selects a package, pre-fill contact form
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <>
      {/* ── Section 1: Hero ───────────────────────────────────────── */}
      <HeroSection />

      {/* ── Section 2: Introduction & Modus Operandi ────────────── */}
      <IntroductionSection />

      {/* ── Section 3: Benefits & Parent Protection ───────────────── */}
      <BenefitsSection />

      {/* ── Section 4: Package Selection ─────────────────────────── */}
      <PackageSection
        onPackageSelect={setSelectedPackage}
        selectedPackage={selectedPackage}
      />

      {/* ── Section 5: Shariah Principles ────────────────────────── */}
      <ShariahSection />

      {/* ── Section 6: FAQ ──────────────────────────────────────── */}
      <FaqSection />

      {/* ── Section 7: Contact / Enquiry Form ───────────────────── */}
      <ContactSection preselectedPackage={selectedPackage} />
    </>
  );
}
