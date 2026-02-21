import { promises as fs } from "fs";
import path from "path";

const STORAGE_DIR = process.env.VERCEL
  ? path.join("/tmp", "storage")
  : path.join(process.cwd(), "storage");
const ANALYTICS_FILE = path.join(STORAGE_DIR, "analytics.json");
const SUBMISSIONS_FILE = path.join(STORAGE_DIR, "submissions.json");

const MAX_EVENTS = 10000;

async function ensureFile(filePath: string) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf-8");
  }
}

// ---------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------

export interface AnalyticsEvent {
  type: string;
  page: string;
  referrer?: string;
  element?: string;
  timestamp: string;
  userAgent?: string;
}

export interface Submission {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: "new" | "read" | "done";
}

// ---------------------------------------------------------------
// Seed data — affiché tant qu'aucune vraie donnée n'existe
// ---------------------------------------------------------------

function makeSeedEvents(): AnalyticsEvent[] {
  const events: AnalyticsEvent[] = [];
  const pageWeights: [string, number][] = [
    ["/", 32],
    ["/depannage-plomberie", 20],
    ["/plomberie", 13],
    ["/renovation-salle-de-bain", 11],
    ["/contact", 10],
    ["/realisations", 7],
    ["/a-propos", 5],
    ["/avis-clients", 4],
    ["/chauffage", 4],
    ["/chauffe-eau", 3],
  ];
  const ctaElements = [
    "hero-appel",
    "hero-devis",
    "service-hero-appel",
    "cta-appel-bandeau",
    "cta-devis-bandeau",
  ];
  const now = new Date();

  for (let d = 29; d >= 0; d--) {
    const date = new Date(now.getTime() - d * 24 * 60 * 60 * 1000);
    const dayStr = date.toISOString().split("T")[0];
    const dow = date.getDay();
    const isWeekend = dow === 0 || dow === 6;

    pageWeights.forEach(([page, weight], pi) => {
      const count = Math.max(1, Math.round((weight / 10) * (isWeekend ? 0.6 : 1)));
      for (let i = 0; i < count; i++) {
        const hour = 8 + ((pi * 2 + i * 3 + d) % 12);
        const min = (pi * 7 + i * 11 + d * 3) % 60;
        events.push({
          type: "page_view",
          page,
          timestamp: `${dayStr}T${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00.000Z`,
        });
      }
    });

    // Clics CTA tous les 2 jours
    if (d % 2 === 0) {
      const el = ctaElements[Math.floor(d / 2) % ctaElements.length];
      const hour = 10 + (d % 8);
      events.push({
        type: "click",
        page: el.startsWith("hero") ? "/" : "/depannage-plomberie",
        element: el,
        timestamp: `${dayStr}T${String(hour).padStart(2, "0")}:15:00.000Z`,
      });
    }
  }
  return events;
}

