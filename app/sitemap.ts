import type { MetadataRoute } from "next";

const SITE_URL = "https://programadoresdoamanha.org.br";

// Rotas públicas reais do site, em português e inglês.
const paths = ["", "/who-we-are", "/hire-a-talent"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}/pt${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: {
      languages: {
        "pt-BR": `${SITE_URL}/pt${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
  }));
}
