import type { ReactNode } from "react";

import { CookieBanner } from "@/components/analytics/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { anton, jetbrainsMono } from "@/components/fonts";

import "@/components/novo-site.css";

/** Header, rodapé, fontes e cores base das páginas novas. */
export function NewSiteShell({ children }: { children: ReactNode }) {
  return (
    <div
      className={`pda-novo w-full min-w-0 bg-cream font-mono text-[17px] leading-[1.55] text-ink ${anton.variable} ${jetbrainsMono.variable}`}
    >
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <CookieBanner />
      <GoogleAnalytics />
    </div>
  );
}
