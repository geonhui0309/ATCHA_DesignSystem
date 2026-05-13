export const radioButtonTokens = {
  wrapperSize: "24px",
  controlSize: "20px",
  padding: "var(--spacing-2)"
} as const;

export type RadioButtonState = "default" | "pressed" | "disabled";
