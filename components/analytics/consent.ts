// Escolha da pessoa sobre os cookies do Google Analytics, guardada no navegador.

export type Consent = "aceito" | "recusado";

const STORAGE_KEY = "pda-cookies";
export const CONSENT_EVENT = "pda-cookies-change";

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "aceito" || value === "recusado" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Navegação privada ou armazenamento bloqueado: vale só nesta visita.
  }
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: value }));
}
