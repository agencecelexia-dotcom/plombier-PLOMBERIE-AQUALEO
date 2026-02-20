import type { Metadata } from "next";
import { Phone, AlertTriangle, Droplets, ShowerHead, Wrench } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqDepannage } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier urgence Île-de-France | Dépannage fuite 7j/7 — ${siteConfig.name}`,
  description: `Dépannage plomberie urgent en Île-de-France. Fuite d'eau, tuyau éclaté, canalisation bouchée. Intervention en moins de 2h, 7j/7. Appelez Yohann au ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgences = [
  { icon: Droplets, title: "Fuite d'eau", desc: "Fuite sur canalisation, robinet, raccord ou joint. Intervention rapide pour limiter les dégâts et éviter le dégât des eaux." },
  { icon: AlertTriangle, title: "Dégât des eaux", desc: "Coupure d'eau immédiate, assèchement et réparation. Yohann vous accompagne pour le constat auprès de votre assurance." },
  { icon: ShowerHead, title: "Canalisation bouchée", desc: "Débouchage WC, évier, douche, baignoire ou canalisation principale par furet motorisé ou haute pression." },
  { icon: Wrench, title: "Tuyau éclaté", desc: "Réparation ou remplacement d'un tuyau percé ou éclaté, quelle que soit la canalisation et sa localisation." },
];

const etapes = [
  { num: "1", title: "Vous appelez Yohann", desc: "Décrivez votre problème par téléphone. On évalue l'urgence ensemble et vous donnons un tarif indicatif immédiatement." },
  { num: "2", title: "Intervention sous 2h", desc: "Yohann se déplace chez vous avec tout le matériel nécessaire pour réparer dans la grande majorité des cas au premier passage." },
  { num: "3", title: "Problème résolu", desc: "Réparation immédiate, facture claire. Pas de mauvaise surprise, le tarif annoncé est le tarif facturé." },
];

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: "Plombier dépannage urgent en Île-de-France — Intervention en moins de 2h",
        subtitle: "Fuite d'eau, tuyau éclaté, WC bouché ? Appelez Yohann maintenant.",
        imagePlaceholder: {
          prompt: "Plombier en intervention urgence, lampe frontale allumee, coupant l'arrivee d'eau principale dans une cave parisienne, expression concentree, eclairage dramatique, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["depannage-plomberie"] || undefined,
        },
        badges: ["Urgence 24h/24", "Intervention <2h", "7j/7"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Dépannage plomberie" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Les urgences plomberie que nous prenons en charge"
          subtitle="Quelle que soit l'urgence, Yohann a la solution."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {urgences.map((u) => (
            <Card key={u.title} className="border-accent-500/20">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Comment ça marche ?"
          subtitle="3 étapes simples pour un dépannage sans stress."
        />
        <div className="max-w-2xl mx-auto space-y-6">
          {etapes.map((e) => (
            <div key={e.num} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                {e.num}
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Tarifs indicatifs"
          subtitle="Transparence totale avant chaque intervention."
        />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Débouchage WC / évier", tarif: "À partir de 89 €" },
              { label: "Réparation fuite simple", tarif: "À partir de 120 €" },
              { label: "Remplacement robinet", tarif: "À partir de 150 €" },
              { label: "Tuyau éclaté (urgence)", tarif: "À partir de 180 €" },
            ].map((t) => (
              <div key={t.label} className="flex items-center justify-between p-4 rounded-lg bg-neutral-50">
                <span className="text-sm font-medium text-neutral-700">{t.label}</span>
                <span className="text-sm font-bold text-primary">{t.tarif}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Tarifs indicatifs hors fournitures. Devis exact communiqué par téléphone avant intervention.
          </p>
        </div>
      </SectionContainer>

      {/* Zone d'intervention */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Zone d'intervention"
          subtitle="Plomberie Aqualeo intervient dans toute l'Île-de-France."
        />
        <div className="max-w-2xl mx-auto text-center text-muted-foreground">
          <p className="mb-4">Paris (tous arrondissements), Hauts-de-Seine, Val-de-Marne, Seine-Saint-Denis, Essonne, Yvelines, Val-d&apos;Oise, Seine-et-Marne.</p>
          <p className="font-semibold text-neutral-900">Pour toute urgence : appelez le {siteConfig.phone}</p>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
