// File: src/data/packages.ts

export interface PackageBenefit {
  label: string;
  value: string;
}

export interface Package {
  id: string;
  name: string;
  monthlyFee: number;
  recommended?: boolean;
  eligibility: string;
  benefits: PackageBenefit[];
  details: string[];
}

export interface PackageCategory {
  id: string;
  label: string;
  packages: Package[];
}

// NOTE: All figures below are SAMPLE DATA pending verification by Kohasil.
// Do not present these as legally confirmed amounts.

export const packageCategories: PackageCategory[] = [
  {
    id: "individu",
    label: "Individu",
    packages: [
      {
        id: "individu-10",
        name: "Individu 10",
        monthlyFee: 10,
        eligibility: "Warganegara Malaysia berumur 18–65 tahun",
        benefits: [
          { label: "Manfaat Kematian Biasa", value: "RM5,000" },
          { label: "Tambahan Kemalangan", value: "sehingga RM5,000" },
          { label: "Pengurusan Jenazah / Tunai", value: "RM1,500" },
        ],
        details: [
          "Tiada pemeriksaan kesihatan diperlukan",
          "Pendaftaran melalui potongan gaji",
          "Perlindungan bermula selepas tempoh menunggu",
          "Tertakluk kepada syarat dan terma pakej",
        ],
      },
      {
        id: "individu-15",
        name: "Individu 15",
        monthlyFee: 15,
        recommended: true,
        eligibility: "Warganegara Malaysia berumur 18–65 tahun",
        benefits: [
          { label: "Manfaat Kematian Biasa", value: "RM7,000" },
          { label: "Tambahan Kemalangan", value: "sehingga RM10,000" },
          { label: "Perlindungan Pasangan", value: "Tersedia" },
          { label: "Pengurusan Jenazah Penuh", value: "Disertakan" },
        ],
        details: [
          "Tiada pemeriksaan kesihatan diperlukan",
          "Perlindungan lebih menyeluruh",
          "Boleh tambah perlindungan anak",
          "Tertakluk kepada syarat dan terma pakej",
        ],
      },
      {
        id: "individu-20",
        name: "Individu 20",
        monthlyFee: 20,
        eligibility: "Warganegara Malaysia berumur 18 hingga 59 tahun",
        benefits: [
          { label: "Manfaat Kematian Biasa", value: "RM9,000" },
          { label: "Tambahan Kemalangan", value: "sehingga RM15,000" },
          { label: "Hilang Upaya Kekal", value: "Dilindungi" },
          { label: "Pengurusan Jenazah Penuh", value: "Disertakan" },
        ],
        details: [
          "Khusus untuk peserta berumur bawah 60 tahun",
          "Perlindungan tertinggi dalam pakej individu",
          "Tertakluk kepada syarat dan terma pakej",
        ],
      },
    ],
  },
  {
    id: "keluarga",
    label: "Keluarga",
    packages: [
      {
        id: "keluarga-25",
        name: "Keluarga 25",
        monthlyFee: 25,
        eligibility: "Peserta + pasangan (18–65 tahun)",
        benefits: [
          { label: "Manfaat Peserta Utama", value: "RM7,000" },
          { label: "Manfaat Pasangan", value: "RM5,000" },
          { label: "Tambahan Kemalangan (Peserta)", value: "sehingga RM10,000" },
          { label: "Pengurusan Jenazah", value: "Peserta & Pasangan" },
        ],
        details: [
          "Meliputi peserta dan satu pasangan",
          "Boleh tambah anak-anak dengan caruman tambahan",
          "Tiada pemeriksaan kesihatan",
          "Tertakluk kepada syarat pakej",
        ],
      },
      {
        id: "keluarga-35",
        name: "Keluarga 35",
        monthlyFee: 35,
        recommended: true,
        eligibility: "Peserta + pasangan + sehingga 4 anak",
        benefits: [
          { label: "Manfaat Peserta Utama", value: "RM9,000" },
          { label: "Manfaat Pasangan", value: "RM7,000" },
          { label: "Manfaat Setiap Anak", value: "RM2,000" },
          { label: "Tambahan Kemalangan (Peserta)", value: "sehingga RM15,000" },
          { label: "Pengurusan Jenazah", value: "Seluruh Keluarga" },
        ],
        details: [
          "Perlindungan komprehensif untuk seluruh keluarga",
          "Sehingga 4 anak dilindungi",
          "Tiada pemeriksaan kesihatan",
          "Tertakluk kepada syarat pakej",
        ],
      },
    ],
  },
  {
    id: "ibu-bapa",
    label: "Ibu Bapa",
    packages: [
      {
        id: "ibubapa-satu",
        name: "Ibu Bapa (1 orang)",
        monthlyFee: 15,
        eligibility: "Ibu atau bapa peserta berumur 50–75 tahun",
        benefits: [
          { label: "Manfaat Kematian", value: "RM5,000" },
          { label: "Pengurusan Jenazah", value: "Disertakan" },
          { label: "Tambahan Kemalangan", value: "sehingga RM5,000" },
        ],
        details: [
          "Ditambah sebagai caruman berasingan",
          "Peserta perlu mempunyai pakej individu aktif",
          "Tertakluk kepada syarat dan umur ibu bapa",
          "Tertakluk kepada syarat pakej",
        ],
      },
      {
        id: "ibubapa-dua",
        name: "Ibu Bapa (2 orang)",
        monthlyFee: 28,
        recommended: true,
        eligibility: "Ibu DAN bapa peserta berumur 50–75 tahun",
        benefits: [
          { label: "Manfaat Kematian (setiap seorang)", value: "RM5,000" },
          { label: "Pengurusan Jenazah", value: "Kedua-dua Ibu Bapa" },
          { label: "Tambahan Kemalangan (setiap seorang)", value: "sehingga RM5,000" },
        ],
        details: [
          "Perlindungan untuk kedua-dua ibu dan bapa",
          "Penjimatan berbanding 2 pakej berasingan",
          "Peserta perlu mempunyai pakej individu aktif",
          "Tertakluk kepada syarat pakej",
        ],
      },
    ],
  },
];
