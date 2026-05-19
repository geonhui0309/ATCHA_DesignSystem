export type ComponentPlacement =
  | "screen-top"
  | "screen-middle"
  | "screen-bottom"
  | "screen-full"
  | "section-header"
  | "section-body"
  | "card-body";

export interface ComponentMetadata {
  name: string;
  purpose: string;
  useWhen: string[];
  avoidWhen: string[];
  requiredProps: string[];
  commonlyUsedWith: string[];
  alternatives: string[];
  recommendedPlacement: ComponentPlacement[];
}
