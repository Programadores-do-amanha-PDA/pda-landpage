/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        destination: "/support-a-student",
        source: "/apoie-um-aluno",
      },
      {
        destination: "/students/:slug",
        source: "/alunos/:slug",
      },
      {
        destination: "/students/:slug/my-links",
        source: "/alunos/:slug/meus-links",
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
};

export default nextConfig;
