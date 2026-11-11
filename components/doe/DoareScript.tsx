import Script from "next/script";

import { DOARE } from "@/content/links";

export const DOARE_SCRIPT_ID = "doare-paybox-sdk";

/** Carrega o SDK do pop-up de doação da Doare (Paybox). Usado só em /doe. */
export function DoareScript() {
  return (
    <Script id={DOARE_SCRIPT_ID} src={DOARE.sdk} strategy="afterInteractive" />
  );
}
