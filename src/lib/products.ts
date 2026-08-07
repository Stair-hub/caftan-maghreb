export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  slug: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Takchita Nour Al Layl",
    price: 850,
    category: "La Sultane",
    slug: "takchita-nour-al-layl",
    description: "Takchita majestueuse 3 pièces en crêpe et brocart. Un chef-d'œuvre d'artisanat marocain, brodée à la main avec des fils dorés et ornée de perles nacrées.",
    image: "/products/takchita.jpg",
  },
  {
    id: 2,
    name: "Djellaba Médina",
    price: 250,
    category: "Le Souk Chic",
    slug: "djellaba-medina",
    description: "Djellaba moderne en lin lavé, coupe fluide et confortable. Parfaite pour les soirées d'été, elle allie tradition et décontraction.",
    image: "/products/djellaba.jpg",
  },
  {
    id: 3,
    name: "Karakou Éclat d'Alger",
    price: 600,
    category: "La Sultane",
    slug: "karakou-eclat-alger",
    description: "Karakou algérois en velours bordeaux, broderie fetla traditionnelle. Une pièce de haute couture orientale qui sublime chaque silhouette.",
    image: "/products/karakou.jpg",
  },
  {
    id: 4,
    name: "Caftan Jardin Andalou",
    price: 720,
    category: "La Sultane",
    slug: "caftan-jardin-andalou",
    description: "Caftan en soie sauvage aux motifs floraux inspirés des jardins de l'Alhambra. Broderies géométriques en sfifa et aâkad.",
    image: "/products/caftan.jpg",
  },
  {
    id: 5,
    name: "Gandoura Sahara",
    price: 180,
    category: "Le Souk Chic",
    slug: "gandoura-sahara",
    description: "Gandoura légère en coton biologique, teintes naturelles du désert. L'élégance quotidienne dans sa forme la plus pure.",
    image: "/products/gandoura.jpg",
  },
  {
    id: 6,
    name: "Babouches Fès Dorées",
    price: 95,
    category: "Accessoires",
    slug: "babouches-fes-dorees",
    description: "Babouches artisanales en cuir tanné au végétal, brodées de fils d'or. Fabriquées à la main dans les ateliers de Fès.",
    image: "/products/babouches.jpg",
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
