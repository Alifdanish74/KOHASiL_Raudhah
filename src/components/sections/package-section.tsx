"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, X, Info, Phone, Send, Loader2, Sparkles, UserCheck, ArrowLeft } from "lucide-react";
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
    accidentAhli?: string;
    accidentPasangan?: string;
    totalAccident: string;
    childBenefit?: string;
    termAndCondition?: string;
  };
  modalData_nonmuslim: {
    totalNormalDeath: string;
    items: { no: number; benefit: string; ahli: string; pasangan?: string }[];
    accidentBenefit: string;
    accidentAhli?: string;
    accidentPasangan?: string;
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
      accidentAhli: "5000",
      totalAccident: "5000 + 5000 : 10000",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 5,000",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 120" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 2,880" },
      ],
      accidentBenefit: "Maksimum RM 5,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      accidentAhli: "5000",
      totalAccident: "5000 + 5000 : 10000",
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
      accidentAhli: "10000",
      totalAccident: "7000 + 10000 : 17000",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 7,000",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 180" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 4,820" },
      ],
      accidentBenefit: "Maksimum RM 10,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      accidentAhli: "10000",
      totalAccident: "7000 + 10000 : 17000",
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
      accidentAhli: "15000",
      totalAccident: "9000 + 15000 : 24000",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 9,000",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 240" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 6,760" },
      ],
      accidentBenefit: "Maksimum RM 15,000 (Meninggal / Kecacatan Kekal Akibat Kemalangan selepas 180 Hari)",
      accidentAhli: "15000",
      totalAccident: "9000 + 15000 : 24000",
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
      accidentAhli: "5000",
      accidentPasangan: "5000",
      totalAccident: "Ahli: 5000 + 5000 : 10000 | Pasangan: 5000 + 5000 : 10000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 2 orang anak berdaftar (1 - 17 tahun)",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 5,000 (Ahli) + RM 5,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 120", pasangan: "RM 120" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 2,880", pasangan: "RM 2,880" },
      ],
      accidentBenefit: "RM 5,000 (Ahli) & RM 5,000 (Pasangan)",
      accidentAhli: "5000",
      accidentPasangan: "5000",
      totalAccident: "Ahli: 5000 + 5000 : 10000 | Pasangan: 5000 + 5000 : 10000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 2 orang anak berdaftar (1 - 17 tahun)",
    },
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
      accidentAhli: "10000",
      accidentPasangan: "10000",
      totalAccident: "Ahli: 7000 + 10000 : 17000 | Pasangan: 7000 + 10000 : 17000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 3 orang anak berdaftar (1 - 17 tahun)",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 7,000 (Ahli) + RM 7,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 180", pasangan: "RM 180" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 4,820", pasangan: "RM 4,820" },
      ],
      accidentBenefit: "RM 10,000 (Ahli) & RM 10,000 (Pasangan)",
      accidentAhli: "10000",
      accidentPasangan: "10000",
      totalAccident: "Ahli: 7000 + 10000 : 17000 | Pasangan: 7000 + 10000 : 17000",
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
      accidentAhli: "15000",
      accidentPasangan: "15000",
      totalAccident: "Ahli: 9000 + 15000 : 24000 | Pasangan: 9000 + 15000 : 24000",
      childBenefit: "Manfaat Pengurusan Jenazah / Tunai RM 1,200 seorang untuk 5 orang anak berdaftar (1 - 17 tahun)",
    },
    modalData_nonmuslim: {
      totalNormalDeath: "RM 9,000 (Ahli) + RM 9,000 (Pasangan)",
      items: [
        { no: 1, benefit: "Bantuan Tunai Kebajikan (24 Jam)", ahli: "RM 1,500", pasangan: "RM 1,500" },
        { no: 2, benefit: "Wang Khairat Kepada Waris", ahli: "RM 500", pasangan: "RM 500" },
        { no: 3, benefit: "Pakej Kepada Waris (Selepas 60 Hari)", ahli: "RM 240", pasangan: "RM 240" },
        { no: 4, benefit: "Wang Khairat Kepada Waris (Selepas 90 Hari)", ahli: "RM 6,760", pasangan: "RM 6,760" },
      ],
      accidentBenefit: "RM 15,000 (Ahli) & RM 15,000 (Pasangan)",
      accidentAhli: "15000",
      accidentPasangan: "15000",
      totalAccident: "Ahli: 9000 + 15000 : 24000 | Pasangan: 9000 + 15000 : 24000",
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

const MALAYSIAN_STATES = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Wilayah Persekutuan Kuala Lumpur",
  "Wilayah Persekutuan Labuan",
  "Wilayah Persekutuan Putrajaya",
];

function getAgeFromIC(icString: string): number | null {
  const cleanIC = icString.replace(/\D/g, "");
  if (cleanIC.length < 2) return null;
  const yy = parseInt(cleanIC.substring(0, 2), 10);
  if (isNaN(yy)) return null;
  const currentYear = new Date().getFullYear();
  const currentYY = currentYear % 100;
  const birthYear = yy <= currentYY ? 2000 + yy : 1900 + yy;
  return currentYear - birthYear;
}


