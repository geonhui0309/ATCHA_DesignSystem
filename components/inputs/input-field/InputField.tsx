import type { CSSProperties, InputHTMLAttributes } from "react";

import { Icon } from "../../../icons/Icon";
import type { IconName } from "../../../icons/Icon.types";
import { cx } from "../../shared/foundation";
import { inputFieldTokens } from "./input-field.tokens";
import "./input-field.css";

export type InputFieldSize = "large" | "medium" | "small";
export type InputFieldStatus = "default" | "error" | "filled" | "success";
export type InputFieldState = "default" | "focused" | "disabled";
export type InputFieldIconName =
  | "home"
  | "eye"
  | "cancel"
  | "cancelMuted"
  | "success"
  | "error"
  | "search";

const INPUT_FIELD_LOCAL_ICON_NAME: Record<InputFieldIconName, IconName> = {
  home: "home",
  eye: "eye",
  search: "search",
  cancel: "cancel",
  cancelMuted: "cancel",
  success: "check",
  error: "notification-alert"
};

export interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  invalid?: boolean;
  containerClassName?: string;
  size?: InputFieldSize;
  status?: InputFieldStatus;
  fieldState?: InputFieldState;
  leadingIcons?: InputFieldIconName[];
  trailingIcons?: InputFieldIconName[];
}

function InputFieldIcons({ names }: { names: InputFieldIconName[] }) {
  return (
    <>
      {names.map((name, index) => (
        <span key={`${name}-${index}`} className="ds-input-field__icon" data-icon={name}>
          <Icon name={INPUT_FIELD_LOCAL_ICON_NAME[name]} size={24} />
        </span>
      ))}
    </>
  );
}

export function InputField({
  label,
  helperText,
  invalid = false,
  disabled = false,
  size = "large",
  status,
  fieldState,
  leadingIcons,
  trailingIcons,
  className,
  containerClassName,
  style,
  id,
  ...rest
}: InputFieldProps) {
  const helperId = helperText && id ? `${id}-helper` : undefined;
  const resolvedStatus = status ?? (invalid ? "error" : "default");
  const resolvedState = disabled ? "disabled" : fieldState ?? "default";
  const helperTone =
    resolvedState === "disabled"
      ? "disabled"
      : resolvedStatus === "error"
        ? "error"
        : "default";

  const controlStyle: CSSProperties = {
    minHeight: inputFieldTokens.field.minHeight,
    paddingInline: inputFieldTokens.field.paddingInline,
    borderRadius: inputFieldTokens.field.borderRadius,
    borderColor: resolvedStatus === "error"
      ? inputFieldTokens.field.borderColor.error
      : resolvedStatus === "success"
        ? "var(--border-success)"
        : resolvedState === "focused"
          ? inputFieldTokens.field.borderColor.focused
          : resolvedState === "disabled"
        ? inputFieldTokens.field.borderColor.disabled
        : inputFieldTokens.field.borderColor.default,
    background: resolvedState === "disabled"
      ? inputFieldTokens.field.background.disabled
      : inputFieldTokens.field.background.default
  };

  const inputStyle: CSSProperties = {
    fontFamily: inputFieldTokens.typography.input.fontFamily,
    fontSize: inputFieldTokens.typography.input.fontSize,
    lineHeight: inputFieldTokens.typography.input.lineHeight,
    fontWeight:
      resolvedStatus === "filled" || resolvedStatus === "success"
        ? 600
        : inputFieldTokens.typography.input.fontWeight,
    color:
      resolvedState === "disabled"
        ? "var(--text-disabled)"
        : resolvedStatus === "default"
          ? "var(--text-secondary)"
          : inputFieldTokens.typography.input.color,
    ...style
  };

  return (
    <label
      className={cx("ds-input-field", containerClassName)}
      data-invalid={resolvedStatus === "error" ? "true" : undefined}
      data-disabled={resolvedState === "disabled" ? "true" : undefined}
      data-size={size}
      data-status={resolvedStatus}
      data-state={resolvedState}
    >
      {label ? <span className="ds-input-field__label">{label}</span> : null}
      <span className="ds-input-field__control" style={controlStyle}>
        {leadingIcons?.length ? <InputFieldIcons names={leadingIcons} /> : null}
        <input
          {...rest}
          id={id}
          disabled={resolvedState === "disabled"}
          aria-invalid={resolvedStatus === "error" || undefined}
          aria-describedby={helperId}
          className={cx("ds-input-field__input", className)}
          style={inputStyle}
        />
        {trailingIcons?.length ? <InputFieldIcons names={trailingIcons} /> : null}
      </span>
      {helperText ? (
        <span id={helperId} className="ds-input-field__helper" data-tone={helperTone}>
          {helperText}
        </span>
      ) : null}
    </label>
  );
}
