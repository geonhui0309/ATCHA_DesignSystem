import type { HTMLAttributes, ReactNode } from "react";

export type ChoiceChipState = "default" | "pressed" | "disabled";

export interface ChoiceChipProps extends HTMLAttributes<HTMLSpanElement> {
  value?: ReactNode;
  selected?: boolean;
  state?: ChoiceChipState;
}
