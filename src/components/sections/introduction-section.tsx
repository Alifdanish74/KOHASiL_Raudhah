"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, ShieldCheck, HeartHandshake, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { BRAND, SECTION_IDS } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import {
  staggerContainer,
  riseUp,
  viewportOnce,
} from "@/lib/motion";

const modusOperandiSteps = [
  {
    step: "1",
    title: "Waris Menghubungi Hotline 24 Jam",
    detail: "Hubungi talian beroperasi 24 Jam: 011 - 1300 1999 untuk memohon bantuan serta-merta.",
    image: "/images/sop_step1_calling.png",
    icon: PhoneCall,
  },
  {
    step: "2",
    title: "Pengurus Jenazah Ke Lokasi Waris",
    detail: "Pasukan pengurus jenazah akan terus ke lokasi yang diminta waris (rumah atau hospital).",
    image: "/images/sop_step2_dispatch.png",
    icon: MapPin,
  },
  {
    step: "3",
    title: "Pengurusan Jenazah Secara Tertib",
    detail: "Kelengkapan dan urusan mandian, kafan, serta solat jenazah diuruskan dengan sempurna.",
    image: "/images/sop_step3_handling.png",
    icon: HeartHandshake,
  },
  {
    step: "4",
    title: "Pengkebumian Dipastikan Sempurna",
    detail: "Urusan pengebumian diselesaikan dengan penuh penghormatan dan mematuhi syarak.",
    image: "/images/sop_step4_finishing.png",
    icon: CheckCircle,
  },
];

export function IntroductionSection() {
  return (
    <section
      id={SECTION_IDS.proses}
      aria-label="Pengenalan & Modus Operandi"
      className="section-texture py-16 lg:py-24"
      style={{ background: "#fff" }}
    >
      <ResponsiveContainer>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Pengenalan Skim"
          title="Khidmat Pengurusan Jenazah & Khairat Kematian"
          subtitle="Khidmat yang ditawarkan adalah pengurusan jenazah lengkap (muslim) terus ke lokasi yang diminta waris (rumah / hospital). Perlindungan merangkumi seluruh Malaysia termasuk Sabah dan Sarawak."
          subtitle2="Khidmat Pengurusan Jenazah Lengkap meliputi: 1. Bantuan Nasihat 2. Memandikan Jenazah 3. Mengkafankan Jenazah 4. Menguruskan Solat Jenazah 5. Khidmat Van Jenazah 6. Menguruskan Pengkebumian"
          className="mb-12"
        />

        {/* Intro Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-2xl p-6 sm:p-8 border shadow-sm text-center md:text-left flex flex-col md:flex-row items-center gap-6"
          style={{
            background: "var(--color-brand-sage-soft)",
            borderColor: "var(--color-brand-sage-muted)",
          }}
        >
          <div
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
            style={{ background: "var(--color-brand-green)" }}
          >
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
            >
              Kemudahan Tanpa Bebanan Kos Pada Hari Kejadian
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Pihak waris <strong>tidak perlu menyediakan kelengkapan</strong> pengurusan jenazah pada hari kejadian dan <strong>tidak perlu membayar kos semasa</strong> yang terlibat pada hari kejadian. Talian hotline 24 Jam <a href={BRAND.hotlineTel} className="font-bold text-green-900 underline">{BRAND.hotline}</a> sedia membantu 24 jam sehari.
            </p>
          </div>
        </motion.div>

        {/* Modus Operandi Title */}
        <div className="text-center mb-10">
          <h3
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
          >
            Modus Operandi Bantuan (SOP 4-Langkah)
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Proses bantuan lancar dan pantas dari mula hingga selesai
          </p>
        </div>

        {/* Modus Operandi Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {modusOperandiSteps.map((stepItem) => {
            const IconComp = stepItem.icon;
            return (
              <motion.div
                key={stepItem.step}
                variants={riseUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--color-brand-border)" }}
              >
                {/* Image header if present */}
                {stepItem.image ? (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={stepItem.image}
                      alt={stepItem.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-md" style={{ background: "var(--color-brand-gold)" }}>
                      {stepItem.step}
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative flex h-44 w-full items-center justify-center"
                    style={{ background: "var(--color-brand-green)" }}
                  >
                    <IconComp className="h-16 w-16 text-white/80" />
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-md" style={{ background: "var(--color-brand-gold)" }}>
                      {stepItem.step}
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h4
                    className="mb-2 text-base font-bold leading-snug"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                  >
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stepItem.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pelengkap Khairat Kematian + Price Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Pelengkap Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 sm:p-8 border flex flex-col justify-between"
            style={{
              background: "#faf7f0",
              borderColor: "var(--color-brand-border)",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6" style={{ color: "var(--color-brand-gold)" }} />
                <h4
                  className="text-lg font-bold uppercase tracking-wide text-xs"
                  style={{ color: "var(--color-brand-green)" }}
                >
                  Pelengkap Kepada Khairat Kematian
                </h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Khidmat ini <strong>tidak mengganggu / menggantikan 100%</strong> khidmat khairat tempatan di surau / masjid / jabatan (jika ada) tetapi membantu menambah manfaat (pelengkap) dan meringankan beban tanggungjawab kepada waris terutamanya dari segi kos serta memastikan pengurusan berjalan lancar. Pihak waris <strong>boleh menerima semua manfaat khairat</strong> yang terlibat.
              </p>
            </div>
          </motion.div>

          {/* Pricing Teaser Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 sm:p-8 border flex flex-col justify-between text-white"
            style={{
              background: "var(--color-brand-green)",
              borderColor: "var(--color-brand-green-dark)",
            }}
          >
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                style={{ background: "rgba(191,168,0,0.25)", color: "var(--color-brand-gold-light)" }}
              >
                Kemudahan Potongan Gaji
              </span>
              <h4
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Serendah RM10.00 Sebulan (Individu) & RM20.00 (Keluarga)
              </h4>
              <p className="text-sm leading-relaxed text-white/85">
                Terbuka kepada semua ahli Kohasil dan juga Kakitangan Lembaga Hasil Dalam Negeri (LHDN) di seluruh Malaysia melalui potongan gaji bulanan (semua bangsa dan agama).
              </p>
            </div>
          </motion.div>
        </div>

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
