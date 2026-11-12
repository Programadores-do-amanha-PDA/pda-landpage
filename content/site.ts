import type { LinkItem } from "./types";
import { CONTATO_EMAIL, CONTATO_MAILTO, FORMS, ROUTES, SOCIAL } from "./links";

export const site = {
  name: "Programadores do Amanhã",
  defaultTitle:
    "Programadores do Amanhã | Produzimos riqueza na base da pirâmide",
  defaultDescription:
    "Selecionamos nossos alunos entre os 10% mais pobres do Brasil e, em apenas 3 anos, eles alcançam a renda dos 10% mais ricos.",
  keywords:
    "programadores do amanhã, mobilidade social, baixa renda, tecnologia, programação, inteligência artificial, inglês, empregabilidade, ong, jovens",
  logo: {
    src: "/assets/Logo_PDA_Horizontal_FundoBranco.png",
    alt: "Programadores do Amanhã",
    // Tamanho de exibição (proporção do arquivo original 6040 x 1498).
    width: 178,
    height: 44,
  },
};

export const nav: { links: LinkItem[]; cta: LinkItem } = {
  links: [
    { label: "Impacto", href: ROUTES.impacto },
    { label: "Contrate um talento", href: ROUTES.contrate },
    { label: "Quem somos", href: ROUTES.sobre },
    { label: "Inscreva-se", href: FORMS.inscricao },
  ],
  cta: { label: "Doe", href: ROUTES.doe },
};

export const footer = {
  name: "Programadores do Amanhã",
  tagline: "Produzimos riqueza na base da pirâmide.",
  columns: [
    {
      title: "Sobre",
      links: [
        { label: "Quem somos", href: ROUTES.sobre },
        { label: "Impacto", href: ROUTES.impacto },
        { label: "Na mídia", href: ROUTES.naMidia },
        { label: "Transparência", href: ROUTES.transparencia },
      ],
    },
    {
      title: "Participe",
      links: [
        { label: "Doe", href: ROUTES.doe },
        { label: "Contrate um talento", href: ROUTES.contrate },
        { label: "Seja mentor", href: ROUTES.sejaMentor },
        { label: "Inscreva-se", href: FORMS.inscricao },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: SOCIAL.instagram },
        { label: "LinkedIn", href: SOCIAL.linkedin },
        { label: "Medium", href: SOCIAL.medium },
      ],
    },
    {
      title: "Contato",
      links: [{ label: CONTATO_EMAIL, href: CONTATO_MAILTO }],
    },
  ] as { title: string; links: LinkItem[] }[],
  seals: [
    {
      name: "Selo de Confiança BTG Soma, turma 2022",
      src: "/assets/selos/btg-soma.jpg",
    },
    { name: "Pacto Global Rede Brasil", src: "/assets/selos/pacto-global.jpg" },
    {
      name: "ODS 8: Trabalho decente e crescimento econômico",
      src: "/assets/selos/ods8.jpg",
    },
  ],
  legal:
    "Programadores do Amanhã · CNPJ 44.641.193/0001-35 · Todos os direitos reservados.",
};

/** Aviso de cookies do Google Analytics (components/analytics/CookieBanner). */
export const cookieBanner = {
  text: "Usamos cookies do Google Analytics para medir as visitas ao site e o resultado dos nossos anúncios. Você pode aceitar ou recusar.",
  accept: "Aceitar",
  decline: "Recusar",
};
