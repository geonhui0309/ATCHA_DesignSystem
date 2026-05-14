import type { CSSProperties, HTMLAttributes } from "react";

import { cx } from "../../shared/foundation";
import "./stack.css";

export type StackGap = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type StackAlign = "stretch" | "start" | "center" | "end";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
  align?: StackAlign;
}

export function Stack({
  gap = "medium",
  align = "stretch",
  className,
  style,
  ...rest
}: StackProps) {
  return (
    <div
      {...rest}
      className={cx("ds-stack", className)}
      data-align={align}
      data-gap={gap}
      style={
        {
          "--stack-gap": `var(--block-${gap})`,
          ...style
        } as CSSProperties
      }
    />
  );
}
