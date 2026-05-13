import type { IconDefinition, IconName } from "./Icon.types";

import airconFilterIcon from "./assets/vehicle/aircon-filter.svg";
import addIcon from "./assets/system/add.svg";
import authorityCalenderIcon from "./assets/Authority/calender.svg";
import authorityCameraIcon from "./assets/Authority/camera.svg";
import authorityContactIcon from "./assets/Authority/contact.svg";
import authorityImagesIcon from "./assets/Authority/images.svg";
import authorityLocationIcon from "./assets/Authority/location.svg";
import authorityNotificationIcon from "./assets/Authority/notification.svg";
import airFilterIcon from "./assets/vehicle/air-filter.svg";
import arrowDownNarrowIcon from "./assets/system/arrow-down-narrow.svg";
import arrowLeftNarrowIcon from "./assets/system/arrow-left-narrow.svg";
import arrowRightNarrowIcon from "./assets/system/arrow-right-narrow.svg";
import arrowUpNarrowIcon from "./assets/system/arrow-up-narrow.svg";
import cancelIcon from "./assets/system/cancel.svg";
import checkIcon from "./assets/system/check.svg";
import coolantIcon from "./assets/vehicle/coolant.svg";
import engineOilIcon from "./assets/vehicle/engine-oil.svg";
import exteriorRepairIcon from "./assets/vehicle/exterior-repair.svg";
import eyeIcon from "./assets/system/eye.svg";
import homeIcon from "./assets/system/home.svg";
import inProgressIcon from "./assets/system/in-progress.svg";
import listIcon from "./assets/system/list.svg";
import mapIcon from "./assets/system/map.svg";
import notificationAlertIcon from "./assets/system/notification-alert.svg";
import notificationCancelIcon from "./assets/system/notification-cancel.svg";
import notificationCautionIcon from "./assets/system/notification-caution.svg";
import notificationCheckIcon from "./assets/system/notification-check.svg";
import notificationOnIcon from "./assets/system/notification-on.svg";
import oilFilterIcon from "./assets/vehicle/oil-filter.svg";
import passwordInvisibleIcon from "./assets/system/password-invisible.svg";
import passwordVisibleIcon from "./assets/system/password-visible.svg";
import passwordVisibleOutlinedIcon from "./assets/system/password-visible-outlined.svg";
import pinIcon from "./assets/system/pin.svg";
import profileIcon from "./assets/system/profile.svg";
import recordIcon from "./assets/system/record.svg";
import repairIcon from "./assets/system/repair.svg";
import scheduleIcon from "./assets/system/schedule.svg";
import screenThemeIcon from "./assets/system/screen-theme.svg";
import searchIcon from "./assets/system/search.svg";
import settingsIcon from "./assets/system/settings.svg";
import tireReplacementIcon from "./assets/vehicle/tire-replacement.svg";
import vehicleMaintenanceIcon from "./assets/vehicle/vehicle-maintenance.svg";
import washerFluidIcon from "./assets/vehicle/washer-fluid.svg";
import wiperIcon from "./assets/vehicle/wiper.svg";

export const iconRegistry: Record<IconName, IconDefinition> = {
  add: { family: "system", kind: "asset", src: addIcon },
  home: { family: "system", kind: "asset", src: homeIcon },
  repair: { family: "system", kind: "asset", src: repairIcon },
  schedule: { family: "system", kind: "asset", src: scheduleIcon },
  record: { family: "system", kind: "asset", src: recordIcon },
  profile: { family: "system", kind: "asset", src: profileIcon },
  search: { family: "system", kind: "asset", src: searchIcon },
  cancel: { family: "system", kind: "asset", src: cancelIcon },
  check: { family: "system", kind: "asset", src: checkIcon },
  "password-visible": { family: "system", kind: "asset", src: passwordVisibleIcon },
  "password-invisible": { family: "system", kind: "asset", src: passwordInvisibleIcon },
  "password-visible-outlined": { family: "system", kind: "asset", src: passwordVisibleOutlinedIcon },
  "notification-on": { family: "system", kind: "asset", src: notificationOnIcon },
  settings: { family: "system", kind: "asset", src: settingsIcon },
  pin: { family: "system", kind: "asset", src: pinIcon },
  "screen-theme": { family: "system", kind: "asset", src: screenThemeIcon },
  map: { family: "system", kind: "asset", src: mapIcon },
  "notification-alert": { family: "system", kind: "asset", src: notificationAlertIcon },
  "notification-caution": { family: "system", kind: "asset", src: notificationCautionIcon },
  "notification-check": { family: "system", kind: "asset", src: notificationCheckIcon },
  "in-progress": { family: "system", kind: "asset", src: inProgressIcon },
  "notification-cancel": { family: "system", kind: "asset", src: notificationCancelIcon },
  eye: { family: "system", kind: "asset", src: eyeIcon },
  "arrow-left-narrow": { family: "system", kind: "asset", src: arrowLeftNarrowIcon },
  "arrow-right-narrow": { family: "system", kind: "asset", src: arrowRightNarrowIcon },
  "arrow-up-narrow": { family: "system", kind: "asset", src: arrowUpNarrowIcon },
  "arrow-down-narrow": { family: "system", kind: "asset", src: arrowDownNarrowIcon },
  list: { family: "system", kind: "asset", src: listIcon },
  "authority-camera": { family: "authority", kind: "asset", src: authorityCameraIcon },
  "authority-notification": { family: "authority", kind: "asset", src: authorityNotificationIcon },
  "authority-calender": { family: "authority", kind: "asset", src: authorityCalenderIcon },
  "authority-images": { family: "authority", kind: "asset", src: authorityImagesIcon },
  "authority-contact": { family: "authority", kind: "asset", src: authorityContactIcon },
  "authority-location": { family: "authority", kind: "asset", src: authorityLocationIcon },
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
