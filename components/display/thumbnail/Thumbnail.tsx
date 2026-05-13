import type { HTMLAttributes } from "react";

import {
  thumbnailDetailAsset,
  thumbnailItemAsset,
  thumbnailShopDetailAsset,
  thumbnailShopLogoAsset
} from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./thumbnail.css";

const THUMBNAIL_ASSETS = {
  "item-thumbnail": thumbnailItemAsset,
  "item-detail-thumbnail": thumbnailDetailAsset,
  "shop-detail-thumbnail": thumbnailShopDetailAsset,
  "shop-logo-thumbnail": thumbnailShopLogoAsset
} as const;

export type ThumbnailVariant =
  | "item-thumbnail"
  | "item-detail-thumbnail"
  | "shop-detail-thumbnail"
  | "shop-logo-thumbnail";

export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ThumbnailVariant;
}

export function Thumbnail({
  variant = "item-thumbnail",
  className,
  ...rest
}: ThumbnailProps) {
  return (
    <div {...rest} className={cx("ds-thumbnail", className)} data-variant={variant}>
      <img className="ds-thumbnail__logo" src={THUMBNAIL_ASSETS[variant]} alt="" />
      <div className="ds-thumbnail__overlay" />
    </div>
  );
}
