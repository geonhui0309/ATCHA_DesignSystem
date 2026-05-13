import type { CSSProperties } from "react";

import { FONT_WEIGHT_MAP } from "../shared/foundation";
import type { FilterChipState } from "./FilterChip.types";

const filterChipTokens = {
  size: {
    height: "32px",
    padding: "6px 12px",
    borderRadius: "var(--radius-medium)"
  },
  typography: {
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-3)",
    lineHeight: "var(--line-height-3)",
    fontWeight: FONT_WEIGHT_MAP.Bold
  },
  state: {
    default: {
      borderColor: "var(--border-subtle)",
      background: "transparent",
      color: "var(--text-secondary)"
    },
    selected: {
      borderColor: "transparent",
      background: "var(--text-brand)",
      color: "var(--text-inverse)"
    },
    pressed: {
      borderColor: "transparent",
      background:
        "linear-gradient(90deg, rgba(19, 20, 23, 0.1) 0%, rgba(19, 20, 23, 0.1) 100%), linear-gradient(90deg, rgb(56, 34, 255) 0%, rgb(56, 34, 255) 100%)",
      color: "var(--text-inverse)"
    },
    disabled: {
      borderColor: "transparent",
      background: "var(--background-surface-disabled)",
      color: "var(--text-disabled)"
    }
  }
} as const;

export function getFilterChipStyle(
  selected: boolean,
  state: FilterChipState
): CSSProperties {
  const surface =
    state === "disabled"
      ? filterChipTokens.state.disabled
      : state === "pressed"
        ? filterChipTokens.state.pressed
        : selected
          ? filterChipTokens.state.selected
          : filterChipTokens.state.default;

  return {
    height: filterChipTokens.size.height,
    padding: filterChipTokens.size.padding,
    borderRadius: filterChipTokens.size.borderRadius,
    border: "1px solid",
    fontFamily: filterChipTokens.typography.fontFamily,
    fontSize: filterChipTokens.typography.fontSize,
    lineHeight: filterChipTokens.typography.lineHeight,
    fontWeight: filterChipTokens.typography.fontWeight,
    ...surface
  };
}
