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
