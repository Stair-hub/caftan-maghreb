import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { GradientShimmer } from "@/components/ui/gradient-shimmer";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center py-20">
        <h1 className="text-5xl font-serif font-bold text-[var(--color-or)] mb-6">
          <GradientShimmer
            gradient="tonic"
            easing="gentle"
            duration={2}
            spread={4}
            pauseBetween={2000}
            baseColor="var(--color-or)"
            className="text-5xl font-serif font-bold tracking-tight"
          >
            La lumière de nos ancêtres
          </GradientShimmer>
        </h1>
        <p className="text-lg text-foreground opacity-80 max-w-2xl mx-auto mb-10">
          Nous célébrons l&apos;héritage majestueux du Maghreb en réinventant le
          Caftan, la Djellaba et le Karakou pour la femme moderne. Nos créations
          marient le savoir-faire ancestral des maîtres artisans à des coupes
          fluides et contemporaines.
        </p>
        <Link
          href="/collections/la-sultane"
          className="bg-[var(--color-or)] text-background font-bold py-3 px-8 rounded-full hover:bg-[var(--color-or-light)] transition"
        >
          Découvrir la Collection
        </Link>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-serif font-bold text-center text-[var(--color-or)] mb-12">
          Nos Pièces Phares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group cursor-pointer block"
            >
              <div className="w-full h-96 bg-[var(--color-sable)] rounded-lg mb-4 transition group-hover:opacity-80 flex items-center justify-center overflow-hidden relative">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                ) : (
                  <span className="text-[var(--color-sable-dark)] font-serif text-lg opacity-60 text-center px-4">
                    {product.name}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg text-foreground">
                {product.name}
              </h3>
              <p className="text-sm opacity-70 text-foreground mb-2">
                {product.category}
              </p>
              <p className="text-[var(--color-or)] font-semibold">
                {product.price} USD
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
