import type { CSSProperties } from "react";

import { cx } from "../../shared/foundation";
import { getFilterChipStyle } from "./FilterChip.styles";
import type { FilterChipProps } from "./FilterChip.types";
import "./filter-chip.css";

export function FilterChip({
  label = "Label",
  selected = true,
  state = "default",
  className,
  style,
  disabled,
  type = "button",
  ...rest
}: FilterChipProps) {
  const isDisabled = disabled ?? state === "disabled";
  const resolvedState = isDisabled ? "disabled" : state;
  const inlineStyle: CSSProperties = {
    ...getFilterChipStyle(selected, resolvedState),
    ...style
  };

  return (
    <button
      {...rest}
      aria-pressed={selected}
      className={cx("ds-filter-chip", className)}
      disabled={isDisabled}
      data-selected={selected ? "true" : undefined}
      data-state={resolvedState}
      style={inlineStyle}
      type={type}
    >
      {label}
    </button>
  );
}
