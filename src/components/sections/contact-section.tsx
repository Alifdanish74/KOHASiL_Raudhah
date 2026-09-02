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
              subtitle="Untuk bantuan dan pertanyaan, sila hubungi kami"
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
                  icon: MessageCircle,
                  label: "WhatsApp 24 Jam",
                  value: BRAND.hotline_whatsapp,
                  href: `https://wa.me/601114977733`,
                  sublabel: "Talian perkhidmatan & sokongan",
                },
                {
                  icon: Phone,
                  label: "Hotline 24 Jam (BJSB)",
                  value: BRAND.hotline,
                  href: BRAND.hotlineTel,
                  sublabel: "Bumijez Sdn Bhd - Bantuan kecemasan 24 jam",
                },
                {
                  icon: Mail,
                  label: "E-mel BJSB",
                  value: "bjsbinfo@bumijez",
                  href: "mailto:bjsbinfo@bumijez",
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
        </div>
      </ResponsiveContainer>
    </section>
  );
}
