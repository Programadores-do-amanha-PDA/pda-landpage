// Conteúdo da página /sobre. Fonte: docs/redesign/textos-site.md, seção "Quem somos (/sobre)".
import type { LinkItem, RichLine, Segment } from "./types";
import { CONTATO_EMAIL, CONTATO_MAILTO, MEDIA } from "./links";

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

export const formation = {
  title: "A formação",
  // [PENDENTE] Confirmar se a parceria com a Alura, citada no livro, segue ativa.
  items: [
    {
      title: "Programação e IA",
      text: "Formação prática, em squads, com metodologias ágeis, versionamento de código e projetos reais. A inteligência artificial atravessa toda a trilha.",
    },
    {
      title: "Inglês",
      text: "Aulas semanais focadas em comunicação no mercado tech e na etapa de inglês dos processos seletivos.",
    },
    {
      title: "Preparação para o mercado",
      text: "Soft skills semanais, portfólio, currículo e simulação completa de um processo seletivo tech, com feedback detalhado.",
    },
    {
      title: "Acompanhamento integral",
      text: "Encontros individuais periódicos para entender o contexto pessoal, profissional e familiar de cada jovem, com apoio financeiro, psicológico e de equipamentos quando necessário.",
    },
  ],
};

export const board = {
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
  ] as { name: string; role: string; photo: string | null }[],
};

export const seals = {
  title: "Selos e compromissos",
  items: [
    {
      name: "Selo BTG Soma",
      alt: "Selo de Confiança BTG Soma, turma 2022",
      src: "/assets/selos/btg-soma.jpg",
    },
    {
      name: "Pacto Global Rede Brasil",
      alt: "Pacto Global Rede Brasil",
      src: "/assets/selos/pacto-global.jpg",
    },
    {
      name: "Apoiadora do ODS 8 da ONU (Trabalho decente e crescimento econômico)",
      alt: "ODS 8: Trabalho decente e crescimento econômico",
      src: "/assets/selos/ods8.jpg",
    },
  ],
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
