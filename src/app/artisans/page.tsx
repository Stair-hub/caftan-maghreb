import Image from "next/image";
import { GradientShimmer } from "@/components/ui/gradient-shimmer";

export default function ArtisansPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            Nos Artisans
          </GradientShimmer>
        </h1>
        <p className="text-xl text-foreground opacity-80 leading-relaxed max-w-2xl mx-auto">
          Rencontrez les maîtres de l&apos;Atelier Tifawin. Leurs mains expertes
          donnent vie à nos créations et perpétuent un savoir-faire maghrébin
          inestimable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Artisan 1: Afifa.E */}
        <div className="group">
          <div className="w-full aspect-[4/5] rounded-lg overflow-hidden relative mb-6">
            <Image
              src="/artisans/afifa.png"
              alt="Afifa.E - Maîtresse Brodeuse"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            Afifa.E
          </h2>
          <p className="text-[var(--color-or)] font-medium mb-4">Maîtresse Brodeuse (Sfifa)</p>
          <p className="text-foreground opacity-70 text-sm leading-relaxed">
            Héritière d&apos;une longue lignée de brodeuses, Afifa maîtrise l&apos;art complexe 
            de la Sfifa et de la pose des fils d&apos;or. Ses doigts agiles créent 
            les motifs géométriques qui parent nos Caftans les plus luxueux.
          </p>
        </div>

        {/* Artisan 2: Youssef */}
        <div className="group">
          <div className="w-full aspect-[4/5] rounded-lg overflow-hidden relative mb-6 bg-[var(--color-sable)]">
            {/* Fallback to external placeholder for the demo */}
            <Image
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800"
              alt="Maâlem Youssef"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            Maâlem Youssef
          </h2>
          <p className="text-[var(--color-or)] font-medium mb-4">Chef d&apos;Atelier & Modéliste</p>
          <p className="text-foreground opacity-70 text-sm leading-relaxed">
            Youssef donne forme aux rêves. Expert en patronage et coupe sur-mesure, 
            il s&apos;assure que chaque pièce tombe à la perfection, mariant la fluidité 
            moderne à la structure traditionnelle du vêtement oriental.
          </p>
        </div>

        {/* Artisan 3: Driss */}
        <div className="group">
          <div className="w-full aspect-[4/5] rounded-lg overflow-hidden relative mb-6 bg-[var(--color-sable)]">
             {/* Fallback to external placeholder for the demo */}
            <Image
              src="https://images.unsplash.com/photo-1598285521743-fdbba8ba6dc2?q=80&w=800"
              alt="Maâlem Driss"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            Maâlem Driss
          </h2>
          <p className="text-[var(--color-or)] font-medium mb-4">Expert en Tarz Fassi (Broderie de Fès)</p>
          <p className="text-foreground opacity-70 text-sm leading-relaxed">
            Avec plus de 40 ans d&apos;expérience, Driss est une légende vivante 
            de la broderie de Fès. C&apos;est lui qui signe les magnifiques 
            motifs traditionnels en fils de soie et d&apos;or sur nos Jabadors.
          </p>
        </div>
      </div>
    </div>
  );
}
