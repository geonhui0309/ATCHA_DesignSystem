import type { IconDefinition, IconName } from "./Icon.types";

import airconFilterIcon from "./assets/vehicle/aircon-filter.svg";
import addIcon from "./assets/system/add.svg";
import addIconMarkup from "./assets/system/add.svg?raw";
import airFilterIcon from "./assets/vehicle/air-filter.svg";
import arrowDownNarrowIcon from "./assets/system/arrow-down-narrow.svg";
import arrowDownNarrowIconMarkup from "./assets/system/arrow-down-narrow.svg?raw";
import arrowLeftNarrowIcon from "./assets/system/arrow-left-narrow.svg";
import arrowLeftNarrowIconMarkup from "./assets/system/arrow-left-narrow.svg?raw";
import arrowRightNarrowIcon from "./assets/system/arrow-right-narrow.svg";
import arrowRightNarrowIconMarkup from "./assets/system/arrow-right-narrow.svg?raw";
import arrowUpNarrowIcon from "./assets/system/arrow-up-narrow.svg";
import arrowUpNarrowIconMarkup from "./assets/system/arrow-up-narrow.svg?raw";
import cancelIcon from "./assets/system/cancel.svg";
import cancelIconMarkup from "./assets/system/cancel.svg?raw";
import checkIcon from "./assets/system/check.svg";
import checkIconMarkup from "./assets/system/check.svg?raw";
import closeSolidIcon from "./assets/system/close-solid.svg";
import closeSolidIconMarkup from "./assets/system/close-solid.svg?raw";
import coolantIcon from "./assets/vehicle/coolant.svg";
import engineOilIcon from "./assets/vehicle/engine-oil.svg";
import errorIcon from "./assets/system/error.svg";
import errorIconMarkup from "./assets/system/error.svg?raw";
import exteriorRepairIcon from "./assets/vehicle/exterior-repair.svg";
import eyeIcon from "./assets/system/eye.svg";
import eyeIconMarkup from "./assets/system/eye.svg?raw";
import homeIcon from "./assets/system/home.svg";
import homeIconMarkup from "./assets/system/home.svg?raw";
import inProgressIcon from "./assets/system/in-progress.svg";
import inProgressIconMarkup from "./assets/system/in-progress.svg?raw";
import listIcon from "./assets/system/list.svg";
import listIconMarkup from "./assets/system/list.svg?raw";
import mapIcon from "./assets/system/map.svg";
import mapIconMarkup from "./assets/system/map.svg?raw";
import notificationAlertIcon from "./assets/system/notification-alert.svg";
import notificationAlertIconMarkup from "./assets/system/notification-alert.svg?raw";
import notificationCancelIcon from "./assets/system/notification-cancel.svg";
import notificationCancelIconMarkup from "./assets/system/notification-cancel.svg?raw";
import notificationCautionIcon from "./assets/system/notification-caution.svg";
import notificationCautionIconMarkup from "./assets/system/notification-caution.svg?raw";
import notificationCheckIcon from "./assets/system/notification-check.svg";
import notificationCheckIconMarkup from "./assets/system/notification-check.svg?raw";
import notificationOnIcon from "./assets/system/notification-on.svg";
import notificationOnIconMarkup from "./assets/system/notification-on.svg?raw";
import oilFilterIcon from "./assets/vehicle/oil-filter.svg";
import passwordInvisibleIcon from "./assets/system/password-invisible.svg";
import passwordInvisibleIconMarkup from "./assets/system/password-invisible.svg?raw";
import passwordVisibleIcon from "./assets/system/password-visible.svg";
import passwordVisibleIconMarkup from "./assets/system/password-visible.svg?raw";
import passwordVisibleOutlinedIcon from "./assets/system/password-visible-outlined.svg";
import passwordVisibleOutlinedIconMarkup from "./assets/system/password-visible-outlined.svg?raw";
import pinIcon from "./assets/system/pin.svg";
import pinIconMarkup from "./assets/system/pin.svg?raw";
import profileIcon from "./assets/system/profile.svg";
import profileIconMarkup from "./assets/system/profile.svg?raw";
import recordIcon from "./assets/system/record.svg";
import recordIconMarkup from "./assets/system/record.svg?raw";
import repairIcon from "./assets/system/repair.svg";
import repairIconMarkup from "./assets/system/repair.svg?raw";
import scheduleIcon from "./assets/system/schedule.svg";
import scheduleIconMarkup from "./assets/system/schedule.svg?raw";
import screenThemeIcon from "./assets/system/screen-theme.svg";
import screenThemeIconMarkup from "./assets/system/screen-theme.svg?raw";
import searchIcon from "./assets/system/search.svg";
import searchIconMarkup from "./assets/system/search.svg?raw";
import settingsIcon from "./assets/system/settings.svg";
import settingsIconMarkup from "./assets/system/settings.svg?raw";
import tireReplacementIcon from "./assets/vehicle/tire-replacement.svg";
import vehicleMaintenanceIcon from "./assets/vehicle/vehicle-maintenance.svg";
import washerFluidIcon from "./assets/vehicle/washer-fluid.svg";
import wiperIcon from "./assets/vehicle/wiper.svg";

