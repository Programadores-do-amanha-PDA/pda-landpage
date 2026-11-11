// Conteúdo da Home. Fonte: docs/redesign/mockup-home.dc.html (prevalece) e docs/redesign/textos-site.md.
import type { LinkItem, RichLine, Segment } from "./types";
import { DOACAO_URL, FORMS, ROUTES, SOURCES } from "./links";

export const hero = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Produzimos" }],
    [{ text: "Riqueza na" }, { text: "base", mark: "bar" }],
    [{ text: "da pirâmide", mark: "bar" }],
  ] as RichLine[],
  lead: [
    { text: "Selecionamos nossos alunos entre os " },
    { text: "10% mais pobres", mark: "strong" },
    { text: " do Brasil e, em apenas " },
    { text: "3 anos", mark: "strong" },
    { text: ", eles alcançam a renda dos " },
    { text: "10% mais ricos", mark: "strong" },
    { text: "." },
  ] as Segment[],
  primaryCta: { label: "Patrocine a mobilidade", href: ROUTES.doe } as LinkItem,
  secondaryCta: {
    label: "Contrate um talento",
    href: ROUTES.empresas,
  } as LinkItem,
  image: {
    // [PENDENTE] Recorte provisório: trocar pelo original em alta resolução e confirmar autorização de imagem.
    // Sem a primeira fileira do mosaico, que tem os rostos cortados no arquivo provisório.
    src: "/assets/mosaico-alumni-hero.jpg",
    alt: "Mosaico com fotos de alumni da Programadores do Amanhã",
    width: 1074,
    height: 912,
  },
};

export const numbers = {
  label: "Números",
  items: [
    // [PENDENTE] Ano de fundação: o PDF diz 2019 e o site antigo diz 2021.
    { value: "2019", caption: "Ano de fundação", accent: true },
    { value: "+500", caption: "Jovens selecionados" },
    { value: "+100", caption: "Empresas já contrataram nossos talentos" },
    { value: "R$ 12M+", caption: "Em renda gerada pela rede alumni" },
  ],
  note: "Dados atualizados em outubro/2026.",
};

export const problem = {
  title: [
    { text: "No Brasil, a pobreza " },
    { text: "é herdada.", mark: "yellow" },
  ] as Segment[],
  lead: "Nascer na metade mais pobre do país ainda define até onde uma pessoa pode chegar. Existimos para quebrar esse ciclo em apenas uma geração.",
  stats: [
    {
      value: "1,8%",
      text: "É a chance de um jovem nascido na metade mais pobre do Brasil chegar aos 10% mais ricos.",
    },
    {
      value: "9 gerações",
      text: "É o tempo para uma família entre as 10% mais pobres chegar à renda média dos 50% mais ricos.",
    },
  ],
  closing: [
    { text: "Nós encurtamos esse caminho para " },
    { text: "3 anos.", mark: "bar" },
  ] as Segment[],
  sources: [
    {
      stat: "1,8%",
      name: "Atlas da Mobilidade Social",
      href: SOURCES.atlasMobilidade,
    },
    { stat: "9 gerações", name: "Global Social Mobility Index 2020" },
  ] as { stat: string; name: string; href?: string }[],
};

export const pillars = {
  // Decisão do time (nov/2026): sem o título "Mudamos a renda..." e só esta frase antes dos três quadros.
  lead: "Capacitamos jovens nas habilidades que as maiores empresas do Brasil exigem:",
  items: [
    {
      number: "01",
      title: "Inteligência Artificial",
      text: "Do primeiro prompt à orquestração de múltiplos agentes integrados a APIs e sistemas reais.",
    },
    {
      number: "02",
      title: "High Agency",
      text: "Autonomia, iniciativa e responsabilidade para aprender rápido e encontrar soluções em cenários de incerteza.",
    },
    {
      number: "03",
      title: "Empreendedorismo",
      text: "High Agency na prática: identificar oportunidades, construir soluções e testar ideias no mundo real.",
    },
  ],
};

/** Curva salarial dos alumni. Usada na Home e em /impacto. */
export const salaryCurve = {
  title: "Remuneração média por ano de trabalho",
  data: [
    { label: "Ano 0", value: 2423 },
    { label: "Ano 1", value: 2700 },
    { label: "Ano 2", value: 4833 },
    { label: "Ano 3", value: 8662 },
  ],
  reference: { label: "Top 10%", value: 8034 },
};

