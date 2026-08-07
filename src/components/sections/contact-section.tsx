"use client";
// File: src/components/sections/contact-section.tsx
// Weddingcard-matched: card-elevated form surface, hover animations on contact links,
// stagger entrance for contact options (Weddingcard modal bottom-sheet surface feel)

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Phone, MessageCircle, Mail, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { enquirySchema, type EnquiryFormData } from "@/lib/validations";
import { packageCategories } from "@/data/packages";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FormField } from "@/components/ui/form-field";
import { staggerContainer, cardReveal, viewportOnce } from "@/lib/motion";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactSectionProps {
  preselectedPackage?: string;
}

export function ContactSection({ preselectedPackage }: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<EnquiryFormData, any, EnquiryFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(enquirySchema) as any,
    defaultValues: {
      pakej: preselectedPackage || "",
      lindungiIbuBapa: "tidak",
      kaedahHubungi: "whatsapp",
      persetujuan: undefined,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ralat pelayan");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id={SECTION_IDS.hubungi}
      aria-label="Hubungi Kami"
      className="section-texture py-16 lg:py-24"
      style={{ background: "var(--color-brand-cream)" }}
    >
      <ResponsiveContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <SectionHeading
              eyebrow="Hubungi Kami"
              title="Kami Sedia Membantu Anda"
              subtitle="Tinggalkan maklumat anda dan pegawai Kohasil akan menghubungi anda dalam masa terdekat."
              align="left"
              className="mb-8"
            />

            {/* Contact options */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4"
            >
              {[
                {
                  icon: Phone,
                  label: "Hotline 24 Jam (BJSB)",
                  value: BRAND.hotline,
                  href: BRAND.hotlineTel,
                  sublabel: "Bumijez Sdn Bhd - Bantuan kecemasan 24 jam",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp 24 Jam",
                  value: BRAND.hotline,
                  href: `https://wa.me/601113001999`,
                  sublabel: "Talian perkhidmatan & sokongan",
                },
                {
                  icon: Mail,
                  label: "E-mel Kohasil",
                  value: "kohasil@gmail.com",
                  href: "mailto:kohasil@gmail.com",
                  sublabel: "Pertanyaan am & keahlian",
                },
              ].map(({ icon: Icon, label, value, href, sublabel }) => (
                <motion.a
                  key={href}
                  variants={cardReveal}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl p-4 transition-shadow hover:shadow-card"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-brand-border)",
                    display: "flex",
                  }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--color-brand-sage-soft)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      aria-hidden="true"
                      style={{ color: "var(--color-brand-green)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-brand-gold)" }}>
                      {label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-brand-text)" }}>
                      {value}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-brand-text-muted)" }}>
                      {sublabel}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Official Office Addresses */}
              <div className="pt-4 border-t space-y-3 text-xs text-slate-600">
                <div className="rounded-xl p-3 bg-white border border-slate-200">
                  <p className="font-bold text-green-900 text-xs mb-1">
                    KOHASIL (Pejabat Utama)
                  </p>
                  <p>1-23 Tingkat 1 Kanan, Blok 9, Kompleks Bangunan Kerajaan, Jalan Tuanku Abdul Halim, 50600 Kuala Lumpur</p>
                  <p className="mt-1 font-semibold text-slate-700">Tel Pejabat: 03-6203 5858</p>
                </div>

                <div className="rounded-xl p-3 bg-white border border-slate-200">
                  <p className="font-bold text-green-900 text-xs mb-1">
                    BUMIJEZ SDN BHD (Pengendali Skim)
                  </p>
                  <p>No 11, Tingkat 1, Jalan PP 2/1, Taman Putra Prima, 47130 Puchong, Selangor</p>
                  <p className="mt-1 font-semibold text-slate-700">Email: info@bumijez.com.my</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              // Success state
              <div
                className="flex flex-col items-center justify-center gap-5 rounded-3xl p-10 text-center"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-brand-border)",
                  minHeight: "400px",
                }}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background: "var(--color-brand-sage-soft)" }}
                >
                  <CheckCircle2
                    className="h-10 w-10"
                    aria-hidden="true"
                    style={{ color: "var(--color-brand-green)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2 text-2xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                  >
                    Terima Kasih!
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
                    Pertanyaan anda telah diterima. Pegawai kami akan menghubungi anda dalam masa terdekat. Sekiranya mendesak, sila hubungi hotline kami secara terus.
                  </p>
                </div>
                <a href={BRAND.hotlineTel} className="btn-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BRAND.hotline}
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm underline"
                  style={{ color: "var(--color-brand-text-muted)" }}
                  type="button"
                >
                  Hantar pertanyaan lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Borang pertanyaan Kohasil Raudhah"
                className="rounded-3xl p-6 lg:p-8"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-brand-border)",
                }}
              >
                <h2
                  className="mb-6 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-text)" }}
                >
                  Borang Pertanyaan
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Nama */}
                  <FormField
                    id="nama"
                    label="Nama Penuh"
                    required
                    error={errors.nama?.message}
                    className="sm:col-span-2"
                  >
                    <input
                      id="nama"
                      type="text"
                      autoComplete="name"
                      className={cn("form-input", errors.nama && "error")}
                      placeholder="Contoh: Ahmad bin Abdullah"
                      aria-describedby={errors.nama ? "nama-error" : undefined}
                      aria-invalid={!!errors.nama}
                      {...register("nama")}
                    />
                  </FormField>

                  {/* Telefon */}
                  <FormField
                    id="telefon"
                    label="Nombor Telefon"
                    required
                    error={errors.telefon?.message}
                    helperText="Format: 011-XXXX XXXX"
                  >
                    <input
                      id="telefon"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      className={cn("form-input", errors.telefon && "error")}
                      placeholder="011-XXXX XXXX"
                      aria-describedby={errors.telefon ? "telefon-error" : "telefon-helper"}
                      aria-invalid={!!errors.telefon}
                      {...register("telefon")}
                    />
                  </FormField>

                  {/* No Ahli */}
                  <FormField
                    id="noAhli"
                    label="No. Ahli (jika ada)"
                    helperText="Kosongkan jika belum ada"
                  >
                    <input
                      id="noAhli"
                      type="text"
                      className="form-input"
                      placeholder="Contoh: KR-XXXXX"
                      aria-describedby="noAhli-helper"
                      {...register("noAhli")}
                    />
                  </FormField>

                  {/* Pakej */}
                  <FormField
                    id="pakej"
                    label="Pakej Yang Diminati"
                    required
                    error={errors.pakej?.message}
                    className="sm:col-span-2"
                  >
                    <select
                      id="pakej"
                      className={cn("form-input", errors.pakej && "error")}
                      aria-describedby={errors.pakej ? "pakej-error" : undefined}
                      aria-invalid={!!errors.pakej}
                      {...register("pakej")}
                    >
                      <option value="">-- Pilih pakej --</option>
                      {packageCategories.map((cat) => (
                        <optgroup key={cat.id} label={cat.label}>
                          {cat.packages.map((pkg) => (
                            <option key={pkg.id} value={pkg.name}>
                              {pkg.name} — RM{pkg.monthlyFee}/bulan
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="Perlu Perbincangan">Masih belum pasti — perlu perbincangan</option>
                    </select>
                  </FormField>

                  {/* Lindungi Ibu Bapa */}
                  <FormField
                    id="lindungiIbuBapa"
                    label="Ingin lindungi ibu bapa juga?"
                    className="sm:col-span-2"
                  >
                    <div className="flex gap-4" role="group" aria-labelledby="lindungiIbuBapa">
                      {([
                        { value: "ya", label: "Ya, saya berminat" },
                        { value: "tidak", label: "Tidak buat masa ini" },
                      ] as const).map((opt) => (
                        <label
                          key={opt.value}
                          className="flex cursor-pointer items-center gap-2.5"
                        >
                          <input
                            type="radio"
                            value={opt.value}
                            className="h-4 w-4 accent-green-800"
                            {...register("lindungiIbuBapa")}
                          />
                          <span className="text-sm" style={{ color: "var(--color-brand-text)" }}>
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FormField>

                  {/* Cara hubungi */}
                  <FormField
                    id="kaedahHubungi"
                    label="Cara Pilihan Untuk Dihubungi"
                    className="sm:col-span-2"
                  >
                    <div className="flex flex-wrap gap-3" role="group" aria-labelledby="kaedahHubungi">
                      {([
                        { value: "whatsapp", label: "WhatsApp", icon: "💬" },
                        { value: "telefon", label: "Telefon", icon: "📞" },
                        { value: "email", label: "E-mel", icon: "✉️" },
                      ] as const).map((opt) => (
                        <label
                          key={opt.value}
                          className="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5"
                          style={{ border: "1.5px solid var(--color-brand-border)", background: "#fff" }}
                        >
                          <input
                            type="radio"
                            value={opt.value}
                            className="sr-only"
                            {...register("kaedahHubungi")}
                          />
                          <span aria-hidden="true">{opt.icon}</span>
                          <span className="text-sm font-medium" style={{ color: "var(--color-brand-text)" }}>
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FormField>

                  {/* Consent */}
                  <FormField
                    id="persetujuan"
                    label=""
                    error={errors.persetujuan?.message}
                    className="sm:col-span-2"
                  >
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        id="persetujuan"
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded accent-green-800"
                        aria-describedby={errors.persetujuan ? "persetujuan-error" : undefined}
                        aria-invalid={!!errors.persetujuan}
                        {...register("persetujuan")}
                      />
                      <span className="text-xs leading-relaxed" style={{ color: "var(--color-brand-text-muted)" }}>
                        Saya bersetuju untuk dihubungi oleh pihak Kohasil bagi tujuan pertanyaan pakej ini. Maklumat saya akan dikendalikan mengikut{" "}
                        <a
                          href="#"
                          className="underline"
                          style={{ color: "var(--color-brand-green)" }}
                        >
                          Dasar Privasi Kohasil
                        </a>
                        .
                      </span>
                    </label>
                  </FormField>
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div
                    className="mb-4 mt-2 flex items-center gap-2 rounded-xl p-4"
                    style={{
                      background: "rgba(139,28,28,0.06)",
                      border: "1px solid rgba(139,28,28,0.2)",
                      color: "var(--color-brand-error)",
                    }}
                    role="alert"
                  >
                    <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm font-medium">
                      Ralat berlaku. Sila cuba lagi atau hubungi kami terus di {BRAND.hotline}.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary mt-6 w-full justify-center"
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Menghantar...
                    </>
                  ) : (
                    "Hantar Pertanyaan"
                  )}
                </button>

                <p
                  className="mt-3 text-center text-xs"
                  style={{ color: "var(--color-brand-text-muted)" }}
                >
                  Maklumat anda selamat bersama kami. Kami tidak akan berkongsi maklumat anda dengan pihak ketiga.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
