import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { hero } from "@/content/empresas";

import { PendingNote } from "./PendingNote";

export function Hero() {
  return (
    <section
      aria-labelledby="empresas-titulo"
      className="bg-ink bg-dots text-cream"
    >
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h1
          id="empresas-titulo"
          className="m-0 flex flex-col items-start gap-[0.12em] font-display text-[clamp(40px,8vw,128px)] font-normal uppercase leading-[1.08]"
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
          {hero.lead}
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-4">
            <Button link={hero.primaryCta} variant="primary" />
            <Button link={hero.secondaryCta} variant="outline" />
          </div>
          <PendingNote className="text-yellow" />
        </div>
      </Container>
    </section>
  );
}
