import type { CSSProperties } from "react";

import { FONT_WEIGHT_MAP } from "../../shared/foundation";
import type { ChoiceChipState } from "./ChoiceChip.types";

const choiceChipTokens = {
  size: {
    width: "64px",
    height: "32px",
    padding: "6px 12px",
    borderRadius: "var(--radius-medium)"
  },
  typography: {
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-2)",
    lineHeight: "var(--line-height-3)",
    fontWeight: FONT_WEIGHT_MAP.SemiBold
  },
  state: {
    default: {
      borderColor: "var(--border-subtle)",
      background: "transparent",
      color: "var(--text-secondary)"
    },
    selected: {
      borderColor: "transparent",
      background: "var(--background-surface-brand)",
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

export function getChoiceChipStyle(
  selected: boolean,
  state: ChoiceChipState
): CSSProperties {
  const surface =
    state === "disabled"
      ? choiceChipTokens.state.disabled
      : state === "pressed"
        ? choiceChipTokens.state.pressed
        : selected
          ? choiceChipTokens.state.selected
          : choiceChipTokens.state.default;

  return {
    width: choiceChipTokens.size.width,
    height: choiceChipTokens.size.height,
    padding: choiceChipTokens.size.padding,
    borderRadius: choiceChipTokens.size.borderRadius,
    border: "1px solid",
    textAlign: "center",
    fontFamily: choiceChipTokens.typography.fontFamily,
    fontSize: choiceChipTokens.typography.fontSize,
    lineHeight: choiceChipTokens.typography.lineHeight,
    fontWeight: choiceChipTokens.typography.fontWeight,
    ...surface
  };
}
