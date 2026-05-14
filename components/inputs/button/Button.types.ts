import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "filled" | "outlined" | "text";
export type ButtonState = "default" | "pressed" | "disabled";

export type ButtonSizeByVariant = {
  filled: "small" | "medium" | "large" | "xlarge";
  outlined: "medium" | "large";
  text: "xsmall" | "large";
};

export type VariantSize<V extends ButtonVariant> = ButtonSizeByVariant[V];

export type ButtonProps<V extends ButtonVariant = ButtonVariant> = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  label?: string;
  children?: ReactNode;
  variant?: V;
  size?: VariantSize<V>;
  state?: ButtonState;
  iconLeft?: boolean;
  iconRight?: boolean;
};
