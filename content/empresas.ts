// Conteúdo da página /empresas. Fonte: docs/redesign/textos-site.md, seção "Para empresas (/empresas)".
// Decisão do time (nov/2026): a página fala só de contratar talentos ("Contrate um talento").
// O apoio de empresas (patrocínio) vai para uma página própria no futuro.
import type { LinkItem, RichLine } from "./types";
import { FORMS } from "./links";

export const meta = {
  title: "Contrate um talento | Programadores do Amanhã",
  description:
    "Mais de 100 empresas já contrataram jovens formados pela Programadores do Amanhã em programação, inteligência artificial e inglês. Contrate um talento para o seu time.",
};

export const hero = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Contrate um talento." }],
    [{ text: "Mude uma" }, { text: "vida.", mark: "bar" }],
  ] as RichLine[],
  lead: "Mais de 100 empresas já contrataram jovens formados pela PdA em programação, inteligência artificial e inglês.",
  cta: { label: "Quero contratar", href: FORMS.empresas } as LinkItem,
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
