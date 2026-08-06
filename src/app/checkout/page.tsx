"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [createAccount, setCreateAccount] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation API
    alert("Commande validée avec succès ! Vous allez recevoir un email de suivi.");
    router.push('/');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-8">Finaliser votre commande</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[var(--color-sable)] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-sable-dark)] pb-2 text-foreground">Contact & Suivi</h2>
          <div className="mb-4">
            <p className="text-sm font-semibold text-foreground mb-4 opacity-80">
              Entrez votre email pour recevoir le suivi de votre colis. Aucun mot de passe requis pour cette première commande.
            </p>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Adresse Email *</label>
            <input 
              type="email" 
              id="email" 
              required 
              className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" 
              placeholder="leila@example.com"
            />
          </div>
        </div>

        <div className="bg-[var(--color-sable)] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-sable-dark)] pb-2 text-foreground">Livraison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-foreground">Prénom *</label>
              <input type="text" id="firstName" required className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-foreground">Nom *</label>
              <input type="text" id="lastName" required className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium mb-1 text-foreground">Adresse complète *</label>
              <input type="text" id="address" required className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1 text-foreground">Ville *</label>
              <input type="text" id="city" required className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-foreground">Téléphone *</label>
              <input type="tel" id="phone" required className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-sable)] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-sable-dark)] pb-2 text-foreground">Paiement (Stripe)</h2>
          <div className="p-4 bg-background border border-[var(--color-sable-dark)] rounded flex items-center justify-center text-foreground opacity-60 h-24">
            Composant de paiement sécurisé Stripe
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="createAccount" 
            checked={createAccount} 
            onChange={(e) => setCreateAccount(e.target.checked)} 
            className="w-4 h-4 text-[var(--color-or)] border-[var(--color-sable-dark)] rounded focus:ring-[var(--color-or)]"
          />
          <label htmlFor="createAccount" className="text-sm font-medium text-foreground">
            Créer un compte pour mes prochaines commandes (Optionnel)
          </label>
        </div>

        {createAccount && (
          <div className="p-4 border-l-4 border-[var(--color-or)] bg-[var(--color-sable)]">
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-foreground">Mot de passe pour votre nouveau compte</label>
            <input type="password" id="password" className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]" />
          </div>
        )}

        <button 
          type="submit" 
          className="w-full bg-[var(--color-or)] text-background font-bold py-4 px-4 rounded text-lg hover:bg-[var(--color-or-light)] transition"
        >
          Payer 850 USD
        </button>
      </form>
    </div>
  );
}
