"use client";

import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Header />
      <Cursor />

      <section className="py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold">Travaillons ensemble</h1>
          <p className="text-muted max-w-[860px] mt-3">
            Prêt·e à parler le vrai langage de la Gen Z ? Commençons par un échange de 30 minutes.
            Vous repartez avec des pistes concrètes — sans engagement.
          </p>

          <div className="card mt-6">
            {sent ? (
              <div className="text-lg">Merci ! Votre message a bien été envoyé (simulation).</div>
            ) : (
              <form
                className="grid gap-3"
                onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
              >
                <input required placeholder="Votre nom" className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2" />
                <input type="email" required placeholder="Email" className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2" />
                <textarea required placeholder="Parlez-moi de votre marque, vos challenges, vos objectifs…" className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2 min-h-[140px]" />
                <div className="grid md:grid-cols-3 gap-3">
                  <select className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2">
                    <option>Audit Gen Z</option>
                    <option>Programme 90 jours</option>
                    <option>Partenariat annuel</option>
                    <option>Autre / sur-mesure</option>
                  </select>
                  <select className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2">
                    <option>Beauty / Skincare</option>
                    <option>Travel / Hospitality</option>
                    <option>Fashion / Lifestyle</option>
                    <option>Autre secteur</option>
                  </select>
                  <select className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2">
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>Les deux</option>
                  </select>
                </div>
                <button className="btn w-max" type="submit">Réserver un échange gratuit</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
