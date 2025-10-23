"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <>
      <Header />
      <Cursor />

      <section className="py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold">Compétences & Méthode</h1>
          <p className="text-muted max-w-[860px] mt-3">
            COMPRENDRE. CRÉER. ANTICIPER. Une approche en trois temps pour vous aider à comprendre vos publics,
            à créer des univers de communication désirables et à anticiper les tendances de demain.
          </p>

          <div className="grid grid-cols-12 gap-4 mt-8">
            <Tilt className="card col-span-12 md:col-span-4">
              <span className="text-brand-2 mb-2 inline-block">01 — COMPRENDRE</span>
              <h3 className="text-xl font-bold">Insights Gen Z</h3>
              <p className="opacity-90 mt-2">
                Décryptage des comportements, codes et attentes des 18–30 ans. Observations culturelles,
                data sociale et interviews pour parler le vrai langage de la Gen Z.
              </p>
            </Tilt>

            <Tilt className="card col-span-12 md:col-span-4">
              <span className="text-brand-2 mb-2 inline-block">02 — CRÉER</span>
              <h3 className="text-xl font-bold">Direction créative & Production</h3>
              <p className="opacity-90 mt-2">
                Concepts, hooks 3s, formats Reels/UGC/carrousels, design & storytelling.
                Créativité augmentée par l’IA pour produire plus vite et mieux.
              </p>
            </Tilt>

            <Tilt className="card col-span-12 md:col-span-4">
              <span className="text-brand-2 mb-2 inline-block">03 — ANTICIPER</span>
              <h3 className="text-xl font-bold">Veille stratégique</h3>
              <p className="opacity-90 mt-2">
                Radar US/UK/Asie, adaptation culturelle en France, plans éditoriaux évolutifs pour tenir le rythme des plateformes.
              </p>
            </Tilt>
          </div>

          <div className="card mt-8 p-6">
            <h3 className="text-2xl font-bold">Outils & stack</h3>
            <p className="text-muted mt-2">
              Adobe CC (PS/AI/ID/PR) · Canva Pro · IA générative (ChatGPT · MidJourney · Claude · Gemini · Firefly) · TikTok · Instagram.
            </p>
            <Link href="/contact" className="btn mt-4 w-max">Discuter d’un besoin</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
