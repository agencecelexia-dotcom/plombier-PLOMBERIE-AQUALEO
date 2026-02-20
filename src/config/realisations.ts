import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-villeurbanne",
    title: "Installation sanitaire complète",
    category: "Installation sanitaire",
    city: "Paris 15e",
    description:
      "Installation complète d'une salle de bain dans un appartement haussmannien : douche, WC suspendu, meuble vasque et robinetterie.",
    beforePrompt:
      "Salle de bain ancienne appartement parisien, carrelage blanc craquelé, WC et lavabo vétustes, tuyauterie rouillée apparente, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain rénovée appartement parisien, douche à l'italienne, WC suspendu blanc, meuble vasque bois clair, robinetterie chromée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "cuisine-lyon3",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    city: "Versailles",
    description:
      "Remplacement complet de la tuyauterie cuisine et installation d'un évier double bac avec mitigeur professionnel.",
    beforePrompt:
      "Cuisine évier inox usé taches calcaire, tuyauterie plastique vieille apparente, robinet qui fuit, photo réaliste, ratio 4:3",
    afterPrompt:
      "Cuisine moderne évier double bac inox brillant, robinet mitigeur professionnel, tuyauterie neuve cachée sous évier, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-caluire",
    title: "Réparation fuite tuyauterie",
    category: "Réparation tuyauterie",
    city: "Boulogne-Billancourt",
    description:
      "Détection et réparation d'une fuite cachée dans une cloison par caméra thermique, sans destruction de mur.",
    beforePrompt:
      "Mur de salle de bain avec traces humidité, auréoles calcaire, dégât des eaux visible, tuyauterie dans la cloison qui fuit, photo réaliste, ratio 4:3",
    afterPrompt:
      "Mur de salle de bain après réparation fuite, tuyauterie neuve installée, mur rebouché, finition propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "pac-bron",
    title: "Adduction eau maison neuve",
    category: "Adduction d'eau",
    city: "Massy",
    description:
      "Raccordement eau potable pour une maison individuelle neuve, du réseau public jusqu'au compteur intérieur.",
    beforePrompt:
      "Chantier maison neuve, tranchée excavée dans jardin, tuyau PE bleu alimentation eau visible, photo réaliste, ratio 4:3",
    afterPrompt:
      "Branchement eau potable fini, compteur eau neuf dans niche, tuyauterie cuivre propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-lyon6",
    title: "Installation WC suspendu",
    category: "Installation sanitaire",
    city: "Levallois-Perret",
    description:
      "Remplacement d'un WC classique par un WC suspendu avec bâti-support encastré dans une salle de bain parisienne.",
    beforePrompt:
      "Salle de bain ancienne WC classique sur pied vieux, carrelage beige années 80, tuyauterie apparente derrière WC, photo réaliste, ratio 4:3",
    afterPrompt:
      "WC suspendu blanc design moderne, bâti-support encastré, habillage carrelage gris, bouton poussoir double chasse, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chaudiere-tassin",
    title: "Remplacement tuyauterie vétuste",
    category: "Réparation tuyauterie",
    city: "Saint-Denis",
    description:
      "Remplacement complet des canalisations d'un appartement ancien (tuyaux plomb et fonte) par de la tuyauterie cuivre.",
    beforePrompt:
      "Sous-sol appartement ancien tuyauterie plomb et fonte rouillée oxydée, vieilles canalisations, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve installée proprement, raccords soudés, gaines isolées, travail artisan soigné, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-lyon7",
    title: "Pose robinetterie salle de bain",
    category: "Plomberie",
    city: "Créteil",
    description:
      "Installation complète de la robinetterie d'une salle de bain rénovée : douche thermostatique, mitigeur lavabo et colonne.",
    beforePrompt:
      "Robinetterie ancienne salle de bain calcaire dépôt, robinet qui fuit, mitigeur cassé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Robinetterie neuve design salle de bain moderne, douche thermostatique chromée, mitigeur lavabo haut de gamme, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plancher-chauffant-ecully",
    title: "Débouchage canalisation principale",
    category: "Dépannage",
    city: "Issy-les-Moulineaux",
    description:
      "Débouchage d'une canalisation principale bouchée par furet motorisé haute pression dans un immeuble résidentiel.",
    beforePrompt:
      "Canalisation bouchée sous évier cuisine, eau stagnante, odeurs remontées, photo réaliste, ratio 4:3",
    afterPrompt:
      "Canalisation débouchée propre, technicien plombier furet motorisé, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-lyon2",
    title: "Réparation fuite urgente",
    category: "Dépannage",
    city: "Vincennes",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau froide dans un appartement, évitant un dégât des eaux majeur.",
    beforePrompt:
      "Fuite eau importante tuyau cuivre sous évier appartement, sol mouillé, urgence réelle, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve réparée sous évier, raccords neufs sertis, sol sec, réparation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-complete-oullins",
    title: "Plomberie appartement neuf",
    category: "Installation sanitaire",
    city: "Nanterre",
    description:
      "Installation complète de la plomberie d'un appartement neuf : cuisine, salle de bain, WC séparé, branchements électroménager.",
    beforePrompt:
      "Appartement neuf en construction, murs bruts béton, gaines et arrivées d'eau en attente, photo réaliste, ratio 4:3",
    afterPrompt:
      "Appartement terminé plomberie neuve installée, cuisine équipée évier robinet, salle de bain complète, tout fonctionnel, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
