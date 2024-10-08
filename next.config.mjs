/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        destination: "/support-a-student",
        source: "/apoie-um-aluno",
      },
      {
        destination: "/who-we-are",
        source: "/quem-somos",
      },
      {
        destination: "/hire-a-talent",
        source: "/contrate-um-talento",
      },
    ];
  },

  images: {
    domains: ["www.gravatar.com"],
  },
};

export default nextConfig;
