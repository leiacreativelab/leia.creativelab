"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cases } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams(){
  return cases.map(c => ({ slug: c.slug }));
}

export default function CaseStudy({ params }:{ params:{ slug:string } }){
  const item = cases.find(c => c.slug === params.slug);
  if(!item) return <div className="container py-24">Projet introuvable.</div>;

  return (
    <main>
      <Header />
      <article className="container py-16">
        <Link href="/portfolio" className="text-sm opacity-80 hover:opacity-100">← Retour au portfolio</Link>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2">{item.title}</h1>
        <p className="text-beige/90 mt-2 max-w-3xl">{item.summary}</p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Image src={item.image} alt={item.title} width={1600} height={1000} className="w-full aspect-[16/9] object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card">
            <h3 className="text-xl font-bold">Contexte</h3>
            <p className="opacity-90">{item.problem}</p>
          </div>
          <div className="card md:col-span-2">
            <h3 className="text-xl font-bold">Approche</h3>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              {item.solution.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>

        {/* Bloc pédagogique réplicable */}
        <div className="card mt-6">
          <h3 className="text-xl font-bold">Ce qui a fait la différence</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
            <li>Hook 3 secondes aligné aux codes plateforme.</li>
            <li>Preuve produit concrète (avant/après, UGC, social proof).</li>
            <li>Itérations rapides sur données réelles (saves · shares · CTR).</li>
          </ul>
        </div>

        <div className="hr" />
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs border border-white/20 rounded-full px-2 py-1 bg-black/40">{item.tags.join(" · ")}</span>
          <span className="text-xs border border-white/20 rounded-full px-2 py-1 bg-black/40">{item.year}</span>
        </div>

        <div className="mt-10">
          <Link href="/contact?type=similar" className="btn">Discuter d&apos;un projet similaire</Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
