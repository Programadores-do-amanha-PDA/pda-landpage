import { CONTATO_MAILTO, FORMS } from "@/content/links";

/**
 * Eventos enviados ao GA4. Os quatro primeiros são marcados como conversão
 * no GA4 e importados no Google Ads (Ad Grants).
 */
export type EventName =
  | "doar_clique"
  | "contratar_clique"
  | "inscricao_clique"
  | "mentoria_clique"
  | "contato_clique";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/** Envia um evento ao GA4. Não faz nada se a pessoa não aceitou os cookies. */
export function trackEvent(name: EventName, params?: Record<string, string>) {
  window.gtag?.("event", name, params ?? {});
}

/** Evento de cada link de conversão, pelo destino do link. */
const EVENT_BY_HREF: Record<string, EventName> = {
  [FORMS.empresas]: "contratar_clique",
  [FORMS.inscricao]: "inscricao_clique",
  [FORMS.mentoria]: "mentoria_clique",
  [CONTATO_MAILTO]: "contato_clique",
};

export function eventForHref(href: string): EventName | undefined {
  return EVENT_BY_HREF[href];
}
