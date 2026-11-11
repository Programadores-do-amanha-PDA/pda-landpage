import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { Hero } from "@/components/empresas/Hero";
import { Hire } from "@/components/empresas/Hire";
import { Support } from "@/components/empresas/Support";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { meta } from "@/content/empresas";
import { hero as homeHero } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: site.keywords,
  alternates: { canonical: "/pt/empresas" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/pt/empresas",
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

export default function EmpresasPage({
  params,
}: {
  params: { locale: string };
}) {
  // A copy nova só existe em português: /en/empresas vai para /pt/empresas até haver tradução.
  if (params.locale !== "pt") redirect("/pt/empresas");

  return (
    <NewSiteShell>
      <Hero />
      <Hire />
      <Support />
      <PageViewComponent pageName="Empresas" />
    </NewSiteShell>
  );
}
