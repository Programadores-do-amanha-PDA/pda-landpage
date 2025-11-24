import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";
import { dela_gothic, ibm_plex_sans } from "../fonts";
import AppProviders from "@/common/context";

export const metadata: Metadata = {
  title: "Programadores do Amanhã",
  authors: {
    name: "Programadores do Amanhã",
    url: "https://programadoresdoamanha.org.br/",
  },
  description:
    "Uma ponte que dá acesso a jovens negros e negras que desejam ingressar no mercado da tecnologia. Uma ponte construída de maneira muito especial. Por pessoas que já estiveram do lado de lá, no lugar em que conquistar a carreira dos sonhos parecia algo muito distante. Então estamos aqui principalmente para mudar essa lógica, para trazer o emprego dos sonhos para perto da periferia. Dando as ferramentas para que pretos e pretas sejam protagonistas nessa revolução tecnológica que todos nós estamos vivendo.",
  keywords:
    "programadores do amanhã, tecnologia, jovens, negros, periferia, emprego, carreira, revolução tecnológica, ong, NGO, computador, curso TI, TI, IA, AI, curso inglês, curso, Inglês, Programação",
  openGraph: {
    title: "Programadores do Amanhã",
    description:
      "Uma ponte que dá acesso a jovens negros e negras que  desejam ingressar no mercado da tecnologia.",
    url: "https://programadoresdoamanha.org.br/",
    type: "website",
    images: [
      {
        url: "https://programadoresdoamanha.org.br/assets/Logo_PDA_Horizontal_FundoRoxo.png",
        width: 800,
        height: 600,
        alt: "Programadores do Amanhã",
      },
    ],
    siteName: "Programadores do Amanhã",
    locale: "pt-BR",
  },
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html
      lang="pt-BR"
      className={`w-full h-full flex  ${ibm_plex_sans.variable} ${dela_gothic.variable} font-ibm-plex-sans`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line */}
        <script
          type="text/javascript"
          src="https://js.hsforms.net/forms/shell.js"
        />
        <Analytics />
      </head>

      <body className="w-full h-max flex justify-center items-start" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
