import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { seals } from "@/content/sobre";

export function Seals() {
  return (
    <section aria-labelledby="selos-titulo" className="bg-white text-ink">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h2
          id="selos-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {seals.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-6 p-0">
          {seals.items.map((seal) => (
            <li
              key={seal.src}
              className="flex flex-col items-start gap-5 rounded-[0_48px_0_48px] bg-cream p-8"
            >
              <div className="h-[140px] w-[140px] overflow-hidden rounded-lg bg-white p-2">
                <Image
                  src={seal.src}
                  alt={seal.alt}
                  width={240}
                  height={240}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="m-0 text-[16px] font-bold leading-[1.55]">
                {seal.name}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
