import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { firstSalary } from "@/content/impacto";

const card =
  "m-0 flex min-w-0 flex-[1_1_300px] flex-col justify-between gap-6 border border-cream/[0.18] bg-card-dark p-7 sm:p-10";

export function FirstSalary() {
  return (
    <section
      aria-labelledby="primeiro-salario-titulo"
      className="bg-ink-deep text-cream"
    >
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <SectionTag>{firstSalary.tag}</SectionTag>
          <h2
            id="primeiro-salario-titulo"
            className="m-0 max-w-[960px] font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {firstSalary.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-6">
          {firstSalary.quotes.map((q) => (
            <figure key={q.name} className={card}>
              <blockquote className="m-0">
                <p className="m-0 font-display text-[26px] uppercase leading-[1.08] sm:text-[30px]">
                  “{q.quote}”
                </p>
              </blockquote>
              <figcaption className="text-[15px]">
                <strong className="text-yellow">{q.name}</strong> · {q.details}
              </figcaption>
            </figure>
          ))}
          {firstSalary.placeholders.map((text, i) => (
            <div
              key={i}
              className={`${card} items-center justify-center text-center text-[15px]`}
            >
              {text}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
