import type { CSSProperties } from "react";

import { FONT_WEIGHT_MAP } from "../shared/foundation";
import type { BadgeEmphasis, BadgeTone } from "./Badge.types";

const badgeTokens = {
  color: {
    information: {
      background: "var(--badge-background-information)",
      text: "var(--text-inverse)"
    }
  },
  subtle: {
    background: "var(--label-background-default)",
    text: "var(--text-brand)"
  },
  shape: {
    borderRadius: "var(--radius-full)"
  },
  spacing: {
    paddingInline: "var(--inline-small)",
    minHeight: "24px",
    dotSize: "8px",
    gap: "var(--spacing-6)"
  },
  typography: {
    fontFamily: "var(--font-families-asta-sans), sans-serif",
    fontSize: "var(--font-size-1)",
    lineHeight: "var(--line-height-2)",
    fontWeight: FONT_WEIGHT_MAP.SemiBold
  }
} as const;

export function getBadgeStyle(
  tone: BadgeTone,
  emphasis: BadgeEmphasis
): CSSProperties {
  const toneTokens = badgeTokens.color[tone];

  return {
    borderRadius: badgeTokens.shape.borderRadius,
    minHeight: badgeTokens.spacing.minHeight,
    paddingInline: badgeTokens.spacing.paddingInline,
    gap: badgeTokens.spacing.gap,
    fontFamily: badgeTokens.typography.fontFamily,
    fontSize: badgeTokens.typography.fontSize,
    lineHeight: badgeTokens.typography.lineHeight,
    fontWeight: badgeTokens.typography.fontWeight,
    ...(emphasis === "solid"
      ? {
          background: toneTokens.background,
          color: toneTokens.text
        }
      : {
          background: badgeTokens.subtle.background,
          color: badgeTokens.subtle.text
        })
  };
}
