import Link from "next/link";
import Image from "next/image";
import { getProductsByCategory } from "@/lib/products";

export default function AccessoiresPage() {
  const items = getProductsByCategory("Accessoires");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-[var(--color-or)] mb-4">
        Accessoires
      </h1>
      <p className="text-foreground opacity-70 mb-12 max-w-2xl">
        Les touches finales qui subliment chaque tenue. Babouches, ceintures
        Mdamma et bijoux artisanaux du Maghreb.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group cursor-pointer block"
          >
            <div className="w-full h-96 bg-[var(--color-sable)] rounded-lg mb-4 transition group-hover:opacity-80 flex items-center justify-center overflow-hidden relative">
              {product.image ? (
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
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
    </div>
  );
}
