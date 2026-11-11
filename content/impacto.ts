// Conteúdo da página /impacto. Fonte: docs/redesign/textos-site.md, seção "Impacto (/impacto)".
import type { LinkItem, RichLine, Segment } from "./types";
import { ROUTES } from "./links";

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
  chartTitle: "Renda mensal dos trabalhadores brasileiros",
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
  // Fonte: formulário "O Primeiro Sim" (fotos e histórias enviadas pelos alumni).
  // Os textos são trechos resumidos das respostas, nas palavras de cada pessoa.
  // [PENDENTE] Confirmar a autorização de uso de imagem no site de todas as pessoas.
  people: [
    {
      name: "Anselmo Dias",
      turma: "Turma 3",
      city: "Areia Branca, SE",
      company: "MTM Tecnologia",
      photo: { src: "/assets/alumni/anselmo.jpg", alt: "Retrato de Anselmo Dias" },
      story:
        "Todas as noites e finais de semana que passei estudando em vez de sair valeram a pena. Cada erro virou uma lição que me aproximou da minha primeira vaga.",
    },
    {
      name: "Gabriela Reis",
      turma: "Turma 3",
      city: "Belo Horizonte, MG",
      company: "Hotmart",
      photo: { src: "/assets/alumni/gabriela.jpg", alt: "Retrato de Gabriela Reis sorrindo" },
      story:
        "Uma longa jornada que valeu cada passo. Minha história prova que o sucesso não se limita a lugares ou origens, mas à força de vontade de cada um.",
    },
    {
      name: "Débora Moura",
      turma: "Turma 3",
      city: "São Vicente, SP",
      company: "Localiza",
      photo: { src: "/assets/alumni/debora.jpg", alt: "Débora Moura sorrindo, com a mão apoiada no rosto" },
      story:
        "Foram muitos “nãos”, um processo longo e momentos em que quis desistir. Mas finalmente chegou o tão sonhado “sim”! A PdA foi uma verdadeira ponte nessa jornada.",
    },
    {
      name: "Renan Oliveira",
      turma: "Turma 3",
      city: "São Paulo, SP",
      company: "BCG X",
      photo: { src: "/assets/alumni/renan.jpg", alt: "Retrato de Renan Oliveira, de óculos" },
      story:
        "Receber a aprovação do BCG foi a melhor notícia do meu mês. Ver as metas que tracei quando comecei a estudar programação com a PdA darem resultado é gratificante.",
    },
    {
      name: "Victória Santos",
      turma: "Turma 3",
      city: "Duque de Caxias, RJ",
      company: "BTG Pactual",
      photo: { src: "/assets/alumni/victoria.jpg", alt: "Retrato de Victória Santos" },
      story:
        "Me sinto aliviada e agradecida. Foi na PdA que percebi que, além das hard skills, era importante tirar um tempo para me conhecer e evoluir minhas soft skills.",
    },
    {
      name: "Diogo Silva",
      turma: "Turma 4",
      city: "João Pessoa, PB",
      company: "Indicium",
      photo: { src: "/assets/alumni/diogo.jpg", alt: "Retrato de Diogo Silva sorrindo, de óculos" },
      story:
        "O tão esperado “sim” chegou! Dados e IA sempre foram minha paixão, e a PdA me direcionou para esse processo seletivo. Transformou um caminho difícil em um percurso mais leve.",
    },
    {
      name: "Larissa Oliveira",
      turma: "Turma 4",
      city: "Diadema, SP",
      company: "Telefônica Vivo",
      photo: { src: "/assets/alumni/larissa.jpg", alt: "Retrato de Larissa Oliveira sorrindo, de óculos" },
      story:
        "Não importa quantos currículos a gente envie ou quantas entrevistas faça: o “sim” um dia chega. Se vocês não perderem a esperança, o de vocês também chega.",
    },
    {
      name: "Thauan Carneiro",
      turma: "Turma 6",
      city: "Sobral, CE",
      company: "CloudWalk",
      photo: { src: "/assets/alumni/thauan.jpg", alt: "Retrato de Thauan Carneiro, de óculos e camiseta preta" },
      story:
        "Era minha última tentativa nessa área. Quando a notícia veio, minha mãe disse: “Agora a gente pode comer qualquer coisa que der vontade”. Parece simples, mas não tinha preço.",
    },
    {
      name: "Maria Alice Miranda",
      turma: "Turma 6",
      city: "Sobradinho, BA",
      company: "Aoop Cloud Solutions",
      photo: { src: "/assets/alumni/maria-alice.jpg", alt: "Retrato de Maria Alice Miranda, de óculos" },
      story:
        "Conseguir minha primeira vaga em tecnologia aos 18 anos era algo que eu nunca imaginei. Caí de paraquedas na programação, e a PdA foi a minha grande porta de entrada.",
    },
    {
      name: "Maria Eduarda Souza",
      turma: "Turma 6",
      city: "São Paulo, SP",
      company: "Cielo",
      photo: { src: "/assets/alumni/maria-eduarda.jpg", alt: "Retrato de Maria Eduarda Souza, de óculos" },
      story:
        "Vim da periferia, onde as oportunidades nem sempre aparecem. Foram horas estudando, errando e recomeçando. Essa vaga é só o começo, e quero mostrar que quem vem de onde eu vim pode chegar longe.",
    },
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
