import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: `Installation sanitaire Île-de-France | WC, douche, lavabo — ${siteConfig.name}`,
  description: `Artisan plombier pour toute installation sanitaire en Île-de-France : WC suspendu, douche à l'italienne, lavabo, baignoire, robinetterie. Yohann Pereira. Devis gratuit.`,
  path: "/installation-sanitaire",
});

export default function InstallationSanitaireRedirectPage() {
  redirect("/renovation-salle-de-bain");
}
