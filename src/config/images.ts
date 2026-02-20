/**
 * Mapping des images du site — 32 images uniques pour Plomberie Aqualeo.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 *
 * Pour generer les images : voir PROMPTS-IMAGES.md a la racine du projet.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/hero-generique.jpeg";

/** #3 — 16:9 — hero plomberie + section tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/hero-plomberie.jpeg";

/** #4 — 16:9 — hero installation-sanitaire + section renovation-complete + realisation Nanterre (apres) */
const IMG_RENOVATION_SDB = "/images/heroes/hero-installation-sanitaire.jpeg";

/** #13 — 4:3 — section douche-italienne + realisation Creteil (apres) */
const IMG_DOUCHE_ITALIENNE = "/images/pages/page-douche-italienne.jpeg";

/** #12 — 3:2 — section wc-suspendu + realisation Levallois-Perret (apres) */
const IMG_SDB_PMR = "/images/pages/page-wc-suspendu.jpeg";

/** #15 — 3:2 — section compteur-eau + realisation Saint-Denis (apres) */
const IMG_CHAUDIERE_GAZ = "/images/pages/page-compteur-eau.jpeg";

/** #16 — 3:2 — section alimentation-eau + realisation Issy-les-Moulineaux (apres) */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/page-alimentation-eau.jpeg";

/** #17 — 4:3 — section urgence-card + realisation Vincennes (avant) */
const IMG_FUITE_EAU = "/images/sections/section-urgence-fuite.jpeg";

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/hero-accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/hero-depannage.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "chauffage":            "/images/heroes/hero-adduction-eau.jpeg",
  "chauffe-eau":          "/images/heroes/hero-reparation-tuyauterie.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/section-projet-sdb.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 9 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/page-fondateur-yohann.jpeg",
  "a-propos-equipe":             "/images/pages/page-artisan-camionnette.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/page-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/page-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   IMG_SDB_PMR,
  // Installation sanitaire
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Adduction d eau
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/page-raccordement-reseau.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres (20 emplacements → 14 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-villeurbanne-before":          "/images/realisations/real-sdb-paris15-before.jpeg",
  "sdb-villeurbanne-after":           "/images/realisations/real-sdb-paris15-after.jpeg",
  "cuisine-lyon3-before":             "/images/realisations/real-cuisine-versailles-before.jpeg",
  "cuisine-lyon3-after":              "/images/realisations/real-cuisine-versailles-after.jpeg",
  "chauffe-eau-caluire-before":       "/images/realisations/real-fuite-boulogne-before.jpeg",
  "chauffe-eau-caluire-after":        "/images/realisations/real-fuite-boulogne-after.jpeg",
  "pac-bron-before":                  "/images/realisations/real-adduction-massy-before.jpeg",
  "pac-bron-after":                   "/images/realisations/real-adduction-massy-after.jpeg",
  "sdb-pmr-lyon6-before":             "/images/realisations/real-wc-levallois-before.jpeg",
  "sdb-pmr-lyon6-after":              IMG_SDB_PMR,
  "chaudiere-tassin-before":          "/images/realisations/real-tuyauterie-saintdenis-before.jpeg",
  "chaudiere-tassin-after":           IMG_CHAUDIERE_GAZ,
  "douche-lyon7-before":              "/images/realisations/real-robinetterie-creteil-before.jpeg",
  "douche-lyon7-after":               IMG_DOUCHE_ITALIENNE,
  "plancher-chauffant-ecully-before": "/images/realisations/real-debouchage-issy-before.jpeg",
  "plancher-chauffant-ecully-after":  IMG_PLANCHER_CHAUFFANT,
  "depannage-lyon2-before":           IMG_FUITE_EAU,
  "depannage-lyon2-after":            "/images/realisations/real-fuite-vincennes-after.jpeg",
  "sdb-complete-oullins-before":      "/images/realisations/real-appartneuf-nanterre-before.jpeg",
  "sdb-complete-oullins-after":       IMG_RENOVATION_SDB,
};
