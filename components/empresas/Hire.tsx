import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hire } from "@/content/empresas";

/** Contrate: perfil dos talentos, empresas que já contrataram e CTA para abrir vaga. */
export function Hire() {
  return (
    <section aria-labelledby="contrate-titulo" className="bg-cream text-ink">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="contrate-titulo"
            className="m-0 font-display text-[clamp(36px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {hire.title}
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {hire.lead}
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 p-0">
          {hire.skills.map((item, i) => (
            <li
              key={item}
              className="flex flex-col gap-4 rounded-2xl border-2 border-ink bg-white p-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-[22px] text-purple"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="m-0 text-[17px] leading-[1.55]">{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5">
          <h3 className="m-0 font-display text-[clamp(26px,3vw,36px)] font-normal uppercase leading-none">
            {hire.logosTitle}
          </h3>
          <div className="flex min-h-[88px] items-center justify-center rounded-lg border-2 border-dashed border-ink/40 bg-white p-5 text-center font-mono text-[15px] font-bold">
            {hire.logosPlaceholder}
          </div>
        </div>
        <div>
          <Button link={hire.cta} variant="pill-ink" />
        </div>
      </Container>
    </section>
  );
}
