import coolantAsset from "../../icons/assets/vehicle/coolant.svg";
import engineOilAsset from "../../icons/assets/vehicle/engine-oil.svg";
import vehicleWarning0Asset from "../../icons/assets/vehicle-warning/image_0.png";
import vehicleWarning1Asset from "../../icons/assets/vehicle-warning/image_1.png";
import vehicleWarning2Asset from "../../icons/assets/vehicle-warning/image_2.png";
import vehicleWarning3Asset from "../../icons/assets/vehicle-warning/image_3.png";
import vehicleWarning4Asset from "../../icons/assets/vehicle-warning/image_4.png";
import notificationAlertAsset from "../../icons/assets/system/notification-alert.svg";
import notificationCancelAsset from "../../icons/assets/system/notification-cancel.svg";
import notificationCheckAsset from "../../icons/assets/system/notification-check.svg";
import vehicleImageAsset from "./images/vehicle-image.png";
import tireReplacementAsset from "../../icons/assets/vehicle/tire-replacement.svg";
import washerFluidAsset from "../../icons/assets/vehicle/washer-fluid.svg";
import wiperAsset from "../../icons/assets/vehicle/wiper.svg";

function svgDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const horizontalDividerAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="1" viewBox="0 0 360 1" fill="none"><rect width="360" height="1" fill="#E6E7EC"/></svg>`
);

export const atchaLogoAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="19" viewBox="0 0 79 19" fill="none"><text x="0" y="14" fill="#111111" font-family="Asta Sans, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="0.3">ATCHA</text></svg>`
);

export const placeholderVehicleAsset = vehicleImageAsset;

export const authorityAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="12" fill="#EEF1F5"/>
    <rect x="7" y="6.5" width="10" height="11" rx="2.5" fill="#B9C0CB"/>
    <rect x="9" y="9" width="6" height="1.5" rx="0.75" fill="#EEF1F5"/>
    <rect x="9" y="12" width="4.5" height="1.5" rx="0.75" fill="#EEF1F5"/>
  </svg>`
);

export const statusWarningAsset = vehicleWarning0Asset;
export const statusCompleteAsset = notificationCheckAsset;
export const statusWrongAsset = notificationCancelAsset;
export const thumbnailItemAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="4" fill="#EEF1F5"/>
    <rect x="13" y="14" width="38" height="36" rx="6" fill="#D8DDE5"/>
    <circle cx="25" cy="27" r="4" fill="#EEF1F5"/>
    <path d="M20 43l7.5-8 5.5 5 4-4 7 7H20Z" fill="#EEF1F5"/>
  </svg>`
);

export const thumbnailDetailAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="312" height="312" viewBox="0 0 312 312" fill="none">
    <rect width="312" height="312" fill="#EEF1F5"/>
    <rect x="72" y="76" width="168" height="160" rx="18" fill="#D8DDE5"/>
    <circle cx="120" cy="126" r="18" fill="#EEF1F5"/>
    <path d="M96 200l34-36 28 28 18-18 40 26H96Z" fill="#EEF1F5"/>
  </svg>`
);

export const thumbnailShopDetailAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="202" viewBox="0 0 360 202" fill="none">
    <rect width="360" height="202" fill="#EEF1F5"/>
    <rect x="110" y="52" width="140" height="98" rx="12" fill="#D8DDE5"/>
    <rect x="125" y="72" width="110" height="10" rx="5" fill="#EEF1F5"/>
    <rect x="125" y="92" width="84" height="10" rx="5" fill="#EEF1F5"/>
    <rect x="154" y="117" width="52" height="18" rx="9" fill="#EEF1F5"/>
  </svg>`
);

export const thumbnailShopLogoAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="16" fill="#EEF1F5"/>
    <path d="M10 13.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V21H10v-7.5Z" fill="#C4CBD6"/>
    <path d="M9 14h14l-1.3-3.2A2 2 0 0 0 19.85 9H12.15a2 2 0 0 0-1.85 1.8L9 14Z" fill="#D8DDE5"/>
  </svg>`
);

export const bannerProgressAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
    <path d="M4.5 9.5h1.8l1.5-3.8A2.5 2.5 0 0 1 10.1 4h4.8a2.5 2.5 0 0 1 2.3 1.7l1.5 3.8h.8A2.5 2.5 0 0 1 22 12v.5H2V12a2.5 2.5 0 0 1 2.5-2.5Z" fill="#5F6673"/>
    <circle cx="7.5" cy="12.5" r="1.5" fill="#394150"/>
    <circle cx="16.5" cy="12.5" r="1.5" fill="#394150"/>
  </svg>`
);

export const timelineProgressBarIconAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3.98 17H3.02C3.00895 17 3 16.991 3 16.98V11.02C3 11.009 3.00895 11 3.02 11H4.98646C4.99464 11 5.00199 10.995 5.00503 10.9874L6.99497 6.01257C6.99801 6.00498 7.00536 6 7.01354 6H16.9865C16.9946 6 17.002 6.00498 17.005 6.01257L18.995 10.9874C18.998 10.995 19.0054 11 19.0135 11H20.98C20.991 11 21 11.009 21 11.02V16.98C21 16.991 20.991 17 20.98 17H20.02C20.009 17 20 17.009 20 17.02V18.98C20 18.991 19.991 19 19.98 19H17.02C17.009 19 17 18.991 17 18.98V17.02C17 17.009 16.991 17 16.98 17H7.02C7.00895 17 7 17.009 7 17.02V18.98C7 18.991 6.99105 19 6.98 19H4.02C4.00895 19 4 18.991 4 18.98V17.02C4 17.009 3.99105 17 3.98 17Z" fill="#3822FF" stroke="#3822FF" stroke-width="1.5"/>
    <path d="M7.00877 9.97368L7.99544 7.01368C7.99816 7.00551 8.00581 7 8.01442 7H15.9856C15.9942 7 16.0018 7.00551 16.0046 7.01368L16.9912 9.97368C16.9955 9.98663 16.9859 10 16.9723 10H7.02775C7.0141 10 7.00446 9.98663 7.00877 9.97368Z" fill="#F7F8FA"/>
  </svg>`
);

export const vehicleWarningAssets = [
  vehicleWarning0Asset,
  vehicleWarning1Asset,
  vehicleWarning2Asset,
  vehicleWarning3Asset,
  vehicleWarning4Asset
] as const;