const systemAsset = (src: string, markup: string): IconDefinition => ({
  family: "system",
  kind: "asset",
  src,
  markup
});

export const iconRegistry: Record<IconName, IconDefinition> = {
  add: systemAsset(addIcon, addIconMarkup),
  home: systemAsset(homeIcon, homeIconMarkup),
  repair: systemAsset(repairIcon, repairIconMarkup),
  schedule: systemAsset(scheduleIcon, scheduleIconMarkup),
  record: systemAsset(recordIcon, recordIconMarkup),
  profile: systemAsset(profileIcon, profileIconMarkup),
  search: systemAsset(searchIcon, searchIconMarkup),
  cancel: systemAsset(cancelIcon, cancelIconMarkup),
  check: systemAsset(checkIcon, checkIconMarkup),
  "password-visible": systemAsset(passwordVisibleIcon, passwordVisibleIconMarkup),
  "password-invisible": systemAsset(passwordInvisibleIcon, passwordInvisibleIconMarkup),
  "password-visible-outlined": systemAsset(passwordVisibleOutlinedIcon, passwordVisibleOutlinedIconMarkup),
  "notification-on": systemAsset(notificationOnIcon, notificationOnIconMarkup),
  settings: systemAsset(settingsIcon, settingsIconMarkup),
  pin: systemAsset(pinIcon, pinIconMarkup),
  "screen-theme": systemAsset(screenThemeIcon, screenThemeIconMarkup),
  map: systemAsset(mapIcon, mapIconMarkup),
  "notification-alert": systemAsset(notificationAlertIcon, notificationAlertIconMarkup),
  "notification-caution": systemAsset(notificationCautionIcon, notificationCautionIconMarkup),
  "notification-check": systemAsset(notificationCheckIcon, notificationCheckIconMarkup),
  "in-progress": systemAsset(inProgressIcon, inProgressIconMarkup),
  "notification-cancel": systemAsset(notificationCancelIcon, notificationCancelIconMarkup),
  eye: systemAsset(eyeIcon, eyeIconMarkup),
  error: systemAsset(errorIcon, errorIconMarkup),
  "close-solid": systemAsset(closeSolidIcon, closeSolidIconMarkup),
  "arrow-left-narrow": systemAsset(arrowLeftNarrowIcon, arrowLeftNarrowIconMarkup),
  "arrow-right-narrow": systemAsset(arrowRightNarrowIcon, arrowRightNarrowIconMarkup),
  "arrow-up-narrow": systemAsset(arrowUpNarrowIcon, arrowUpNarrowIconMarkup),
  "arrow-down-narrow": systemAsset(arrowDownNarrowIcon, arrowDownNarrowIconMarkup),
  list: systemAsset(listIcon, listIconMarkup),
  "engine-oil": { family: "vehicle", kind: "asset", src: engineOilIcon },
  "tire-replacement": { family: "vehicle", kind: "asset", src: tireReplacementIcon },
  "exterior-repair": { family: "vehicle", kind: "asset", src: exteriorRepairIcon },
  "vehicle-maintenance": { family: "vehicle", kind: "asset", src: vehicleMaintenanceIcon },
  "washer-fluid": { family: "vehicle", kind: "asset", src: washerFluidIcon },
  coolant: { family: "vehicle", kind: "asset", src: coolantIcon },
  wiper: { family: "vehicle", kind: "asset", src: wiperIcon },
  "aircon-filter": { family: "vehicle", kind: "asset", src: airconFilterIcon },
  "air-filter": { family: "vehicle", kind: "asset", src: airFilterIcon },
  "oil-filter": { family: "vehicle", kind: "asset", src: oilFilterIcon }
};
