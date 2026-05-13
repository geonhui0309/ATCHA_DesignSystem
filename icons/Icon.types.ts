export type IconFamily = "system" | "vehicle" | "vehicle-warning" | "status";

export type SystemIconName =
  | "add"
  | "home"
  | "repair"
  | "schedule"
  | "record"
  | "profile"
  | "search"
  | "cancel"
  | "check"
  | "password-visible"
  | "password-invisible"
  | "password-visible-outlined"
  | "notification-on"
  | "settings"
  | "pin"
  | "screen-theme"
  | "map"
  | "notification-alert"
  | "notification-caution"
  | "notification-check"
  | "in-progress"
  | "notification-cancel"
  | "eye"
  | "error"
  | "close-solid"
  | "arrow-left-narrow"
  | "arrow-right-narrow"
  | "arrow-up-narrow"
  | "arrow-down-narrow"
  | "list";

export type VehicleIconName =
  | "engine-oil"
  | "tire-replacement"
  | "exterior-repair"
  | "vehicle-maintenance"
  | "washer-fluid"
  | "coolant"
  | "wiper"
  | "aircon-filter"
  | "air-filter"
  | "oil-filter";

export type IconName = SystemIconName | VehicleIconName;

export interface InlinePathDefinition {
  d: string;
  fill?: string;
  fillRule?: "evenodd" | "nonzero";
  clipRule?: "evenodd" | "nonzero";
}

export interface InlineIconDefinition {
  family: IconFamily;
  kind: "inline";
  viewBox: string;
  paths: InlinePathDefinition[];
}

export interface AssetIconDefinition {
  family: IconFamily;
  kind: "asset";
  src: string;
  markup?: string;
}

export type IconDefinition = InlineIconDefinition | AssetIconDefinition;

export interface IconProps {
  name: IconName;
  size?: 16 | 20 | 24 | number;
  width?: number | string;
  height?: number | string;
}
