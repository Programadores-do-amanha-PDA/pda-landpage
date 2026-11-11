import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { support } from "@/content/empresas";

import { PendingNote } from "./PendingNote";

/** Apoie a formação: patrocínio e contrapartidas (sem valores de planos). */
export function Support() {
  return (
    <section
      id={support.id}
      aria-labelledby="apoie-titulo"
      className="scroll-mt-4 bg-ink text-cream"
    >
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="apoie-titulo"
            className="m-0 max-w-[1000px] font-display text-[clamp(36px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {support.title}
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {support.lead}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="m-0 font-display text-[clamp(26px,3vw,36px)] font-normal uppercase leading-none text-yellow">
            {support.benefitsTitle}
          </h3>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 p-0">
            {support.benefits.map((item) => (
              <li
                key={item.number}
                className="flex flex-col gap-4 rounded-[0_48px_0_48px] border border-cream/[0.18] bg-card-dark p-8"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[22px] text-yellow"
                >
                  {item.number}
                </span>
                <h4 className="m-0 font-display text-[28px] font-normal uppercase leading-none">
                  {item.title}
                </h4>
                <p className="m-0 text-[17px] leading-[1.55]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="m-0 max-w-[760px] text-[17px] italic leading-[1.6] text-cream/85">
          {support.note}
        </p>
        <div className="flex flex-col items-start gap-3">
          <Button link={support.cta} variant="pill-yellow" />
          <PendingNote className="text-yellow" />
        </div>
      </Container>
    </section>
  );
}
