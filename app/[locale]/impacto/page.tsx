import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { CurveSection } from "@/components/impacto/CurveSection";
import { Highlights } from "@/components/impacto/Highlights";
import { Opening } from "@/components/impacto/Opening";
import { Permanence } from "@/components/impacto/Permanence";
import { PyramidSection } from "@/components/impacto/PyramidSection";
import { Stories } from "@/components/impacto/Stories";
import { SupportCta } from "@/components/impacto/SupportCta";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { hero } from "@/content/home";
import { meta } from "@/content/impacto";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: site.keywords,
  alternates: { canonical: "/pt/impacto" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/pt/impacto",
    images: [
      {
        url: hero.image.src,
        width: hero.image.width,
        height: hero.image.height,
        alt: hero.image.alt,
      },
    ],
  },
};

export default function ImpactoPage({
  params,
}: {
  params: { locale: string };
}) {
  // A copy nova só existe em português: /en/impacto vai para /pt/impacto até haver tradução.
  if (params.locale !== "pt") redirect("/pt/impacto");

  return (
    <NewSiteShell>
      <Opening />
      <PyramidSection />
      <CurveSection />
      <Highlights />
      <Stories />
      <Permanence />
      <SupportCta />
      <PageViewComponent pageName="Impacto" />
    </NewSiteShell>
  );
}
