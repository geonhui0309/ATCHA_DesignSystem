import { FONT_WEIGHT_MAP } from "../shared/foundation";

export const inputFieldTokens = {
  container: {
    gap: "var(--spacing-8)"
  },
  field: {
    minHeight: "var(--size-control-large)",
    paddingInline: "var(--inline-large)",
    borderRadius: "var(--radius-medium)",
    borderColor: {
      default: "var(--border-subtle)",
      focused: "var(--border-brand)",
      error: "var(--border-error)",
      disabled: "var(--border-disabled)"
    },
    background: {
      default: "var(--background-surface-primary)",
      disabled: "var(--background-surface-secondary)"
    }
  },
  typography: {
    label: {
      fontFamily: "var(--font-families-asta-sans), sans-serif",
      fontSize: "var(--font-size-2)",
      lineHeight: "var(--line-height-3)",
      fontWeight: FONT_WEIGHT_MAP.SemiBold,
      color: "var(--text-primary)"
    },
    input: {
      fontFamily: "var(--font-families-asta-sans), sans-serif",
      fontSize: "var(--font-size-2)",
      lineHeight: "var(--line-height-3)",
      fontWeight: FONT_WEIGHT_MAP.Regular,
      color: "var(--text-primary)",
      placeholder: "var(--text-secondary)"
    },
    helper: {
      fontFamily: "var(--font-families-asta-sans), sans-serif",
      fontSize: "var(--font-size-1)",
      lineHeight: "var(--line-height-2)",
      fontWeight: FONT_WEIGHT_MAP.Regular,
      defaultColor: "var(--text-secondary)",
      errorColor: "var(--text-error)"
    }
  }
} as const;
