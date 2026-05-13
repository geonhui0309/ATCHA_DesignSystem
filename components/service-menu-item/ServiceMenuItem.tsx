import type { HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { VehicleIconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";
import "./service-menu-item.css";

const MENU_ITEM_CONFIG = {
  "engine-oil": {
    iconName: "engine-oil",
    label: "엔진오일"
  },
  "tire": {
    iconName: "tire-replacement",
    label: "타이어 교체"
  },
  "exterior-repair": {
    iconName: "exterior-repair",
    label: "외관 수리",
    flipped: true
  },
  "vehicle-maintenance": {
    iconName: "vehicle-maintenance",
    label: "차량 정비"
  }
} satisfies Record<string, { iconName: VehicleIconName; label: string; flipped?: boolean }>;

export type ServiceMenuItemCategory =
  | "engine-oil"
  | "tire"
  | "exterior-repair"
  | "vehicle-maintenance";

export interface ServiceMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  category?: ServiceMenuItemCategory;
}

export function ServiceMenuItem({
  category = "engine-oil",
  className,
  ...rest
}: ServiceMenuItemProps) {
  const item = MENU_ITEM_CONFIG[category];

  return (
    <div
      {...rest}
      className={cx("ds-service-menu-item", className)}
      data-category={category}
    >
      <span className="ds-service-menu-item__icon-frame">
        <span className="ds-service-menu-item__icon-inner">
          <Icon
            className="ds-service-menu-item__icon"
            name={item.iconName}
            width={48}
            height={48}
          />
        </span>
      </span>
      <span className="ds-service-menu-item__label">{item.label}</span>
    </div>
  );
}
