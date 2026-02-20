import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie.",
    description:
      "Fuite d'eau, canalisation bouchée, dégât des eaux, tuyau éclaté... Yohann intervient en urgence 7j/7 partout en Île-de-France. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    icon: "Siren",
    slug: "/depannage-plomberie",
  },
  {
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements sanitaires.",
    description:
      "Robinetterie, tuyauterie, raccordements, WC, éviers, lavabos, baignoires... Plomberie Aqualeo intervient pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Installation sanitaire",
    shortDescription: "Pose et remplacement de tous vos équipements sanitaires.",
    description:
      "WC suspendu, douche, baignoire, lavabo, évier, robinetterie... Nous installons ou remplaçons tous vos équipements sanitaires avec soin et précision. Travail soigné, chantier propre et devis respecté.",
    icon: "Bath",
    slug: "/renovation-salle-de-bain",
  },
  {
    title: "Adduction d'eau",
    shortDescription: "Raccordement, branchement compteur, alimentation eau potable.",
    description:
      "Raccordement au réseau d'eau potable, installation de compteur, alimentation en eau neuve, travaux de terrassement et pose de canalisations enterrées. Nous gérons les démarches auprès des organismes compétents.",
    icon: "Droplets",
    slug: "/chauffage",
  },
  {
    title: "Réparation tuyauterie",
    shortDescription: "Réparation et remplacement de canalisations, détection de fuites.",
    description:
      "Tuyaux percés, fuites cachées, canalisations vétustes... Nous détectons et réparons toutes les fuites, remplaçons vos canalisations en cuivre, PER ou multicouche. Détection non destructive par caméra thermique.",
    icon: "Pipette",
    slug: "/chauffe-eau",
  },
  {
    title: "Entretien plomberie",
    shortDescription: "Maintenance préventive et contrats d'entretien de vos installations.",
    description:
      "Détartrage, vérification des installations, maintenance préventive pour éviter les pannes. Nous proposons des contrats d'entretien pour particuliers et professionnels afin de garantir le bon fonctionnement de vos équipements.",
    icon: "ClipboardCheck",
    slug: "/plomberie#entretien",
  },
];
