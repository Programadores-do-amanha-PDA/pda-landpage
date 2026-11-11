import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { hero } from "@/content/doe";

import { DonateButton } from "./DonateButton";

export function Hero() {
  return (
    <section aria-labelledby="doe-titulo" className="bg-ink bg-dots text-cream">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h1
          id="doe-titulo"
          className="m-0 flex flex-col items-start gap-[0.12em] font-display text-[clamp(44px,8vw,128px)] font-normal uppercase leading-[1.08]"
        >
          {hero.title.map((line, i) => (
            <span
              key={i}
              className="flex flex-wrap items-center gap-x-[0.22em] gap-y-[0.12em]"
            >
              <RichText segments={line} barClassName="!pt-[0.16em]" />
            </span>
          ))}
        </h1>
        <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
          <RichText segments={hero.lead} />
        </p>
        <div>
          <DonateButton action={hero.cta} variant="primary" />
        </div>
        <p className="m-0 text-[13px] text-cream/70">
          Fonte: {hero.source.stat} ·{" "}
          <a
            href={hero.source.href}
            className="text-cream/90 underline hover:text-yellow"
          >
            {hero.source.name}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
