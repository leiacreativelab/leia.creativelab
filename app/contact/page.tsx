"use client";

import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    offer: "Audit Gen Z",
    sector: "Beauty / Skincare",
    platform: "Instagram",
  });
  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Erreur serveur");
      }
      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err?.message || "Impossible d’envoyer le message.");
      setStatus("error");
    }
  };

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
            {status === "success" ? (
              <div className="text-lg">
                ✅ Merci ! Votre message a bien été envoyé. Un email de confirmation vous a été adressé.
              </div>
            ) : (
              <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                  required
                  placeholder="Votre nom"
                  className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  required
                  placeholder="Parlez-moi de votre marque, vos challenges, vos objectifs…"
                  className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2 min-h-[140px]"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <div className="grid md:grid-cols-3 gap-3">
                  <select
                    className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2"
                    value={form.offer}
                    onChange={(e) => setForm({ ...form, offer: e.target.value })}
                  >
                    <option>Audit Gen Z</option>
                    <option>Programme 90 jours</option>
                    <option>Partenariat annuel</option>
                    <option>Autre / sur-mesure</option>
                  </select>
                  <select
                    className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2"
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                  >
                    <option>Beauty / Skincare</option>
                    <option>Travel / Hospitality</option>
                    <option>Fashion / Lifestyle</option>
                    <option>Autre secteur</option>
                  </select>
                  <select
                    className="bg-[#0f0f10] border border-white/15 rounded-xl px-3 py-2"
                    value={form.platform}
                    onChange={(e) => setForm({ ...form, platform: e.target.value })}
                  >
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>Les deux</option>
                  </select>
                </div>

                <button className="btn w-max" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi en cours..." : "Réserver un échange gratuit"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm mt-2">
                    ❌ {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
