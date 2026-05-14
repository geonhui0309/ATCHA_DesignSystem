import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { cx } from "../../shared/foundation";
import "./page-section.css";

export type PageSectionSpacing = "small" | "medium" | "large";

export interface PageSectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  trailing?: ReactNode;
  spacing?: PageSectionSpacing;
}

export function PageSection({
  title,
  description,
  trailing,
  spacing = "medium",
  className,
  style,
  children,
  ...rest
}: PageSectionProps) {
  const hasHeader = Boolean(title || description || trailing);

  return (
    <section
      {...rest}
      className={cx("ds-page-section", className)}
      style={
        {
          "--page-section-gap": `var(--layout-section-gap-${spacing})`,
          ...style
        } as CSSProperties
      }
    >
      {hasHeader ? (
        <header className="ds-page-section__header">
          <div className="ds-page-section__text">
            {title ? <h2 className="ds-page-section__title">{title}</h2> : null}
            {description ? <p className="ds-page-section__description">{description}</p> : null}
          </div>
          {trailing ? <div className="ds-page-section__trailing">{trailing}</div> : null}
        </header>
      ) : null}
      <div className="ds-page-section__content">{children}</div>
    </section>
  );
}
