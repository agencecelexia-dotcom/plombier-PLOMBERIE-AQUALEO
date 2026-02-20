import type { Metadata } from "next";
import Link from "next/link";
import { Bath, Wrench, ShowerHead, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqSalleDeBain } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Installation sanitaire Île-de-France | ${siteConfig.name}`,
  description: `Installation sanitaire complète en Île-de-France. WC suspendu, douche, baignoire, lavabo, robinetterie. Yohann Pereira, artisan plombier. Devis gratuit.`,
  path: "/renovation-salle-de-bain",
});

const servicesInstallation = [
  {
    icon: Bath,
    title: "WC suspendu et WC classique",
    desc: "Installation de WC suspendus avec bâti-support encastré, WC à poser, WC broyeur. Raccordements et mise en service inclus.",
    image: "Plombier installant un WC suspendu bati-support dans une salle de bain moderne, photo realiste, ratio 3:2",
    imageKey: "plomberie-mise-aux-normes",
  },
  {
    icon: ShowerHead,
    title: "Douche et baignoire",
    desc: "Pose de douche à l'italienne, receveur extra-plat, bac à douche, baignoire encastrée ou îlot. Étanchéité garantie.",
    image: "Installation douche italienne plombier professionnel, receveur extra-plat, carrelage moderne, photo realiste, ratio 3:2",
    imageKey: "renovation-douche-italienne",
  },
  {
    icon: Wrench,
    title: "Lavabo, vasque et évier",
    desc: "Pose de lavabo, vasque à poser ou encastrée, évier de cuisine, meuble vasque. Raccordements eau et évacuation.",
    image: "Installation vasque lavabo salle de bain moderne par plombier, robinetterie chromée neuve, photo realiste, ratio 3:2",
    imageKey: "plomberie-robinetterie",
  },
  {
    icon: Bath,
    title: "Robinetterie et accessoires",
    desc: "Installation de mitigeurs, robinets thermostatiques, douchettes, colonnes de douche. Toutes marques (Grohe, Hansgrohe, Duravit...).",
    image: "Robinetterie haut de gamme installée salle de bain design, mitigeur chromé sur vasque, photo realiste, ratio 3:2",
    imageKey: "plomberie-tuyauterie",
  },
];

const avantages = [
  "Installation soignée, finitions impeccables",
  "Respect des normes DTU et NF",
  "Fourniture des équipements ou pose de vos propres équipements",
  "Chantier propre, protection des sols et meubles",
  "Garantie décennale sur tous les travaux",
  "Devis détaillé gratuit sous 48h",
];

export default function InstallationSanitairePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Installation sanitaire en Île-de-France — Plomberie Aqualeo",
        subtitle: "WC suspendu, douche, baignoire, lavabo, robinetterie... Installation soignée et garantie.",
        imagePlaceholder: {
          prompt: "Salle de bain moderne complete nouvelle installation sanitaire, WC suspendu, douche italienne, vasque design, robinetterie chromee, lumiere naturelle appartement parisien, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["renovation-sdb"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Installation sanitaire" },
      ]}
      faqs={faqSalleDeBain}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title="Nos prestations d'installation sanitaire"
          subtitle="Yohann installe et remplace tous vos équipements sanitaires avec soin."
        />
        <div className="space-y-12">
          {servicesInstallation.map((s, i) => (
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
