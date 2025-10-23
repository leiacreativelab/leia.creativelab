import Link from "next/link";

export default function Footer(){
  return (
    <footer className="border-t border-white/10 bg-burgundy/10 mt-16">
      <div className="container py-10 text-white/80">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-black tracking-widest uppercase bg-gradient-to-r from-white to-beige bg-clip-text text-transparent">LEÏA CREATIVE LAB</div>
            <p className="text-sm mt-2">Studio de communication & image. Basée en France. Disponible à l’international.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Navigation</h3>
            <div className="space-y-1">
              <Link href="/skills" className="block hover:text-beige">Compétences</Link>
              <Link href="/portfolio" className="block hover:text-beige">Portfolio</Link>
              <Link href="/offres" className="block hover:text-beige">Offres</Link>
              <Link href="/contact" className="block hover:text-beige">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <div className="space-y-1">
              <a href="mailto:leia.creativelab@gmail.com" className="hover:text-beige">leia.creativelab@gmail.com</a>
              <div className="text-sm"><a href="#" className="hover:text-beige">Instagram</a> · <a href="#" className="hover:text-beige">LinkedIn</a></div>
            </div>
          </div>
        </div>
        <p className="text-xs mt-6">© 2025 — Design & code par Leïa Rotrou.</p>
      </div>
    </footer>
  );
}
