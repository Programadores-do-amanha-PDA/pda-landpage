import { Container } from "@/components/ui/Container";
import { result } from "@/content/doe";

import { DonateButton } from "./DonateButton";

/** Resultados da rede alumni, depoimento e CTA final. */
export function Result() {
  return (
    <section aria-labelledby="resultado-titulo" className="bg-ink text-cream">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <h2
          id="resultado-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {result.title}
        </h2>
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
          {result.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-4 rounded-sm border border-cream/[0.18] bg-card-dark p-7 sm:p-10"
            >
              <dt className="font-display text-[clamp(44px,6vw,80px)] uppercase leading-[1.05] text-yellow">
                {stat.value}
              </dt>
              <dd className="m-0 text-[18px] leading-[1.6]">{stat.text}</dd>
            </div>
          ))}
        </dl>
        <p className="m-0 text-[13px] text-cream/70">{result.note}</p>
        <figure className="m-0 flex flex-col gap-6 border-l-4 border-yellow pl-6 sm:pl-10">
          <blockquote className="m-0">
            <p className="m-0 font-display text-[clamp(26px,3.2vw,44px)] uppercase leading-[1.08]">
              “{result.quote}”
            </p>
          </blockquote>
          <figcaption className="text-[15px]">
            <strong className="text-yellow">{result.name}</strong> ·{" "}
            {result.details}
          </figcaption>
        </figure>
        <div>
          <DonateButton action={result.cta} variant="primary" />
        </div>
      </Container>
    </section>
  );
}
