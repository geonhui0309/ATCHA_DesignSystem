export type PatternPlacement =
  | "screen-top"
  | "screen-middle"
  | "screen-bottom"
  | "screen-full"
  | "modal-body";

export interface PatternMetadata {
  name: string;
  purpose: string;
  useWhen: string[];
  avoidWhen: string[];
  requiredProps: string[];
  commonlyUsedWith: string[];
  alternatives: string[];
  recommendedPlacement: PatternPlacement[];
}
