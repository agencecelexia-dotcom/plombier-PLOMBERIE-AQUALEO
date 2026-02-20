import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: `Blog plomberie Ile-de-France | Conseils et astuces — ${siteConfig.name}`,
    description: `Conseils plomberie, guides pratiques, astuces entretien. Le blog de Plomberie Aqualeo, votre plombier en Ile-de-France.`,
    path: "/blog",
  }),
};

const articles = [
  {
    slug: "prix-plombier-ile-de-france",
    title: "Prix d'un plombier en Ile-de-France : tarifs et grille de prix 2026",
    excerpt: "Combien coute une intervention de plombier en Ile-de-France ? Depannage, installation sanitaire, remplacement de robinet... Decouvrez les tarifs moyens 2026 et comment obtenir un devis juste.",
    date: "10 fevrier 2026",
    readTime: "6 min",
    category: "Conseils",
  },
  {
    slug: "comment-choisir-plombier-idf",
    title: "Comment bien choisir son plombier en Ile-de-France ?",
    excerpt: "Artisan certifie, assurance decennale, devis gratuit, avis clients... Les 7 criteres essentiels pour choisir un plombier de confiance en Ile-de-France et eviter les arnaques.",
    date: "28 janvier 2026",
    readTime: "5 min",
    category: "Conseils",
  },
  {
    slug: "fuite-eau-que-faire",
    title: "Fuite d'eau : que faire avant l'arrivee du plombier ?",
    excerpt: "Une fuite d'eau detectee a la maison ? Voici les gestes essentiels a effectuer immediatement pour limiter les degats en attendant l'intervention du plombier.",
    date: "15 janvier 2026",
    readTime: "4 min",
    category: "Urgences",
  },
  {
    slug: "economiser-eau-maison",
    title: "10 astuces pour reduire votre consommation d'eau a la maison",
    excerpt: "Eau qui goutte, chasse d'eau qui fuit, robinets mal regle... Ces petits problemes peuvent couter jusqu'a 200 EUR par an. Voici comment economiser l'eau facilement.",
    date: "5 janvier 2026",
    readTime: "5 min",
    category: "Economies",
  },
  {
    slug: "entretien-tuyauterie-conseils",
    title: "Entretien de la tuyauterie : quand faire controler ses canalisations ?",
    excerpt: "Canalisations vetustes, depots de calcaire, corrosion... Un entretien regulier de votre tuyauterie vous evite les pannes couteuses. Nos conseils pour entretenir vos installations.",
    date: "20 decembre 2025",
    readTime: "6 min",
    category: "Entretien",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Blog Plomberie Aqualeo — Conseils plomberie IDF"
        subtitle="Astuces, guides pratiques et conseils de Yohann Pereira, artisan plombier en Ile-de-France."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans appartement parisien, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["blog"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <SectionHeading
          title="Nos articles"
          subtitle="Conseils pratiques, guides prix et astuces plomberie par Plomberie Aqualeo."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-lg font-heading font-bold text-neutral-900 mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary flex items-center gap-1">
                    Bientot <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
