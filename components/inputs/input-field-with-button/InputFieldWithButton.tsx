import type { HTMLAttributes } from "react";

import { Button } from "../../inputs/button";
import { InputField, type InputFieldProps } from "../../inputs/input-field/InputField";
import { cx } from "../../shared/foundation";
import "./input-field-with-button.css";

export interface InputFieldWithButtonProps extends HTMLAttributes<HTMLDivElement> {
  size?: "large" | "medium";
  inputProps?: Partial<InputFieldProps>;
  buttonLabel?: string;
}

export function InputFieldWithButton({
  size = "large",
  inputProps,
  buttonLabel = "Label",
  className,
  ...rest
}: InputFieldWithButtonProps) {
  const inputSize = size === "medium" ? "small" : "medium";

  return (
    <div {...rest} className={cx("ds-input-field-with-button", className)}>
      <InputField
        size={inputSize}
        placeholder="Hint_Text"
        helperText="Caption"
        trailingIcons={inputSize === "small" ? ["cancel", "cancelMuted"] : undefined}
        {...inputProps}
      />
      <Button variant="filled" size="small">
        {buttonLabel}
      </Button>
    </div>
  );
}
