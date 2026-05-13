export const FONT_WEIGHT_MAP = {
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400
} as const;

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
