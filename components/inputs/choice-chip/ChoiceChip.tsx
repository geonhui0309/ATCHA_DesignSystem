import type { CSSProperties } from "react";

import { cx } from "../../shared/foundation";
import { getChoiceChipStyle } from "./ChoiceChip.styles";
import type { ChoiceChipProps } from "./ChoiceChip.types";
import "./choice-chip.css";

export function ChoiceChip({
  value = "00:00",
  selected = true,
  state = "default",
  className,
  style,
  ...rest
}: ChoiceChipProps) {
  const inlineStyle: CSSProperties = {
    ...getChoiceChipStyle(selected, state),
    ...style
  };

  return (
    <span
      {...rest}
      className={cx("ds-choice-chip", className)}
      data-selected={selected ? "true" : undefined}
      data-state={state}
      style={inlineStyle}
    >
      {value}
    </span>
  );
}
