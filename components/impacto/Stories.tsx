import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { stories } from "@/content/impacto";

export function Stories() {
  return (
    <section aria-labelledby="historias-titulo" className="bg-cream">
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <p className="m-0 font-mono text-[16px] font-bold tracking-[0.08em] text-purple sm:text-[18px]">
            {stories.tag}
          </p>
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
        <ul className="m-0 grid list-none grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] sm:gap-6 p-0">
          {stories.people.map((person) => (
            <li key={person.name}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                {person.photo ? (
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={person.photo.src}
                      alt={person.photo.alt}
                      fill
                      sizes="(min-width: 1280px) 300px, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    role="img"
                    aria-label={`Espaço para foto de ${person.name}`}
                    className="flex aspect-[4/5] w-full items-center justify-center bg-purple-mid p-3 text-center text-[12px] text-cream sm:text-[13px]"
                  >
                    [FOTO {person.name.split(" ")[0].toUpperCase()}]
                  </div>
                )}
                <div className="flex flex-col gap-1.5 p-3 sm:gap-2 sm:p-6">
                  <h3 className="m-0 font-display text-[20px] font-normal sm:text-[26px] uppercase leading-[1.05]">
                    {person.name}
                  </h3>
                  <p className="m-0 text-[12px] sm:text-[14px]">
                    {person.turma} · {person.city}
                  </p>
                  <p className="m-0 text-[13px] font-bold text-purple sm:text-[15px]">
                    {person.company}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
