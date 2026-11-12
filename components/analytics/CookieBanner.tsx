"use client";

import { useEffect, useState } from "react";

import { buttonClassName } from "@/components/ui/Button";
import { cookieBanner } from "@/content/site";

import { readConsent, saveConsent, type Consent } from "./consent";

/** Aviso de cookies (LGPD). Some depois que a pessoa aceita ou recusa. */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readConsent() === null);
  }, []);

  if (!open) return null;

  function choose(value: Consent) {
    saveConsent(value);
    setOpen(false);
  }

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-yellow bg-ink text-cream"
    >
      <div className="mx-auto flex max-w-site flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
        <p className="m-0 max-w-[760px] text-[15px] leading-[1.55]">
          {cookieBanner.text}
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("aceito")}
            className={buttonClassName("pill-yellow", "cursor-pointer py-3")}
          >
            {cookieBanner.accept}
          </button>
          <button
            type="button"
            onClick={() => choose("recusado")}
            className={buttonClassName("pill-outline", "cursor-pointer py-3")}
          >
            {cookieBanner.decline}
          </button>
        </div>
      </div>
    </section>
  );
}
