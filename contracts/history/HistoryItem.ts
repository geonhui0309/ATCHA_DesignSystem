import type { PressableState } from "../common/status";

export interface HistoryItemData {
  day?: string;
  item?: string;
  name?: string;
  price?: string;
  state?: PressableState;
}
