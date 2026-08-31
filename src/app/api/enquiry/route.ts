// File: src/app/api/enquiry/route.ts
import { enquirySchema } from "@/lib/validations";

/**
 * POST /api/enquiry
 * Form submission endpoint.
 * Saves user submissions to Google Sheets & logs payload.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          success: false,
          error: "Ralat Pengesahan Maklumat",
          issues: parsed.error.issues,
        },
        { status: 422 }
      );
    }

    const submissionData = {
      timestamp: new Date().toISOString(),
      nama: parsed.data.nama,
      telefon: parsed.data.telefon,
      ic: parsed.data.ic || "-",
      alamat1: parsed.data.alamat1 || "-",
      alamat2: parsed.data.alamat2 || "-",
      negeri: parsed.data.negeri || "-",
      namaWaris: parsed.data.namaWaris || "-",
      telefonWaris: parsed.data.telefonWaris || "-",
      statusKeahlian: parsed.data.statusKeahlian || "-",
      noAhli: parsed.data.noAhli || "-",
      pakej: parsed.data.pakej,
      lindungiIbuBapa: parsed.data.lindungiIbuBapa === "ya" ? "Ya (RM10/bln)" : "Tidak",
      kaedahHubungi: parsed.data.kaedahHubungi ? parsed.data.kaedahHubungi.toUpperCase() : "WHATSAPP",
      sheetId: "1cjcftRUTdQhmPegnMtNmVShdjWanzuTVGX7dStiYa-Y",
    };

    // Post to Google Sheets Apps Script Web App URL if configured in GOOGLE_SHEETS_WEBHOOK_URL
    const googleSheetsScriptUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (googleSheetsScriptUrl) {
      try {
        const sheetRes = await fetch(googleSheetsScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(submissionData),
          redirect: "follow",
        });
        const responseText = await sheetRes.text();
        console.log("[Google Sheets API] Webhook response:", responseText);
      } catch (gErr) {
        console.warn("[Google Sheets API] Webhook dispatch warning:", gErr);
      }
    } else {
      console.log("[Google Sheets API] GOOGLE_SHEETS_WEBHOOK_URL not set in .env.local yet.");
    }

    console.log("[Enquiry API] Submission saved:", submissionData);

    return Response.json(
      {
        success: true,
        message: `Permohonan pakej ${parsed.data.pakej} telah berjaya diterima dan direkodkan.`,
        data: submissionData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry API] Error:", error);
    return Response.json(
      {
        success: false,
        error: "Ralat Dalaman Pelayan",
      },
      { status: 500 }
    );
  }
}
