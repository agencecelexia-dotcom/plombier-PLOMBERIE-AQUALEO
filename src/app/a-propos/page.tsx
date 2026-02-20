import type { Metadata } from "next";
import { ShieldCheck, Award, Clock, Users, Wrench, Heart, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `À propos — ${siteConfig.name} | Yohann Pereira, plombier IDF`,
  description: `Découvrez Plomberie Aqualeo, fondée par Yohann Pereira. Plombier artisan en Île-de-France depuis ${siteConfig.yearsExperience} ans. Plomberie générale, installation sanitaire, dépannage.`,
  path: "/a-propos",
});

const chiffres = [
  { value: `${siteConfig.yearsExperience}+`, label: "Années d'expérience", icon: Clock },
  { value: `${siteConfig.interventionsCount}+`, label: "Interventions réalisées", icon: Wrench },
  { value: `${siteConfig.googleReviewCount}`, label: "Avis Google", icon: Users },
  { value: `${siteConfig.googleRating}/5`, label: "Note moyenne", icon: Award },
];

const valeurs = [
  { icon: Clock, title: "Réactivité", desc: "Yohann intervient dans les meilleurs délais. En urgence, comptez moins de 2 heures partout en Île-de-France." },
  { icon: Heart, title: "Transparence", desc: "Devis détaillés, tarifs clairs, pas de mauvaise surprise. Vous savez exactement ce que vous payez avant qu'on commence." },
  { icon: ShieldCheck, title: "Qualité", desc: "Travail soigné, matériaux de qualité, chantier propre. Plomberie Aqualeo garantit la qualité de chaque intervention." },
];

export default function AProposPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Plomberie Aqualeo — Yohann Pereira, votre plombier artisan en Île-de-France"
        subtitle="Professionnalisme, réactivité et transparence au service de votre confort."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans appartement parisien en renovation, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["a-propos"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />
      </div>

      {/* Notre histoire */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="L'histoire de Plomberie Aqualeo" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée en {siteConfig.foundedYear} par {siteConfig.founder}, Plomberie Aqualeo est née d&apos;une passion pour le métier et d&apos;une conviction simple : un bon plombier doit être fiable, réactif et honnête.
              </p>
              <p>
                Après {siteConfig.yearsExperience} ans d&apos;expérience et plus de {siteConfig.interventionsCount} interventions en Île-de-France, Yohann reste fidèle à ces valeurs. Artisan indépendant, il intervient personnellement sur chaque chantier pour des dépannages, installations sanitaires et réparations de tuyauterie.
              </p>
              <p>
                Couvert par une assurance décennale, Yohann Pereira accompagne ses clients dans tous leurs projets de plomberie, du dépannage urgent à l&apos;installation complète, en passant par l&apos;adduction d&apos;eau et la réparation de tuyauterie.
              </p>
            </div>
          </div>
          <ImagePlaceholder
            prompt="Portrait professionnel artisan plombier francais, polo bleu logo brode, bras croises, sourire confiant, fond atelier range flou, photo realiste, ratio 2:3"
            src={pageImages["a-propos-fondateur"] || undefined}
            aspectRatio="2/3"
            alt="Yohann Pereira, fondateur de Plomberie Aqualeo"
            className="max-w-sm mx-auto"
          />
        </div>
      </SectionContainer>

      {/* Équipe */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Un artisan à votre service"
          subtitle="Yohann Pereira intervient personnellement sur chaque chantier pour garantir la qualité de chaque intervention."
        />
        <ImagePlaceholder
          prompt="Plombier artisan souriant en uniforme bleu devant sa camionnette utilitaire blanche avec équipements, parking extérieur, lumière naturelle, photo réaliste, ratio 3:2"
          src={pageImages["a-propos-equipe"] || undefined}
          aspectRatio="3/2"
          alt="Yohann Pereira — Plomberie Aqualeo"
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      {/* Chiffres clés */}
      <SectionContainer variant="warm">
        <SectionHeading title="En quelques chiffres" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffres.map((c) => (
            <div key={c.label} className="text-center">
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                {c.value}
              </div>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Valeurs */}
      <SectionContainer variant="white">
        <SectionHeading title="Nos valeurs" />
        <div className="grid md:grid-cols-3 gap-8">
          {valeurs.map((v) => (
            <Card key={v.title}>
              <CardContent className="p-6 text-center">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Certifications et assurances"
          subtitle="Votre tranquillité d'esprit est notre priorité."
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { label: "Assurance décennale", detail: "Tous travaux de plomberie garantis 10 ans" },
            { label: "Responsabilité civile professionnelle", detail: "Protection complète sur chaque chantier" },
            { label: "Artisan qualifié", detail: "Plomberie générale et installation sanitaire" },
          ].map((cert) => (
            <div key={cert.label} className="flex items-center gap-3 p-4 rounded-lg bg-white">
              <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
              <div>
                <span className="font-medium text-sm">{cert.label}</span>
                <span className="text-sm text-muted-foreground ml-2">{cert.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
