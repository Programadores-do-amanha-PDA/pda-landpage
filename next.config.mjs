import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // O subdomínio de doação (antigo site do Tilda) leva para a página /doe.
        source: "/:path*",
        has: [{ type: "host", value: "doe.programadoresdoamanha.org.br" }],
        destination: "https://programadoresdoamanha.org.br/pt/doe",
        permanent: true,
      },
      {
        // A raiz vai sempre para /pt. Permanente (308) para o Google tratar /pt como o
        // endereço da Home; sem isso o next-intl redireciona com 307.
        source: "/",
        destination: "/pt",
        permanent: true,
      },
      {
        // As páginas novas só existem em português.
        source: "/en",
        destination: "/pt",
        permanent: true,
      },
      {
        source: "/en/:page(impacto|sobre|doe|contrate)",
        destination: "/pt/:page",
        permanent: true,
      },
      {
        // "Contrate um talento" saiu de /empresas para /contrate (nov/2026). O redirect é
        // temporário porque /empresas vai virar a página de empresas que querem doar.
        source: "/:locale(pt|en)/empresas",
        destination: "/pt/contrate",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        destination: "/pt/who-we-are",
        source: "/pt/quem-somos",
      },
      {
        destination: "/pt/hire-a-talent",
        source: "/pt/contrate-um-talento",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
