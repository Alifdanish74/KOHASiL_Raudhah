// File: src/data/benefits.ts

export interface Benefit {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  highlight?: string;
}

export const benefits: Benefit[] = [
  {
    id: "jenazah",
    icon: "HeartHandshake",
    title: "Pengurusan Jenazah",
    description:
      "Khidmat pengurusan jenazah lengkap termasuk mandian, kafan, solat jenazah dan pengkebumian diuruskan dengan penuh hormat.",
    highlight: "Perkhidmatan 24 Jam",
  },
  {
    id: "khairat",
    icon: "Banknote",
    title: "Wang Khairat",
    description:
      "Manfaat wang tunai diberikan kepada waris sebagai sokongan kewangan segera semasa tempoh berdukacita.",
  },
  {
    id: "tahlil",
    icon: "BookOpen",
    title: "Tahlil & Khatam",
    description:
      "Bantuan pengendalian majlis tahlil dan khatam Al-Quran mengikut permintaan keluarga.",
  },
  {
    id: "waris",
    icon: "Users",
    title: "Pakej Penghargaan Waris",
    description:
      "Sokongan tambahan kepada waris termasuk pakej penghargaan bagi membantu meringankan bebanan pentadbiran.",
  },
  {
    id: "kemalangan",
    icon: "AlertTriangle",
    title: "Kematian Kemalangan",
    description:
      "Manfaat tambahan diberikan sekiranya kematian berlaku akibat kemalangan, dengan nilai perlindungan yang lebih tinggi.",
    highlight: "Manfaat Tambahan",
  },
  {
    id: "hilangUpaya",
    icon: "Accessibility",
    title: "Hilang Upaya Kekal",
    description:
      "Perlindungan jika ahli mengalami hilang upaya kekal akibat kemalangan, tertakluk kepada terma pakej.",
  },
];

export const additionalCoverage = [
  {
    id: "pasangan-anak",
    icon: "Heart",
    title: "Perlindungan Pasangan & Anak",
    description: "Tambah perlindungan untuk pasangan dan anak-anak dalam satu pakej keluarga yang komprehensif.",
  },
  {
    id: "ibu-bapa",
    icon: "UserCheck",
    title: "Perlindungan Ibu Bapa",
    description: "Pilihan tambahan untuk melindungi ibu bapa anda dengan caruman tambahan yang berpatutan.",
  },
];
