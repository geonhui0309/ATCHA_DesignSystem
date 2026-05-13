import { FONT_WEIGHT_MAP } from "../shared/foundation";

export const numberCountBadgeTokens = {
  size: "16px",
  borderRadius: "8px",
  background: "var(--badge-background-information)",
  color: "var(--text-inverse)",
  typography: {
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-0)",
    lineHeight: "var(--line-height-1)",
    fontWeight: FONT_WEIGHT_MAP.SemiBold
  }
} as const;
