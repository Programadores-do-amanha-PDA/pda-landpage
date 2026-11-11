import { Container } from "@/components/ui/Container";
import { transparency } from "@/content/sobre";

/** Documentos de auditoria, demonstrações contábeis, estatuto e atas. */
export function Transparency() {
  return (
    <section
      id="transparencia"
      aria-labelledby="transparencia-titulo"
      className="scroll-mt-24 bg-cream text-ink"
    >
      <Container className="flex flex-col gap-12 py-20 sm:py-28">
        <div className="flex flex-col gap-6">
          <h2
            id="transparencia-titulo"
            className="m-0 font-display text-[clamp(40px,5vw,72px)] font-normal uppercase leading-[1.02]"
          >
            {transparency.title}
          </h2>
          <p className="m-0 max-w-[820px] text-[18px] leading-[1.6] sm:text-[20px]">
            {transparency.lead}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {transparency.groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-5">
              <h3 className="m-0 font-display text-[26px] font-normal uppercase leading-[1.02] text-purple sm:text-[28px]">
                {group.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {group.documents.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 rounded-2xl border-2 border-white bg-white px-6 py-5 text-[17px] font-bold leading-[1.4] text-ink no-underline transition-colors hover:border-purple"
                    >
                      <span>
                        {doc.label}
                        <span className="sr-only"> (abre em nova aba)</span>
                      </span>
                      <svg
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-purple"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M8 7h9v9" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
