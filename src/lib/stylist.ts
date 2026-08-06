/**
 * Agent IA : Styliste Maghrébin
 * Permet de recommander des accessoires en fonction de la pièce principale.
 */

export function recommanderTenueComplete(categorieProduit: string): string[] {
  // Base de données simulée d'accessoires de la collection "Les Incontournables"
  const accessoires = {
    mdamma: "ID_MDAMMA_ROYALE", // Ceinture tressée
    babouches: "ID_BELGHA_CHIC", // Babouches en cuir repoussé
    caftan_fondation: "ID_CAFTAN_FONDATION"
  };

  const categorie = categorieProduit.toLowerCase();

  if (categorie === "caftan" || categorie === "takchita") {
    // Recommande une ceinture Mdamma et des babouches pour un Caftan/Takchita
    return [accessoires.mdamma, accessoires.babouches];
  }
  
  if (categorie === "cape" || categorie === "hayek") {
    // Recommande le Caftan Fondation sous une cape
    return [accessoires.caftan_fondation, accessoires.babouches];
  }

  return [];
}
