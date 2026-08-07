// File: src/data/faq.ts

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  requiresVerification?: boolean;
}

export const faqItems: FaqItem[] = [
  {
    id: "tuntutan-hotline",
    question: "Bagaimana saya / pihak waris mahu membuat tuntutan?",
    answer:
      "Tuntutan boleh dilakukan dengan menghubungi talian hotline kami yang beroperasi 24 Jam : 011 – 1300 1999.",
  },
  {
    id: "dokumen-diperlukan",
    question: "Dokumen apakah yang perlu disediakan oleh pihak waris pada hari kejadian?",
    answer:
      "Salinan permit mengubur perlu dilampirkan sebagai bukti kematian. Salinan sijil kematian pula diperlukan untuk baki tuntutan seterusnya seperti manfaat wang khairat.",
  },
  {
    id: "khairat-masjid",
    question: "Saya sudah memiliki khairat kematian di surau / masjid tempatan, bagaimana?",
    answer:
      "Pihak waris boleh mendapat kedua - dua manfaat khairat yang terlibat. Skim Kohasil Raudhah akan memberi bantuan tambahan jika diperlukan waris seperti bantuan kos yang mungkin tidak ditanggung oleh pihak surau / masjid tempatan seperti kos menggali kubur dan kos van jenazah untuk penghantaran jenazah ke luar kawasan / negeri.",
  },
  {
    id: "insurans-kemalangan",
    question: "Saya sudah memiliki insurans / takaful dana kemalangan, bagaimana?",
    answer:
      "Ahli / waris berhak mendapat kedua – dua manfaat mengikut semua terma dan syarat yang terlibat. Semua tuntutan akibat kemalangan adalah tertakluk kepada kelulusan pihak pengendali Takaful.",
  },
  {
    id: "kematian-luar-negara",
    question: "Bagaimana jika kematian berlaku di luar negara?",
    answer:
      "Pihak BJSB akan menguruskan segala keperluan ketika jenazah sampai di Malaysia, dari lapangan terbang ke tanah perkuburan sehingga selesai.",
  },
];
