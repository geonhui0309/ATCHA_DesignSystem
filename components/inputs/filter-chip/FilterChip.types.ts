import type { ButtonHTMLAttributes, ReactNode } from "react";

export type FilterChipState = "default" | "pressed" | "disabled";

export interface FilterChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode;
  selected?: boolean;
  state?: FilterChipState;
}
