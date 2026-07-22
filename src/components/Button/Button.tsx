import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * `primary` uses the ink-blue accent (CTAs, interactive states).
   * `secondary` is carbon-on-paper with a hairline border, no accent.
   * `counter` uses the orange-red counter-tone — reserve for a single
   * highlighted action, never as the default choice over `primary`.
   */
  variant?: "primary" | "secondary" | "counter";
  size?: "sm" | "md";
  children: ReactNode;
}

/**
 * Musubi's base action control. Accent colors follow the brand rule: the
 * ink-blue accent is for CTAs/interactive states/code only, and the
 * orange-red counter-tone is for sparing, single-use highlights — never
 * decorative, never the default.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = ["musubi-button", `musubi-button--${variant}`, `musubi-button--${size}`]
    .concat(className ? [className] : [])
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
