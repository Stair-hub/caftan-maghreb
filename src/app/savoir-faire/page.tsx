import Link from "next/link";
import { GradientShimmer } from "@/components/ui/gradient-shimmer";

export default function SavoirFairePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-[var(--color-or)] mb-6">
          <GradientShimmer
            gradient="tonic"
            easing="gentle"
            duration={2.5}
            spread={5}
            pauseBetween={2000}
            baseColor="var(--color-or)"
            className="text-5xl font-serif font-bold tracking-tight"
          >
            Notre Savoir-Faire
          </GradientShimmer>
        </h1>
        <p className="text-xl text-foreground opacity-80 leading-relaxed max-w-2xl mx-auto">
          L&apos;essence d&apos;Atelier Tifawin réside dans la transmission d&apos;un
          héritage millénaire. Chaque création est une ode à la patience, à
          la précision et à la beauté de l&apos;artisanat maghrébin.
        </p>
      </div>

      <div className="space-y-20">
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-4">
              Le Fil d&apos;Or et la Sfifa
            </h2>
            <p className="text-foreground opacity-80 leading-relaxed text-lg">
              La Sfifa, cette passementerie traditionnelle tressée à la main,
              est l&apos;âme de nos caftans et de nos takchitas. Nos maîtres artisans,
              ou "Maâlems", utilisent des fils de soie et des fils d&apos;or pour créer
              des motifs géométriques d&apos;une complexité inégalée. Chaque nœud,
              chaque boucle (les "Aâkad") est réalisé avec une précision mathématique
              et un amour inconditionnel pour le vêtement.
            </p>
          </div>
          <div className="flex-1 w-full h-80 bg-[var(--color-sable)] rounded-lg relative overflow-hidden flex items-center justify-center">
            {/* Espace pour une future image de broderie */}
            <span className="text-[var(--color-sable-dark)] font-serif text-lg opacity-50">
              Détail Sfifa & Broderie
            </span>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-4">
              L&apos;Art du Fait Main
            </h2>
            <p className="text-foreground opacity-80 leading-relaxed text-lg">
              Dans nos ateliers situés au cœur des médinas, le temps semble
              suspendu. Nous refusons la production de masse. La confection d&apos;un
              Karakou ou d&apos;un Caftan Tifawin peut nécessiter jusqu&apos;à trois mois
              de travail minutieux. De la coupe du tissu à la pose de la dernière
              perle nacrée, tout est réalisé à la main par des artisans dont le
              savoir-faire est un héritage familial.
            </p>
          </div>
          <div className="flex-1 w-full h-80 bg-[var(--color-sable)] rounded-lg relative overflow-hidden flex items-center justify-center">
            {/* Espace pour une future image d'artisan */}
            <span className="text-[var(--color-sable-dark)] font-serif text-lg opacity-50">
              Mains d&apos;artisan au travail
            </span>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-4">
              Des Matières Nobles
            </h2>
            <p className="text-foreground opacity-80 leading-relaxed text-lg">
              L&apos;élégance exige l&apos;excellence de la matière. Nous sélectionnons
              rigoureusement nos tissus : crêpe de soie fluide, velours bordeaux
              chaleureux, lin lavé respirant et brocart richement texturé.
              Ce mariage entre des étoffes luxueuses et un savoir-faire ancestral
              garantit à chaque vêtement un tombé parfait et une durabilité
              exceptionnelle.
            </p>
          </div>
          <div className="flex-1 w-full h-80 bg-[var(--color-sable)] rounded-lg relative overflow-hidden flex items-center justify-center">
            {/* Espace pour une future image de tissus */}
            <span className="text-[var(--color-sable-dark)] font-serif text-lg opacity-50">
              Rouleaux de soie et velours
            </span>
          </div>
        </section>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
          Découvrez le fruit de notre passion
        </h3>
        <Link
          href="/collections/la-sultane"
          className="inline-block bg-[var(--color-or)] text-background font-bold py-4 px-10 rounded-full hover:bg-[var(--color-or-light)] transition shadow-lg"
        >
          Parcourir la Collection La Sultane
        </Link>
      </div>
    </div>
  );
}
