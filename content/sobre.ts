// Conteúdo da página /sobre. Fonte: docs/redesign/textos-site.md, seção "Quem somos (/sobre)".
import type { LinkItem, RichLine, Segment } from "./types";
import { CONTATO_EMAIL, CONTATO_MAILTO, DOCUMENTOS, MEDIA } from "./links";

export const meta = {
  title: "Quem somos | Programadores do Amanhã",
  description:
    "Nós somos escola, mas também somos ponte. Desde 2019, a Programadores do Amanhã forma jovens de baixa renda nas habilidades que as maiores empresas do Brasil exigem e conecta esses talentos ao mercado de tecnologia.",
};

export const hero = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Nós somos escola," }],
    [{ text: "mas também somos" }, { text: "ponte", mark: "bar" }],
  ] as RichLine[],
  // Ano de fundação: decisão do time (nov/2026) de publicar 2019, como no PDF.
  lead: "Desde 2019, a Programadores do Amanhã forma jovens de baixa renda nas habilidades que as maiores empresas do Brasil exigem e conecta esses talentos ao mercado de tecnologia.",
};

// Missão e valores no lugar de "Nossa história" (decisão do time, nov/2026).
export const mission = {
  title: "Nossa missão",
  text: [
    {
      text: "Em parceria com algumas das maiores empresas de tecnologia do Brasil e institutos filantrópicos, nossa ",
    },
    { text: "missão é gerar renda e empregabilidade", mark: "strong" },
    {
      text: " através da conquista da primeira vaga de emprego de jovens de todas as regiões do Brasil.",
    },
  ] as Segment[],
  valuesTitle: "Nossos valores",
  // Títulos dos valores publicados em /who-we-are; textos revisados pelo time (nov/2026).
  values: [
    {
      title: "Impacto em primeiro lugar",
      text: "Existimos para gerar renda e perspectiva de futuro para a juventude de baixa renda. Todas as nossas ações são focadas em qualificar e preparar os jovens para o mercado de trabalho. Pois sabemos que quando um jovem estudante se emprega, toda a sua estrutura familiar é impactada, contribuindo assim para o encerramento da pobreza geracional.",
    },
    {
      title: "Fazemos juntos",
      text: "Entendemos que os desafios são coletivos e que juntos somos mais capazes. Nos apoiamos porque nos importamos com cada pessoa que compartilha a jornada conosco. Sabemos que nossos desafios são grandes, mas que juntos podemos tornar a jornada individual mais leve e satisfatória.",
    },
    {
      title: "Genuinamente apaixonados",
      text: "Somos genuinamente apaixonados pelo que fazemos porque entendemos que somos os meios para a mudança social que queremos ver para toda a juventude de baixa renda no Brasil.",
    },
    {
      title: "Responsabilidade com os resultados",
      text: "Sempre buscamos criar novas soluções e formas de aumentar nosso impacto. Testamos e aprendemos com os resultados, nos apoiando em dados e indicadores para entender como evoluir.",
    },
  ],
};

export type BoardMember = {
  name: string;
  /** Opcional: o conselho fiscal aparece só com o nome. */
  role?: string;
  /** null mostra o placeholder [FOTO]. */
  photo: string | null;
};

/** Conselhos e time aparecem em ordem alfabética pelo nome (decisão do time, nov/2026). */
const byName = (a: BoardMember, b: BoardMember) =>
  a.name.localeCompare(b.name, "pt-BR");

export const boards = [
  {
    id: "conselho-administracao",
    title: "Conselho de administração",
    members: [
      {
        name: "Mônica Hauck",
        role: "Cofundadora da Sólides",
        photo: "/assets/advice/Monica_Hauck.jpeg",
      },
      {
        name: "Robson Privado",
        role: "Cofundador da MadeiraMadeira",
        photo: "/assets/advice/Robson_Privado.jpeg",
      },
      {
        name: "Victor Salles",
        role: "Cofundador da Proteus Academy",
        photo: "/assets/advice/Victor_Salles.jpeg",
      },
      {
        name: "Lucas Marques",
        role: "Fundador da Shiva",
        photo: "/assets/advice/Lucas_Marques.jpeg",
      },
    ].sort(byName) as BoardMember[],
  },
  {
    id: "conselho-fiscal",
    title: "Conselho fiscal",
    // Mesmos membros publicados em /who-we-are.
    members: [
      { name: "Fabiana Bacelar", photo: "/assets/advice/Fabiana_Bacelar.jpeg" },
      { name: "Gilvan Bueno", photo: "/assets/advice/Gilvan_Bueno.jpeg" },
      { name: "Larissa Calixto", photo: "/assets/advice/Larissa_Calixto.jpeg" },
    ].sort(byName) as BoardMember[],
  },
  {
    id: "nosso-time",
    title: "Nosso time",
    members: [
      {
        name: "Beatriz Meigger",
        role: "Gerente de Impacto",
        photo: "/assets/team/Beatriz_Meigger.jpg",
      },
      {
        name: "Cleber Guedes",
        role: "Diretor executivo",
        photo: "/assets/team/Cleber_Guedes.jpg",
      },
      {
        name: "Letícia Silveira",
        role: "Gerente de Desenvolvimento Institucional",
        photo: "/assets/team/Leticia_Silveira.png",
      },
      {
        name: "Thauana Miranda",
        role: "Conselheira de carreira",
        photo: "/assets/team/Thauana_Miranda.png",
      },
    ].sort(byName) as BoardMember[],
  },
];

export const transparency = {
  title: "Transparência",
  // Adaptado do banner de transparência de /who-we-are.
  lead: "Acreditamos que a transparência é fundamental para construir confiança e fortalecer nossos laços com nossos apoiadores.",
  // Para publicar um documento novo (ex.: auditoria de 2025), adicione um item ao grupo
  // e o link em DOCUMENTOS (content/links.ts).
  groups: [
    {
      title: "Auditoria e demonstrações contábeis",
      documents: [
        {
          label: "Certificado de auditoria contábil 2024",
          href: DOCUMENTOS.auditoria2024,
        },
        {
          label: "Demonstrações contábeis 2024",
          href: DOCUMENTOS.demonstracoes2024,
        },
      ],
    },
    {
      title: "Estatuto e atas",
      documents: [
        { label: "Estatuto social", href: DOCUMENTOS.estatuto },
        { label: "Ata de eleição 2024", href: DOCUMENTOS.ataEleicao2024 },
      ],
    },
  ] as { title: string; documents: LinkItem[] }[],
};

export const media = {
  title: "Na mídia",
  // Só o logo do veículo, com link para a matéria (decisão do time, nov/2026).
  // Lista e ordem definidas pelo time (nov/2026). onDark: logo exibido sobre fundo ink.
  items: [
    { name: "Brazil Journal", src: "/assets/news/braziljournal.png", href: MEDIA.brazilJournal },
    { name: "iFood", src: "/assets/partners/ifood.jpg", href: MEDIA.ifood },
    { name: "Onfly", src: "/assets/partners/onfly.png", href: MEDIA.onfly },
    // Vídeo no YouTube; o site antigo já o exibia com o logo do Méliuz.
    {
      name: "Méliuz (vídeo no YouTube)",
      src: "/assets/maintainers/meliuz.png",
      href: MEDIA.youtube,
    },
  ] as { name: string; src: string; href: string; onDark?: boolean }[],
};

export const contact = {
  title: "Contato",
  cta: { label: CONTATO_EMAIL, href: CONTATO_MAILTO } as LinkItem,
};
