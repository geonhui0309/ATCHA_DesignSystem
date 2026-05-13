import type { CSSProperties } from "react";

import { cx } from "../shared/foundation";
import { getBadgeStyle } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";
import "./badge.css";

export function Badge({
  tone = "information",
  emphasis = "solid",
  dot = false,
  children,
  className,
  style,
  ...rest
}: BadgeProps) {
  const inlineStyle: CSSProperties = {
    ...getBadgeStyle(tone, emphasis),
    ...style
  };

  return (
    <span
      {...rest}
      data-tone={tone}
      data-emphasis={emphasis}
      className={cx("ds-badge", className)}
      style={inlineStyle}
    >
      {dot ? <span aria-hidden="true" className="ds-badge__dot" /> : null}
      {children}
    </span>
  );
}
