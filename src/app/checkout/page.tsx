"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-serif font-bold text-[var(--color-or)] mb-6">
          Merci pour votre commande !
        </h1>
        <p className="text-foreground opacity-80 text-lg">
          Ceci est une démo. Dans la version finale, vous recevrez un email de
          confirmation avec le suivi de votre colis.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[var(--color-or)] mb-8">
        Finaliser votre commande
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-[var(--color-sable)] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-sable-dark)] pb-2 text-foreground">
            Contact
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-foreground"
            >
              Adresse Email *
            </label>
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
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-sable-dark)] pb-2 text-foreground">
            Livraison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Prénom *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Nom *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Adresse complète *
              </label>
              <input
                type="text"
                id="address"
                required
                className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Ville *
              </label>
              <input
                type="text"
                id="city"
                required
                className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 text-foreground"
              >
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full p-3 bg-background text-foreground border border-[var(--color-sable-dark)] rounded focus:outline-none focus:border-[var(--color-or)]"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--color-or)] text-background font-bold py-4 px-4 rounded text-lg hover:bg-[var(--color-or-light)] transition cursor-pointer"
        >
          Confirmer la commande (Démo)
        </button>
      </form>
    </div>
  );
}
