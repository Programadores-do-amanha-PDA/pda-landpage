import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageViewComponent } from "@/common/components";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { NumbersStrip } from "@/components/home/NumbersStrip";
import { Partners } from "@/components/home/Partners";
import { Pillars } from "@/components/home/Pillars";
import { ProblemSection } from "@/components/home/ProblemSection";
import { Proof } from "@/components/home/Proof";
import { SupportCards } from "@/components/home/SupportCards";
import { Testimonial } from "@/components/home/Testimonial";
import { NewSiteShell } from "@/components/layout/NewSiteShell";
import { hero } from "@/content/home";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.defaultTitle },
  description: site.defaultDescription,
  keywords: site.keywords,
  alternates: { canonical: "/pt" },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: "/pt",
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

export default function HomePage({ params }: { params: { locale: string } }) {
  // A copy nova só existe em português: /en vai para /pt até haver tradução.
  if (params.locale !== "pt") redirect("/pt");

  return (
    <NewSiteShell>
      <Hero />
      <NumbersStrip />
      <ProblemSection />
      <Pillars />
      <Proof />
      <Testimonial />
      <SupportCards />
      <Partners />
      <ClosingCta />
      <PageViewComponent pageName="Home" />
    </NewSiteShell>
  );
}
