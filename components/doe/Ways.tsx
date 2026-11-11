import { Fragment } from "react";

import { Container } from "@/components/ui/Container";
import { cx } from "@/components/ui/cx";
import { ways } from "@/content/doe";

import { DonateButton } from "./DonateButton";

/** Formas de doar e botões de valor, cada um abrindo o seu pop-up da Doare. */
export function Ways() {
  return (
    <section aria-labelledby="formas-titulo" className="bg-white text-ink">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <h2
          id="formas-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {ways.title}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-6">
          {ways.options.map((option) => (
            <div
              key={option.title}
              className="flex flex-col gap-3 border-l-4 border-yellow pl-6"
            >
              <h3 className="m-0 font-display text-[28px] font-normal uppercase leading-[1.05] sm:text-[32px]">
                {option.title}
              </h3>
              <p className="m-0 text-[18px] leading-[1.6]">{option.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="m-0 font-display text-[clamp(28px,3vw,40px)] font-normal uppercase leading-[1.05]">
            {ways.amountsTitle}
          </h3>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-6 p-0">
            {ways.amounts.map((amount, i) => {
              const dark = i === ways.amounts.length - 2;
              return (
                <li
                  key={amount.value}
                  className={cx(
                    "flex flex-col gap-5 rounded-[0_48px_0_48px] p-8",
                    dark
                      ? "bg-purple text-cream"
                      : "border-2 border-ink bg-cream text-ink",
                  )}
                >
                  <span
                    className={cx(
                      "font-display text-[40px] uppercase leading-none sm:text-[44px]",
                      dark ? "text-yellow" : "text-ink",
                    )}
                  >
                    {amount.value}
                  </span>
                  <p className="m-0 flex-1 text-[17px] leading-[1.55]">
                    {amount.text}
                  </p>
                  <DonateButton
                    action={amount.action}
                    variant={dark ? "pill-yellow" : "pill-ink"}
                  />
                </li>
              );
            })}
          </ul>
          <p className="m-0 text-[13px] text-ink/80">
            {ways.note}{" "}
            {ways.legal.map((link, i) => (
              <Fragment key={link.href}>
                <a href={link.href} className="underline hover:text-purple">
                  {link.label}
                </a>
                {i < ways.legal.length - 1 ? " · " : "."}
              </Fragment>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
