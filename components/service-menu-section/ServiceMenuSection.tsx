import type { CSSProperties, HTMLAttributes } from "react";

import { Button } from "../button";
import { cx } from "../shared/foundation";
import {
  ServiceMenuItem as ServiceMenuCategoryItem,
  type ServiceMenuItemCategory
} from "../service-menu-item/ServiceMenuItem";
import {
  serviceMenuSectionTokens,
  type ServiceMenuSectionVariant
} from "./service-menu-section.tokens";
import "./service-menu-section.css";

export interface ServiceMenuSectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  actionLabel?: string;
  categories?: ServiceMenuItemCategory[];
  variant?: ServiceMenuSectionVariant;
}

const defaultCategories: ServiceMenuItemCategory[] = [
  "engine-oil",
  "tire",
  "exterior-repair",
  "vehicle-maintenance"
];

export function ServiceMenuSection({
  title,
  actionLabel = "더보기",
  categories = defaultCategories,
  variant = "default",
  className,
  ...rest
}: ServiceMenuSectionProps) {
  const componentStyle = {
    "--service-menu-section-gap": serviceMenuSectionTokens.section.gap,
    "--service-menu-section-background": serviceMenuSectionTokens.card.background,
    "--service-menu-section-border-radius": serviceMenuSectionTokens.card.borderRadius,
    "--service-menu-section-padding":
      variant === "surface"
        ? serviceMenuSectionTokens.card.surfacePadding
        : serviceMenuSectionTokens.card.defaultPadding,
    "--service-menu-header-gap": serviceMenuSectionTokens.header.gap,
    "--service-menu-title-font-family": serviceMenuSectionTokens.header.titleFontFamily,
    "--service-menu-title-font-size": serviceMenuSectionTokens.header.titleFontSize,
    "--service-menu-title-line-height": serviceMenuSectionTokens.header.titleLineHeight,
    "--service-menu-title-color": serviceMenuSectionTokens.header.titleColor,
    "--service-menu-grid-gap": serviceMenuSectionTokens.items.columnGap
  } as CSSProperties;

  return (
    <section
      {...rest}
      className={cx("ds-service-menu-section", className)}
      data-variant={variant}
      style={componentStyle}
    >
      {variant === "default" ? (
        <div className="ds-service-menu-header">
          <h2 className="ds-service-menu-title">{title}</h2>
          <Button variant="text" size="xsmall" iconRight>
            {actionLabel}
          </Button>
        </div>
      ) : null}
      <div className="ds-service-menu-grid">
        {categories.map((category) => (
          <ServiceMenuCategoryItem
            key={category}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}
