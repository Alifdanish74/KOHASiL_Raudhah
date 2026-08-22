"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, X, Info, Phone, Send, Loader2, Sparkles, UserCheck } from "lucide-react";
import { BiMaleFemale } from "react-icons/bi";
import { FaMale, FaFemale } from "react-icons/fa";
import { SECTION_IDS, BRAND } from "@/lib/constants";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { SectionHeading } from "@/components/ui/section-heading";

export interface PackageDetail {
  id: string;
  name: string;
  category: "individu" | "keluarga";
  monthlyFee: number;
  dailyRate: string;
  coverage: string;
  ageRestriction?: string;
  recommended?: boolean;
  summaryBenefits: string[];
  modalData: {
    totalNormalDeath: string;
    items: { no: number; benefit: string; ahli: string; pasangan?: string }[];
    accidentBenefit: string;
    totalAccident: string;
    childBenefit?: string;
    termAndCondition?: string;
  };
}

const individuPackages: PackageDetail[] = [
  {
    id: "ind-10",
    name: "INDIVIDU 10",
    category: "individu",
    monthlyFee: 10,
    dailyRate: "0.33 Sen Sehari",
    coverage: "Ahli Sahaja",
    summaryBenefits: [
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): RM1,500",
      "Wang Khairat Kepada Waris: RM2,880",
      "Dana Kemalangan Diri: RM5,000",
      "Jumlah Manfaat Kematian Biasa: RM5,000",
      "Jumlah Manfaat Kematian Kemalangan: RM10,000"
    ],
    modalData: {
      totalNormalDeath: "RM 5,000",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam Bersyarat)", ahli: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (Diuruskan Pihak BJSB - Selepas 30 Hari)", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 120" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 2,880" },
      ],
      accidentBenefit: "Maksimum RM 5,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      totalAccident: "RM 5,000 + RM 5,000 = RM 10,000",
    }
  },
  {
    id: "ind-15",
    name: "INDIVIDU 15",
    category: "individu",
    monthlyFee: 15,
    dailyRate: "0.49 Sen Sehari",
    coverage: "Ahli Sahaja",
    recommended: true,
    summaryBenefits: [
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): RM1,5000",
      "Wang Khairat Kepada Waris: RM4,820",
      "Dana Kemalangan Diri: RM10,000",
      "Jumlah Manfaat Kematian Biasa: RM7,000",
      "Jumlah Manfaat Kematian Kemalangan: RM17,000"
    ],
    modalData: {
      totalNormalDeath: "RM 7,000",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam Bersyarat)", ahli: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (Diuruskan Pihak BJSB - Selepas 30 Hari)", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 180" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 4,820" },
      ],
      accidentBenefit: "Maksimum RM 10,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      totalAccident: "RM 7,000 + RM 10,000 = RM 17,000",
    }
  },
  {
    id: "ind-20",
    name: "INDIVIDU 20",
    category: "individu",
    monthlyFee: 20,
    dailyRate: "0.66 Sen Sehari",
    coverage: "Ahli Sahaja",
    ageRestriction: "Bawah 60 Tahun Sahaja",
    summaryBenefits: [
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): RM1,500",
      "Wang Khairat Kepada Waris: RM6,760",
      "Dana Kemalangan Diri: RM15,000",
      "Jumlah Manfaat Kematian Biasa: RM9,000",
      "Jumlah Manfaat Kematian Kemalangan: RM24,000"
    ],
    modalData: {
      totalNormalDeath: "RM 9,000",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam Bersyarat)", ahli: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (Diuruskan Pihak BJSB - Selepas 30 Hari)", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 240" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 6,760" },
      ],
      accidentBenefit: "Maksimum RM 15,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      totalAccident: "RM 9,000 + RM 15,000 = RM 24,000",
    }
  }
];

