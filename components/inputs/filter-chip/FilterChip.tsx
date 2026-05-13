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
  ...rest
}: FilterChipProps) {
  const inlineStyle: CSSProperties = {
    ...getFilterChipStyle(selected, state),
    ...style
  };

  return (
    <span
      {...rest}
      className={cx("ds-filter-chip", className)}
      data-selected={selected ? "true" : undefined}
      data-state={state}
      style={inlineStyle}
    >
      {label}
    </span>
  );
}
