// Conteúdo da página /sobre. Fonte: docs/redesign/textos-site.md, seção "Quem somos (/sobre)".
import type { LinkItem, RichLine } from "./types";
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

export const history = {
  title: "Nossa história",
  // [PENDENTE] Texto a revisar pelo time.
  text: "Começamos com uma pergunta: por que um jovem talentoso da base da pirâmide leva gerações para mudar de renda? A resposta estava no acesso. Desde então, mais de 500 jovens de 24 estados foram selecionados, mais de 100 empresas contrataram nossos talentos e a rede alumni já gerou mais de R$ 12 milhões em renda.",
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
  // [PENDENTE] Trocar por matérias de 2025 e 2026 quando chegarem.
  // onDark: logo exibido sobre fundo ink.
  items: [
    { name: "Brazil Journal", src: "/assets/news/braziljournal.png", href: MEDIA.brazilJournal },
    { name: "iFood", src: "/assets/partners/ifood.jpg", href: MEDIA.ifood },
    { name: "O Dia", src: "/assets/news/odia.webp", href: MEDIA.oDia },
    { name: "Onfly", src: "/assets/partners/onfly.png", href: MEDIA.onfly },
    { name: "Preta Joia", src: "/assets/news/pretajoia.jpg", href: MEDIA.pretaJoia },
    { name: "Guia de TI", src: "/assets/news/guiadeti.png", href: MEDIA.guiaDeTi, onDark: true },
    {
      name: "Comitê pela Cidadania",
      src: "/assets/news/comitepelacidadania.png",
      href: MEDIA.comiteCidadania,
    },
    { name: "Alô Alô Bahia", src: "/assets/news/aloalobahia.png", href: MEDIA.aloAloBahia, onDark: true },
    // O site antigo exibia este vídeo com o logo do Méliuz.
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
