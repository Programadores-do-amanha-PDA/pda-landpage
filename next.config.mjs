import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
