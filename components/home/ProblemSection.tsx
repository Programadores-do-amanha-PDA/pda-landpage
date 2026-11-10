import { Fragment } from "react";

import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { problem } from "@/content/home";

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problema-titulo"
      className="bg-ink-deep text-cream"
    >
      <Container className="flex flex-col gap-14 py-20 sm:py-28">
        <div className="flex flex-col gap-8">
          <h2
            id="problema-titulo"
            className="m-0 font-display text-[clamp(44px,6.5vw,104px)] font-normal uppercase leading-[0.95]"
          >
            <RichText segments={problem.title} />
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {problem.lead}
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {problem.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 rounded-sm [container-type:inline-size] border border-cream/[0.18] bg-card-dark p-7 sm:p-12"
            >
              <span className="whitespace-nowrap font-display text-[clamp(44px,18cqi,104px)] leading-[1.05] text-yellow">
                {stat.value}
              </span>
              <p className="m-0 text-[18px]">{stat.text}</p>
            </div>
          ))}
        </div>
        <p className="m-0 font-display text-[clamp(32px,4vw,56px)] uppercase leading-[1.08]">
          <RichText segments={problem.closing} />
        </p>
        <p className="m-0 text-[13px] text-cream/70">
          Fontes:{" "}
          {problem.sources.map((s, i) => (
            <Fragment key={s.stat}>
              {s.stat} ·{" "}
              {s.href ? (
                <a
                  href={s.href}
                  className="text-cream/90 underline hover:text-yellow"
                >
                  {s.name}
                </a>
              ) : (
                s.name
              )}
              {i < problem.sources.length - 1 ? ". " : "."}
            </Fragment>
          ))}
        </p>
      </Container>
    </section>
  );
}
