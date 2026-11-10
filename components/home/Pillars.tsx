import { Container } from "@/components/ui/Container";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <section aria-labelledby="fazemos-titulo" className="bg-white">
      <Container className="flex flex-col gap-14 py-20 sm:py-28">
        <div className="flex flex-wrap items-end gap-12">
          <h2
            id="fazemos-titulo"
            className="m-0 min-w-0 flex-[999_1_560px] font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[0.95]"
          >
            {pillars.title}
          </h2>
          <p className="m-0 min-w-0 flex-[1_1_360px] text-[18px]">
            {pillars.lead}
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 p-0">
          {pillars.items.map((item) => (
            <li
              key={item.number}
              className="flex flex-col gap-4 rounded-2xl bg-ink p-8 text-cream sm:p-10"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-none text-yellow"
              >
                {item.number}
              </span>
              <h3 className="m-0 font-display text-[32px] font-normal uppercase leading-none sm:text-[36px]">
                {item.title}
              </h3>
              <p className="m-0">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
