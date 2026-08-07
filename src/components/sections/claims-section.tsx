"use client";
// File: src/components/sections/claims-section.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckSquare, Clock, Phone } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";

type ClaimsTab = "tuntutan" | "bantuan";

const claimsDocuments = [
  "Sijil kematian (SC Baru) atau Surat Pengesahan Kematian dari hospital",
  "Salinan MyKad peserta (arwah)",
  "Salinan MyKad waris yang membuat tuntutan",
  "Salinan nombor akaun bank waris",
  "Borang tuntutan Kohasil yang lengkap diisi",
  "Sekiranya kematian akibat kemalangan: laporan polis atau laporan bedah siasat",
];

const assistanceChecklist = [
  "Mandian jenazah mengikut Syariat Islam",
  "Pengkafanan dengan bahan yang mencukupi",
  "Solat jenazah diatur sekiranya diperlukan",
  "Pengangkutan ke tempat pengkebumian",
  "Bantuan proses pendaftaran kematian",
  "Maklumat dan sokongan waris berterusan",
];

const claimsSteps = [
  { step: 1, action: "Hubungi Hotline 24 Jam", detail: `Hubungi ${BRAND.hotline} dengan segera` },
  { step: 2, action: "Sediakan Dokumen", detail: "Kumpulkan dokumen yang diperlukan" },
  { step: 3, action: "Isi Borang Tuntutan", detail: "Borang disediakan oleh pasukan Kohasil" },
  { step: 4, action: "Proses Diluluskan", detail: "Tuntutan diproses dalam tempoh yang ditetapkan" },
];

export function ClaimsSection() {
  const [activeTab, setActiveTab] = useState<ClaimsTab>("bantuan");

  return (
    <section
      id={SECTION_IDS.tuntutan}
      aria-label="Bantuan dan Tuntutan"
      className="py-16 lg:py-24"
      style={{ background: "var(--color-brand-cream)" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Cara Tuntutan"
          title="Proses Bantuan dan Tuntutan"
          subtitle="Kami memudahkan setiap proses supaya waris tidak perlu risau tentang urusan pentadbiran."
          className="mb-10"
        />

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center">
          <div
            className="flex overflow-hidden rounded-xl p-1"
            role="tablist"
            aria-label="Tab tuntutan"
            style={{
              background: "#fff",
              border: "1px solid var(--color-brand-border)",
            }}
          >
            {([
              { id: "bantuan" as ClaimsTab, label: "Bantuan Jenazah" },
              { id: "tuntutan" as ClaimsTab, label: "Proses Tuntutan" },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`claims-panel-${tab.id}`}
                id={`claims-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeTab === tab.id ? "var(--color-brand-green)" : "transparent",
                  color: activeTab === tab.id ? "#fff" : "var(--color-brand-text-muted)",
                }}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          {activeTab === "bantuan" && (
            <motion.div
              key="bantuan"
              id="claims-panel-bantuan"
              role="tabpanel"
              aria-labelledby="claims-tab-bantuan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Checklist */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-brand-border)",
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "var(--color-brand-sage-soft)" }}
                    >
                      <CheckSquare
                        className="h-5 w-5"
                        aria-hidden="true"
                        style={{ color: "var(--color-brand-green)" } as React.CSSProperties}
                      />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)", fontSize: "1.125rem" }}
                    >
                      Perkhidmatan Bantuan Jenazah
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {assistanceChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ background: "var(--color-brand-sage-soft)" }}
                          aria-hidden="true"
                        >
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="var(--color-brand-green)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed" style={{ color: "var(--color-brand-text)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hotline + Note */}
                <div className="flex flex-col gap-4">
                  <div
                    className="flex-1 rounded-2xl p-6"
                    style={{
                      background: "var(--color-brand-green)",
                      color: "#fff",
                    }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: "rgba(255,255,255,0.15)" }}
                      >
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold" style={{ fontFamily: "var(--font-heading)", fontSize: "1.125rem" }}>
                        Hubungi Segera
                      </h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                      Satu panggilan sudah mencukupi. Pasukan kami akan memandu anda melalui setiap langkah.
                    </p>
                    <a
                      href={BRAND.hotlineTel}
                      className="block rounded-xl py-3 text-center text-xl font-bold transition-opacity hover:opacity-90"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: "var(--color-brand-gold)",
                        color: "var(--color-brand-green-dark)",
                      }}
                      aria-label={`Hubungi hotline: ${BRAND.hotline}`}
                    >
                      {BRAND.hotline}
                    </a>
                    <p className="mt-2 text-center text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      24 jam · 7 hari seminggu
                    </p>
                  </div>

                  <div
                    className="rounded-2xl p-4"
                    style={{
                      background: "rgba(191,168,0,0.08)",
                      border: "1px solid rgba(191,168,0,0.2)",
                    }}
                  >
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
                      Perkhidmatan bantuan jenazah disediakan mengikut pakej yang dipilih. Sila semak sijil keahlian anda untuk skop perkhidmatan yang tepat.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "tuntutan" && (
            <motion.div
              key="tuntutan"
              id="claims-panel-tuntutan"
              role="tabpanel"
              aria-labelledby="claims-tab-tuntutan"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Steps */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-brand-border)",
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "var(--color-brand-sage-soft)" }}
                    >
                      <Clock
                        className="h-5 w-5"
                        aria-hidden="true"
                        style={{ color: "var(--color-brand-green)" } as React.CSSProperties}
                      />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)", fontSize: "1.125rem" }}
                    >
                      Langkah-Langkah Tuntutan
                    </h3>
                  </div>

                  <ol className="space-y-4">
                    {claimsSteps.map((step) => (
                      <li key={step.step} className="flex items-start gap-4">
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                          style={{ background: "var(--color-brand-green)" }}
                          aria-label={`Langkah ${step.step}`}
                        >
                          {step.step}
                        </div>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: "var(--color-brand-text)" }}>
                            {step.action}
                          </p>
                          <p className="text-xs" style={{ color: "var(--color-brand-text-muted)" }}>
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Documents */}
                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-brand-border)",
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: "var(--color-brand-sage-soft)" }}
                    >
                      <FileText
                        className="h-5 w-5"
                        aria-hidden="true"
                        style={{ color: "var(--color-brand-green)" } as React.CSSProperties}
                      />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)", fontSize: "1.125rem" }}
                    >
                      Dokumen Diperlukan
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {claimsDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: "var(--color-brand-gold)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--color-brand-text)" }}>
                          {doc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-4 rounded-xl p-3"
                    style={{
                      background: "var(--color-brand-sage-soft)",
                      border: "1px solid var(--color-brand-sage-muted)",
                    }}
                  >
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
                      Senarai ini mungkin berbeza mengikut situasi. Pasukan Kohasil akan memandu waris untuk memastikan semua dokumen yang diperlukan disediakan.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ResponsiveContainer>
    </section>
  );
}
