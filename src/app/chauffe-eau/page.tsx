import type { Metadata } from "next";
import Link from "next/link";
import { Pipette, Search, Wrench, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqChauffeEau } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Réparation tuyauterie Île-de-France | ${siteConfig.name}`,
  description: `Réparation et remplacement de tuyauterie en Île-de-France. Fuites cachées, canalisations vétustes, tuyaux plomb. Yohann Pereira, artisan plombier. Devis gratuit.`,
  path: "/chauffe-eau",
});

const servicesTuyauterie = [
  {
    icon: Pipette,
    title: "Remplacement tuyauterie vétuste",
    desc: "Remplacement complet des canalisations d'un appartement ou d'une maison. Tuyaux en plomb, en fer ou en PVC remplacés par du cuivre, PER ou multicouche.",
    image: "Plombier remplacant tuyauterie ancienne rouille par tuyaux cuivre neufs dans sous-sol appartement, photo realiste, ratio 3:2",
    imageKey: "plomberie-tuyauterie",
  },
  {
    icon: Search,
    title: "Détection de fuite cachée",
    desc: "Localisation précise des fuites dans les murs, planchers ou sous dallage sans démolition grâce à la caméra thermique et au détecteur acoustique.",
    image: "Plombier utilisant camera thermique pour detecter fuite dans mur, ecran infrarouge visible, photo realiste, ratio 3:2",
    imageKey: "plomberie-recherche-fuite",
  },
  {
    icon: Wrench,
    title: "Réparation fuite tuyauterie",
    desc: "Réparation de fuites sur canalisations, raccords, joints ou soudures. Intervention rapide pour limiter les dégâts et éviter un dégât des eaux.",
    image: "Plombier reparant fuite sur canalisation cuivre, soudure au chalumeau, travail soigne, photo realiste, ratio 3:2",
    imageKey: "plomberie-robinetterie",
  },
  {
    icon: ShieldCheck,
    title: "Mise aux normes tuyauterie",
    desc: "Mise en conformité des installations de plomberie selon les normes en vigueur. Élimination des canalisations en plomb obligatoire pour la santé.",
    image: "Plombier installant nouvelles canalisations conformes normes sanitaires, photo realiste, ratio 3:2",
    imageKey: "plomberie-mise-aux-normes",
  },
];

const avantages = [
  "Détection non destructive (caméra thermique)",
  "Remplacement tuyaux plomb pour votre santé",
  "Cuivre, PER, multicouche selon les besoins",
  "Travaux propres, chantier remis en état",
  "Garantie décennale sur tous les travaux",
  "Devis gratuit, tarif transparent",
];

export default function ReparationTuyauteriePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Réparation tuyauterie en Île-de-France — Fuites et canalisations",
        subtitle: "Fuites cachées, tuyaux vétustes, canalisations plomb... Détection et réparation sans destruction.",
        imagePlaceholder: {
          prompt: "Plombier reparant tuyauterie cuivre, raccords soudures, interieur appartement parisien, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffe-eau"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Réparation tuyauterie" },
      ]}
      faqs={faqChauffeEau}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title="Nos prestations de réparation tuyauterie"
          subtitle="De la détection à la réparation, Yohann prend tout en charge."
        />
        <div className="space-y-12">
          {servicesTuyauterie.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ImagePlaceholder prompt={s.image} src={pageImages[s.imageKey] || undefined} aspectRatio="3/2" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Pourquoi nous choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title="Pourquoi choisir Plomberie Aqualeo ?" />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {avantages.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage urgent</Link>
          <Link href="/plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Plomberie générale</Link>
          <Link href="/renovation-salle-de-bain" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation sanitaire</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
