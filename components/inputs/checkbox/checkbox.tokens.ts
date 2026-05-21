import { FONT_WEIGHT_MAP } from "../../shared/foundation";

export const checkboxTokens = {
  box: {
    size: "20px",
    borderRadius: "var(--radius-small)",
    borderColor: {
      default: "var(--border-default)",
      checked: "var(--border-brand)",
      disabled: "var(--border-disabled)"
    },
    background: {
      default: "var(--background-surface-primary)",
      checked: "var(--background-surface-brand)",
      disabled: "var(--background-surface-secondary)"
    },
    icon: {
      checked: "var(--icon-inverse)"
    }
  },
  label: {
    gap: "var(--spacing-4)",
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-2)",
    lineHeight: "var(--line-height-3)",
    fontWeight: FONT_WEIGHT_MAP.SemiBold,
    color: "var(--text-primary)",
    disabledColor: "var(--text-disabled)"
  }
} as const;
