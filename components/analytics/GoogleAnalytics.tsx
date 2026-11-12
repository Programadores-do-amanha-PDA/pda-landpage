"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { GA4_ID } from "@/content/links";

import { CONSENT_EVENT, readConsent, type Consent } from "./consent";
import { eventForHref, trackEvent } from "./events";

/**
 * Google Analytics 4. Só carrega depois que a pessoa aceita os cookies
 * no aviso (CookieBanner); quem recusa não é medido.
 */
export function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(readConsent() === "aceito");
    const onChange = (e: Event) =>
      setAccepted((e as CustomEvent<Consent>).detail === "aceito");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // Cliques nos links de conversão (Google Forms e e-mail), em qualquer página.
  useEffect(() => {
    if (!accepted) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const name = link && eventForHref(link.getAttribute("href") ?? "");
      if (name) trackEvent(name, { link_text: link.textContent?.trim() ?? "" });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, [accepted]);

  if (!accepted) return null;

  return (
    <>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  );
}
