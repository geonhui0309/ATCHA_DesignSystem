export const iconButtonTokens = {
  size: {
    large: "24px",
    medium: "20px",
    small: "16px"
  }
} as const;

export type IconButtonSize = keyof typeof iconButtonTokens.size;
export type IconButtonState = "default" | "pressed" | "disabled";
