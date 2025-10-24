import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, offer, sector, platform } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "leia.creativelab@gmail.com",
      subject: `📩 Nouveau message de ${name}`,
      reply_to: email,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Offre :</strong> ${offer}</p>
        <p><strong>Secteur :</strong> ${sector}</p>
        <p><strong>Plateforme :</strong> ${platform}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Leia Creative Lab <onboarding@resend.dev>",
      to: email,
      subject: "Merci pour votre message 💌",
      html: `
        <h2>Merci ${name} !</h2>
        <p>Votre message a bien été reçu par <strong>Leïa Creative Lab</strong>.</p>
        <p>Je vous réponds sous 48 h avec des pistes concrètes pour votre stratégie digitale.</p>
        <p style="margin-top:16px;">✨ À très vite,<br/>Leïa</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
