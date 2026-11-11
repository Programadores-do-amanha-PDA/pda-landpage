import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { boards } from "@/content/sobre";

/** Conselho de administração, conselho fiscal e time. */
export function Board() {
  return (
    <section aria-label="Conselhos e time" className="bg-white text-ink">
      <Container className="flex flex-col gap-20 py-20 sm:py-28">
        {boards.map((group) => (
          <div key={group.id} className="flex flex-col gap-10">
            <h2
              id={`${group.id}-titulo`}
              className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
            >
              {group.title}
            </h2>
            <ul
              aria-labelledby={`${group.id}-titulo`}
              className="m-0 grid list-none grid-cols-1 gap-6 p-0 min-[480px]:grid-cols-2 lg:grid-cols-4"
            >
              {group.members.map((member) => (
                <li
                  key={member.name}
                  className="flex flex-col overflow-hidden rounded-2xl bg-cream"
                >
                  <div className="relative aspect-square w-full bg-purple-mid">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={`Retrato de ${member.name}`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 480px) 45vw, 100vw"
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
                    {member.role && (
                      <p className="m-0 text-[15px] leading-[1.55]">
                        {member.role}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}
