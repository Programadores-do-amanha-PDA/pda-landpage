import type { ReactNode } from "react";

import { cx } from "./cx";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "site" | "narrow";
};

export function Container({ children, className, size = "site" }: Props) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-5 sm:px-8",
        size === "site" ? "max-w-site" : "max-w-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
}
