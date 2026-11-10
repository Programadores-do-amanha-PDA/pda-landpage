/**
 * Trecho de texto com destaque opcional.
 * - bar: texto sobre a barra amarela
 * - yellow: texto em amarelo
 * - strong: negrito (a cor depende do contexto)
 */
export type Segment = { text: string; mark?: "bar" | "yellow" | "strong" };

export type RichLine = Segment[];

export type LinkItem = { label: string; href: string };