export const proof = {
  title: "Em 3 anos, a renda dos alumni mais que triplica",
  text: "R$ 2.423 no primeiro ano de trabalho. R$ 8.662 no terceiro, acima da linha dos 10% mais ricos do Brasil.",
  highlight: {
    value: "7 alumni",
    text: " já estão no top 5% mais rico do país, com idade média de 21 anos.",
  },
  cta: { label: "Veja nosso impacto", href: ROUTES.impacto } as LinkItem | null,
};

export const testimonial = {
  quote:
    "Foi um divisor de águas na minha vida. Entrei como estagiária no Itaú e, depois de 1 ano e 3 meses, fui efetivada como engenheira de software.",
  name: "Karen Francisco",
  details: "Turma 2 · Osasco, SP · Itaú Unibanco",
  // Recorte vertical 660 x 780 (3x o tamanho de exibição, 220 x 260).
  photo: {
    src: "/assets/karen-francisco.jpg",
    alt: "Karen Francisco sorrindo, sentada à mesa de trabalho",
  } as null | { src: string; alt: string },
  photoPlaceholder: "[FOTO KAREN]",
};

export const support = {
  title: "Como apoiar",
  cards: [
    {
      number: "01",
      title: "Patrocine a mobilidade social",
      text: "Sua doação, única ou recorrente, custeia a formação completa de jovens que, em 3 anos de carreira, superam a renda dos 10% mais ricos do Brasil.",
      cta: { label: "Quero doar", href: DOACAO_URL } as LinkItem,
      tone: "purple" as const,
    },
    {
      number: "02",
      title: "Contrate um talento",
      text: "Abra vagas de estágio, trainee ou analista júnior para a nossa comunidade. Profissionais formados em tecnologia, IA e inglês, com validação técnica e comportamental feita pela PdA.",
      cta: { label: "Quero contratar", href: ROUTES.empresas } as LinkItem,
      tone: "light" as const,
    },
  ],
};

export const partners = {
  title: "Quem já fez e faz acontecer",
  // [PENDENTE] Logos provisórios: mesma lista e ordem do site atual (mantenedores e parceiros).
  // onDark: true exibe o logo sobre fundo ink (para arquivos de logo branco).
  logos: [
    {
      name: "Méliuz",
      src: "/assets/maintainers/meliuz.png",
      width: 1279,
      height: 448,
    },
    {
      name: "Inter",
      src: "/assets/maintainers/inter.png",
      width: 1900,
      height: 482,
    },
    {
      name: "Movimento Bem Maior",
      src: "/assets/maintainers/movimento_bem_maior.png",
      width: 3508,
      height: 1086,
    },
    { name: "Dito", src: "/assets/partners/dito.png", width: 512, height: 512 },
    {
      name: "Instituto Eurofarma",
      src: "/assets/partners/eurofarma.png",
      width: 2540,
      height: 710,
    },
    {
      name: "iFood",
      src: "/assets/partners/ifood.jpg",
      width: 841,
      height: 595,
    },
    {
      name: "Instituto SYN",
      src: "/assets/partners/instituto_syn.png",
      width: 1455,
      height: 408,
    },
    {
      name: "Keeggo",
      src: "/assets/partners/keeggo.png",
      width: 292,
      height: 142,
    },
    {
      name: "Instituto Localiza",
      src: "/assets/partners/localiza.png",
      width: 3000,
      height: 1074,
    },
    {
      name: "Instituto Machado Meyer",
      src: "/assets/partners/machado_meyer.png",
      width: 2732,
      height: 723,
    },
    {
      name: "Onfly",
      src: "/assets/partners/onfly.png",
      width: 11812,
      height: 4725,
    },
    {
      name: "NetLex",
      src: "/assets/partners/netlex.png",
      width: 500,
      height: 250,
    },
    {
      name: "Sólides",
      src: "/assets/partners/solides.png",
      width: 1154,
      height: 284,
    },
    {
      name: "Thoughtworks",
      src: "/assets/partners/thoughtworks.png",
      width: 1703,
      height: 495,
    },
  ] as {
    name: string;
    src: string;
    width: number;
    height: number;
    onDark?: boolean;
  }[],
};

export const closing = {
  symbol: ">>>>>>>",
  statement:
    "Investimos em jovens que não vão só acompanhar o futuro do trabalho. Eles vão construí-lo.",
  primaryCta: { label: "Faça parte", href: DOACAO_URL } as LinkItem,
  secondaryCta: {
    label: "Quero me inscrever",
    href: FORMS.inscricao,
  } as LinkItem,
};
