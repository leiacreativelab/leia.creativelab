"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function OffersPage() {
  return (
    <>
      <Header />

      <section className="py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold">Offres & Tarifs</h1>
          <p className="text-muted max-w-[820px] mt-3">
            Des offres claires, pensées pour générer des résultats concrets auprès de la Gen Z.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Reveal className="card" id="audit">
              <h3 className="text-xl font-bold">🎯 Audit Gen Z</h3>
              <div className="text-3xl font-extrabold mt-2">2 500€</div>
              <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
                <li>Diagnostic complet de votre présence</li>
                <li>Rapport stratégique (20 pages)</li>
                <li>3 quick wins actionnables</li>
                <li>1h de présentation + Q&amp;A</li>
              </ul>
              <Link href="/contact?offer=audit" className="btn mt-4 w-max">
                Réserver l’audit
              </Link>
            </Reveal>

            <Reveal className="card" id="programme">
              <h3 className="text-xl font-bold">🚀 Programme 90 jours</h3>
              <div className="text-3xl font-extrabold mt-2">7 500€</div>
              <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
                <li>Tout dans l’audit</li>
                <li>Stratégie de contenu (3 mois)</li>
                <li>20 contenus créés (visuels + copy)</li>
                <li>Formation équipe (3h) + suivi</li>
              </ul>
              <Link href="/contact?offer=90days" className="btn mt-4 w-max">
                On en parle
              </Link>
            </Reveal>

            <Reveal className="card" id="retainer">
              <h3 className="text-xl font-bold">💎 Partenariat annuel</h3>
              <div className="text-3xl font-extrabold mt-2">18 000€</div>
              <div className="opacity-80">1 500€/mois</div>
              <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
                <li>Tout dans le programme 90 jours</li>
                <li>Veille mensuelle personnalisée</li>
                <li>Production continue</li>
                <li>Optimisations trimestrielles</li>
              </ul>
              <Link href="/contact?offer=retainer" className="btn mt-4 w-max">
                Candidater
              </Link>
            </Reveal>
          </div>

          {/* Bloc “Secteurs prioritaires” supprimé */}
        </div>
      </section>

      <Footer />
    </>
  );
}
