import { cx } from "@/components/ui/cx";

type Point = { label: string; value: number };

type Props = {
  title: string;
  data: Point[];
  reference: Point;
  /** Valor no topo da área do gráfico. As barras usam escala real a partir de zero. */
  scaleMax?: number;
  className?: string;
};

export const formatBRL = (value: number) =>
  `R$ ${value.toLocaleString("pt-BR")}`;

/** Curva salarial em barras HTML/CSS. Os dados também vão numa tabela para leitores de tela. */
export function SalaryChart({
  title,
  data,
  reference,
  scaleMax = 10000,
  className,
}: Props) {
  const pct = (v: number) => `${(v / scaleMax) * 100}%`;
  const last = data.length - 1;
  const referenceText = `${reference.label} · ${formatBRL(reference.value)}`;

  return (
    <figure
      className={cx(
        "m-0 flex flex-col gap-4 rounded-2xl bg-white p-5 sm:p-8",
        className,
      )}
    >
      <figcaption className="text-center text-[14px] font-bold">{title}</figcaption>

      <div
        aria-hidden="true"
        className="relative flex h-[280px] items-end gap-2 border-b-2 border-ink sm:h-[340px] sm:gap-6"
      >
        <div
          className="absolute inset-x-0 border-t-2 border-dashed border-ink"
          style={{ bottom: pct(reference.value) }}
        />
        <span
          className="absolute left-0 max-w-[62%] bg-yellow px-1.5 py-0.5 text-[12px] font-bold leading-tight"
          style={{ bottom: `calc(${pct(reference.value)} + 6px)` }}
        >
          {referenceText}
        </span>
        {data.map((d, i) => (
          <div
            key={d.label}
            className="flex h-full min-w-0 flex-1 basis-0 flex-col items-center justify-end gap-1.5"
          >
            <span
              className={cx(
                "whitespace-nowrap text-[11px] font-bold sm:text-[14px]",
                i === last && "text-purple",
              )}
            >
              {formatBRL(d.value)}
            </span>
            <div
              className={cx(
                "w-full rounded-t-md",
                i === last ? "bg-purple" : "bg-lilac",
              )}
              style={{ height: pct(d.value) }}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="flex gap-2 text-[13px] sm:gap-6">
        {data.map((d) => (
          <span key={d.label} className="flex-1 basis-0 text-center">
            {d.label}
          </span>
        ))}
      </div>

      <div className="sr-only">
        <table>
          <caption>
            {title}. Linha de referência: {referenceText}.
          </caption>
          <thead>
            <tr>
              <th scope="col">Ano de trabalho</th>
              <th scope="col">Remuneração média</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label}>
                <th scope="row">{d.label}</th>
                <td>{formatBRL(d.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
