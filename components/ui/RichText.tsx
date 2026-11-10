import type { Segment } from "@/content/types";

import { Highlight } from "./Highlight";

type Props = { segments: Segment[]; strongClassName?: string };

/** Renderiza trechos de texto com os destaques definidos em content/. */
export function RichText({ segments, strongClassName = "text-yellow" }: Props) {
  return (
    <>
      {segments.map((s, i) => {
        if (s.mark === "bar") return <Highlight key={i}>{s.text}</Highlight>;
        if (s.mark === "yellow")
          return (
            <span key={i} className="text-yellow">
              {s.text}
            </span>
          );
        if (s.mark === "strong")
          return (
            <strong key={i} className={strongClassName}>
              {s.text}
            </strong>
          );
        return <span key={i}>{s.text}</span>;
      })}
    </>
  );
}
