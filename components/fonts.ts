import localFont from "next/font/local";

// Fontes do redesign, salvas no projeto (subconjunto latin, que cobre acentos do português).
// Antes vinham de next/font/google, que baixa do Google Fonts durante o build: em nov/2026
// isso derrubou o deploy de produção na Vercel. Com os arquivos locais, o build não depende de rede.
// Origem: Google Fonts (Anton e JetBrains Mono), licença SIL Open Font License 1.1.

export const anton = localFont({
  src: "./fonts/anton-latin-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-anton",
  fallback: ["Impact", "sans-serif"],
});

// Arquivo variável: um só arquivo cobre os pesos 400, 500 e 700 usados no site.
export const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin-variable.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
  fallback: ["ui-monospace", "monospace"],
});
