// File: src/data/assistance-process.ts

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const assistanceSteps: ProcessStep[] = [
  {
    id: "hubungi",
    step: 1,
    title: "Waris Hubungi Hotline",
    description: "Hubungi 011-1300 1999, 24 jam setiap hari termasuk cuti umum dan hujung minggu.",
    icon: "Phone",
  },
  {
    id: "semakan",
    step: 2,
    title: "Semakan Maklumat",
    description: "Maklumat waris dan ahli disemak dengan segera oleh pasukan Kohasil.",
    icon: "ClipboardCheck",
  },
  {
    id: "bergerak",
    step: 3,
    title: "Pasukan Bantuan Bergerak",
    description: "Pasukan bantuan bergerak ke rumah atau hospital mengikut keperluan.",
    icon: "Truck",
  },
  {
    id: "sempurna",
    step: 4,
    title: "Pengurusan Disempurnakan",
    description:
      "Pengurusan jenazah dilaksanakan dengan penuh hormat berdasarkan perkhidmatan yang dipilih.",
    icon: "HeartHandshake",
  },
  {
    id: "manfaat",
    step: 5,
    title: "Manfaat Lain Diproses",
    description:
      "Khairat dan manfaat lain diproses tertakluk kepada pakej ahli dan syarat yang ditetapkan.",
    icon: "CheckCircle2",
  },
];
