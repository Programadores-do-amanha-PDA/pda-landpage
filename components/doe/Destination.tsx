import { Container } from "@/components/ui/Container";
import { destination } from "@/content/doe";

export function Destination() {
  return (
    <section aria-labelledby="destino-titulo" className="bg-cream text-ink">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="destino-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {destination.title}
          </h2>
          <p className="m-0 max-w-[760px] text-[18px] leading-[1.6] sm:text-[20px]">
            {destination.lead}
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6 p-0">
          {destination.items.map((item, i) => (
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
      </Container>
    </section>
  );
}
