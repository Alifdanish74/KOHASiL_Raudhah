"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Heart,
  Clock,
  FileCheck2,
  Wallet,
  CheckCircle2,
  Sparkles,
  Users,
  AlertCircle,
} from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { staggerContainer, cardReveal, viewportOnce } from "@/lib/motion";

const keistimewaanSkim = [
  {
    icon: ShieldCheck,
    title: "Patuh Syariah",
    description: "Khidmat Patuh Syariah Dengan Sokongan Jabatan Mufti Negeri Selangor.",
  },
  {
    icon: Heart,
    title: "Harga Mampu Milik",
    description: "Harga Mampu Milik Untuk Diri Dan Keluarga Tercinta Termasuk Ibu Bapa Tersayang.",
  },
  {
    icon: Clock,
    title: "Perlindungan Panjang",
    description: "Tempoh Perlindungan Yang Panjang, Sehingga Umur 70 Tahun.",
  },
  {
    icon: FileCheck2,
    title: "Tanpa Laporan Kesihatan",
    description: "Tiada Pemeriksaan Kesihatan Diperlukan Untuk Mendaftar.",
  },
  {
    icon: Wallet,
    title: "Pilihan Fleksibel 24 Jam",
    description: "Pilihan Fleksibel: Bantuan Pengurusan Jenazah Atau Bantuan Tunai 24 Jam.",
  },
  {
    icon: CheckCircle2,
    title: "Kelengkapan Disediakan",
    description: "Kelengkapan Pengurusan Jenazah Akan Disediakan Sepenuhnya Pada Hari Kejadian.",
  },
  {
    icon: Sparkles,
    title: "Bebas Risau Kos",
    description: "Pihak Waris Tidak Perlu Risau Akan Kos Terlibat Pada Hari Kejadian.",
  },
  {
    icon: Users,
    title: "Terbuka Bukan Muslim",
    description: "Terbuka Kepada Bukan Muslim: Bantuan Tunai 24 Jam Disediakan.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id={SECTION_IDS.manfaat}
      aria-label="Keistimewaan Skim"
      className="section-texture py-16 lg:py-24"
      style={{ background: "var(--color-brand-cream)" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Keistimewaan Skim"
          title="Satu Caruman, Perlindungan Menyeluruh"
          subtitle="Nikmati keistimewaan skim khairat kematian yang direka khas untuk memudahkan urusan anda dan keluarga tercinta."
          className="mb-12"
        />

        {/* 8 Keistimewaan Skim Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {keistimewaanSkim.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3.5 rounded-2xl p-6 border shadow-sm transition-all duration-300"
                style={{
                  background: "#fff",
                  borderColor: "var(--color-brand-border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ background: "var(--color-brand-green)" }}
                >
                  <IconComp className="h-6 w-6" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1.5 leading-snug"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Keistimewaan Untuk Ibu Bapa Tercinta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border shadow-lg"
          style={{
            background: "#fff",
            borderColor: "var(--color-brand-border)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image section */}
            <div className="relative h-64 sm:h-80 lg:h-full lg:col-span-5 min-h-[320px] overflow-hidden bg-slate-100">
              <Image
                src="/images/elderly_parents.png"
                alt="Keistimewaan Untuk Ibu Bapa Tercinta"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl p-3 backdrop-blur-md bg-black/40 text-white border border-white/20">
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Kasih Sayang Ibu Bapa
                </p>
                <p className="text-sm font-bold">
                  Pastikan Kebajikan Jenazah Ibu Bapa Terjaga
                </p>
              </div>
            </div>

            {/* Content section */}
            <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ background: "rgba(191,168,0,0.15)", color: "var(--color-brand-green)" }}
                >
                  Peserta Tambahan
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                >
                  Keistimewaan Untuk Ibu Bapa Tercinta
                </h3>

                <div
                  className="mb-6 inline-flex items-center gap-3 rounded-2xl px-5 py-3 border shadow-sm"
                  style={{
                    background: "var(--color-brand-sage-soft)",
                    borderColor: "var(--color-brand-gold)",
                  }}
                >
                  <span className="text-lg sm:text-xl font-extrabold text-green-900">
                    Hanya RM10.00 Sebulan Seorang
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400 text-green-950">
                    0.33 Sen Sehari
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Dengan potongan gaji tambahan, anda boleh melindungi ibu bapa anda di kampung untuk memastikan kebajikan pengurusan jenazah mereka terjaga pada hari kejadian. Perlindungan adalah <strong>sehingga umur 70 tahun</strong>.
                </p>

                <div
                  className="flex items-start gap-3 rounded-xl p-4 border"
                  style={{
                    background: "#fff9f0",
                    borderColor: "#ffe3b3",
                  }}
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong>Syarat Umur Pendaftaran:</strong> Umur pendaftaran mestilah di bawah 66 tahun / 60 tahun mengikut kelayakan pakej.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <OrnamentalDivider className="mt-14" label="Kohasil Raudhah" />
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