const keluargaPackages: PackageDetail[] = [
  {
    id: "kel-20",
    name: "KELUARGA 20",
    category: "keluarga",
    monthlyFee: 20,
    dailyRate: "0.66 Sen Sehari",
    coverage: "Ahli & Pasangan + 2 Anak (1-17 thn)",
    summaryBenefits: [
      "Caruman: Nilai Pakej 10 (Ahli) + Nilai Pakej 10 (Pasangan)",
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): Ahli RM1,500 & Pasangan RM1,500",
      "Wang Khairat Kepada Waris: Ahli RM2,880 & Pasangan RM2,880",
      "Dana Kemalangan Diri: Ahli RM5,000 & Pasangan RM5,000",
      "Manfaat Untuk 2 Orang Anak Berdaftar Pen. Jenazah Lengkap / Tunai RM1,200 (24 Jam)"
    ],
    modalData: {
      totalNormalDeath: "RM 5,000 (Ahli) + RM 5,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (BJSB)", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 120", pasangan: "RM 120" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 2,880", pasangan: "RM 2,880" },
      ],
      accidentBenefit: "RM 5,000 (Ahli) & RM 5,000 (Pasangan)",
      totalAccident: "Ahli: RM 5,000 + RM 5,000 | Pasangan: RM 5,000 + RM 5,000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 2 orang anak berdaftar (1 - 17 tahun)",
    }
  },
  {
    id: "kel-30",
    name: "KELUARGA 30",
    category: "keluarga",
    monthlyFee: 30,
    dailyRate: "0.99 Sen Sehari",
    coverage: "Ahli & Pasangan + 3 Anak (1-17 thn)",
    recommended: true,
    summaryBenefits: [
      "Caruman: Nilai Pakej 15 (Ahli) + Nilai Pakej 15 (Pasangan)",
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): Ahli RM1,500 & Pasangan RM1,500",
      "Wang Khairat Kepada Waris: Ahli RM4,820 & Pasangan RM4,820",
      "Dana Kemalangan Diri: Ahli RM10,000 & Pasangan RM10,000",
      "Manfaat Untuk 2 Orang Anak Berdaftar Pen. Jenazah Lengkap / Tunai RM1,200 (24 Jam)"
    ],
    modalData: {
      totalNormalDeath: "RM 7,000 (Ahli) + RM 7,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (BJSB)", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 180", pasangan: "RM 180" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 4,820", pasangan: "RM 4,820" },
      ],
      accidentBenefit: "RM 10,000 (Ahli) & RM 10,000 (Pasangan)",
      totalAccident: "Ahli: RM 7,000 + RM 10,000 | Pasangan: RM 7,000 + RM 10,000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 3 orang anak berdaftar (1 - 17 tahun)",
    }
  },
  {
    id: "kel-40",
    name: "KELUARGA 40",
    category: "keluarga",
    monthlyFee: 40,
    dailyRate: "1.32 Sen Sehari",
    coverage: "Ahli & Pasangan + 5 Anak (1-17 thn)",
    ageRestriction: "Bawah 60 Tahun Sahaja",
    summaryBenefits: [
      "Caruman: Nilai Pakej 20 (Ahli) + Nilai Pakej 20 (Pasangan)",
      "Pengurusan Jenazah Lengkap / Tunai (24 Jam): Ahli RM1,500 & Pasangan RM1,500",
      "Wang Khairat Kepada Waris: Ahli RM6,760 & Pasangan RM6,760",
      "Dana Kemalangan Diri: Ahli RM15,000 & Pasangan RM15,000",
      "Manfaat Untuk 5 Orang Anak Berdaftar Pen. Jenazah Lengkap / Tunai RM1,200 (24 Jam)"
    ],
    modalData: {
      totalNormalDeath: "RM 9,000 (Ahli) + RM 9,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Pengurusan Jenazah Lengkap Atau Tunai (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Tahlil Dan Khatam Al Quran (BJSB)", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 240", pasangan: "RM 240" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 6,760", pasangan: "RM 6,760" },
      ],
      accidentBenefit: "RM 15,000 (Ahli) & RM 15,000 (Pasangan)",
      totalAccident: "Ahli: RM 9,000 + RM 15,000 | Pasangan: RM 9,000 + RM 15,000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 5 orang anak berdaftar (1 - 17 tahun)",
    }
  }
];

const calculateAhliTotal = (items: { ahli: string }[]) => {
  const sum = items.reduce((acc, item) => {
    const val = parseInt(item.ahli.replace(/[^0-9]/g, ""), 10) || 0;
    return acc + val;
  }, 0);
  return `RM ${sum.toLocaleString("en-US")}`;
};

const calculatePasanganTotal = (items: { pasangan?: string }[]) => {
  const sum = items.reduce((acc, item) => {
    if (!item.pasangan) return acc;
    const val = parseInt(item.pasangan.replace(/[^0-9]/g, ""), 10) || 0;
    return acc + val;
  }, 0);
  return `RM ${sum.toLocaleString("en-US")}`;
};

