import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Search, Pipette, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqPlomberie } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier Île-de-France | Plomberie générale — ${siteConfig.name}`,
  description: `Plombier général en Île-de-France. Installation, réparation, mise aux normes plomberie. Robinetterie, tuyauterie, WC, recherche de fuite. Yohann Pereira. Devis gratuit.`,
  path: "/plomberie",
});

const servicesPlomberie = [
  { icon: Pipette, title: "Robinetterie", desc: "Installation et remplacement de robinets, mitigeurs, douchettes. Toutes marques, tous styles.", image: "Gros plan mains de plombier serrant un raccord cuivre avec une pince, travail de precision, photo realiste, ratio 3:2", imageKey: "plomberie-robinetterie" },
  { icon: Wrench, title: "Tuyauterie et raccordements", desc: "Installation, remplacement et réparation de canalisations en cuivre, PER ou multicouche.", image: "Plombier professionnel installant de la tuyauterie en cuivre dans un appartement, raccords visibles, travail soigne, photo realiste, ratio 3:2", imageKey: "plomberie-tuyauterie" },
  { icon: Search, title: "Recherche de fuite", desc: "Détection non destructive par caméra thermique, acoustique ou colorimétrique.", image: "Plombier utilisant une camera d'inspection de canalisation, ecran video visible, intervention technique, photo realiste, ratio 3:2", imageKey: "plomberie-recherche-fuite" },
  { icon: ShieldCheck, title: "Mise aux normes", desc: "Mise en conformité de vos installations selon les normes en vigueur (DTU, NF).", image: "Plombier installant un WC suspendu neuf dans une salle de bain en renovation, bati-support visible, photo realiste, ratio 3:2", imageKey: "plomberie-mise-aux-normes" },
];

const avantages = [
  `Plus de ${siteConfig.yearsExperience} ans d'expérience en plomberie`,
  "Matériel professionnel dernière génération",
  "Chantier laissé propre après intervention",
  "Garantie décennale sur tous les travaux",
  "Devis détaillé gratuit sous 48h",
  "Artisan indépendant, vous avez toujours Yohann",
];

export default function PlomberiePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Plombier général en Île-de-France — Installation et réparation",
        subtitle: "Robinetterie, tuyauterie, mise aux normes, recherche de fuite... Intervention rapide et travail soigné.",
        imagePlaceholder: {
          prompt: "Plombier professionnel installant de la tuyauterie en cuivre dans un appartement parisien, raccords visibles, travail soigne, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["plomberie"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plomberie générale" },
      ]}
      faqs={faqPlomberie}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title="Nos services de plomberie générale"
          subtitle="De l'installation neuve à la réparation, Yohann intervient sur tous vos équipements."
        />
        <div className="space-y-12">
          {servicesPlomberie.map((s, i) => (
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
          <Link href="/renovation-salle-de-bain" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Installation sanitaire</Link>
          <Link href="/chauffe-eau" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Réparation tuyauterie</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
