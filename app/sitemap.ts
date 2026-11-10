import type { MetadataRoute } from "next";

import { SITE_URL } from "@/content/links";

// Adicionar /pt/impacto, /pt/empresas, /pt/doe e /pt/sobre conforme forem publicadas.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/pt`, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/pt/who-we-are`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/pt/hire-a-talent`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
