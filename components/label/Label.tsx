import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

import { cx } from "../shared/foundation";
import { labelTokens } from "./label.tokens";
import "./label.css";

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Label({ children, className, style, ...rest }: LabelProps) {
  const inlineStyle: CSSProperties = {
    borderRadius: labelTokens.shape.borderRadius,
    paddingInline: labelTokens.spacing.paddingInline,
    paddingBlock: labelTokens.spacing.paddingBlock,
    background: labelTokens.background.default,
    color: labelTokens.color.default,
    fontFamily: labelTokens.typography.fontFamily,
    fontSize: labelTokens.typography.fontSize,
    lineHeight: labelTokens.typography.lineHeight,
    fontWeight: labelTokens.typography.fontWeight,
    ...style
  };

  return (
    <span {...rest} className={cx("ds-label", className)} style={inlineStyle}>
      {children}
    </span>
  );
}
