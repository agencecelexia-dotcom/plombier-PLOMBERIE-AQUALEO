import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, MapPin, ClipboardCheck, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Adduction d'eau Île-de-France | Raccordement réseau — ${siteConfig.name}`,
  description: `Adduction d'eau potable en Île-de-France. Raccordement au réseau public, branchement compteur, alimentation neuve. Yohann Pereira, artisan plombier. Devis gratuit.`,
  path: "/chauffage",
});

const servicesAdduction = [
  {
    icon: MapPin,
    title: "Raccordement réseau public",
    desc: "Raccordement de votre maison ou appartement au réseau d'eau potable de la commune. Nous gérons les démarches auprès de la mairie et du gestionnaire de réseau.",
    image: "Technicien plombier raccordant une canalisation PE bleue au reseau eau potable, tranchee extereure jardin, photo realiste, ratio 3:2",
    imageKey: "chauffage-pac",
  },
  {
    icon: Droplets,
    title: "Installation compteur d'eau",
    desc: "Pose et remplacement de compteur d'eau, installation de la niche de compteur, raccordements intérieurs et extérieurs conformes aux normes.",
    image: "Compteur eau neuf installe dans niche murale, tuyauterie cuivre propre raccordee, photo realiste, ratio 3:2",
    imageKey: "chauffage-chaudiere-gaz",
  },
  {
    icon: ClipboardCheck,
    title: "Alimentation eau neuve",
    desc: "Création d'une nouvelle alimentation en eau pour une extension, un garage, un jardin ou tout autre espace. Pose de canalisations enterrées ou apparentes.",
    image: "Pose tuyau alimentation eau jardin, tranchee creusee, tuyau PE bleu enterrement, photo realiste, ratio 3:2",
    imageKey: "chauffage-plancher-chauffant",
  },
  {
    icon: ShieldCheck,
    title: "Mise aux normes alimentation",
    desc: "Mise en conformité de vos branchements d'eau potable selon les réglementations en vigueur. Vérification anti-retour et pression.",
    image: "Plombier verifiant pression eau installation tuyauterie neuve, manometre, photo realiste, ratio 3:2",
    imageKey: "plomberie-recherche-fuite",
  },
];

const avantages = [
  "Gestion complète des démarches administratives",
  "Respect des normes NF EN 806 et DTU 60",
  "Terrassement et remise en état inclus",
  "Canalisations PE, cuivre ou multicouche",
  "Garantie décennale sur tous les travaux",
  "Devis détaillé gratuit sous 48h",
];

export default function AdductionEauPage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Adduction d'eau en Île-de-France — Raccordement et branchement",
        subtitle: "Raccordement réseau public, branchement compteur, alimentation eau neuve. Démarches incluses.",
        imagePlaceholder: {
          prompt: "Plombier professionnel supervisant raccordement canalisation eau potable exterieure, tranchee jardin maison IDF, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Adduction d'eau" },
      ]}
      faqs={faqChauffage}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title="Nos prestations d'adduction d'eau"
          subtitle="Du raccordement au réseau jusqu'à la mise en service, Yohann gère tout."
        />
        <div className="space-y-12">
          {servicesAdduction.map((s, i) => (
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
          <Link href="/plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Plomberie générale</Link>
          <Link href="/chauffe-eau" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Réparation tuyauterie</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage urgent</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
