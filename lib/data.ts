export type Case = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  image: string;
  summary: string;
  problem: string;
  solution: string[];
  results?: { label: string; value: string }[];
};

export const cases: Case[] = [
  {
    slug: "drop-001-concept-studio",
    title: "DROP 001 — Concept Studio",
    year: 2025,
    tags: ["Identité", "Univers", "Naming"],
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600&auto=format&fit=crop",
    summary: "Création d’une marque conceptuelle inspirée du luxe, de la K‑pop et du digital art.",
    problem: "Comment créer une identité désirable et contemporaine à partir d’un concept culturel hybride ?",
    solution: [
      "Direction créative et moodboards inspirés (luxe, K‑pop, digital)",
      "Système visuel — palette #4E171C, typographie, grille",
      "Lignes éditoriales et tonalité de marque",
      "Déclinaisons social media & site minimal"
    ],
    results: [
      { label: "Engagement social", value: "+32%" },
      { label: "Temps de lecture", value: "+24%" }
    ]
  },
  {
    slug: "personal-branding-leia",
    title: "Leïa — Personal Branding",
    year: 2025,
    tags: ["Direction créative", "Web"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    summary: "Développement de l’identité personnelle et du site web minimaliste.",
    problem: "Structurer une image cohérente et internationale à la sortie d’un Master Commerce International.",
    solution: [
      "Charte visuelle — palette, typo, systèmes UI",
      "Site vitrine minimal, grid et espaces, CTA clairs",
      "Narratif personnel — voix, positionnement, propositions de valeur"
    ]
  }
];