import { FONT_WEIGHT_MAP } from "../../shared/foundation";

export const serviceMenuSectionTokens = {
  section: {
    width: "100%",
    maxWidth: "402px",
    gap: "var(--layout-section-gap-small)"
  },
  card: {
    background: "var(--background-surface-primary)",
    borderRadius: "var(--radius-large)",
    defaultPadding: "var(--spacing-20) var(--spacing-20) var(--spacing-24)",
    surfacePadding: "var(--spacing-20)"
  },
  header: {
    gap: "var(--gap-medium)",
    titleFontFamily: "var(--font-families-asta-sans), sans-serif",
    titleFontSize: "var(--font-size-4)",
    titleLineHeight: "var(--line-height-4)",
    titleFontWeight: FONT_WEIGHT_MAP.Bold,
    titleColor: "var(--text-primary)",
    actionFontFamily: "var(--font-families-asta-sans), sans-serif",
    actionFontSize: "var(--font-size-2)",
    actionLineHeight: "var(--line-height-3)",
    actionFontWeight: FONT_WEIGHT_MAP.SemiBold,
    actionColor: "var(--text-primary)"
  },
  items: {
    columns: 4,
    rowGap: "var(--spacing-24)",
    columnGap: "var(--spacing-12)",
    iconColor: "var(--text-brand)",
    iconSize: "32px",
    labelFontFamily: "var(--font-families-asta-sans), sans-serif",
    labelFontSize: "var(--font-size-2)",
    labelLineHeight: "var(--line-height-3)",
    labelFontWeight: FONT_WEIGHT_MAP.SemiBold,
    labelColor: "var(--text-primary)",
    labelGap: "var(--spacing-8)"
  }
} as const;

export type ServiceMenuSectionVariant = "default" | "surface";
