import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { stories } from "@/content/impacto";

const firstName = (name: string) => name.split(" ")[0].toUpperCase();

export function Stories() {
  return (
    <section aria-labelledby="historias-titulo" className="bg-cream">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="historias-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {stories.title}
          </h2>
          <p className="m-0 max-w-[820px] text-[18px] leading-[1.6] sm:text-[20px]">
            <RichText segments={stories.subtitle} strongClassName="text-purple" />
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-6 lg:grid-cols-5 lg:gap-5">
          {stories.people.map((person) => (
            <li key={person.name}>
              {/* Card que gira no hover, no foco (teclado) e no toque. O verso fica no DOM para leitores de tela. */}
              <article
                tabIndex={0}
                aria-label={`${person.name}, ${person.turma}, ${person.city}, ${person.company}`}
                className="pda-flip h-full cursor-pointer rounded-2xl"
              >
                <div className="pda-flip-inner h-full">
                  <div className="pda-flip-face flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                    {person.photo ? (
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src={person.photo.src}
                          alt={person.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 250px, 50vw"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div
                        role="img"
                        aria-label={`Espaço para foto de ${person.name}`}
                        className="flex aspect-[4/5] w-full items-center justify-center bg-purple-mid p-3 text-center text-[12px] text-cream sm:text-[13px]"
                      >
                        [FOTO {firstName(person.name)}]
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5 p-3 sm:gap-2 sm:p-6">
                      <h3 className="m-0 font-display text-[20px] font-normal uppercase leading-[1.05] sm:text-[26px]">
                        {person.name}
                      </h3>
                      <p className="m-0 text-[12px] sm:text-[14px]">
                        {person.turma} · {person.city}
                      </p>
                      <p className="m-0 text-[13px] font-bold text-purple sm:text-[15px]">
                        {person.company}
                      </p>
                    </div>
                  </div>
                  {/* O texto cresce com a largura do card (unidade cqw) para ocupar o verso. */}
                  <div className="pda-flip-face pda-flip-back flex flex-col justify-between gap-4 overflow-y-auto rounded-2xl bg-ink p-4 text-cream [container-type:inline-size] sm:p-6">
                    <p className="m-0 text-[12px] leading-[1.5] sm:text-[clamp(14px,8cqw,22px)]">
                      {person.story ? (
                        <>“{person.story}”</>
                      ) : (
                        <>[TEXTO SOBRE {firstName(person.name)}]</>
                      )}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="m-0 font-display text-[18px] uppercase leading-[1.05] text-yellow sm:text-[24px]">
                        {person.name}
                      </p>
                      <p className="m-0 hidden text-[13px] sm:block">
                        {person.turma} · {person.company}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
