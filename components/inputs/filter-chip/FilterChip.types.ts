import type { HTMLAttributes, ReactNode } from "react";

export type FilterChipState = "default" | "pressed" | "disabled";

export interface FilterChipProps extends HTMLAttributes<HTMLSpanElement> {
  label?: ReactNode;
  selected?: boolean;
  state?: FilterChipState;
}
