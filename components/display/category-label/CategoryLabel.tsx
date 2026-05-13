import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "../../shared/foundation";
import "./category-label.css";

export interface CategoryLabelProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export function CategoryLabel({
  children = "#엔진오일",
  className,
  ...rest
}: CategoryLabelProps) {
  return (
    <span {...rest} className={cx("ds-category-label", className)}>
      {children}
    </span>
  );
}
