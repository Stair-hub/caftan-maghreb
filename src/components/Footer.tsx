import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-[var(--color-sable-dark)] mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-[var(--color-or)] mb-4">ATELIER TIFAWIN</h3>
            <p className="text-sm text-foreground opacity-80">
              L'élégance maghrébine réinventée. Savoir-faire ancestral et coupes modernes pour la femme d'aujourd'hui.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">À PROPOS</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/savoir-faire" className="hover:text-[var(--color-or)] transition">Notre Savoir-Faire</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Nos Artisans</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">L'Histoire Tifawin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">AIDE & CONTACT</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Guide des Tailles Orientales</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Livraison & Douanes</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Suivre ma commande</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Contact WhatsApp</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">LÉGAL</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">CGV</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Mentions Légales</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-or)] transition">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--color-sable)] text-center text-sm opacity-60">
          © {new Date().getFullYear()} Atelier Tifawin. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
