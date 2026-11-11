import type { MetadataRoute } from "next";

const SITE_URL = "https://programadoresdoamanha.org.br";

// Rotas públicas reais do site, em português e inglês.
const paths = [
  "",
  "/impacto",
  "/sobre",
  "/doe",
  "/contrate",
  "/who-we-are",
  "/hire-a-talent",
];

// Páginas novas que só existem em português (/en redireciona para /pt).
const ptOnly = new Set(["", "/impacto", "/sobre", "/doe", "/contrate"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}/pt${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/impacto" ? 0.9 : 0.7,
    // Páginas só em português não têm alternativa em inglês.
    ...(ptOnly.has(path)
      ? {}
      : {
          alternates: {
            languages: {
              "pt-BR": `${SITE_URL}/pt${path}`,
              en: `${SITE_URL}/en${path}`,
            },
          },
        }),
  }));
}
