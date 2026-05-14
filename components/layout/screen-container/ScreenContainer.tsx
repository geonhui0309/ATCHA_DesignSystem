import type { CSSProperties, HTMLAttributes } from "react";

import { cx } from "../../shared/foundation";
import "./screen-container.css";

export interface ScreenContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: number | string;
  padded?: boolean;
}

export function ScreenContainer({
  maxWidth = 360,
  padded = true,
  className,
  style,
  ...rest
}: ScreenContainerProps) {
  const resolvedMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;

  return (
    <div
      {...rest}
      className={cx("ds-screen-container", className)}
      data-padded={padded}
      style={
        {
          "--screen-container-max-width": resolvedMaxWidth,
          ...style
        } as CSSProperties
      }
    />
  );
}
