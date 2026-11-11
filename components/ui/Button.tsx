import type { LinkItem } from "@/content/types";

import { cx } from "./cx";
import { SmartLink } from "./SmartLink";

/**
 * primary / outline: botões retangulares em caixa alta (hero).
 * pill-*: botões com canto de 8 px usados no restante do mockup.
 */
export type Variant =
  | "primary"
  | "outline"
  | "pill-yellow"
  | "pill-purple"
  | "pill-ink"
  | "pill-outline";

const base =
  "inline-flex items-center justify-center gap-3 font-mono font-bold no-underline transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-yellow px-6 py-4 text-[14px] uppercase tracking-[0.08em] text-ink hover:bg-cream hover:text-ink sm:px-9 sm:py-5 sm:text-[16px]",
  outline:
    "border-2 border-cream px-[22px] py-[14px] text-[14px] uppercase tracking-[0.08em] text-cream hover:bg-cream hover:text-ink sm:px-[34px] sm:py-[18px] sm:text-[16px]",
  "pill-yellow":
    "rounded-lg bg-yellow px-7 py-4 text-ink hover:bg-cream hover:text-ink",
  "pill-purple":
    "rounded-lg bg-purple px-7 py-4 text-cream hover:bg-ink hover:text-cream",
  "pill-ink":
    "rounded-lg bg-ink px-7 py-4 text-cream hover:bg-purple hover:text-cream",
  "pill-outline":
    "rounded-lg border-2 border-cream px-[26px] py-[14px] text-cream hover:bg-cream hover:text-ink",
};

/** Classes do botão, para reaproveitar o visual em <button> (ex.: DonateButton). */
export function buttonClassName(variant: Variant, className?: string) {
  return cx(base, variants[variant], className);
}

/** Seta dos botões principais. */
export function ButtonArrow() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

type Props = {
  link: LinkItem;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

export function Button({
  link,
  variant = "primary",
  arrow = variant === "primary",
  className,
}: Props) {
  return (
    <SmartLink href={link.href} className={buttonClassName(variant, className)}>
      {link.label}
      {arrow && <ButtonArrow />}
    </SmartLink>
  );
}
