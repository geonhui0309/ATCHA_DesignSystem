import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

import { cx } from "../shared/foundation";
import { checkboxTokens } from "./checkbox.tokens";
import "./checkbox.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  label?: ReactNode;
  error?: boolean;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m3.5 8.3 2.8 2.8 6.2-6.2" />
    </svg>
  );
}

export function Checkbox({
  label,
  disabled = false,
  error = false,
  className,
  style,
  ...rest
}: CheckboxProps) {
  const boxStyle: CSSProperties = {
    width: checkboxTokens.box.size,
    height: checkboxTokens.box.size,
    borderRadius: checkboxTokens.box.borderRadius
  };

  const labelStyle: CSSProperties = {
    fontFamily: checkboxTokens.label.fontFamily,
    fontSize: checkboxTokens.label.fontSize,
    lineHeight: checkboxTokens.label.lineHeight,
    fontWeight: checkboxTokens.label.fontWeight,
    color: disabled ? checkboxTokens.label.disabledColor : checkboxTokens.label.color,
    ...style
  };

  return (
    <label
      className={cx("ds-checkbox", className)}
      data-disabled={disabled ? "true" : undefined}
      data-error={error ? "true" : undefined}
    >
      <input {...rest} type="checkbox" disabled={disabled} className="ds-checkbox__input" />
      <span className="ds-checkbox__box" style={boxStyle}>
        <CheckIcon />
      </span>
      {label ? (
        <span className="ds-checkbox__label" style={labelStyle}>
          {label}
        </span>
      ) : null}
    </label>
  );
}
