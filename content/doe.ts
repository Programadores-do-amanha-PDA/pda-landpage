// Conteúdo da página /doe. Fonte: docs/redesign/textos-site.md, seção "Doe (/doe)",
// com as decisões do time (nov/2026): doação pelo pop-up da Doare, botões de valor
// R$ 30 / R$ 100 / R$ 500 / Outro valor, sem os widgets da campanha e sem a seção de mentoria.
import type { RichLine, Segment } from "./types";
import { DOARE, SOURCES } from "./links";

export const meta = {
  title: "Doe | Programadores do Amanhã",
  description:
    "Um jovem nascido na metade mais pobre do Brasil tem 1,8% de chance de chegar ao topo. Com a sua doação, esse caminho leva 3 anos. Doe para a Programadores do Amanhã.",
};

/** Botão que abre um pop-up da Doare. */
export type DonateAction = { label: string; payboxId: string };

export const hero = {
  /** Cada item é uma linha do título. */
  title: [
    [{ text: "Patrocine a" }],
    [{ text: "mobilidade social", mark: "bar" }],
  ] as RichLine[],
  lead: [
    { text: "Um jovem nascido na metade mais pobre do Brasil tem " },
    { text: "1,8% de chance", mark: "strong" },
    { text: " de chegar ao topo. Com a sua doação, esse caminho leva " },
    { text: "3 anos", mark: "strong" },
    { text: "." },
  ] as Segment[],
  cta: { label: "Doar agora", payboxId: DOARE.payboxId.geral } as DonateAction,
  source: {
    stat: "1,8%",
    name: "Atlas da Mobilidade Social",
    href: SOURCES.atlasMobilidade,
  },
};

export const destination = {
  title: "Para onde vai a sua doação",
  lead: "Sua contribuição custeia diretamente a formação completa de jovens de baixa renda:",
  items: [
    "Aulas de programação, inteligência artificial, inglês e soft skills",
    "Acompanhamento individual e sessões de terapia durante toda a formação",
    "Notebook, internet e auxílio financeiro para quem precisa",
    "Preparação para processos seletivos e conexão com empresas",
  ],
};

export const ways = {
  title: "Formas de doar",
  options: [
    {
      title: "Doação recorrente",
      text: "Você apoia todos os meses e garante a continuidade das turmas.",
    },
    {
      title: "Doação única",
      text: "Uma contribuição pontual, no valor que fizer sentido para você.",
    },
  ],
  amountsTitle: "Escolha um valor",
  // Descrições do site anterior, revisadas e aprovadas pelo time (nov/2026).
  amounts: [
    {
      value: "R$ 30",
      text: "Ajuda a custear o suporte terapêutico.",
      action: { label: "Doar R$ 30", payboxId: DOARE.payboxId.cota30 },
    },
    {
      value: "R$ 100",
      text: "Ajuda a custear notebook e internet.",
      action: { label: "Doar R$ 100", payboxId: DOARE.payboxId.cota100 },
    },
    {
      value: "R$ 500",
      text: "Contribui para a formação completa de um jovem.",
      action: { label: "Doar R$ 500", payboxId: DOARE.payboxId.cota500 },
    },
    {
      value: "Outro valor",
      text: "O valor que fizer sentido para você.",
      action: {
        label: "Quero doar",
        payboxId: DOARE.payboxId.outroValor,
      },
    },
  ] as { value: string; text: string; action: DonateAction }[],
  note: "As doações são processadas com segurança pela Doare.",
  legal: [
    { label: "Termos de uso", href: DOARE.termos },
    { label: "Política de privacidade", href: DOARE.privacidade },
  ],
};

export const result = {
  title: "O resultado",
  stats: [
    { value: "R$ 12M+", text: "em renda gerada pela rede alumni." },
    {
      value: "7 alumni",
      text: "já no top 5% mais rico do Brasil, com idade média de 21 anos.",
    },
  ],
  note: "Dados atualizados em outubro/2026.",
  quote:
    "Esse estágio não foi só um primeiro emprego. Foi uma mudança de realidade.",
  name: "Isaque Cascaes",
  details: "Turma 2 · Belém, PA",
  cta: { label: "Doar agora", payboxId: DOARE.payboxId.geral } as DonateAction,
};
