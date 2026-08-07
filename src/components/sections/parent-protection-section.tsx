"use client";
// File: src/components/sections/parent-protection-section.tsx

import { useState, useId } from "react";
import { UserCheck, Calculator, ArrowRight, Info } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { scrollToSection } from "@/lib/utils";

export function ParentProtectionSection() {
  const [parents, setParents] = useState<"satu" | "dua">("dua");
  const sliderId = useId();

  const monthlyFee = parents === "satu" ? 15 : 28;
  const savingsVsTwo = 28 < 15 * 2 ? 15 * 2 - 28 : 0;

  return (
    <section
      id={SECTION_IDS.ibuBapa}
      aria-label="Perlindungan Ibu Bapa"
      className="py-16 lg:py-24"
      style={{ background: "#fff" }}
    >
      <ResponsiveContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <div>
            <SectionHeading
              eyebrow="Untuk Mereka Yang Berjasa"
              title="Jaga Ibu Bapa Anda Juga"
              subtitle="Tanda bakti anak yang soleh — lindungi ibu bapa anda dengan caruman tambahan yang berpatutan."
              align="left"
              className="mb-8"
            />

            <ul className="mb-8 space-y-4">
              {[
                {
                  icon: UserCheck,
                  text: "Perlindungan untuk ibu atau bapa berumur 50–75 tahun",
                },
                {
                  icon: UserCheck,
                  text: "Manfaat kematian dan pengurusan jenazah disertakan",
                },
                {
                  icon: UserCheck,
                  text: "Peserta perlu mempunyai pakej individu aktif terlebih dahulu",
                },
                {
                  icon: Info,
                  text: "Tertakluk kepada syarat dan terma pakej. Sila hubungi Kohasil untuk maklumat lanjut.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: idx === 3 ? "rgba(191,168,0,0.1)" : "var(--color-brand-sage-soft)",
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        aria-hidden="true"
                        style={{
                          color: idx === 3 ? "var(--color-brand-gold)" : "var(--color-brand-green)",
                        } as React.CSSProperties}
                      />
                    </div>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{
                        color: idx === 3 ? "var(--color-brand-text-muted)" : "var(--color-brand-text)",
                      }}
                    >
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => scrollToSection(SECTION_IDS.hubungi)}
              className="btn-primary"
              type="button"
              aria-label="Hubungi untuk maklumat pakej perlindungan ibu bapa"
            >
              Dapatkan Maklumat Lanjut
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Estimator side */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: "var(--color-brand-sage-soft)",
              border: "1px solid var(--color-brand-sage-muted)",
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "var(--color-brand-green)" }}
              >
                <Calculator className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)" }}
                >
                  Anggaran Caruman
                </h3>
                <p className="text-xs" style={{ color: "var(--color-brand-text-muted)" }}>
                  Kiraan kasar — tertakluk kepada semakan Kohasil
                </p>
              </div>
            </div>

            {/* Toggle: 1 or 2 parents */}
            <fieldset className="mb-6">
              <legend className="mb-3 text-sm font-semibold" style={{ color: "var(--color-brand-text)" }}>
                Bilangan ibu bapa untuk dilindungi:
              </legend>
              <div className="flex gap-3">
                {([
                  { value: "satu", label: "1 Orang", sublabel: "Ibu atau Bapa" },
                  { value: "dua", label: "2 Orang", sublabel: "Ibu & Bapa" },
                ] as const).map((opt) => (
                  <label
                    key={opt.value}
                    className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl px-3 py-4 text-center transition-all"
                    style={{
                      background: parents === opt.value ? "var(--color-brand-green)" : "#fff",
                      border: `2px solid ${parents === opt.value ? "var(--color-brand-green)" : "var(--color-brand-border)"}`,
                      color: parents === opt.value ? "#fff" : "var(--color-brand-text-muted)",
                    }}
                  >
                    <input
                      type="radio"
                      name={`parents-${sliderId}`}
                      value={opt.value}
                      checked={parents === opt.value}
                      onChange={() => setParents(opt.value)}
                      className="sr-only"
                    />
                    <span className="text-lg font-bold">{opt.label}</span>
                    <span className="text-xs">{opt.sublabel}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Result display */}
            <div
              className="mb-6 rounded-2xl p-6 text-center"
              style={{ background: "#fff", border: "1px solid var(--color-brand-border)" }}
            >
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-brand-gold)" }}>
                Caruman Anggaran
              </p>
              <p
                className="text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
              >
                RM{monthlyFee}
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--color-brand-text-muted)" }}>
                sebulan (contoh sahaja)
              </p>

              {parents === "dua" && savingsVsTwo > 0 && (
                <div
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "var(--color-brand-sage-soft)",
                    color: "var(--color-brand-green)",
                    border: "1px solid var(--color-brand-sage-muted)",
                  }}
                >
                  Jimat RM{savingsVsTwo} berbanding 2 pakej berasingan
                </div>
              )}
            </div>

            {/* Benefits summary for selected option */}
            <ul className="space-y-2 text-sm">
              {[
                `Manfaat kematian: RM5,000 ${parents === "dua" ? "setiap seorang" : ""}`,
                "Pengurusan jenazah penuh disertakan",
                `Tambahan kemalangan: sehingga RM5,000 ${parents === "dua" ? "setiap seorang" : ""}`,
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: "var(--color-brand-green)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "var(--color-brand-text-muted)" }}>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2 text-xs italic">
                <span
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full opacity-50"
                  style={{ background: "var(--color-brand-gold)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "var(--color-brand-text-muted)" }}>
                  Angka adalah contoh sahaja dan tertakluk kepada pengesahan Kohasil.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
