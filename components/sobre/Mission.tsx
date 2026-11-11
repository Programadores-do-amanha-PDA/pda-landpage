import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { mission } from "@/content/sobre";

/** Missão (com o trecho principal em destaque) e valores. */
export function Mission() {
  return (
    <section aria-labelledby="missao-titulo" className="bg-cream text-ink">
      <Container className="flex flex-col gap-14 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="missao-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {mission.title}
          </h2>
          <p className="m-0 max-w-[880px] font-mono text-[18px] leading-[1.6] sm:text-[20px]">
            <RichText
              segments={mission.text}
              strongClassName="font-bold text-purple"
            />
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="m-0 font-display text-[32px] font-normal uppercase leading-[1.02] sm:text-[40px]">
            {mission.valuesTitle}
          </h3>
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
            {mission.values.map((value) => (
              <li
                key={value.title}
                className="flex flex-col gap-4 rounded-2xl bg-white p-8"
              >
                <h4 className="m-0 font-display text-[26px] font-normal uppercase leading-[1.02] text-purple sm:text-[28px]">
                  {value.title}
                </h4>
                <p className="m-0 font-mono text-[17px] leading-[1.55]">
                  {value.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
