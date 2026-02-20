import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos réalisations plomberie en Île-de-France",
  description: "Découvrez nos réalisations : installation sanitaire, dépannage plomberie, réparation tuyauterie en Île-de-France. Photos avant/après.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsClient />;
}
