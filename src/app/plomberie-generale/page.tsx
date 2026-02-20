import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: `Plomberie générale Île-de-France | Artisan plombier — ${siteConfig.name}`,
  description: `Artisan plombier pour tous travaux de plomberie générale en Île-de-France. Robinetterie, tuyauterie, WC, évier, recherche de fuite. Yohann Pereira. Devis gratuit.`,
  path: "/plomberie-generale",
});

export default function PlomberieGeneraleRedirectPage() {
  redirect("/plomberie");
}
