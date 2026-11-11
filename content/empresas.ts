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
  // Lista aprovada pelo time (nov/2026). [PENDENTE] Os arquivos foram recortados de uma imagem
  // de apresentação, em baixa resolução: trocar pelos logos originais quando houver.
  logos: [
    { name: "BTG Pactual", src: "/assets/contrataram/btg-pactual.png", width: 137, height: 55 },
    { name: "Oracle", src: "/assets/contrataram/oracle.png", width: 158, height: 21 },
    { name: "Inter", src: "/assets/contrataram/inter.png", width: 195, height: 50 },
    { name: "XP Investimentos", src: "/assets/contrataram/xp-investimentos.png", width: 172, height: 39 },
    { name: "Localiza", src: "/assets/contrataram/localiza.png", width: 195, height: 39 },
    { name: "Onfly", src: "/assets/contrataram/onfly.png", width: 156, height: 48 },
    { name: "Hotmart", src: "/assets/contrataram/hotmart.png", width: 159, height: 52 },
    { name: "Itaú", src: "/assets/contrataram/itau.png", width: 57, height: 58 },
    { name: "BV", src: "/assets/contrataram/bv.png", width: 68, height: 50 },
    { name: "Mercado Livre", src: "/assets/contrataram/mercado-livre.png", width: 85, height: 70 },
  ] as { name: string; src: string; width: number; height: number }[],
  cta: { label: "Abrir uma vaga", href: FORMS.empresas } as LinkItem,
};
