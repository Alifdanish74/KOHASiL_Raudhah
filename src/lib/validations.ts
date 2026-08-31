// File: src/lib/validations.ts
import { z } from "zod";

export const enquirySchema = z.object({
  nama: z
    .string()
    .min(2, "Nama penuh diperlukan (minimum 2 aksara)")
    .max(100, "Nama terlalu panjang"),
  telefon: z
    .string()
    .min(9, "Nombor telefon tidak sah")
    .max(15, "Nombor telefon tidak sah"),
  ic: z.string().optional(),
  alamat1: z.string().optional(),
  alamat2: z.string().optional(),
  negeri: z.string().optional(),
  namaWaris: z.string().optional(),
  telefonWaris: z.string().optional(),
  statusKeahlian: z.string().optional(),
  noAhli: z.string().optional(),
  pakej: z.string().min(1, "Sila pilih pakej yang diminati"),
  lindungiIbuBapa: z.enum(["ya", "tidak"]).optional().default("tidak"),
  kaedahHubungi: z.enum(["telefon", "whatsapp", "email"]).optional().default("whatsapp"),
  // Checkbox must be checked (truthy) — Zod v4: use boolean().refine instead of literal for broader compat
  persetujuan: z
    .boolean({
      message: "Anda perlu bersetuju untuk dihubungi oleh pihak Kohasil",
    })
    .optional()
    .default(true),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
