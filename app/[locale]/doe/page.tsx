import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { Destination } from "@/components/doe/Destination";
import { DoareScript } from "@/components/doe/DoareScript";
import { Hero } from "@/components/doe/Hero";
import { Result } from "@/components/doe/Result";
import { Ways } from "@/components/doe/Ways";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { meta } from "@/content/doe";
import { hero as homeHero } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  keywords: site.keywords,
  alternates: { canonical: "/pt/doe" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "/pt/doe",
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

export default function DoePage({ params }: { params: { locale: string } }) {
  // A copy nova só existe em português: /en/doe vai para /pt/doe até haver tradução.
  if (params.locale !== "pt") redirect("/pt/doe");

  return (
    <NewSiteShell>
      <Hero />
      <Destination />
      <Ways />
      <Result />
      <DoareScript />
      <PageViewComponent pageName="Doe" />
    </NewSiteShell>
  );
}
