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
import notificationCancelIcon from "./assets/system/notification-cancel.svg";
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
  "notification-alert": {
    family: "system",
    kind: "inline",
    viewBox: "0 0 24 24",
    paths: [
      {
        d: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM13 17.545H11V15.545H13V17.545ZM13 13.73H11L10.7 6.46H13.3L13 13.73Z",
        fill: "currentColor"
      }
    ]
  },
  "notification-caution": {
    family: "system",
    kind: "inline",
    viewBox: "0 0 24 24",
    paths: [
      {
        d: "M21.3551 18.375L12.9401 3.80001C12.5251 3.08001 11.4801 3.08001 11.0651 3.80001L2.64507 18.375C2.23007 19.095 2.75007 20 3.58507 20H20.4151C21.2501 20 21.7701 19.095 21.3551 18.375ZM12.8151 17.835H11.1901V16.21H12.8151V17.835ZM12.8151 14.62H11.1901L10.9201 8.66001H13.0851L12.8151 14.62Z",
        fill: "currentColor"
      }
    ]
  },
  "notification-check": {
    family: "system",
    kind: "inline",
    viewBox: "0 0 24 24",
    paths: [
      {
        d: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM11.25 16.06L6.72 11.53L7.78 10.47L11.25 13.94L16.72 8.47L17.78 9.53L11.25 16.06Z",
        fill: "currentColor"
      }
    ]
  },
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