function FamilyCompositionIcons({ pkgId }: { pkgId: string }) {
  if (pkgId === "kel-20") {
    return (
      <div className="flex items-center justify-center gap-1.5 mt-2 py-1 px-3 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-900 w-fit mx-auto shadow-xs">
        <div className="flex items-center gap-0.5" title="Ahli & Pasangan (BiMaleFemale)">
          <BiMaleFemale className="w-5 h-5 text-emerald-700" />
        </div>
        <span className="text-[10px] text-emerald-300">+</span>
        <div className="flex items-center gap-0.5" title="2 Anak (FaMale & FaFemale)">
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
          <FaFemale className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        {/* <span className="text-[10px] font-bold text-emerald-800 ml-0.5">(2 Anak)</span> */}
      </div>
    );
  }

  if (pkgId === "kel-30") {
    return (
      <div className="flex items-center justify-center gap-1.5 mt-2 py-1 px-3 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-900 w-fit mx-auto shadow-xs">
        <div className="flex items-center gap-0.5" title="Ahli & Pasangan (BiMaleFemale)">
          <BiMaleFemale className="w-5 h-5 text-emerald-700" />
        </div>
        <span className="text-[10px] text-emerald-300">+</span>
        <div className="flex items-center gap-0.5" title="3 Anak (FaMale & FaFemale selang-seli)">
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
          <FaFemale className="w-3.5 h-3.5 text-emerald-600" />
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        {/* <span className="text-[10px] font-bold text-emerald-800 ml-0.5">(3 Anak)</span> */}
      </div>
    );
  }

  if (pkgId === "kel-40") {
    return (
      <div className="flex items-center justify-center gap-1.5 mt-2 py-1 px-3 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-900 w-fit mx-auto shadow-xs">
        <div className="flex items-center gap-0.5" title="Ahli & Pasangan (BiMaleFemale)">
          <BiMaleFemale className="w-5 h-5 text-emerald-700" />
        </div>
        <span className="text-[10px] text-emerald-300">+</span>
        <div className="flex items-center gap-0.5" title="5 Anak (FaMale & FaFemale selang-seli)">
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
          <FaFemale className="w-3.5 h-3.5 text-emerald-600" />
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
          <FaFemale className="w-3.5 h-3.5 text-emerald-600" />
          <FaMale className="w-3.5 h-3.5 text-emerald-600" />
        </div>
        {/* <span className="text-[10px] font-bold text-emerald-800 ml-0.5">(5 Anak)</span> */}
      </div>
    );
  }

  // if (pkgId.startsWith("ind-")) {
  //   return (
  //     <div className="flex items-center justify-center gap-1 mt-2 py-1 px-3 rounded-full bg-slate-50 border border-slate-200/70 text-slate-700 w-fit mx-auto shadow-xs">
  //       <FaMale className="w-4 h-4 text-slate-600" />
  //       {/* <span className="text-[10px] font-bold text-slate-600">(1 Ahli)</span> */}
  //     </div>
  //   );
  // }

  return null;
}

interface PackageSectionProps {
  onPackageSelect?: (pkgName: string) => void;
  selectedPackage?: string;
}

