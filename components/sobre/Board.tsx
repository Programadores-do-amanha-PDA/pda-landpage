import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { board } from "@/content/sobre";

export function Board() {
  return (
    <section aria-labelledby="conselho-titulo" className="bg-cream text-ink">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <h2
          id="conselho-titulo"
          className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
        >
          {board.title}
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-6 p-0">
          {board.members.map((member) => (
            <li
              key={member.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-square w-full bg-purple-mid">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`Retrato de ${member.name}`}
                    fill
                    sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-[16px] font-bold text-yellow">
                    [FOTO]
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="m-0 font-display text-[26px] font-normal uppercase leading-[1.02]">
                  {member.name}
                </h3>
                <p className="m-0 text-[15px] leading-[1.55]">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
