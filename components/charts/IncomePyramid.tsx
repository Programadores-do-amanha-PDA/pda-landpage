import type { CSSProperties } from "react";

import { formatBRL } from "@/components/charts/SalaryChart";
import { cx } from "@/components/ui/cx";

type Level = { label: string; value: number; highlight?: boolean };

type Props = {
  title: string;
  /** De cima (topo da pirâmide) para baixo. */
  levels: Level[];
  note: string;
  sources: string[];
  className?: string;
};

// Cores de cima para baixo. A faixa destacada (top 10%) sempre vai em amarelo.
const tones = [
  "bg-ink text-cream",
  "bg-purple text-cream",
  "bg-purple-mid text-cream",
  "bg-lilac text-ink",
  "border-2 border-ink bg-cream text-ink",
];

/**
 * Pirâmide de renda em HTML/CSS. A largura das faixas cresce de cima para baixo e indica
 * a posição na pirâmide, não o valor (que vai escrito em cada faixa e na tabela para leitores de tela).
 */
export function IncomePyramid({
  title,
  levels,
  note,
  sources,
  className,
}: Props) {
  const steps = Math.max(levels.length - 1, 1);

  return (
    <figure
      className={cx(
        "m-0 flex flex-col gap-5 rounded-2xl bg-white p-5 sm:p-8",
        className,
      )}
    >
      <figcaption className="text-[14px] font-bold">{title}</figcaption>

      {/* --min: largura da faixa do topo. Maior no celular para o texto caber em 360 px. */}
      <ol
        aria-hidden="true"
        className="m-0 flex list-none flex-col items-center gap-1.5 p-0 [--min:64%] sm:[--min:40%]"
      >
        {levels.map((level, i) => (
          <li
            key={level.label}
            className={cx(
              "flex min-h-[56px] flex-wrap items-center justify-center gap-x-3 gap-y-0.5 px-3 py-2 text-center text-[13px] leading-tight sm:text-[15px]",
              level.highlight ? "bg-yellow text-ink" : tones[i % tones.length],
            )}
            style={
              {
                width: `calc(var(--min) + (100% - var(--min)) * ${i / steps})`,
              } as CSSProperties
            }
          >
            <span>{level.label}</span>
            <strong className="whitespace-nowrap">
              {formatBRL(level.value)}
            </strong>
          </li>
        ))}
      </ol>

      <p className="m-0 text-[13px]">{note}</p>

      <p className="m-0 text-[13px]">
        <strong>Fontes:</strong> {sources.join("; ")}.
      </p>

      <div className="sr-only">
        <table>
          <caption>{title}</caption>
          <thead>
            <tr>
              <th scope="col">Faixa</th>
              <th scope="col">Renda mensal per capita</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((level) => (
              <tr key={level.label}>
                <th scope="row">{level.label}</th>
                <td>{formatBRL(level.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