export function PackageSection({ onPackageSelect }: PackageSectionProps) {
  // Modal for detailed breakdown table
  const [activeModalPackage, setActiveModalPackage] = useState<PackageDetail | null>(null);

  // Dedicated Popup Form Modal state
  const [selectedFormPackage, setSelectedFormPackage] = useState<PackageDetail | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    nama: "",
    telefon: "",
    noAhli: "",
    lindungiIbuBapa: "tidak",
    kaedahHubungi: "whatsapp",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenFormModal = (pkg: PackageDetail) => {
    setSelectedFormPackage(pkg);
    setFormStatus("idle");
    setErrorMessage("");
    onPackageSelect?.(pkg.name);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama.trim() || !formData.telefon.trim()) {
      setErrorMessage("Sila isi Nama Penuh dan Nombor Telefon.");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: formData.nama,
          telefon: formData.telefon,
          noAhli: formData.noAhli,
          pakej: selectedFormPackage?.name || "INDIVIDU 10",
          lindungiIbuBapa: formData.lindungiIbuBapa,
          kaedahHubungi: formData.kaedahHubungi,
          persetujuan: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Ralat menghantar permohonan");
      }

      setFormStatus("success");
    } catch (err) {
      console.error("Form submit error:", err);
      setFormStatus("error");
      setErrorMessage("Ralat sambungan. Sila cuba lagi.");
    }
  };

  return (
    <section
      id={SECTION_IDS.pakej}
      aria-label="Pakej Mampu Milik Bulanan"
      className="py-16 lg:py-24"
      style={{ background: "var(--color-brand-sage-soft)" }}
    >
      <ResponsiveContainer>
        <SectionHeading
          eyebrow="Pilihan Pakej Bulanan"
          title="Pakej Mampu Milik Bulanan Yang Ditawarkan"
          subtitle="Potongan gaji bulanan yang fleksibel mengikut keperluan perlindungan individu dan keluarga anda."
          className="mb-12"
        />

        {/* ── SECTION: 3 PAKEJ INDIVIDU ── */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h3
              className="text-xl sm:text-2xl font-bold flex justify-center items-center gap-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-brand-green)" }}
            >
              {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold"></span> */}
              3 Pakej Individu
            </h3>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Klik &quot;Pecahan&quot; untuk manfaat lanjut atau <br /> &quot;Pilih Pakej Ini&quot; untuk membuat permohonan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {individuPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative flex flex-col justify-between rounded-2xl border p-6 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  borderColor: pkg.recommended ? "var(--color-brand-gold)" : "var(--color-brand-border)",
                  borderWidth: pkg.recommended ? "2px" : "1px",
                }}
              >
                {pkg.recommended && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-green-950 shadow-md"
                    style={{ background: "var(--color-brand-gold)" }}
                  >
                    <Star className="h-3 w-3 fill-current" /> Pilihan Popular
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 mb-4 border-b">
                    <h4
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-brand-green)" }}
                    >
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{pkg.coverage}</p>
                    <FamilyCompositionIcons pkgId={pkg.id} />
                    {pkg.ageRestriction && (
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                        {pkg.ageRestriction}
                      </span>
                    )}

                    <div className="mt-3">
                      <span className="text-3xl font-extrabold text-green-900">
                        RM{pkg.monthlyFee}
                      </span>
                      <span className="text-xs font-semibold text-slate-500"> / sebulan</span>
                      <div className="mt-1 text-xs font-bold text-amber-700 bg-amber-50 rounded-full px-3 py-0.5 inline-block">
                        ({pkg.dailyRate})
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                    {pkg.summaryBenefits.map((b, i) => {
                      const isRed = b.includes("Manfaat Untuk");
                      return (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${isRed ? "text-red-600" : "text-emerald-600"}`} />
                          <span className={isRed ? "text-red-600 font-bold" : ""}>{b}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <button
                    onClick={() => setActiveModalPackage(pkg)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    style={{
                      background: "var(--color-brand-sage-soft)",
                      color: "var(--color-brand-green)",
                      border: "1px solid var(--color-brand-sage-muted)",
                    }}
                    type="button"
                  >
                    <Info className="h-3.5 w-3.5" />
                    Pecahan & Info Terperinci
                  </button>

                  <button
                    onClick={() => handleOpenFormModal(pkg)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-sm transition-all hover:opacity-95 flex items-center justify-center gap-1.5"
                    style={{ background: "var(--color-brand-green)" }}
                    type="button"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Pilih Pakej Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION: 3 PAKEJ KELUARGA ── */}
        <div>
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h3
              className="text-xl sm:text-2xl font-bold flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
            >
              {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-900 text-sm font-extrabold">2</span> */}
              3 Pakej Keluarga
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Klik &quot;Pecahan&quot; untuk jadual manfaat atau &quot;Pilih Pakej Ini&quot; untuk borang pantas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keluargaPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative flex flex-col justify-between rounded-2xl border p-6 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  borderColor: pkg.recommended ? "var(--color-brand-gold)" : "var(--color-brand-border)",
                  borderWidth: pkg.recommended ? "2px" : "1px",
                }}
              >
                {pkg.recommended && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-green-950 shadow-md"
                    style={{ background: "var(--color-brand-gold)" }}
                  >
                    <Star className="h-3 w-3 fill-current" /> Disyorkan
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 mb-4 border-b">
                    <h4
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-brand-green)" }}
                    >
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{pkg.coverage}</p>
                    <FamilyCompositionIcons pkgId={pkg.id} />
                    {pkg.ageRestriction && (
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                        {pkg.ageRestriction}
                      </span>
                    )}

                    <div className="mt-3">
                      <span className="text-3xl font-extrabold text-green-900">
                        RM{pkg.monthlyFee}
                      </span>
                      <span className="text-xs font-semibold text-slate-500"> / sebulan</span>
                      <div className="mt-1 text-xs font-bold text-amber-700 bg-amber-50 rounded-full px-3 py-0.5 inline-block">
                        ({pkg.dailyRate})
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                    {pkg.summaryBenefits.map((b, i) => {
                      const isRed = b.includes("Manfaat Untuk");
                      return (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${isRed ? "text-red-600" : "text-emerald-600"}`} />
                          <span className={isRed ? "text-red-600 font-bold" : ""}>{b}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <button
                    onClick={() => setActiveModalPackage(pkg)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-colors"
                    style={{
                      background: "var(--color-brand-sage-soft)",
                      color: "var(--color-brand-green)",
                      border: "1px solid var(--color-brand-sage-muted)",
                    }}
                    type="button"
                  >
                    <Info className="h-3.5 w-3.5" />
                    Pecahan & Info Terperinci
                  </button>

                  <button
                    onClick={() => handleOpenFormModal(pkg)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-sm transition-all hover:opacity-95 flex items-center justify-center gap-1.5"
                    style={{ background: "var(--color-brand-green)" }}
                    type="button"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Pilih Pakej Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>

      {/* ── MODAL 1: DETAILED BREAKDOWN TABLE ── */}
      <AnimatePresence>
        {activeModalPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border"
              style={{ borderColor: "var(--color-brand-gold)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPackage(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                type="button"
                aria-label="Tutup modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pb-4 border-b">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-green-950 bg-amber-300 mb-2">
                  Pecahan Manfaat Pakej
                </span>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-brand-green)" }}
                >
                  {activeModalPackage.name} — RM{activeModalPackage.monthlyFee}/bulan
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {activeModalPackage.coverage} ({activeModalPackage.dailyRate})
                </p>
              </div>

              {/* Detailed Table */}
              <div className="space-y-4 mb-6">
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b">
                      <tr>
                        <th className="p-3 w-12 text-center">No</th>
                        <th className="p-3">Manfaat Perlindungan</th>
                        <th className="p-3 text-right">Ahli (RM)</th>
                        {activeModalPackage.modalData.items[0]?.pasangan && (
                          <th className="p-3 text-right">Pasangan (RM)</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {activeModalPackage.modalData.items.map((item) => (
                        <tr key={item.no} className="hover:bg-slate-50/80">
                          <td className="p-3 text-center font-bold text-slate-400">{item.no}</td>
                          <td className="p-3 font-medium text-slate-800">{item.benefit}</td>
                          <td className="p-3 text-right font-bold text-green-900">{item.ahli}</td>
                          {item.pasangan && (
                            <td className="p-3 text-right font-bold text-green-900">{item.pasangan}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-emerald-50/90 border-t-2 border-emerald-600 font-bold">
                      <tr>
                        <td colSpan={2} className="p-3 text-right font-extrabold text-emerald-950 uppercase tracking-wide">
                          Jumlah Manfaat:
                        </td>
                        <td className="p-3 text-right font-extrabold text-emerald-900 text-sm sm:text-base">
                          {calculateAhliTotal(activeModalPackage.modalData.items)}
                        </td>
                        {activeModalPackage.modalData.items[0]?.pasangan && (
                          <td className="p-3 text-right font-extrabold text-emerald-900 text-sm sm:text-base">
                            {calculatePasanganTotal(activeModalPackage.modalData.items)}
                          </td>
                        )}
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {/* Accident Coverage Box */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-amber-900 flex items-center gap-1.5">
                    <Info className="h-4 w-4" /> Kematian / Kecacatan Kemalangan:
                  </p>
                  <p className="text-slate-700">{activeModalPackage.modalData.accidentBenefit}</p>
                  <p className="font-extrabold text-green-950 pt-1">
                    {/* {activeModalPackage.modalData.termAndCondition} */}
                    *(Tertakluk Kelulusan Takaful)
                  </p>
                  <p className="font-extrabold text-green-950 pt-1">
                    *Jumlah Manfaat Kemalangan: {activeModalPackage.modalData.totalAccident}
                  </p>
                </div>

                {/* Child Benefit Box if present */}
                {activeModalPackage.modalData.childBenefit && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm">
                    <p className="font-bold text-emerald-900">Manfaat Pakej Anak:</p>
                    <p className="text-slate-700 mt-1">{activeModalPackage.modalData.childBenefit}</p>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    const pkg = activeModalPackage;
                    setActiveModalPackage(null);
                    handleOpenFormModal(pkg);
                  }}
                  className="flex-1 py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all hover:opacity-95 flex items-center justify-center gap-2"
                  style={{ background: "var(--color-brand-green)" }}
                  type="button"
                >
                  <Send className="h-4 w-4" />
                  Pilih Pakej Ini Sekarang
                </button>
                <button
                  onClick={() => setActiveModalPackage(null)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold border text-slate-600 hover:bg-slate-100 transition-colors"
                  type="button"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 2: DEDICATED PACKAGE FORM POPUP MODAL ── */}
      <AnimatePresence>
        {selectedFormPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg my-8 rounded-3xl bg-white shadow-2xl overflow-hidden border"
              style={{ borderColor: "var(--color-brand-gold)" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFormPackage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                type="button"
                aria-label="Tutup borang"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Top Banner Header */}
              <div
                className="p-6 sm:p-8 text-white relative"
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-green) 0%, #0d3824 100%)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-green-950 font-bold text-xs">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Borang Permohonan Pakej
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {selectedFormPackage.name}
                </h3>

                <div className="flex items-center gap-3 mt-2">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-amber-200 border border-white/20">
                    RM{selectedFormPackage.monthlyFee} / sebulan
                  </span>
                  <span className="text-xs text-white/80 font-medium">
                    {selectedFormPackage.coverage}
                  </span>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8">
                {formStatus === "success" ? (
                  <div className="text-center py-6 space-y-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto shadow-md">
                      <UserCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-green-900 mb-2">
                        Permohonan Berjaya!
                      </h4>
                      <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Maklumat bagi <strong>{selectedFormPackage.name}</strong> telah berjaya disimpan ke sistem &amp; Google Sheet. Pegawai kami akan menghubungi anda.
                      </p>
                    </div>

                    <div className="pt-3 space-y-2">
                      <a
                        href={`https://wa.me/601113001999?text=Salam%20Kohasil,%20saya%20telah%20menghantar%20permohonan%20pakej%20${encodeURIComponent(selectedFormPackage.name)}.%20Boleh%20bantu%20pengesahan?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all hover:opacity-95"
                        style={{ background: "#25D366" }}
                      >
                        <Phone className="h-4 w-4" />
                        Hubungi WhatsApp Terus (011-1300 1999)
                      </a>

                      <button
                        onClick={() => setSelectedFormPackage(null)}
                        className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                        type="button"
                      >
                        Tutup Borang
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <div>
                      <label htmlFor="modal-nama" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Nama Penuh <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="modal-nama"
                        type="text"
                        required
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder="Contoh: Ahmad bin Abdullah"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-telefon" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Nombor Telefon / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="modal-telefon"
                        type="tel"
                        required
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="Contoh: 011-1300 1999"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-noAhli" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Nombor Ahli Kohasil / Staff ID <span className="text-slate-400 font-normal">(Kosongkan jika belum ada)</span>
                      </label>
                      <input
                        id="modal-noAhli"
                        type="text"
                        value={formData.noAhli}
                        onChange={(e) => setFormData({ ...formData, noAhli: e.target.value })}
                        placeholder="Contoh: KR-88910"
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Tambah Perlindungan Ibu Bapa?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${formData.lindungiIbuBapa === "ya" ? "border-green-800 bg-green-50 text-green-900" : "border-slate-200 text-slate-600"}`}>
                          <input
                            type="radio"
                            name="lindungiIbuBapa"
                            value="ya"
                            checked={formData.lindungiIbuBapa === "ya"}
                            onChange={() => setFormData({ ...formData, lindungiIbuBapa: "ya" })}
                            className="accent-green-800"
                          />
                          Ya (+RM10/bln)
                        </label>
                        <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${formData.lindungiIbuBapa === "tidak" ? "border-green-800 bg-green-50 text-green-900" : "border-slate-200 text-slate-600"}`}>
                          <input
                            type="radio"
                            name="lindungiIbuBapa"
                            value="tidak"
                            checked={formData.lindungiIbuBapa === "tidak"}
                            onChange={() => setFormData({ ...formData, lindungiIbuBapa: "tidak" })}
                            className="accent-green-800"
                          />
                          Tidak
                        </label>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="w-full py-3.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 flex items-center justify-center gap-2"
                        style={{ background: "var(--color-brand-green)" }}
                      >
                        {formStatus === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Menghantar ke Google Sheet...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Hantar Permohonan {selectedFormPackage.name}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
