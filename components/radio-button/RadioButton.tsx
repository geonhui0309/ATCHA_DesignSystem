import type { CSSProperties, HTMLAttributes } from "react";

import { cx } from "../shared/foundation";
import {
  radioButtonTokens,
  type RadioButtonState
} from "./radio-button.tokens";
import "./radio-button.css";

export interface RadioButtonProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  state?: RadioButtonState;
}

export function RadioButton({
  selected = true,
  state = "default",
  className,
  style,
  ...rest
}: RadioButtonProps) {
  const inlineStyle: CSSProperties = {
    width: radioButtonTokens.wrapperSize,
    height: radioButtonTokens.wrapperSize,
    padding: radioButtonTokens.padding,
    ...style
  };

  return (
    <span
      {...rest}
      className={cx("ds-radio-button", className)}
      style={inlineStyle}
      data-selected={selected ? "true" : undefined}
      data-state={state}
    >
      <span className="ds-radio-button__control" aria-hidden="true">
        <span className="ds-radio-button__dot" />
      </span>
    </span>
  );
}
