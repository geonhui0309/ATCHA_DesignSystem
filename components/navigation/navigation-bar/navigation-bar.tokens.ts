export const navigationBarTokens = {
  width: "100%",
  maxWidth: "360px",
  height: "56px",
  paddingInline: "var(--spacing-24)",
  paddingBlock: "var(--spacing-16)"
} as const;

export type NavigationBarVariant = "logo" | "back" | "default";
