import type { HTMLAttributes, ReactNode } from "react";

export interface NoriBandProps extends HTMLAttributes<HTMLElement> {
  as?: "footer" | "div";
  /** `footer` for the site footer band; `code` for code-block containers. */
  variant?: "footer" | "code";
  children: ReactNode;
}

/**
 * Nori — the dark, textured horizontal band from Musubi's brand identity.
 * A functional UI device only (footer, code block containers); never used
 * as decorative illustration.
 */
export function NoriBand({
  as = "div",
  variant = "footer",
  className,
  children,
  ...rest
}: NoriBandProps) {
  const Tag = as;
  const classes = ["musubi-nori-band", `musubi-nori-band--${variant}`]
    .concat(className ? [className] : [])
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
