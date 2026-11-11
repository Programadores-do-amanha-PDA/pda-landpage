import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { Board } from "@/components/sobre/Board";
import { Contact } from "@/components/sobre/Contact";
import { Formation } from "@/components/sobre/Formation";
import { Hero } from "@/components/sobre/Hero";
import { Mission } from "@/components/sobre/Mission";
import { Media } from "@/components/sobre/Media";
import { Seals } from "@/components/sobre/Seals";
import { hero as homeHero } from "@/content/home";
import { site } from "@/content/site";
import { meta } from "@/content/sobre";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: site.keywords,
  alternates: { canonical: "/pt/sobre" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/pt/sobre",
    images: [
      {
        url: homeHero.image.src,
        width: homeHero.image.width,
        height: homeHero.image.height,
        alt: homeHero.image.alt,
      },
    ],
  },
};

export default function SobrePage({ params }: { params: { locale: string } }) {
  // A copy nova só existe em português: /en/sobre vai para /pt/sobre até haver tradução.
  if (params.locale !== "pt") redirect("/pt/sobre");

  return (
    <NewSiteShell>
      <Hero />
      <Mission />
      <Formation />
      <Board />
      <Seals />
      <Media />
      <Contact />
      <PageViewComponent pageName="Sobre" />
    </NewSiteShell>
  );
}
