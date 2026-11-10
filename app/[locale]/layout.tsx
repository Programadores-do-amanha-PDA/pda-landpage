import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";
import { dela_gothic, ibm_plex_sans } from "../fonts";
import AppProviders from "@/common/context";
import { SITE_URL } from "@/content/links";
import { site } from "@/content/site";
import { routing } from "@/i18n/routing";

// Textos neutros: sem referência a raça ou etnia (CLAUDE.md, "Regras de conteúdo").
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.name,
  authors: {
    name: site.name,
    url: `${SITE_URL}/`,
  },
  description: site.defaultDescription,
  keywords: site.keywords,
  openGraph: {
    title: site.name,
    description: site.defaultDescription,
    url: `${SITE_URL}/`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/Logo_PDA_Horizontal_FundoRoxo.png`,
        width: 800,
        height: 600,
        alt: site.name,
      },
    ],
    siteName: site.name,
    locale: "pt-BR",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Caminhos que não começam com um idioma válido (ex.: /teste-404) viram 404, não 500.
  if (!routing.locales.includes(params.locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang="pt-BR"
      className={`w-full h-full flex  ${ibm_plex_sans.variable} ${dela_gothic.variable} font-ibm-plex-sans`}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>

      <body
        className="w-full h-max flex justify-center items-start"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
