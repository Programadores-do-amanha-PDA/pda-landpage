import Image from "next/image";
import { Link } from "@/i18n/routing";

import { SmartLink } from "@/components/ui/SmartLink";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b-2 border-ink bg-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <Link href="/" className="flex items-center">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            priority
            className="block h-9 w-auto sm:h-11"
          />
        </Link>
        <ul className="m-0 flex list-none flex-wrap items-center gap-x-5 gap-y-3 p-0 text-[15px] font-medium sm:gap-x-7">
          {nav.links.map((link) => (
            <li key={link.label}>
              <SmartLink
                href={link.href}
                className="text-ink no-underline hover:text-purple"
              >
                {link.label}
              </SmartLink>
            </li>
          ))}
          <li>
            <SmartLink
              href={nav.cta.href}
              className="inline-block rounded-lg bg-purple px-5 py-3 font-bold text-cream no-underline hover:bg-ink"
            >
              {nav.cta.label}
            </SmartLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
