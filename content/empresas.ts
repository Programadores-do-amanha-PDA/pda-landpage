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
  // Lista aprovada pelo time (nov/2026). Logos da Wikimedia Commons, exceto Onfly (arquivo do site)
  // e Mercado Livre (arquivo enviado pelo time).
  logos: [
    { name: "BTG Pactual", src: "/assets/contrataram/btg-pactual.svg", width: 398, height: 158 },
    { name: "Oracle", src: "/assets/contrataram/oracle.svg", width: 231, height: 30 },
    { name: "Inter", src: "/assets/contrataram/inter.svg", width: 500, height: 127 },
    { name: "XP Investimentos", src: "/assets/contrataram/xp-investimentos.png", width: 599, height: 131 },
    { name: "Localiza", src: "/assets/contrataram/localiza.svg", width: 120, height: 24 },
    { name: "Onfly", src: "/assets/partners/onfly.png", width: 11812, height: 4725 },
    { name: "Hotmart", src: "/assets/contrataram/hotmart.svg", width: 5280, height: 2048 },
    { name: "Itaú", src: "/assets/contrataram/itau.svg", width: 500, height: 500 },
    { name: "BV", src: "/assets/contrataram/bv.svg", width: 92, height: 64 },
    { name: "Mercado Livre", src: "/assets/contrataram/mercado-livre.png", width: 948, height: 796 },
  ] as { name: string; src: string; width: number; height: number }[],
  cta: { label: "Abrir uma vaga", href: FORMS.empresas } as LinkItem,
};