function makeSeedSubmissions(): Submission[] {
  const ago = (days: number) =>
    new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  return [
    {
      id: "seed-001",
      nom: "Martin Dubois",
      telephone: "06 12 34 56 78",
      email: "martin.dubois@gmail.com",
      service: "Dépannage urgent",
      message:
        "Fuite importante sous l'évier de la cuisine. Eau qui coule depuis ce matin. Besoin d'une intervention rapide s'il vous plaît.",
      date: ago(1),
      status: "new",
    },
    {
      id: "seed-002",
      nom: "Sophie Leroux",
      telephone: "07 89 01 23 45",
      email: "sophieleroux@outlook.fr",
      service: "Installation sanitaire",
      message:
        "Je souhaite installer une douche à l'italienne dans ma salle de bain (10 m²). Pouvez-vous me faire un devis ?",
      date: ago(2),
      status: "new",
    },
    {
      id: "seed-003",
      nom: "Jean-Pierre Moreau",
      telephone: "06 55 44 33 22",
      email: "jp.moreau@wanadoo.fr",
      service: "Réparation tuyauterie",
      message:
        "Traces d'humidité sur le mur de la salle de bain, suspicion de fuite dans la cloison. Appartement Paris 15e.",
      date: ago(4),
      status: "read",
    },
    {
      id: "seed-004",
      nom: "Camille Bernard",
      telephone: "06 78 90 12 34",
      email: "camille.bernard@free.fr",
      service: "Plomberie générale",
      message:
        "Remplacement de 3 robinets et d'un mitigeur de douche. Appartement Vincennes, disponible en semaine après 17h.",
      date: ago(6),
      status: "read",
    },
    {
      id: "seed-005",
      nom: "Thomas Petit",
      telephone: "07 11 22 33 44",
      email: "thomas.petit@yahoo.fr",
      service: "Adduction d'eau",
      message:
        "Maison neuve à Massy. Raccordement eau potable complet depuis la rue jusqu'au compteur. Devis souhaité rapidement.",
      date: ago(9),
      status: "done",
    },
    {
      id: "seed-006",
      nom: "Isabelle Fontaine",
      telephone: "06 34 56 78 90",
      email: "i.fontaine@gmail.com",
      service: "Dépannage urgent",
      message:
        "WC bouché depuis hier soir, immeuble à Créteil. Locataire mécontent. Intervention urgente requise.",
      date: ago(11),
      status: "done",
    },
    {
      id: "seed-007",
      nom: "Alexandre Durand",
      telephone: "06 99 88 77 66",
      email: "alex.durand@sfr.fr",
      service: "Installation sanitaire",
      message:
        "WC suspendu à poser dans salle d'eau de 4 m². Bâti-support à inclure. Logement Villeneuve-Saint-Georges.",
      date: ago(14),
      status: "done",
    },
    {
      id: "seed-008",
      nom: "Nathalie Colin",
      telephone: "07 66 55 44 33",
      email: "nathalie.colin@orange.fr",
      service: "Plomberie générale",
      message:
        "Remplacement d'un chauffe-eau électrique 150 L. Appartement Boulogne-Billancourt. Quel délai d'intervention ?",
      date: ago(18),
      status: "done",
    },
  ];
}

// ---------------------------------------------------------------
// Analytics
// ---------------------------------------------------------------

export async function getAnalyticsEvents(): Promise<AnalyticsEvent[]> {
  await ensureFile(ANALYTICS_FILE);
  const raw = await fs.readFile(ANALYTICS_FILE, "utf-8");
  try {
    const events: AnalyticsEvent[] = JSON.parse(raw);
    if (events.length > 0) return events;
    // Fichier vide → écriture des données de démo
    const seed = makeSeedEvents();
    await fs.writeFile(ANALYTICS_FILE, JSON.stringify(seed, null, 2), "utf-8");
    return seed;
  } catch {
    return [];
  }
}

export async function saveAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
  const events = await getAnalyticsEvents();
  events.push(event);
  const trimmed = events.slice(-MAX_EVENTS);
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(trimmed, null, 2), "utf-8");
}

// ---------------------------------------------------------------
// Submissions
// ---------------------------------------------------------------

export async function getSubmissions(): Promise<Submission[]> {
  await ensureFile(SUBMISSIONS_FILE);
  const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
  try {
    const subs: Submission[] = JSON.parse(raw);
    if (subs.length > 0) return subs;
    // Fichier vide → écriture des données de démo
    const seed = makeSeedSubmissions();
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(seed, null, 2), "utf-8");
    return seed;
  } catch {
    return [];
  }
}

export async function saveSubmission(submission: Submission): Promise<void> {
  const submissions = await getSubmissions();
  submissions.unshift(submission);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

export async function updateSubmission(
  id: string,
  updates: Partial<Submission>
): Promise<Submission | null> {
  const submissions = await getSubmissions();
  const index = submissions.findIndex((s) => s.id === id);
  if (index === -1) return null;
  submissions[index] = { ...submissions[index], ...updates };
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  return submissions[index];
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const submissions = await getSubmissions();
  const filtered = submissions.filter((s) => s.id !== id);
  if (filtered.length === submissions.length) return false;
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
