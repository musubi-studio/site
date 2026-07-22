import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string;
  padding?: "sm" | "md" | "lg";
  children: ReactNode;
}

/**
 * Raw-paper surface with carbon ink text and a hairline border — the base
 * content container across the Musubi UI.
 */
export function Card({ title, padding = "md", className, children, ...rest }: CardProps) {
  const classes = ["musubi-card", `musubi-card--${padding}`]
    .concat(className ? [className] : [])
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {title ? <h3 className="musubi-card__title">{title}</h3> : null}
      <div className="musubi-card__body">{children}</div>
    </div>
  );
}
