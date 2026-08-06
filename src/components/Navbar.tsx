import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-[var(--color-sable-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button className="p-2 -ml-2 mr-2 md:hidden text-foreground hover:text-[var(--color-or)] transition">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-[var(--color-or)]">
              ATELIER TIFAWIN
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/collections/la-sultane" className="text-foreground hover:text-[var(--color-or)] transition tracking-wide text-sm">
              LA SULTANE
            </Link>
            <Link href="/collections/le-souk-chic" className="text-foreground hover:text-[var(--color-or)] transition tracking-wide text-sm">
              LE SOUK CHIC
            </Link>
            <Link href="/collections/accessoires" className="text-foreground hover:text-[var(--color-or)] transition tracking-wide text-sm">
              ACCESSOIRES
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-foreground hover:text-[var(--color-or)] transition">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/cart" className="p-2 text-foreground hover:text-[var(--color-or)] transition relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-background bg-[var(--color-or)] rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
