import type { PressableState } from "../common/status";

export interface ShopTimeSlotData {
  value: string;
  selected?: boolean;
  state?: "default" | "pressed" | "disabled";
}

export interface ShopItemData {
  address?: string;
  name?: string;
  state?: PressableState;
  categories?: string[];
  timeSlots?: ShopTimeSlotData[];
}
