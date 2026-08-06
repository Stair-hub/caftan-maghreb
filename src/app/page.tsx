import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Takchita Nour Al Layl",
    "description": "Takchita majestueuse 3 pièces en crêpe et brocart.",
    "brand": {
      "@type": "Brand",
      "name": "Atelier Tifawin"
    },
    "countryOfOrigin": {
      "@type": "Country",
      "name": "Maroc"
    },
    "material": "Soie sauvage et brocart",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "850.00",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="text-center py-20">
        <h1 className="text-5xl font-serif font-bold text-[var(--color-or)] mb-6">
          La lumière de nos ancêtres
        </h1>
        <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto mb-10">
          Nous célébrons l'héritage majestueux du Maghreb en réinventant le Caftan, la Djellaba et le Karakou pour la femme moderne. Nos créations marient le savoir-faire ancestral des maîtres artisans à des coupes fluides et contemporaines.
        </p>
        <Link 
          href="/collections/la-sultane" 
          className="bg-[var(--color-or)] text-background font-bold py-3 px-8 rounded-full hover:bg-[var(--color-or-light)] transition"
        >
          Découvrir la Collection
        </Link>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-serif font-bold text-center text-[var(--color-or)] mb-12">Nos Pièces Phares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, name: "Takchita Nour Al Layl", price: "850 USD", category: "La Sultane" },
            { id: 2, name: "Djellaba Médina", price: "250 USD", category: "Le Souk Chic" },
            { id: 3, name: "Karakou Éclat d'Alger", price: "600 USD", category: "La Sultane" },
          ].map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="w-full h-96 bg-[var(--color-sable)] rounded-lg mb-4 transition group-hover:opacity-80"></div>
              <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
              <p className="text-sm opacity-70 text-foreground mb-2">{product.category}</p>
              <p className="text-[var(--color-or)] font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
