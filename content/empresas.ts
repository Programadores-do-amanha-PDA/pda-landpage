// Conteúdo da página /empresas. Fonte: docs/redesign/textos-site.md, seção "Para empresas (/empresas)".
// Patrocínio sem valores de planos, sem parcelamento e sem o trecho do RIR: o benefício fiscal
// aparece só de forma genérica (decisão do time).
import type { LinkItem, RichLine } from "./types";
import { FORMS } from "./links";

export const meta = {
  title: "Para empresas | Programadores do Amanhã",
  description:
    "Mais de 100 empresas já contrataram jovens formados pela Programadores do Amanhã em programação, inteligência artificial e inglês. Contrate um talento ou apoie a formação.",
};

/**
 * [PENDENTE] O Google Forms de empresas ainda não existe. Enquanto FORMS.empresas for "#",
 * a página mostra este aviso junto dos botões. Ao colocar o link em content/links.ts, o aviso some.
 */
export const formsPendente =
  FORMS.empresas === "#" ? "[LINK DO GOOGLE FORMS DE EMPRESAS]" : null;

/** Âncora da seção "Apoie a formação". */
export const APOIE_ID = "apoie";

export const hero = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Contrate um talento." }],
    [{ text: "Mude uma" }, { text: "vida.", mark: "bar" }],
  ] as RichLine[],
  lead: "Mais de 100 empresas já contrataram jovens formados pela PdA em programação, inteligência artificial e inglês.",
  primaryCta: { label: "Quero contratar", href: FORMS.empresas } as LinkItem,
  secondaryCta: { label: "Quero apoiar", href: `#${APOIE_ID}` } as LinkItem,
};

export const hire = {
  title: "Talentos prontos para o seu time",
  lead: "Abra vagas de estágio, trainee ou analista júnior para a nossa comunidade. Cada pessoa passa por validação técnica e comportamental da PdA antes da indicação: menos custo de seleção, mais aderência à vaga.",
  skills: [
    "Programação e inteligência artificial aplicada, de prompts a agentes integrados a sistemas reais",
    "Inglês para o mercado tech",
    "High Agency: autonomia, iniciativa e responsabilidade",
    "Experiência em squads, com metodologias ágeis e projetos reais",
  ],
  logosTitle: "Empresas que já contrataram",
  // [PENDENTE] Lista e logos das empresas que contrataram: confirmar quais podem aparecer.
  logosPlaceholder: "[LOGOS DAS EMPRESAS QUE JÁ CONTRATARAM]",
  cta: { label: "Abrir uma vaga", href: FORMS.empresas } as LinkItem,
};

export const support = {
  id: APOIE_ID,
  title: "Sua empresa como motor da mobilidade social",
  lead: "O apoio da sua empresa custeia diretamente a formação completa de jovens que, em 3 anos de carreira, superam a renda dos 10% mais ricos do Brasil. Você pode patrocinar uma turma inteira.",
  benefitsTitle: "O que sua empresa recebe",
  benefits: [
    {
      number: "01",
      title: "Employer branding",
      text: "Sua marca nos posts e no mailing da PdA e em ações de PR conjuntas ligadas à inclusão na tecnologia.",
    },
    {
      number: "02",
      title: "Acesso a talentos",
      text: "Pipeline de pessoas formadas e validadas pela PdA antes da contratação.",
    },
    {
      number: "03",
      title: "Relatório de impacto ESG",
      text: "Material pronto para o seu relatório: indicadores de impacto social, jovens formados e empregabilidade gerada. Apoio alinhado ao ODS 8 da ONU.",
    },
    {
      number: "04",
      title: "Benefício fiscal",
      text: "Empresas no regime de Lucro Real podem deduzir o investimento social do imposto de renda devido.",
    },
  ],
  note: "Planos e condições de patrocínio são apresentados em conversa com nosso time.",
  cta: { label: "Falar com a PdA", href: FORMS.empresas } as LinkItem,
};