export interface MemberTab {
  id: string;
  label: string;
  role: "ahli" | "pasangan" | "anak";
  description?: string;
}

export function getMemberTabsForPackage(pkgId?: string): MemberTab[] {
  if (!pkgId) return [{ id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" }];

  if (pkgId === "kel-20") {
    return [
      { id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" },
      { id: "pasangan", label: "Pasangan", role: "pasangan", description: "Maklumat Pasangan (Suami / Isteri)" },
      { id: "anak_1", label: "Anak 1", role: "anak", description: "Maklumat Anak 1 (1 - 17 tahun)" },
      { id: "anak_2", label: "Anak 2", role: "anak", description: "Maklumat Anak 2 (1 - 17 tahun)" },
    ];
  }
  if (pkgId === "kel-30") {
    return [
      { id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" },
      { id: "pasangan", label: "Pasangan", role: "pasangan", description: "Maklumat Pasangan (Suami / Isteri)" },
      { id: "anak_1", label: "Anak 1", role: "anak", description: "Maklumat Anak 1 (1 - 17 tahun)" },
      { id: "anak_2", label: "Anak 2", role: "anak", description: "Maklumat Anak 2 (1 - 17 tahun)" },
      { id: "anak_3", label: "Anak 3", role: "anak", description: "Maklumat Anak 3 (1 - 17 tahun)" },
    ];
  }
  if (pkgId === "kel-40") {
    return [
      { id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" },
      { id: "pasangan", label: "Pasangan", role: "pasangan", description: "Maklumat Pasangan (Suami / Isteri)" },
      { id: "anak_1", label: "Anak 1", role: "anak", description: "Maklumat Anak 1 (1 - 17 tahun)" },
      { id: "anak_2", label: "Anak 2", role: "anak", description: "Maklumat Anak 2 (1 - 17 tahun)" },
      { id: "anak_3", label: "Anak 3", role: "anak", description: "Maklumat Anak 3 (1 - 17 tahun)" },
      { id: "anak_4", label: "Anak 4", role: "anak", description: "Maklumat Anak 4 (1 - 17 tahun)" },
      { id: "anak_5", label: "Anak 5", role: "anak", description: "Maklumat Anak 5 (1 - 17 tahun)" },
    ];
  }

  return [{ id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" }];
}

export interface MemberFormData {
  nama: string;
  telefon: string;
  ic: string;
  alamat1: string;
  alamat2: string;
  alamat3: string;
  negeri: string;
  sameAddressAsAhli?: boolean;
}

export function PackageSection({ onPackageSelect }: PackageSectionProps) {
  // Modal for detailed breakdown table
  const [activeModalPackage, setActiveModalPackage] = useState<PackageDetail | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"muslim" | "nonmuslim">("muslim");

  // Dedicated Popup Form Modal state
  const [selectedFormPackage, setSelectedFormPackage] = useState<PackageDetail | null>(null);

  // Form modal steps: "form" | "declaration"
  const [formStep, setFormStep] = useState<"form" | "declaration">("form");
  const [declarationAgreed, setDeclarationAgreed] = useState(false);

  // Multi-tab member form states
  const [activeMemberTab, setActiveMemberTab] = useState<string>("ahli");
  const [individuDependents, setIndividuDependents] = useState<string[]>([]);
  const [membersData, setMembersData] = useState<Record<string, MemberFormData>>({
    ahli: {
      nama: "",
      telefon: "",
      ic: "",
      alamat1: "",
      alamat2: "",
      alamat3: "",
      negeri: "",
      sameAddressAsAhli: false,
    },
  });

  const [warisData, setWarisData] = useState({
    namaWaris: "",
    telefonWaris: "",
    statusKeahlian: "ahli" as "ahli" | "bukan_ahli",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const getTabsForCurrentPackage = (): MemberTab[] => {
    if (!selectedFormPackage) return [{ id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" }];

    if (selectedFormPackage.category === "individu") {
      const baseTab: MemberTab = { id: "ahli", label: "Ahli", role: "ahli", description: "Maklumat Pemohon Utama (Ahli)" };
      const depTabs: MemberTab[] = individuDependents.map((depId, idx) => ({
        id: depId,
        label: `Tanggungan ${idx + 1}`,
        role: "anak",
        description: `Maklumat Tanggungan ${idx + 1} (+RM10/sebulan)`,
      }));
      return [baseTab, ...depTabs];
    }

    return getMemberTabsForPackage(selectedFormPackage.id);
  };

  const getCalculatedMonthlyFee = (): number => {
    if (!selectedFormPackage) return 0;
    let fee = selectedFormPackage.monthlyFee;
    if (selectedFormPackage.category === "individu") {
      fee += individuDependents.length * 10;
    }
    return fee;
  };

  const handleAddIndividuDependent = () => {
    if (individuDependents.length >= 5) {
      setErrorMessage("Maksimum 5 orang tanggungan sahaja dibenarkan.");
      return;
    }

    const nextCount = individuDependents.length + 1;
    const newDepId = `tanggungan_${nextCount}`;

    const ahliData = membersData["ahli"] || {
      nama: "",
      telefon: "",
      ic: "",
      alamat1: "",
      alamat2: "",
      alamat3: "",
      negeri: "",
    };

    setIndividuDependents((prev) => [...prev, newDepId]);
    setMembersData((prev) => ({
      ...prev,
      [newDepId]: {
        nama: "",
        telefon: "",
        ic: "",
        alamat1: ahliData.alamat1,
        alamat2: ahliData.alamat2,
        alamat3: ahliData.alamat3,
        negeri: ahliData.negeri,
        sameAddressAsAhli: true,
      },
    }));
    setActiveMemberTab(newDepId);
    setErrorMessage("");
  };

  const handleRemoveIndividuDependent = (depId: string) => {
    setIndividuDependents((prev) => prev.filter((id) => id !== depId));
    setMembersData((prev) => {
      const next = { ...prev };
      delete next[depId];
      return next;
    });
    if (activeMemberTab === depId) {
      setActiveMemberTab("ahli");
    }
  };

  const createInitialMembersData = (pkgId?: string): Record<string, MemberFormData> => {
    const tabs = getMemberTabsForPackage(pkgId);
    const initial: Record<string, MemberFormData> = {};
    tabs.forEach((tab) => {
      initial[tab.id] = {
        nama: "",
        telefon: "",
        ic: "",
        alamat1: "",
        alamat2: "",
        alamat3: "",
        negeri: "",
        sameAddressAsAhli: tab.id !== "ahli",
      };
    });
    return initial;
  };

  const handleOpenDetailModal = (pkg: PackageDetail) => {
    setActiveModalPackage(pkg);
    setActiveModalTab("muslim");
  };

  const handleOpenFormModal = (pkg: PackageDetail) => {
    setSelectedFormPackage(pkg);
    setFormStep("form");
    setDeclarationAgreed(false);
    setFormStatus("idle");
    setErrorMessage("");
    setActiveMemberTab("ahli");
    setIndividuDependents([]);
    setMembersData(createInitialMembersData(pkg.id));
    setWarisData({
      namaWaris: "",
      telefonWaris: "",
      statusKeahlian: "ahli",
    });
    onPackageSelect?.(pkg.name);
  };

  const validateAgeForPackage = (icValue: string, pkgId?: string) => {
    const isAgeRestrictedPackage = pkgId === "ind-20" || pkgId === "kel-40";
    if (isAgeRestrictedPackage) {
      const age = getAgeFromIC(icValue);
      if (age !== null && age >= 60) {
        return "Melebihi had umur yang ditetapkan, sila pilih pakej lain yang tersedia";
      }
    }
    return null;
  };

  const handleMemberFieldChange = (tabId: string, field: keyof MemberFormData, value: any) => {
    setMembersData((prev) => {
      const currentTab = prev[tabId] || {
        nama: "",
        telefon: "",
        ic: "",
        alamat1: "",
        alamat2: "",
        alamat3: "",
        negeri: "",
      };
      const updatedTab = { ...currentTab, [field]: value };
      const nextMembers = { ...prev, [tabId]: updatedTab };

      // If updating Ahli's address, propagate to all tabs that have sameAddressAsAhli enabled
      if (tabId === "ahli" && ["alamat1", "alamat2", "alamat3", "negeri"].includes(field)) {
        Object.keys(nextMembers).forEach((k) => {
          if (k !== "ahli" && nextMembers[k]?.sameAddressAsAhli) {
            nextMembers[k] = {
              ...nextMembers[k],
              [field]: value,
            };
          }
        });
      }

      return nextMembers;
    });

    if (field === "ic") {
      const ageError = validateAgeForPackage(value, selectedFormPackage?.id);
      if (ageError) {
        setErrorMessage(`${tabId === "ahli" ? "Ahli" : tabId}: ${ageError}`);
      } else if (errorMessage.includes("Melebihi had umur")) {
        setErrorMessage("");
      }
    }
  };

  const handleToggleSameAddress = (tabId: string, checked: boolean) => {
    setMembersData((prev) => {
      const ahliData = prev["ahli"] || {
        nama: "",
        telefon: "",
        ic: "",
        alamat1: "",
        alamat2: "",
        alamat3: "",
        negeri: "",
      };

      return {
        ...prev,
        [tabId]: {
          ...prev[tabId],
          sameAddressAsAhli: checked,
          ...(checked
            ? {
              alamat1: ahliData.alamat1,
              alamat2: ahliData.alamat2,
              alamat3: ahliData.alamat3,
              negeri: ahliData.negeri,
            }
            : {}),
        },
      };
    });
  };

  const handleProceedToDeclaration = (e: React.FormEvent) => {
    e.preventDefault();
    const ahli = membersData["ahli"];
    if (
      !ahli ||
      !ahli.nama.trim() ||
      !ahli.telefon.trim() ||
      !ahli.ic.trim() ||
      !ahli.alamat1.trim() ||
      !ahli.alamat2.trim() ||
      !ahli.alamat3.trim() ||
      !ahli.negeri.trim() ||
      !warisData.namaWaris.trim() ||
      !warisData.telefonWaris.trim()
    ) {
      setActiveMemberTab("ahli");
      setErrorMessage("Sila lengkapkan semua ruangan bertanda * untuk Ahli & Waris.");
      return;
    }

    const ageError = validateAgeForPackage(ahli.ic, selectedFormPackage?.id);
    if (ageError) {
      setActiveMemberTab("ahli");
      setErrorMessage(ageError);
      return;
    }

    setErrorMessage("");
    setFormStep("declaration");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!declarationAgreed) {
      setErrorMessage("Sila tanda pada petak 'Saya setuju' untuk meneruskan permohonan.");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    const ahli = membersData["ahli"] || {
      nama: "",
      telefon: "",
      ic: "",
      alamat1: "",
      alamat2: "",
      alamat3: "",
      negeri: "",
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: ahli.nama,
          telefon: ahli.telefon,
          ic: ahli.ic,
          alamat1: ahli.alamat1,
          alamat2: ahli.alamat2,
          alamat3: ahli.alamat3,
          negeri: ahli.negeri,
          namaWaris: warisData.namaWaris,
          telefonWaris: warisData.telefonWaris,
          statusKeahlian: warisData.statusKeahlian === "ahli" ? "Ahli" : "Bukan Ahli",
          pakej: selectedFormPackage?.name || "INDIVIDU 10",
          persetujuan: true,
          members: membersData,
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
                    onClick={() => handleOpenDetailModal(pkg)}
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
                    onClick={() => handleOpenDetailModal(pkg)}
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
              <div className="mb-4 pb-3 border-b">
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

              {/* Modal Tabs: Muslim vs Non-Muslim */}
              <div className="flex p-1 bg-slate-100/90 rounded-2xl mb-5 border border-slate-200/70 shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveModalTab("muslim")}
                  className={`flex-1 py-2.5 px-4 text-center text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${activeModalTab === "muslim"
                    ? "bg-white text-emerald-950 shadow-sm border border-slate-200/80"
                    : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  Manfaat Muslim
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalTab("nonmuslim")}
                  className={`flex-1 py-2.5 px-4 text-center text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${activeModalTab === "nonmuslim"
                    ? "bg-white text-emerald-950 shadow-sm border border-slate-200/80"
                    : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  Manfaat Non-Muslim
                </button>
              </div>

              {(() => {
                const currentModalData =
                  activeModalTab === "nonmuslim"
                    ? activeModalPackage.modalData_nonmuslim
                    : activeModalPackage.modalData;

                return (
                  <div className="space-y-4 mb-6">
                    {/* Detailed Table matching exact layout from image */}
                    <div className="overflow-x-auto rounded-xl border border-slate-400 shadow-sm">
                      <table className="w-full table-fixed text-left text-xs sm:text-sm border-collapse border border-slate-400">
                        <thead>
                          <tr className="bg-[#D5E8F7] text-slate-900 font-bold border-b border-slate-400">
                            <th className="p-2.5 sm:p-3 w-10 sm:w-12 text-center border-r border-slate-400"></th>
                            <th className={`p-2.5 sm:p-3 border-r border-slate-400 ${currentModalData.items[0]?.pasangan ? "w-1/2" : "w-2/3"}`}>
                              <div className="font-extrabold text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                                PAKEJ {activeModalPackage.name}
                              </div>
                              <div className="font-bold text-xs text-slate-800 uppercase mt-0.5">
                                {currentModalData.items[0]?.pasangan
                                  ? "MANFAAT AHLI & PASANGAN"
                                  : "MANFAAT AHLI"}
                              </div>
                            </th>
                            {currentModalData.items[0]?.pasangan ? (
                              <>
                                <th className="p-2.5 sm:p-3 text-center sm:text-right font-extrabold border-r border-slate-400 w-1/4 text-slate-900 uppercase">
                                  Ahli (RM)
                                </th>
                                <th className="p-2.5 sm:p-3 text-center sm:text-right font-extrabold border-slate-400 w-1/4 text-slate-900 uppercase">
                                  Pasangan (RM)
                                </th>
                              </>
                            ) : (
                              <th className="p-2.5 sm:p-3 text-center sm:text-right font-extrabold border-slate-400 w-1/3 text-slate-900 uppercase">
                                NILAI MANFAAT PAKEJ (RM)
                              </th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {/* Items 1 to 4 */}
                          {currentModalData.items.map((item) => (
                            <tr key={item.no} className="hover:bg-slate-50 border-b border-slate-300">
                              <td className="p-2.5 text-center font-bold text-slate-900 border-r border-slate-400">
                                {item.no}
                              </td>
                              <td className="p-2.5 font-medium text-slate-900 border-r border-slate-400">
                                {item.benefit}
                              </td>
                              <td className="p-2.5 text-center sm:text-right font-bold text-slate-900 border-r border-slate-400">
                                {item.ahli.replace(/[^0-9]/g, "")}
                              </td>
                              {item.pasangan && (
                                <td className="p-2.5 text-center sm:text-right font-bold text-slate-900 border-slate-400">
                                  {item.pasangan.replace(/[^0-9]/g, "")}
                                </td>
                              )}
                            </tr>
                          ))}

                          {/* Row 5: *Jumlah Manfaat Untuk Kematian Biasa */}
                          <tr className="bg-slate-50 border-b border-slate-400 font-extrabold">
                            <td className="p-2.5 border-r border-slate-400"></td>
                            <td className="p-2.5 italic text-slate-900 border-r border-slate-400">
                              *Jumlah Manfaat Untuk Kematian Biasa
                            </td>
                            <td className="p-2.5 text-center sm:text-right text-slate-900 border-r border-slate-400">
                              {calculateAhliTotal(currentModalData.items).replace(/[^0-9]/g, "")}
                            </td>
                            {currentModalData.items[0]?.pasangan && (
                              <td className="p-2.5 text-center sm:text-right text-slate-900 border-slate-400">
                                {calculatePasanganTotal(currentModalData.items).replace(/[^0-9]/g, "")}
                              </td>
                            )}
                          </tr>

                          {/* Row 6: Item No. 5 - Meninggal / Kecacatan Kekal Akibat Kemalangan (in RED text) */}
                          <tr className="bg-red-50/40 border-b border-slate-400">
                            <td className="p-2.5 text-center font-bold text-red-600 border-r border-slate-400">
                              5
                            </td>
                            <td className="p-2.5 font-semibold text-red-600 border-r border-slate-400 leading-snug">
                              Meninggal / Kecacatan Kekal Akibat Kemalangan
                            </td>
                            <td className="p-2.5 text-center sm:text-right font-extrabold text-red-600 border-r border-slate-400">
                              {currentModalData.accidentAhli || "5000"}
                            </td>
                            {currentModalData.items[0]?.pasangan && (
                              <td className="p-2.5 text-center sm:text-right font-extrabold text-red-600 border-slate-400">
                                {currentModalData.accidentPasangan || "5000"}
                              </td>
                            )}
                          </tr>

                          {/* Row 7: Item No. 6 - *Jumlah Manfaat Untuk Kematian kemalangan */}
                          <tr className="bg-slate-50 font-extrabold">
                            <td className="p-2.5 text-center text-slate-900 border-r border-slate-400">
                              6
                            </td>
                            <td className="p-2.5 italic text-slate-900 border-r border-slate-400">
                              *Jumlah Manfaat Untuk Kematian kemalangan
                            </td>
                            <td
                              colSpan={currentModalData.items[0]?.pasangan ? 2 : 1}
                              className="p-2.5 text-center sm:text-right text-slate-900 border-slate-400"
                            >
                              {currentModalData.totalAccident}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Caution Disclaimer Box */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5 shadow-xs">
                      <Info className="h-4 w-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <p className="font-bold text-amber-900 leading-snug">
                        1. Meninggal / Kecacatan Kekal Akibat Kemalangan : <strong>Maksimum Tertakluk Kepada Kelulusan Pengendali Takaful </strong>(Selepas 180 Hari)
                      <br />
                      <br />
                      2. Untuk Non Muslim : Bantuan Tunai Kebajikan akan diberikan kepada waris dalam tempoh 24 Jam setelah laporan kematian diterima dan disahkan
                    </p>
                  </div>

                    {/* Child Benefit Box if present */ }
                {
                  currentModalData.childBenefit && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm">
                      <p className="font-bold text-emerald-900">Manfaat Pakej Anak:</p>
                      <p className="text-slate-700 mt-1">{currentModalData.childBenefit}</p>
                    </div>
                  )
                }
                  </div>
        );
              })()}

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
  )
}
      </AnimatePresence >

  {/* ── MODAL 2: DEDICATED PACKAGE FORM POPUP MODAL ── */ }
  <AnimatePresence>
{
  selectedFormPackage && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-lg max-h-[90vh] my-auto rounded-3xl bg-white shadow-2xl overflow-hidden border flex flex-col"
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
          className="p-5 sm:p-6 text-white relative flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, var(--color-brand-green) 0%, #0d3824 100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-green-950 font-bold text-xs">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Borang Permohonan Pakej
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
            {selectedFormPackage.name}
          </h3>

          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-amber-200 border border-white/20">
              RM{getCalculatedMonthlyFee()} / sebulan
            </span>
            {selectedFormPackage.category === "individu" && individuDependents.length > 0 && (
              <span className="text-[11px] text-amber-300 font-semibold bg-black/20 px-2.5 py-0.5 rounded-full border border-amber-300/30">
                (RM{selectedFormPackage.monthlyFee} + {individuDependents.length} Tanggungan x RM10)
              </span>
            )}
            <span className="text-xs text-white/80 font-medium">
              {selectedFormPackage.coverage}
            </span>
          </div>
        </div>

        {/* Modal Content Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {(() => {
            const memberTabs = getTabsForCurrentPackage();
            const currentTabObj = memberTabs.find((t) => t.id === activeMemberTab) || memberTabs[0];
            const currentMemberData = membersData[activeMemberTab] || {
              nama: "",
              telefon: "",
              ic: "",
              alamat1: "",
              alamat2: "",
              alamat3: "",
              negeri: "",
              sameAddressAsAhli: false,
            };

            if (formStatus === "success") {
              return (
                <div className="text-center py-6 space-y-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mx-auto shadow-md">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-green-900 mb-2">
                      Permohonan Berjaya!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Maklumat bagi <strong>{selectedFormPackage.name}</strong> telah berjaya disimpan ke dalam sistem. Pegawai kami akan menghubungi anda.
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
              );
            }

            if (formStep === "declaration") {
              return (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-green-950 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      Pengisytiharan &amp; Pengesahan
                    </h4>
                    <p className="text-xs text-slate-500">
                      Sila semak pengisytiharan berikut sebelum menghantar permohonan {selectedFormPackage.name}.
                    </p>
                  </div>

                  {/* Family Members Summary Card */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-green-900 border-b pb-1.5 flex items-center justify-between">
                      <span>Senarai Ahli Berdaftar ({memberTabs.length}):</span>
                    </p>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto text-xs text-slate-700">
                      {memberTabs.map((t) => {
                        const m = membersData[t.id];
                        const hasData = m && (m.nama.trim() || m.ic.trim());
                        return (
                          <div key={t.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                            <span className="font-semibold text-slate-900">
                              {t.label}: {hasData ? m.nama : <span className="text-slate-400 font-normal italic">(Belum diisi)</span>}
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono">
                              {hasData ? m.ic : "-"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>
                      Saya (dan keluarga saya jika pakej keluarga / jika ada tambahan) dengan ini mengemukakan permohonan untuk mendaftar sebagai ahli Skim Khairat Kohasil Raudhah. Saya juga memperakui semua maklumat yang diberikan adalah benar dan saya juga telah membaca dan memahami serta bersetuju untuk mematuhi semua terma dan syarat Skim Khairat ini. Saya dengan fikiran waras dan tanpa paksaan mana – mana pihak dengan ini bersetuju untuk menyertai Skim Khairat ini dengan jumlah potongan gaji bulanan sebanyak <strong className="text-green-950 font-extrabold text-sm sm:text-base border-b-2 border-green-800">RM{getCalculatedMonthlyFee() + (warisData.statusKeahlian === "bukan_ahli" ? 1 : 0)}</strong> sebulan.
                    </p>
                  </div>

                  {/* Red Color Font Notice Box */}
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 space-y-2">
                    {selectedFormPackage.category === "individu" && (
                      <p className="font-bold text-amber-900 leading-snug pb-1 border-b border-amber-200">
                        Nota Pakej Individu: Setiap tambahan 1 orang tanggungan dikenakan caj RM10/sebulan (Maksimum 5 orang). Jumlah tanggungan semasa: {individuDependents.length} orang (+RM{individuDependents.length * 10}/sebulan).
                      </p>
                    )}
                    <p className="font-bold text-red-800 leading-snug">
                      Penting : Untuk Bukan Ahli Kohasil, Caj Tambahan sebanyak RM1 akan dikenakan untuk setiap potongan gaji bulanan. Contoh Pakej Keluarga 20 + Ibu Individu 10 : Potongan Bulanan adalah RM30 + RM1 = RM31 sebulan
                    </p>
                    <p className="font-semibold text-red-700 leading-snug">
                      Jika pakej keluarga , Sila hubungi kami untuk menambah nama anak jika mendapat anak baharu (apabila berumur 1 tahun) bagi memenuhi kuota pakej keluarga tersebut.Tertakluk kepada kategori pakej keluarga
                    </p>
                  </div>

                  {/* Final Declaration Submission Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:bg-emerald-100/60 transition-colors">
                      <input
                        type="checkbox"
                        checked={declarationAgreed}
                        onChange={(e) => setDeclarationAgreed(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded accent-green-800 cursor-pointer flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-bold text-green-950">
                        * Dengan klik “Saya Setuju”, saya bersetuju dengan terma dan syarat yang dinyatakan di atas
                      </span>
                    </label>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFormStep("form");
                          setErrorMessage("");
                        }}
                        className="flex-1 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali
                      </button>
                      <button
                        type="submit"
                        disabled={!declarationAgreed || formStatus === "loading"}
                        className="flex-[2] py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        style={{ background: "var(--color-brand-green)" }}
                      >
                        {formStatus === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Menghantar...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Hantar Permohonan
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              );
            }

            return (
              <form onSubmit={handleProceedToDeclaration} className="space-y-4">
                {/* Multi-member Tab Navigation Bar */}
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar">
                    {memberTabs.map((tab) => {
                      const isActive = activeMemberTab === tab.id;
                      const mData = membersData[tab.id];
                      const isFilled = Boolean(mData && mData.nama.trim() && mData.ic.trim());
                      const isDynamicDep = tab.id.startsWith("tanggungan_");

                      return (
                        <div key={tab.id} className="relative flex items-center">
                          <button
                            type="button"
                            onClick={() => setActiveMemberTab(tab.id)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                                ? "bg-green-800 text-white shadow-xs"
                                : isFilled
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                          >
                            <span>{tab.label}</span>
                            {isFilled && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                          </button>
                          {isDynamicDep && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveIndividuDependent(tab.id);
                              }}
                              className="ml-1 p-1 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Buang tanggungan ini"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      );
                    })}

                    {/* (+) Tambah Tanggungan Button for Individu Package */}
                    {selectedFormPackage.category === "individu" && (
                      <button
                        type="button"
                        onClick={handleAddIndividuDependent}
                        disabled={individuDependents.length >= 5}
                        className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-amber-400 text-green-950 hover:bg-amber-300 transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Tambah tanggungan (Maksimum 5 orang - RM10/sebulan per tanggungan)"
                      >
                        <span>+ Tambah Tanggungan (+RM10)</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-green-900">
                    {currentTabObj.description || currentTabObj.label}
                  </span>
                  {memberTabs.length > 1 && (
                    <span className="text-[11px] font-semibold text-slate-500">
                      Tab {memberTabs.findIndex((t) => t.id === activeMemberTab) + 1} / {memberTabs.length}
                    </span>
                  )}
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Nama Penuh */}
                <div>
                  <label htmlFor={`modal-nama-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Nama Penuh {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={`modal-nama-${activeMemberTab}`}
                    type="text"
                    required={activeMemberTab === "ahli"}
                    value={currentMemberData.nama}
                    onChange={(e) => handleMemberFieldChange(activeMemberTab, "nama", e.target.value)}
                    placeholder={`Contoh: ${activeMemberTab === "ahli" ? "Ahmad bin Abdullah" : activeMemberTab === "pasangan" ? "Siti binti Ali" : "Ali bin Ahmad"}`}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800"
                  />
                </div>

                {/* Grid: No Telefon & IC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={`modal-telefon-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      No Telefon {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id={`modal-telefon-${activeMemberTab}`}
                      type="tel"
                      required={activeMemberTab === "ahli"}
                      value={currentMemberData.telefon}
                      onChange={(e) => handleMemberFieldChange(activeMemberTab, "telefon", e.target.value)}
                      placeholder="Contoh: 011-1300 1999"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800"
                    />
                  </div>

                  <div>
                    <label htmlFor={`modal-ic-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Nombor Kad Pengenalan / MyKad / MyKid {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id={`modal-ic-${activeMemberTab}`}
                      type="text"
                      required={activeMemberTab === "ahli"}
                      value={currentMemberData.ic}
                      onChange={(e) => handleMemberFieldChange(activeMemberTab, "ic", e.target.value)}
                      placeholder="Contoh: 900101-14-1234"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800"
                    />
                  </div>
                </div>

                {/* Checkbox for Sama Seperti Ahli on non-ahli tabs */}
                {activeMemberTab !== "ahli" && (
                  <div className="p-3 rounded-2xl bg-emerald-50/90 border border-emerald-200">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-emerald-950">
                      <input
                        type="checkbox"
                        checked={currentMemberData.sameAddressAsAhli || false}
                        onChange={(e) => handleToggleSameAddress(activeMemberTab, e.target.checked)}
                        className="h-4 w-4 rounded accent-green-800 cursor-pointer"
                      />
                      <span>Sama seperti alamat Ahli</span>
                    </label>
                    {currentMemberData.sameAddressAsAhli && (
                      <p className="text-[11px] text-emerald-700 mt-1 italic pl-6">
                        * Alamat disalin secara automatik daripada borang Ahli.
                      </p>
                    )}
                  </div>
                )}

                {/* Alamat 1 */}
                <div>
                  <label htmlFor={`modal-alamat1-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Alamat 1 {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id={`modal-alamat1-${activeMemberTab}`}
                    type="text"
                    required={activeMemberTab === "ahli"}
                    disabled={activeMemberTab !== "ahli" && currentMemberData.sameAddressAsAhli}
                    value={currentMemberData.alamat1}
                    onChange={(e) => handleMemberFieldChange(activeMemberTab, "alamat1", e.target.value)}
                    placeholder="No. Rumah, Jalan, Taman"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
                  />
                </div>

                {/* Grid: Alamat 2 & Alamat 3 & Negeri */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={`modal-alamat2-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Alamat 2 (poskod) {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id={`modal-alamat2-${activeMemberTab}`}
                      type="text"
                      required={activeMemberTab === "ahli"}
                      disabled={activeMemberTab !== "ahli" && currentMemberData.sameAddressAsAhli}
                      value={currentMemberData.alamat2}
                      onChange={(e) => handleMemberFieldChange(activeMemberTab, "alamat2", e.target.value)}
                      placeholder="Contoh: 50600"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor={`modal-alamat3-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Alamat 3 (bandar) {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id={`modal-alamat3-${activeMemberTab}`}
                      type="text"
                      required={activeMemberTab === "ahli"}
                      disabled={activeMemberTab !== "ahli" && currentMemberData.sameAddressAsAhli}
                      value={currentMemberData.alamat3}
                      onChange={(e) => handleMemberFieldChange(activeMemberTab, "alamat3", e.target.value)}
                      placeholder="Contoh: Kuala Lumpur"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor={`modal-negeri-${activeMemberTab}`} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Alamat 3 (Negeri) {activeMemberTab === "ahli" && <span className="text-red-500">*</span>}
                    </label>
                    <select
                      id={`modal-negeri-${activeMemberTab}`}
                      required={activeMemberTab === "ahli"}
                      disabled={activeMemberTab !== "ahli" && currentMemberData.sameAddressAsAhli}
                      value={currentMemberData.negeri}
                      onChange={(e) => handleMemberFieldChange(activeMemberTab, "negeri", e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800 bg-white disabled:bg-slate-100 disabled:text-slate-500"
                    >
                      <option value="">-- Pilih Negeri --</option>
                      {MALAYSIAN_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Waris & Status Keahlian (only on Ahli tab) */}
                {activeMemberTab === "ahli" && (
                  <>
                    <div className="pt-2 border-t border-slate-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="modal-namaWaris" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Nama Waris <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-namaWaris"
                            type="text"
                            required
                            value={warisData.namaWaris}
                            onChange={(e) => setWarisData({ ...warisData, namaWaris: e.target.value })}
                            placeholder="Nama Penuh Waris"
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800"
                          />
                        </div>

                        <div>
                          <label htmlFor="modal-telefonWaris" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            No Tel Waris <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="modal-telefonWaris"
                            type="tel"
                            required
                            value={warisData.telefonWaris}
                            onChange={(e) => setWarisData({ ...warisData, telefonWaris: e.target.value })}
                            placeholder="Contoh: 012-3456789"
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-800 focus:ring-2 focus:ring-green-800/20 transition-all text-slate-800"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Ahli / Bukan Ahli <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${warisData.statusKeahlian === "ahli" ? "border-green-800 bg-green-50 text-green-900" : "border-slate-200 text-slate-600"}`}>
                          <input
                            type="radio"
                            name="statusKeahlian"
                            value="ahli"
                            checked={warisData.statusKeahlian === "ahli"}
                            onChange={() => setWarisData({ ...warisData, statusKeahlian: "ahli" })}
                            className="accent-green-800"
                          />
                          Ahli
                        </label>
                        <label className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all ${warisData.statusKeahlian === "bukan_ahli" ? "border-green-800 bg-green-50 text-green-900" : "border-slate-200 text-slate-600"}`}>
                          <input
                            type="radio"
                            name="statusKeahlian"
                            value="bukan_ahli"
                            checked={warisData.statusKeahlian === "bukan_ahli"}
                            onChange={() => setWarisData({ ...warisData, statusKeahlian: "bukan_ahli" })}
                            className="accent-green-800"
                          />
                          Bukan Ahli
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {/* Tab Navigation Footer */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200">
                  {memberTabs.length > 1 ? (
                    <>
                      {memberTabs.findIndex((t) => t.id === activeMemberTab) > 0 ? (
                        <button
                          type="button"
                          onClick={() => {
                            const idx = memberTabs.findIndex((t) => t.id === activeMemberTab);
                            if (idx > 0) setActiveMemberTab(memberTabs[idx - 1].id);
                          }}
                          className="px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          &larr; {memberTabs[memberTabs.findIndex((t) => t.id === activeMemberTab) - 1]?.label}
                        </button>
                      ) : <div />}

                      {memberTabs.findIndex((t) => t.id === activeMemberTab) < memberTabs.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => {
                            const idx = memberTabs.findIndex((t) => t.id === activeMemberTab);
                            if (idx < memberTabs.length - 1) setActiveMemberTab(memberTabs[idx + 1].id);
                          }}
                          className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                        >
                          Isi {memberTabs[memberTabs.findIndex((t) => t.id === activeMemberTab) + 1]?.label} &rarr;
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 flex items-center justify-center gap-2"
                          style={{ background: "var(--color-brand-green)" }}
                        >
                          Teruskan ke Pengisytiharan &rarr;
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 flex items-center justify-center gap-2"
                      style={{ background: "var(--color-brand-green)" }}
                    >
                      Teruskan ke Pengisytiharan &rarr;
                    </button>
                  )}
                </div>
              </form>
            );
          })()}
        </div>
      </motion.div>
    </div>
  )
}
      </AnimatePresence >
    </section >
  );
}
