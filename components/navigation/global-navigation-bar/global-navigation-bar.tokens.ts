import { FONT_WEIGHT_MAP } from "../../shared/foundation";

export const globalNavigationBarTokens = {
  container: {
    width: "360px",
    height: "var(--size-15)",
    paddingInline: "var(--spacing-24)",
    paddingBlock: "var(--spacing-8)",
    background: "var(--background-surface-primary)"
  },
  item: {
    width: "62px",
    height: "44px",
    gap: "var(--spacing-4)",
    iconWrapperHeight: "24px",
    iconWrapperPadding: "var(--spacing-2)",
    iconSize: "20px",
    labelColor: {
      active: "var(--text-brand)",
      default: "var(--text-secondary)"
    },
    labelTypography: {
      fontFamily: "var(--font-families-asta-sans), sans-serif",
      fontSize: "var(--font-size-1)",
      lineHeight: "var(--line-height-2)",
      fontWeight: FONT_WEIGHT_MAP.SemiBold
    }
  },
  badge: {
    size: "var(--size-4)",
    padding: "var(--spacing-6)",
    dotSize: "4px",
    leftOffset: "calc(50% + 9px)",
    topOffset: "calc(50% - 19px)",
    background: "transparent",
    dotColor: "var(--badge-background-dot)"
  }
} as const;
