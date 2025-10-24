import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Instanciation paresseuse pour éviter les erreurs au build
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, offer, sector, platform } = body ?? {};

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY manquante côté serveur" },
        { status: 500 }
      );
    }
    if (!process.env.RESEND_FROM || !process.env.RESEND_TO) {
      return NextResponse.json(
        { ok: false, error: "RESEND_FROM ou RESEND_TO manquant" },
        { status: 500 }
      );
    }

    const resend = getResend();

    // 👉 on envoie UNIQUEMENT à toi (RESEND_TO)
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: email,
      subject: `📩 Nouveau message — ${name ?? "Anonyme"}`,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name ?? "—"}</p>
        <p><strong>Email :</strong> ${email ?? "—"}</p>
        <p><strong>Offre :</strong> ${offer ?? "—"}</p>
        <p><strong>Secteur :</strong> ${sector ?? "—"}</p>
        <p><strong>Plateforme :</strong> ${platform ?? "—"}</p>
        <p><strong>Message :</strong></p>
        <p>${(message ?? "").toString().replace(/\n/g, "<br/>")}</p>
      `,
      text:
        `Nouveau message\n\n` +
        `Nom: ${name ?? "—"}\n` +
        `Email: ${email ?? "—"}\n` +
        `Offre: ${offer ?? "—"}\n` +
        `Secteur: ${sector ?? "—"}\n` +
        `Plateforme: ${platform ?? "—"}\n\n` +
        `Message:\n${message ?? ""}\n`,
    });

    if (error) {
      // Si on est en sandbox, Resend renvoie souvent ce message :
      const msg = String(error?.message ?? "");
      const sandbox =
        msg.includes("You can only send testing emails") ||
        msg.includes("verify a domain");

      if (sandbox) {
        // On traite ça comme un succès côté API pour ne pas polluer l'UX
        return NextResponse.json({ ok: true, warning: "resend-sandbox" });
      }

      // Autre erreur réelle
      return NextResponse.json({ ok: false, error: msg || "send error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "server error" },
      { status: 500 }
    );
  }
}
