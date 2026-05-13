import { FONT_WEIGHT_MAP } from "../shared/foundation";

export const labelTokens = {
  background: {
    default: "var(--label-background-default)"
  },
  color: {
    default: "var(--text-brand)"
  },
  shape: {
    borderRadius: "var(--radius-full)"
  },
  spacing: {
    paddingInline: "var(--inline-small)",
    paddingBlock: "var(--spacing-4)"
  },
  typography: {
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-1)",
    lineHeight: "var(--line-height-2)",
    fontWeight: FONT_WEIGHT_MAP.SemiBold
  }
} as const;
