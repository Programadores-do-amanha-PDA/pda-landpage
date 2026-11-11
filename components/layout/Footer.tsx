import Image from "next/image";

import { SmartLink } from "@/components/ui/SmartLink";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-[14px] text-cream">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 pb-10 pt-16 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-4">
            {/* Logo para fundo escuro (cópia do Logo_PDA_Horizontal_FundoRoxo com o til corrigido para branco). */}
            <Image
              src="/assets/logo-pda-fundo-escuro.png"
              alt={footer.name}
              width={240}
              height={60}
              className="h-auto w-[220px] sm:w-[240px]"
            />
            <span>{footer.tagline}</span>
          </div>
          {footer.columns.map((col) => (
            <div
              key={col.title}
              className={
                col.title === "Contato"
                  ? "flex min-w-0 flex-[1_1_220px] flex-col gap-2"
                  : "flex flex-[1_1_140px] flex-col gap-2"
              }
            >
              <h2 className="m-0 font-mono text-[14px] font-bold text-yellow">
                {col.title}
              </h2>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {col.links.map((link) => (
                  <li key={link.label} className="break-words">
                    <SmartLink
                      href={link.href}
                      className="text-cream underline hover:text-yellow"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-cream/25 pt-6 text-[13px]">
          <ul
            aria-label="Selos e compromissos"
            className="m-0 flex list-none flex-wrap gap-3 p-0"
          >
            {footer.seals.map((seal) => (
              <li
                key={seal.src}
                className="h-[80px] w-[80px] overflow-hidden rounded-lg bg-white p-1 sm:h-[88px] sm:w-[88px]"
              >
                <Image
                  src={seal.src}
                  alt={seal.name}
                  title={seal.name}
                  width={240}
                  height={240}
                  className="h-full w-full object-contain"
                />
              </li>
            ))}
          </ul>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
