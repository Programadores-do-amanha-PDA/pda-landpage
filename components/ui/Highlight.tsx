import type { ReactNode } from "react";

import { cx } from "./cx";

/**
 * Barra amarela atrás de uma palavra-chave.
 * É inline-block com altura própria para nunca invadir outra linha (regra crítica de tipografia),
 * e tem folga no topo para conter acentos como o "Â" de PIRÂMIDE.
 */
export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-block bg-yellow px-[0.12em] pb-[0.02em] pt-[0.06em] leading-[1.08] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
