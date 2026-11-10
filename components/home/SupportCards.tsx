import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cx } from "@/components/ui/cx";
import { support } from "@/content/home";

export function SupportCards() {
  return (
    <section aria-labelledby="apoiar-titulo" className="bg-cream">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <h2
          id="apoiar-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {support.title}
        </h2>
        <div className="flex flex-wrap gap-6">
          {support.cards.map((card) => {
            const dark = card.tone === "purple";
            return (
              <article
                key={card.number}
                className={cx(
                  "flex min-w-0 flex-[1_1_420px] flex-col gap-5 rounded-[0_48px_0_48px] p-8 sm:p-12",
                  dark
                    ? "bg-purple text-cream"
                    : "border-2 border-ink bg-white text-ink",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx(
                    "font-display text-[22px]",
                    dark ? "text-yellow" : "text-purple",
                  )}
                >
                  {card.number}
                </span>
                <h3 className="m-0 font-display text-[34px] font-normal uppercase leading-none sm:text-[40px]">
                  {card.title}
                </h3>
                <p className="m-0">{card.text}</p>
                <div>
                  <Button
                    link={card.cta}
                    variant={dark ? "pill-yellow" : "pill-ink"}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
