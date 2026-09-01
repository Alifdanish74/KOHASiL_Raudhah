"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";

const syaratPenyertaan = [
  "Keahlian adalah terbuka kepada semua ahli Koperasi Hasil Dalam Negeri Malaysia Berhad / Kohasil dan kakitangan Lembaga Hasil Dalam Negeri (LHDN) yang berkhidmat di seluruh Malaysia (semua bangsa & agama).",
  "Tiada pemeriksaan / laporan kesihatan diperlukan untuk mendaftar pakej ini.",
  "Terdapat 3 Pakej Individu dan 3 Pakej Keluarga yang boleh didaftarkan untuk mereka yang berumur 16 tahun ke atas. Pakej Keluarga meliputi perlindungan kepada ahli, pasangan dan anak-anak (jumlah anak mengikut kategori pakej).",
  "Pihak peserta juga boleh menambah pendaftaran untuk anak (luar dari pakej keluarga) yang berumur 16 tahun ke atas dan ibu bapa sebagai peserta tambahan. Ahli wajib mendaftar diri sendiri terlebih dahulu.",
  "Pakej Individu 20 dan Keluarga 40 hanya terbuka / boleh didaftarkan kepada mereka yang berumur bawah 60 tahun sahaja pada hari/tarikh daftar. Ibu bapa yang berumur 60 tahun ke atas pada hari/tarikh daftar tidak boleh didaftarkan pakej ini.",
  "Untuk bukan ahli Kohasil: tambahan caj proses pentadbiran RM1 sebulan akan dikenakan pada pemotong gaji utama. Contoh: En Ali mendaftar pakej keluarga 20 sebulan dan pakej Individu 10 untuk Ibu. Jumlah potongan gaji adalah RM20 + RM10 + RM1 = RM31 sebulan.",
  "Tempoh perlindungan untuk peserta dewasa pakej Individu dan keluarga adalah sehingga tamat perkhidmatan / berhenti mencarum manakala untuk peserta tambahan / ibu bapa adalah bersama tempoh perkhidmatan peserta utama / berhenti mencarum / sehingga berumur 70 tahun.",
  "Tempoh perlindungan untuk anak-anak (dalam pakej keluarga sahaja) pula adalah pada ketika mereka berumur 1 tahun sehingga 17 tahun. Perlindungan adalah untuk anak-anak yang telah didaftarkan sahaja.",
  "Perlindungan bermula selepas 30 hari dari tarikh 01 / 15hb terdekat selepas pengesahan bayaran potongan gaji di Kohasil dan BJSB.",
  "Dalam skim ini, Pihak Pengurusan Kohasil dan BJSB dilantik sebagai wakil untuk menguruskan tabung skim Khairat dan bantuan pengurusan jenazah lengkap 24 jam kepada para peserta yang berdaftar.",
  "Apabila keahlian diluluskan, ahli boleh menyemak kad keahlian digital di pautan rasmi http://www.card.bumijez.vip/"
];

const syaratTuntutan = [
  "Semua kes kematian (biasa / kemalangan) hendaklah dilaporkan melalui talian Hotline 24 Jam: 011-1300 1999.",
  "Segala tuntutan kematian / kemalangan tidak dapat dituntut jika terjadi akibat daripada perbuatan membunuh diri, mabuk, dadah dan penglibatan dalam semua aktiviti yang menyalahi undang-undang.",
  "Salinan Permit pengebumian dan Kad Pengenalan si mati perlu dikemukakan kepada BJSB sebagai bukti sah kematian untuk tuntutan manfaat.",
  "Bantuan Pengurusan Jenazah Lengkap (Muslim) akan diberikan mengikut lokasi (rumah / hospital) yang diminta waris. \n \n - Untuk Non Muslim: Bantuan Tunai Kebajikan RM1500 akan diberikan kepada waris dalam tempoh 24 jam setelah laporan kematian diterima dan disahkan.",
  "Peruntukan wang khairat akan digunakan jika kos pengurusan jenazah melebihi RM1500 pada hari kejadian.",
  "Bantuan Tunai RM1500 akan diberikan dalam masa 24 jam jika waris memilih untuk menguruskan sendiri bersama keluarga / khairat tempatan.",
  "Laporan Hospital dan Laporan Polis perlu disertakan untuk tuntutan kematian / kecacatan kekal akibat kemalangan (semua tuntutan kemalangan tertakluk kelulusan pihak Takaful).",
  "Untuk kematian akibat kemalangan, semua manfaat kematian biasa dan manfaat kematian / kemalangan boleh dituntut (mengikut terma syarat tuntutan).",
  "Untuk Tuntutan Kecacatan Kekal Akibat Kemalangan, bayaran maksimum tuntutan adalah bergantung kepada peratus (%) kecacatan kekal yang dialami dan disahkan oleh laporan Hospital.",
  "Semua jenis tuntutan perlu dibuat dalam tempoh setahun dari tarikh kematian / kemalangan.",
  "Lain-lain manfaat akan disempurnakan mengikut tempoh pakej setelah BJSB menerima salinan Sijil Kematian (JPN) arwah si mati."
];

export default function SyaratPage() {
  return (
    <main className="py-12 lg:py-20" style={{ background: "var(--color-brand-cream)" }}>
      <ResponsiveContainer>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--color-brand-green)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Laman Utama
          </Link>
        </div>

        <SectionHeading
          title="Terma & Syarat Penyertaan"
          subtitle="Syarat Penyertaan Skim & Syarat Tuntutan Manfaat Skim Khairat Kohasil Raudhah"
          align="center"
        />

        <div className="mt-12 space-y-12">
          {/* Section 1: Syarat Penyertaan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border p-6 sm:p-10 shadow-sm"
            style={{
              background: "#fff",
              borderColor: "var(--color-brand-border)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "var(--color-brand-green)" }}
              >
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                >
                  Syarat-Syarat Penyertaan Dan Skop Perlindungan
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Panduan kelayakan dan pendaftaran ahli Kohasil & LHDN
                </p>
              </div>
            </div>

            <OrnamentalDivider className="mb-6" />

            <div className="space-y-4">
              {syaratPenyertaan.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                    style={{ background: "var(--color-brand-gold)" }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {item.split(/<br\s*\/?>|\n/).map((line, lIdx, arr) => (
                      <span key={lIdx}>
                        {line}
                        {lIdx < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Syarat Tuntutan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border p-6 sm:p-10 shadow-sm"
            style={{
              background: "#fff",
              borderColor: "var(--color-brand-border)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: "var(--color-brand-gold)" }}
              >
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                >
                  Syarat-Syarat Tuntutan Manfaat
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Prosedur dan dokumen sah tuntutan khairat kematian
                </p>
              </div>
            </div>

            <OrnamentalDivider className="mb-6" />

            <div className="space-y-4">
              {syaratTuntutan.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                    style={{ background: "var(--color-brand-green)" }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {item.split(/<br\s*\/?>|\n/).map((line, lIdx, arr) => (
                      <span key={lIdx}>
                        {line}
                        {lIdx < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </main>
  );
}
