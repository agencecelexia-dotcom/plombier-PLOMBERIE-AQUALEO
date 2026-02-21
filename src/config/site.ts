export const siteConfig = {
  name: "Plomberie Aqualeo",
  legalName: "Plomberie Aqualeo",
  description:
    "Plombier en Île-de-France. Dépannage urgent 7j/7, installation sanitaire, réparation tuyauterie, adduction eau. Devis gratuit.",
  url: "https://www.plomberieaqualeo.fr",
  phone: "06 13 14 20 90",
  phoneHref: "tel:+33613142090",
  email: "plombier88idf@gmail.com",
  address: {
    street: "24 rue Raymond de la Grange",
    city: "Villeneuve-Saint-Georges",
    postalCode: "94190",
    region: "Île-de-France",
    country: "France",
  },
  openingHours: {
    weekdays: "7h - 20h",
    saturday: "8h - 18h",
    sunday: "Urgences uniquement",
    emergency: "24h/24 - 7j/7",
  },
  social: {
    facebook: "",
    instagram: "https://instagram.com/plombier88idf",
    google: "https://www.google.com/search?q=Plomberie+Aqualeo+Villeneuve-Saint-Georges+avis",
  },
  siret: "À compléter",
  rge: "",
  assuranceDecennale: "Assurance décennale en cours",
  yearsExperience: 10,
  interventionsCount: 1200,
  googleRating: 4.9,
  googleReviewCount: 87,
  foundedYear: 2015,
  founder: "Yohann Pereira",
} as const;

export type SiteConfig = typeof siteConfig;
