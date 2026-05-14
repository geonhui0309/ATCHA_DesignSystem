import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { Icon } from "../../../icons/Icon";
import { cx } from "../../shared/foundation";
import {
  getButtonStyle,
  getButtonTextIconSize
} from "./Button.styles";
import type { ButtonProps, ButtonVariant, VariantSize } from "./Button.types";
import "./button.css";

export function Button<V extends ButtonVariant = "filled">({
  label = "Label",
  children,
  variant = "filled" as V,
  size = (variant === "text" ? "large" : "medium") as VariantSize<V>,
  state = "default",
  iconLeft = false,
  iconRight = false,
  className,
  style,
  type = "button",
  ...rest
}: ButtonProps<V>) {
  const resolvedState = rest.disabled ? "disabled" : state;

  const inlineStyle: CSSProperties = {
    ...getButtonStyle(variant, size, resolvedState),
    ...style
  };

  const textVariantSize =
    variant === "text" && (size === "xsmall" || size === "large")
      ? (size as "xsmall" | "large")
      : null;
  const iconSize = textVariantSize
    ? getButtonTextIconSize(textVariantSize)
    : undefined;

  return (
    <button
      {...rest}
      type={type}
      disabled={resolvedState === "disabled"}
      data-size={String(size)}
      data-variant={variant}
      data-state={resolvedState}
      className={cx("ds-button", className)}
      style={inlineStyle}
    >
      {variant === "text" && textVariantSize && iconLeft ? (
        <span className="ds-button__icon" style={{ width: iconSize, height: iconSize }}>
          <Icon name="arrow-left-narrow" size={Number.parseInt(iconSize ?? "16", 10)} />
        </span>
      ) : null}
      {children ?? label}
      {variant === "text" && textVariantSize && iconRight ? (
        <span className="ds-button__icon" style={{ width: iconSize, height: iconSize }}>
          <Icon name="arrow-right-narrow" size={Number.parseInt(iconSize ?? "16", 10)} />
        </span>
      ) : null}
    </button>
  );
}
