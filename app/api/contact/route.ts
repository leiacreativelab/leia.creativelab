import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";            // éviter Edge
export const dynamic = "force-dynamic";     // pas de pré-rendu

function getResend() {
  const key = process.env.RESEND_API_KEY;
  // Ne jette PAS d'erreur au chargement du module: on check à l'exécution.
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      // Réponse propre si la clé manque en runtime
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY manquante côté serveur" },
        { status: 500 }
      );
    }

    const resend = getResend();

    // --- Mail admin
    const { error: adminErr } = await resend.emails.send({
      from: process.env.RESEND_FROM!,      // ex: "contact@ton-domaine.com"
      to: process.env.RESEND_TO!,          // ta boîte
      replyTo: email,                      // ✅ (camelCase)
      subject: `📩 Nouveau message — ${name ?? "Anonyme"}`,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name ?? "—"}</p>
        <p><strong>Email :</strong> ${email ?? "—"}</p>
        <p><strong>Message :</strong></p>
        <p>${(message ?? "").replace(/\n/g, "<br/>")}</p>
      `,
    });
    if (adminErr) throw adminErr;

    // --- Accusé de réception utilisateur (optionnel)
    if (email) {
      const { error: userErr } = await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: email,
        subject: "✅ Nous avons bien reçu votre message",
        text:
          `Bonjour ${name ?? ""},\n\n` +
          `Merci pour votre message. Nous revenons vers vous très vite.\n\n` +
          `— Leïa Creative Lab`,
      });
      if (userErr) throw userErr;
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Email error:", e);
    return NextResponse.json({ ok: false, error: e?.message ?? "error" }, { status: 500 });
  }
}
