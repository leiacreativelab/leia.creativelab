"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <Cursor />

      {/* HERO — HEADLINE + SOUS-TITRE + CTAs */}
      <section className="py-24">
        <div className="container grid gap-8">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Votre marque investit en digital, mais la Gen Z scroll sans s&apos;arrêter ?
            </h1>
            <p className="text-muted max-w-[860px] mt-4 text-lg">
              Je transforme vos contenus ignorés en posts qui génèrent des sauvegardes,
              des partages et des ventes.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/portfolio" className="btn">Voir comment</Link>
              <Link href="/contact?type=audit-instagram" className="btn btn-ghost">
                Audit gratuit de mon Instagram
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION PROBLÈME */}
      <Section title="Vous le ressentez déjà…">
        <div className="grid md:grid-cols-3 gap-4">
          <Reveal className="card">
            <div className="text-3xl">📉</div>
            <h3 className="text-xl font-bold mt-2">Vos posts ne performent plus</h3>
            <p className="opacity-90 mt-2">
              Votre reach Instagram a chuté de 40% en 6 mois. Les stories disparaissent sans interaction.
            </p>
          </Reveal>

          <Reveal className="card">
            <div className="text-3xl">🤷</div>
            <h3 className="text-xl font-bold mt-2">La Gen Z vous ignore</h3>
            <p className="opacity-90 mt-2">
              Vos contenus ressemblent aux 10 000 autres posts qu&apos;ils scrollent chaque jour.
            </p>
          </Reveal>

          <Reveal className="card">
            <div className="text-3xl">💸</div>
            <h3 className="text-xl font-bold mt-2">Votre budget se dilue</h3>
            <p className="opacity-90 mt-2">
              5 K€ en pub Meta, 500 vues, 12 ventes. Vos concurrents captent l’attention avec 0€ de pub.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="card">
            <p className="text-lg opacity-90">
              → Le problème n&apos;est pas votre produit. C&apos;est que vous parlez 2020 à une génération qui vit en 2025.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION SOLUTION */}
      <Section title="Comment on transforme ça" lead="Une méthode simple, orientée résultats.">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="card">
            <span className="text-sm opacity-80">Étape 1 — Semaine 1</span>
            <h3 className="text-xl font-bold mt-1">Diagnostic</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Audit de votre présence avec les yeux de la Gen Z</li>
              <li>Repérage des 3 erreurs qui tuent votre reach</li>
              <li>Rapport 15 pages + session vidéo</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <span className="text-sm opacity-80">Étape 2 — Semaines 2–3</span>
            <h3 className="text-xl font-bold mt-1">Stratégie</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Gen Z Playbook (formats, hooks, calendrier)</li>
              <li>3 premières secondes qui stoppent le scroll</li>
              <li>Formation de votre équipe (3h)</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <span className="text-sm opacity-80">Étape 3 — Mois 2–3</span>
            <h3 className="text-xl font-bold mt-1">Exécution</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Production de 20 contenus testés</li>
              <li>Mesure : sauvegardes, partages, clics</li>
              <li>Ajustements en temps réel</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="card">
            <p className="text-lg opacity-90">
              Résultat : en 90 jours, vos contenus passent de « scrollés » à « sauvegardés ».
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION CRÉDIBILITÉ */}
      <Section title="Pourquoi me faire confiance alors que je démarre ?">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="card">
            <h3 className="text-xl font-bold">Native digitale</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Je SUIS la Gen Z que vous voulez atteindre.</li>
              <li>Je comprends en 3 secondes pourquoi un post fonctionne.</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-xl font-bold">Perspective internationale</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Échange universitaire à l&apos;étranger : immersion culture & tendances.</li>
              <li>Veille US/UK/Asie quotidienne (trend radar 12–18 mois).</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-xl font-bold">Outils des créateurs qui cartonnent</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>IA générative (MidJourney, Claude, Runway)</li>
              <li>Montage (Premiere Pro, CapCut) · Design (Figma, Photoshop, Canva)</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-xl font-bold">Crédibilité business</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 opacity-90">
              <li>Je parle ROI, conversion, stratégie.</li>
              <li>Expérience en communication institutionnelle → rigueur & process.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="card">
            <p className="opacity-90">
              = La combinaison rare entre expertise Gen Z native et crédibilité business.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION PREUVE PAR DÉCRYPTAGE */}
      <Section
        title="Pourquoi ces campagnes ont cartonné (et comment répliquer le modèle)"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Reveal className="card">
            <h3 className="text-lg font-bold">Exemple 1 · Glossier</h3>
            <p className="mt-2 opacity-90">
              ❌ Avant : Pub Instagram classique produit + discount<br/>
              ✅ Après : UGC de vraies clientes en « get ready with me »
            </p>
            <p className="mt-2"><b>Résultat :</b> +280% d&apos;engagement, −40% CAC</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 opacity-90">
              <li>Authenticité &gt; perfection</li>
              <li>Produit montré en situation réelle</li>
              <li>Projection naturelle de la Gen Z</li>
            </ul>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-lg font-bold">Exemple 2 · Duolingo</h3>
            <p className="mt-2 opacity-90">
              ❌ Avant : Posts éducatifs classiques<br/>
              ✅ Après : Trends TikTok absurdes avec Duo l’oiseau
            </p>
            <p className="mt-2"><b>Résultat :</b> 10 M followers, app #1 iOS</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 opacity-90">
              <li>Humour décalé qui brise l’ennui</li>
              <li>La marque devient un personnage</li>
              <li>Participation organique des créateurs</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-6">
          <Link href="/portfolio" className="btn btn-ghost">Voir comment appliquer ça à votre marque</Link>
        </div>
      </Section>

      {/* SECTION TARIFS */}
      <Section title="Combien ça coûte de ne plus être invisible ?">
        <div className="grid md:grid-cols-3 gap-4">
          <Reveal className="card">
            <h3 className="text-xl font-bold">🎯 Audit Gen Z</h3>
            <div className="text-3xl font-extrabold mt-2">2 500€</div>
            <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
              <li>Diagnostic complet de votre présence</li>
              <li>Rapport stratégique (20 pages)</li>
              <li>3 quick wins actionnables</li>
              <li>1h de présentation + Q&amp;A</li>
            </ul>
            <Link href="/contact?offer=audit" className="btn mt-4 w-max">Réserver l’audit</Link>
            <p className="text-sm opacity-80 mt-2">Parfait si : valider le problème avant d&apos;investir.</p>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-xl font-bold">🚀 Programme 90 jours</h3>
            <div className="text-3xl font-extrabold mt-2">7 500€</div>
            <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
              <li>Tout dans l’audit</li>
              <li>Stratégie contenu Gen Z (3 mois)</li>
              <li>20 contenus créés (visuels + copy)</li>
              <li>Formation équipe (3h) · Suivi mensuel</li>
            </ul>
            <Link href="/contact?offer=90days" className="btn mt-4 w-max">On en parle</Link>
            <p className="text-sm opacity-80 mt-2">Parfait si : résultats mesurables & vrai changement.</p>
          </Reveal>

          <Reveal className="card">
            <h3 className="text-xl font-bold">💎 Partenariat annuel</h3>
            <div className="text-3xl font-extrabold mt-2">18 000€</div>
            <div className="opacity-80">1 500€/mois</div>
            <ul className="list-disc pl-5 mt-3 space-y-2 opacity-90">
              <li>Tout dans le programme 90 jours</li>
              <li>Veille mensuelle personnalisée</li>
              <li>Production continue</li>
              <li>Stratégie évolutive</li>
            </ul>
            <Link href="/contact?offer=retainer" className="btn mt-4 w-max">Candidater</Link>
            <p className="text-sm opacity-80 mt-2">Parfait si : une consultante Gen Z intégrée à l’équipe.</p>
          </Reveal>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="py-24">
        <div className="container">
          <Reveal>
            <div className="card p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Prêt·e à transformer vos scrolls en ventes ?
              </h2>
              <p className="text-muted max-w-[820px] mt-3">
                Réservez 30 minutes de diagnostic offert. Je regarde votre Instagram/TikTok.
                Vous repartez avec 3 axes d&apos;amélioration concrets.
              </p>
              <div className="mt-6">
                <Link href="/contact?type=diagnostic" className="btn text-base px-6 py-3">
                  Réserver mon diagnostic Gen Z
                </Link>
                <p className="text-xs opacity-70 mt-3">
                  Sans engagement. Aucune vente forcée. Juste une conversation stratégique.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
