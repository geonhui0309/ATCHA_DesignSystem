import type { CSSProperties } from "react";

import { FONT_WEIGHT_MAP } from "../shared/foundation";
import type {
  ButtonState,
  ButtonVariant,
  VariantSize
} from "./Button.types";

const buttonTokens = {
  radius: {
    default: "var(--radius-large)"
  },
  size: {
    filled: {
      small: {
        height: "44px",
        paddingInline: "var(--spacing-8)",
        fontSize: "var(--font-size-1)",
        lineHeight: "var(--line-height-2)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold,
        width: "62px"
      },
      medium: {
        height: "44px",
        paddingInline: "var(--spacing-12)",
        fontSize: "var(--font-size-2)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold,
        width: "84px"
      },
      large: {
        height: "44px",
        paddingInline: "var(--spacing-16)",
        fontSize: "var(--font-size-2)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold,
        width: "152px"
      },
      xlarge: {
        height: "44px",
        paddingInline: "var(--spacing-24)",
        fontSize: "var(--font-size-3)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.Bold,
        width: "312px"
      }
    },
    outlined: {
      medium: {
        height: "44px",
        paddingInline: "var(--spacing-12)",
        fontSize: "var(--font-size-2)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold,
        width: "84px"
      },
      large: {
        height: "44px",
        paddingInline: "var(--spacing-16)",
        fontSize: "var(--font-size-2)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold,
        width: "152px"
      }
    },
    text: {
      xsmall: {
        height: "32px",
        paddingInline: "var(--spacing-8)",
        gap: "var(--spacing-2)",
        fontSize: "var(--font-size-1)",
        lineHeight: "var(--line-height-2)",
        fontWeight: FONT_WEIGHT_MAP.SemiBold
      },
      large: {
        height: "44px",
        paddingInline: "var(--spacing-12)",
        gap: "var(--spacing-2)",
        fontSize: "var(--font-size-3)",
        lineHeight: "var(--line-height-3)",
        fontWeight: FONT_WEIGHT_MAP.Bold
      }
    }
  },
  variant: {
    filled: {
      default: {
        background: "var(--filled-background-default)",
        color: "var(--filled-text-default)",
        borderColor: "transparent"
      },
      pressed: {
        background:
          "linear-gradient(90deg, rgba(19, 20, 23, 0.1) 0%, rgba(19, 20, 23, 0.1) 100%), linear-gradient(90deg, rgb(56, 34, 255) 0%, rgb(56, 34, 255) 100%)",
        color: "var(--filled-text-default)",
        borderColor: "transparent"
      },
      disabled: {
        background: "var(--filled-background-disabled)",
        color: "var(--filled-text-disabled)",
        borderColor: "transparent"
      }
    },
    outlined: {
      default: {
        background: "transparent",
        color: "var(--text-secondary)",
        borderColor: "var(--border-default)"
      },
      pressed: {
        background: "var(--interaction-pressed)",
        color: "var(--text-secondary)",
        borderColor: "var(--border-default)"
      },
      disabled: {
        background: "transparent",
        color: "var(--text-disabled)",
        borderColor: "var(--border-disabled)"
      }
    },
    text: {
      default: {
        background: "transparent",
        color: "var(--text-primary)"
      },
      pressed: {
        background: "transparent",
        color: "var(--text-secondary)"
      },
      disabled: {
        background: "transparent",
        color: "var(--text-disabled)"
      }
    }
  },
  icon: {
    xsmall: "16px",
    large: "20px"
  }
} as const;

export function getButtonStyle<V extends ButtonVariant>(
  variant: V,
  size: VariantSize<V>,
  state: ButtonState
): CSSProperties {
  const sizeTokens =
    variant === "filled"
      ? buttonTokens.size.filled[size as keyof typeof buttonTokens.size.filled]
      : variant === "outlined"
        ? buttonTokens.size.outlined[size as keyof typeof buttonTokens.size.outlined]
        : buttonTokens.size.text[size as keyof typeof buttonTokens.size.text];

  const variantTokens = buttonTokens.variant[variant][state];

  return {
    height: sizeTokens.height,
    paddingInline: sizeTokens.paddingInline,
    width: "width" in sizeTokens ? sizeTokens.width : undefined,
    gap: "gap" in sizeTokens ? sizeTokens.gap : undefined,
    fontSize: sizeTokens.fontSize,
    lineHeight: sizeTokens.lineHeight,
    fontWeight: sizeTokens.fontWeight,
    borderRadius: variant === "text" ? undefined : buttonTokens.radius.default,
    background: variantTokens.background,
    color: variantTokens.color,
    borderColor: "borderColor" in variantTokens ? variantTokens.borderColor : undefined
  };
}

export function getButtonTextIconSize(size: "xsmall" | "large") {
  return size === "xsmall" ? buttonTokens.icon.xsmall : buttonTokens.icon.large;
}
