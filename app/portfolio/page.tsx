"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { cases } from "@/lib/data";
import CaseCard from "@/components/CaseCard";

export default function Portfolio(){
  return (
    <main>
      <Header />

      <Section
        title="Portfolio & Analyses"
        lead="Sélection de projets et décryptages publics : pourquoi certaines campagnes cartonnent — et comment adapter leurs mécaniques à votre marque."
      >
        <div className="grid grid-cols-12 gap-5">
          {cases.map(item => (
            <div key={item.slug} className="col-span-12 md:col-span-6">
              <CaseCard item={item} />
            </div>
          ))}
        </div>

        {/* Bloc d’analyses publiques (sans faux témoignages) */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Reveal className="card">
            <h3 className="text-lg font-bold">Décryptage · UGC beauté</h3>
            <p className="opacity-90 mt-2">
              Avant : visuels studio & codes trop « parfaits ». <br />
              Après : UGC « get ready with me », résultats en situation, preuve sociale.
            </p>
            <p className="opacity-90 mt-2">
              Pourquoi ça marche : authenticité, projection, réassurance par l’usage réel.
            </p>
          </Reveal>
          <Reveal className="card">
            <h3 className="text-lg font-bold">Décryptage · Ton de marque fun</h3>
            <p className="opacity-90 mt-2">
              Avant : posts didactiques peu engageants. <br />
              Après : persona de marque, humour, trends, récurrence de formats.
            </p>
            <p className="opacity-90 mt-2">
              Pourquoi ça marche : mémorisation, attachement, partage organique.
            </p>
          </Reveal>
        </div>

        <div className="mt-6">
          <Link href="/contact?type=analyse" className="btn">Demander une analyse dédiée</Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
