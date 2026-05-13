import type { IconDefinition, IconName } from "./Icon.types";

const asset = (path: string) => new URL(path, import.meta.url).href;

export const iconRegistry: Record<IconName, IconDefinition> = {
  home: { family: "system", kind: "asset", src: asset("./assets/system/home.svg") },
  repair: { family: "system", kind: "asset", src: asset("./assets/system/repair.svg") },
  schedule: { family: "system", kind: "asset", src: asset("./assets/system/schedule.svg") },
  record: { family: "system", kind: "asset", src: asset("./assets/system/record.svg") },
  profile: { family: "system", kind: "asset", src: asset("./assets/system/profile.svg") },
  search: { family: "system", kind: "asset", src: asset("./assets/system/search.svg") },
  cancel: { family: "system", kind: "asset", src: asset("./assets/system/cancel.svg") },
  check: { family: "system", kind: "asset", src: asset("./assets/system/check.svg") },
  eye: { family: "system", kind: "asset", src: asset("./assets/system/eye.svg") },
  error: { family: "system", kind: "asset", src: asset("./assets/system/error.svg") },
  "close-solid": { family: "system", kind: "asset", src: asset("./assets/system/close-solid.svg") },
  "arrow-left-narrow": { family: "system", kind: "asset", src: asset("./assets/system/arrow-left-narrow.svg") },
  "arrow-right-narrow": { family: "system", kind: "asset", src: asset("./assets/system/arrow-right-narrow.svg") },
  "arrow-up-narrow": { family: "system", kind: "asset", src: asset("./assets/system/arrow-up-narrow.svg") },
  "arrow-down-narrow": { family: "system", kind: "asset", src: asset("./assets/system/arrow-down-narrow.svg") },
  list: { family: "system", kind: "asset", src: asset("./assets/system/list.svg") },
  "engine-oil": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/engine-oil.svg") },
  "tire-replacement": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/tire-replacement.svg") },
  "exterior-repair": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/exterior-repair.svg") },
  "vehicle-maintenance": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/vehicle-maintenance.svg") },
  "washer-fluid": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/washer-fluid.svg") },
  coolant: { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/coolant.svg") },
  wiper: { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/wiper.svg") },
  "aircon-filter": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/aircon-filter.svg") },
  "air-filter": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/air-filter.svg") },
  "oil-filter": { family: "vehicle", kind: "asset", src: asset("./assets/vehicle/oil-filter.svg") }
};
