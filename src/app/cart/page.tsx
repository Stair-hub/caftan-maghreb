import Link from 'next/link';

export default function CartPage() {
  // Panier simulé
  const cartItems = [
    {
      id: 1,
      name: "Takchita Nour Al Layl",
      price: 850,
      quantity: 1,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-8">Votre Panier</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b border-[var(--color-sable-dark)] py-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-32 bg-[var(--color-sable)] rounded-md"></div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                  <p className="text-foreground opacity-70">Taille: M</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">{item.price} €</p>
                <p className="text-sm text-foreground opacity-70">Qté: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[var(--color-sable)] p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4 text-foreground">Résumé</h2>
          <div className="flex justify-between mb-2 text-foreground">
            <span>Sous-total</span>
            <span>850 €</span>
          </div>
          <div className="flex justify-between mb-6 text-foreground">
            <span>Livraison</span>
            <span className="text-sm opacity-80">Calculé à l'étape suivante</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-[var(--color-sable-dark)] pt-4 mb-6 text-foreground">
            <span>Total</span>
            <span>850 €</span>
          </div>
          <Link 
            href="/checkout" 
            className="w-full block text-center bg-[var(--color-or)] text-background font-bold py-3 px-4 rounded hover:bg-[var(--color-or-light)] transition"
          >
            Passer la commande
          </Link>
        </div>
      </div>
    </div>
  );
}
