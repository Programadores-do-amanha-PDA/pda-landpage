import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { Hero } from "@/components/contrate/Hero";
import { Hire } from "@/components/contrate/Hire";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { meta } from "@/content/contrate";
import { hero as homeHero } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: site.keywords,
  alternates: { canonical: "/pt/contrate" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/pt/contrate",
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

export default function ContratePage({
  params,
}: {
  params: { locale: string };
}) {
  // A copy nova só existe em português: /en/contrate vai para /pt/contrate até haver tradução.
  if (params.locale !== "pt") redirect("/pt/contrate");

  return (
    <NewSiteShell>
      <Hero />
      <Hire />
      <PageViewComponent pageName="Contrate" />
    </NewSiteShell>
  );
}
