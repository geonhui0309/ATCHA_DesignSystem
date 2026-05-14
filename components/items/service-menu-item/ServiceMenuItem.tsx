import type { HTMLAttributes } from "react";

import type { ServiceMenuItemCategory } from "../../../contracts/service/ServiceMenuItem";
import { cx } from "../../shared/foundation";
import engineOilIconMarkup from "../../../icons/assets/vehicle/engine-oil.svg?raw";
import exteriorRepairIconMarkup from "../../../icons/assets/vehicle/exterior-repair.svg?raw";
import tireReplacementIconMarkup from "../../../icons/assets/vehicle/tire-replacement.svg?raw";
import vehicleMaintenanceIconMarkup from "../../../icons/assets/vehicle/vehicle-maintenance.svg?raw";
import "./service-menu-item.css";

const MENU_ITEM_CONFIG = {
  "engine-oil": {
    iconMarkup: engineOilIconMarkup,
    label: "엔진오일"
  },
  "tire": {
    iconMarkup: tireReplacementIconMarkup,
    label: "타이어 교체"
  },
  "exterior-repair": {
    iconMarkup: exteriorRepairIconMarkup,
    label: "외관 수리",
    flipped: true
  },
  "vehicle-maintenance": {
    iconMarkup: vehicleMaintenanceIconMarkup,
    label: "차량 정비"
  }
} satisfies Record<string, { iconMarkup: string; label: string; flipped?: boolean }>;

export interface ServiceMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  category?: ServiceMenuItemCategory;
}

function toBrandIconSvg(markup: string) {
  return markup
    .replace(/fill="var\(--fill-[^)]*\)"/g, 'fill="currentColor"')
    .replace(/stroke="var\(--stroke-[^)]*\)"/g, 'stroke="currentColor"')
    .replace(/fill="#[0-9A-Fa-f]{3,8}"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9A-Fa-f]{3,8}"/g, 'stroke="currentColor"');
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
          <span
            className="ds-service-menu-item__icon"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: toBrandIconSvg(item.iconMarkup) }}
          />
        </span>
      </span>
      <span className="ds-service-menu-item__label">{item.label}</span>
    </div>
  );
}
