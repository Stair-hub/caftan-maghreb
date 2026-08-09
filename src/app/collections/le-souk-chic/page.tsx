import Link from "next/link";
import Image from "next/image";
import { getProductsByCategory } from "@/lib/products";
import { GradientBackground } from "@/components/ui/desert-horizon";

export default function LeSoukChicPage() {
  const items = getProductsByCategory("Le Souk Chic");

  return (
    <div className="w-full">
      <section className="relative text-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <GradientBackground className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl font-serif font-bold text-[var(--color-or)] mb-4 drop-shadow-md">
            Le Souk Chic
          </h1>
          <p className="text-foreground opacity-90 mb-8 max-w-2xl mx-auto drop-shadow-sm font-medium">
            L&apos;élégance du quotidien. Djellabas et Gandouras modernes, confortables
            et raffinées pour chaque moment de la journée.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((product) => (
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
            <p className="text-[var(--color-or)] font-semibold">
              {product.price} €
            </p>
          </Link>
        ))}
      </div>
      </section>
    </div>
  );
}
