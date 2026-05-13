import type { HTMLAttributes } from "react";

import { cx } from "../shared/foundation";
import "./dot-badge.css";

export function DotBadge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...rest} className={cx("ds-dot-badge", className)}>
      <span className="ds-dot-badge__dot" />
    </span>
  );
}
