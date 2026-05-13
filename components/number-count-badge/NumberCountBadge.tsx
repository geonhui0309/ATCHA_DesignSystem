import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "../shared/foundation";
import "./number-count-badge.css";

export interface NumberCountBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export function NumberCountBadge({
  children = "1",
  className,
  ...rest
}: NumberCountBadgeProps) {
  return (
    <span {...rest} className={cx("ds-number-count-badge", className)}>
      {children}
    </span>
  );
}
