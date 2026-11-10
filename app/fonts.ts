import localFont from "next/font/local";

// Fontes das páginas antigas, salvas no projeto (subconjunto latin). Antes vinham de
// next/font/google, que depende do Google Fonts durante o build e já derrubou um deploy.
// Origem: Google Fonts (Dela Gothic One e IBM Plex Sans), licença SIL Open Font License 1.1.

export const dela_gothic = localFont({
  src: "../components/fonts/dela-gothic-one-latin-400.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-dela-gothic",
});

// Arquivo variável: cobre os pesos 100 a 700 usados pelas páginas antigas.
export const ibm_plex_sans = localFont({
  src: "../components/fonts/ibm-plex-sans-latin-variable.woff2",
  weight: "100 700",
  style: "normal",
  display: "swap",
  variable: "--font-ibm-plex-sans",
});
