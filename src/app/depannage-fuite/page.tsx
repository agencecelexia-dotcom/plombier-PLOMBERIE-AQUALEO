import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: `Dépannage fuite eau Île-de-France | Urgence 7j/7 — ${siteConfig.name}`,
  description: `Dépannage fuite d'eau en urgence en Île-de-France. Intervention en moins de 2h, 7j/7. Fuite tuyau, robinet, canalisation. Yohann Pereira. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-fuite",
});

export default function DepannageFuiteRedirectPage() {
  redirect("/depannage-plomberie");
}
