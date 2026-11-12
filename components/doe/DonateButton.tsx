"use client";

import { useState } from "react";

import { trackEvent } from "@/components/analytics/events";
import {
  ButtonArrow,
  buttonClassName,
  type Variant,
} from "@/components/ui/Button";
import type { DonateAction } from "@/content/doe";

import { DOARE_SCRIPT_ID } from "./DoareScript";

type Paybox = { show: (options: { payboxId: string }) => void };

declare global {
  interface Window {
    Paybox?: Paybox;
  }
}

/** Espera o SDK da Doare terminar de carregar (no máximo 10 s). */
function waitForPaybox(): Promise<Paybox | null> {
  if (window.Paybox) return Promise.resolve(window.Paybox);
  return new Promise((resolve) => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      if (window.Paybox || Date.now() - started > 10_000) {
        window.clearInterval(timer);
        resolve(window.Paybox ?? null);
      }
    }, 150);
    // Se o script falhou ao carregar, não adianta esperar.
    document.getElementById(DOARE_SCRIPT_ID)?.addEventListener("error", () => {
      window.clearInterval(timer);
      resolve(null);
    });
  });
}

type Props = {
  action: DonateAction;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

/** Botão que abre o pop-up de doação da Doare com o payboxId informado. */
export function DonateButton({
  action,
  variant = "primary",
  arrow = variant === "primary",
  className,
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function open() {
    trackEvent("doar_clique", { link_text: action.label });
    setStatus("loading");
    const paybox = await waitForPaybox();
    if (!paybox) {
      setStatus("error");
      return;
    }
    paybox.show({ payboxId: action.payboxId });
    setStatus("idle");
  }

  return (
    <span className="inline-flex max-w-full flex-col items-start gap-2">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-busy={status === "loading"}
        className={buttonClassName(
          variant,
          `cursor-pointer ${className ?? ""}`,
        )}
      >
        {action.label}
        {arrow && <ButtonArrow />}
      </button>
      <span role="status" className="text-[13px] font-bold empty:hidden">
        {status === "error" &&
          "Não foi possível abrir a doação agora. Recarregue a página e tente de novo."}
      </span>
    </span>
  );
}
