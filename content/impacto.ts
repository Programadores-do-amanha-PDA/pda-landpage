// Conteúdo da página /impacto. Fonte: docs/redesign/textos-site.md, seção "Impacto (/impacto)".
import type { LinkItem, RichLine, Segment } from "./types";
import { ROUTES } from "./links";
import { testimonial as karenTestimonial } from "./home";

export const meta = {
  title: "Impacto | Programadores do Amanhã",
  description:
    "Números reais, histórias reais. Selecionamos nossos alunos entre os 10% mais pobres do Brasil e, em apenas 3 anos, eles alcançam a renda dos 10% mais ricos.",
};

export const opening = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Números reais." }],
    [{ text: "Histórias reais.", mark: "bar" }],
  ] as RichLine[],
  lead: [
    { text: "Selecionamos nossos alunos entre os " },
    { text: "10% mais pobres", mark: "strong" },
    { text: " do Brasil. Em apenas " },
    { text: "3 anos", mark: "strong" },
    { text: ", eles alcançam a renda dos " },
    { text: "10% mais ricos", mark: "strong" },
    { text: "." },
  ] as Segment[],
};

export const pyramid = {
  title: "A pirâmide de renda no Brasil",
  text: [
    { text: "Apenas " },
    { text: "10%", mark: "strong" },
    { text: " da população brasileira tem remuneração mensal a partir de " },
    { text: "R$\u00a08.034", mark: "strong" },
    { text: "." },
  ] as Segment[],
  /** Destaque abaixo do texto da pirâmide. */
  stat: {
    value: "Top 5%",
    text: "7 alumni já estão no top 5% mais rico do Brasil. Com idade média de 21 anos, esse grupo tem renda superior a R$\u00a010.313.",
  },
  chartTitle: "Remuneração mensal no Brasil",
  /** De cima para baixo. highlight marca a faixa dos 10% mais ricos. */
  levels: [
    { label: "Top 1%", value: 21767 },
    { label: "Top 5%", value: 10313 },
    { label: "Top 10%", value: 8034, highlight: true },
    { label: "Média do Brasil", value: 2020 },
    { label: "Jovens de 18 a 24 anos", value: 1726 },
  ] as { label: string; value: number; highlight?: boolean }[],
  note: "A largura de cada faixa indica a posição na pirâmide, não o valor.",
  sources: [
    "IBGE, por meio da PNAD Contínua – Rendimento de Todas as Fontes, com dados de 2024",
  ],
};

export const curve = {
  // Mesma frase da Home (seção "A prova").
  title: "Em 3 anos, a renda dos alumni mais que triplica",
  text: "R$ 2.423 no primeiro ano de trabalho. R$ 8.662 no terceiro, acima da linha dos 10% mais ricos do Brasil.",
};

export const highlights = {
  label: "Destaques",
  items: [
    {
      value: "R$ 12M+",
      text: "De renda acumulada gerada pela rede alumni que ingressou no mercado de tecnologia.",
    },
    {
      value: "+400%",
      text: "De aumento na renda familiar em dezenas de casos.",
    },
    {
      value: "24 estados",
      text: "Nossos alunos vêm de 24 estados, de mais de 100 municípios e de todas as regiões do país.",
    },
  ] as { value: string; text: string; placeholder?: string }[],
  note: "Dados atualizados em outubro/2026.",
};

type Photo = { src: string; alt: string } | null;

export const stories = {
  title: "Cada rosto é uma trajetória",
  /** Subtítulo: empregabilidade. */
  subtitle: [
    { text: "Desde a formatura da primeira turma, empregamos em média " },
    { text: "um jovem por semana", mark: "strong" },
    { text: ", em mais de 100 empresas." },
  ] as Segment[],
  // [PENDENTE] Fotos dos alumni e textos do verso dos cards.
  // Sem foto ou sem texto, o card mostra um placeholder visível.
  people: [
    { name: "Ingrid Dias", turma: "Turma 1", city: "Belo Horizonte, MG", company: "Mercado Livre", photo: null },
    {
      name: "Karen Francisco",
      turma: "Turma 2",
      city: "Osasco, SP",
      company: "Itaú Unibanco",
      photo: {
        src: "/assets/karen-francisco.jpg",
        alt: "Karen Francisco sorrindo, sentada à mesa de trabalho",
      },
      // Mesmo depoimento da Home.
      story: karenTestimonial.quote,
    },
    { name: "Isaque Cascaes", turma: "Turma 2", city: "Belém, PA", company: "S.O.S Software", photo: null },
    { name: "Diego Nascimento", turma: "Turma 3", city: "São Paulo, SP", company: "Lefosse Advogados", photo: null },
    { name: "Débora Moura", turma: "Turma 3", city: "São Vicente, SP", company: "Localiza", photo: null },
    { name: "Adilson Junior", turma: "Turma 3", city: "São Paulo, SP", company: "XP Inc.", photo: null },
    { name: "Danielle Santos", turma: "Turma 3", city: "Belo Horizonte, MG", company: "KPMG", photo: null },
    { name: "Clayton Bahia", turma: "Turma 5", city: "Salvador, BA", company: "Aura Brasil", photo: null },
  ] as {
    name: string;
    turma: string;
    city: string;
    company: string;
    photo: Photo;
    /** Texto do verso do card. */
    story?: string;
  }[],
};

export const deboraTestimonial = {
  quote:
    "Antes da PdA eu ainda não tinha uma paixão profissional. O diferencial da PdA, para mim, é justamente essa ponte entre o aprendizado técnico e a preparação para o mercado real.",
  name: "Débora Moura",
  details: "Turma 3 · São Vicente, SP · Localiza",
  // [PENDENTE] Foto da Débora.
  photo: null as Photo,
  photoPlaceholder: "[FOTO DÉBORA]",
};

export const firstSalary = {
  title: "O que eles fizeram com o primeiro salário",
  quotes: [
    {
      quote:
        "Fiz uma compra imensa em casa. Realizei o meu sonho, que era encher o carrinho.",
      name: "Clayton Bahia",
      details: "Salvador, BA",
    },
  ],
  // [PENDENTE] Selecionar mais 2 ou 3 frases sobre o primeiro salário no livro de cases.
  placeholders: [
    "[FRASE SOBRE O PRIMEIRO SALÁRIO]",
    "[FRASE SOBRE O PRIMEIRO SALÁRIO]",
  ],
};

export const permanence = {
  title: "A tecnologia transforma quando a dignidade vem junto",
  lead: "Durante toda a formação, cada jovem é acompanhado de perto, com apoio financeiro, emocional e estrutural para não desistir.",
  items: [
    { value: "+4.000 horas", text: "De sessões de terapia" },
    { value: "+R$ 150 mil", text: "Em auxílio financeiro para a renda familiar" },
    { value: "+300", text: "Notebooks entregues" },
    { value: "+100", text: "Jovens apoiados com internet" },
  ],
  note: "Dados atualizados em outubro/2026.",
  cta: { label: "Apoie a próxima turma", href: ROUTES.doe } as LinkItem,
};
