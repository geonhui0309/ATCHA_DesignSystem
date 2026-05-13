function assetUrl(path: string) {
  return new URL(path, import.meta.url).href;
}

function svgDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const horizontalDividerAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="1" viewBox="0 0 360 1" fill="none"><rect width="360" height="1" fill="#E6E7EC"/></svg>`
);

export const atchaLogoAsset = svgDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="19" viewBox="0 0 79 19" fill="none"><text x="0" y="14" fill="#111111" font-family="Asta Sans, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="0.3">ATCHA</text></svg>`
);

export const placeholderVehicleAsset = assetUrl("../../icons/assets/vehicle/vehicle-maintenance.svg");
export const authorityAsset = assetUrl("../../icons/assets/system/profile.svg");
export const statusWarningAsset = assetUrl("../../icons/assets/system/error.svg");
export const statusCompleteAsset = assetUrl("../../icons/assets/system/check.svg");
export const statusWrongAsset = assetUrl("../../icons/assets/system/cancel.svg");
export const thumbnailItemAsset = assetUrl("../../icons/assets/vehicle/engine-oil.svg");
export const thumbnailDetailAsset = assetUrl("../../icons/assets/vehicle/engine-oil.svg");
export const thumbnailShopDetailAsset = assetUrl("../../icons/assets/system/repair.svg");
export const thumbnailShopLogoAsset = assetUrl("../../icons/assets/system/profile.svg");
export const bannerProgressAsset = assetUrl("../../icons/assets/system/repair.svg");

export const vehicleWarningAssets = [
  assetUrl("../../icons/assets/vehicle/engine-oil.svg"),
  assetUrl("../../icons/assets/vehicle/coolant.svg"),
  assetUrl("../../icons/assets/vehicle/washer-fluid.svg"),
  assetUrl("../../icons/assets/vehicle/wiper.svg"),
  assetUrl("../../icons/assets/vehicle/tire-replacement.svg")
] as const;
