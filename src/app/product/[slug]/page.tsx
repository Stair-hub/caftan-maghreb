import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-foreground opacity-60 mb-8">
        <Link href="/" className="hover:text-[var(--color-or)] transition">
          Accueil
        </Link>{" "}
        /{" "}
        <Link
          href={`/collections/${product.category === "La Sultane" ? "la-sultane" : product.category === "Le Souk Chic" ? "le-souk-chic" : "accessoires"}`}
          className="hover:text-[var(--color-or)] transition"
        >
          {product.category}
        </Link>{" "}
        / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full aspect-[3/4] bg-[var(--color-sable)] rounded-lg flex items-center justify-center overflow-hidden relative">
          {product.image ? (
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          ) : (
            <span className="text-[var(--color-sable-dark)] font-serif text-2xl opacity-60 text-center px-6">
              {product.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-serif font-bold text-foreground">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-[var(--color-or)]">
            {product.price} €
          </p>
          <p className="text-foreground opacity-80 text-lg leading-relaxed">
            {product.description}
          </p>

          <div>
            <p className="font-bold text-foreground mb-3">Taille</p>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 border border-[var(--color-sable-dark)] rounded text-sm font-medium text-foreground hover:border-[var(--color-or)] hover:text-[var(--color-or)] transition cursor-pointer"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full bg-[var(--color-or)] text-background font-bold py-4 px-4 rounded text-lg hover:bg-[var(--color-or-light)] transition cursor-pointer mt-4">
            Ajouter au panier
          </button>

          <div className="border-t border-[var(--color-sable-dark)] pt-6 mt-4">
            <h3 className="font-bold text-foreground mb-2">Détails</h3>
            <ul className="list-disc list-inside text-foreground opacity-80 space-y-1 text-sm">
              <li>Fait main par des artisans du Maghreb</li>
              <li>Matières nobles et naturelles</li>
              <li>Livraison internationale sous 7-14 jours</li>
              <li>Retours acceptés sous 14 jours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
