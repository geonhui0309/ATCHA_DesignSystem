import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "information";
export type BadgeEmphasis = "solid" | "subtle";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  emphasis?: BadgeEmphasis;
  dot?: boolean;
  children: ReactNode;
}
