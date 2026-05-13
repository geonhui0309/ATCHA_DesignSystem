import type { HTMLAttributes } from "react";

import { Icon } from "../../icons/Icon";
import type { VehicleIconName } from "../../icons/Icon.types";
import { cx } from "../shared/foundation";
import "./service-item.css";

const SERVICE_ITEM_CONFIG = {
  washer: {
    iconName: "washer-fluid",
    label: "워셔액"
  },
  coolant: {
    iconName: "coolant",
    label: "냉각수"
  },
  wiper: {
    iconName: "wiper",
    label: "와이퍼"
  },
  "aircon-filter": {
    iconName: "aircon-filter",
    label: "에어컨 필터"
  },
  "air-filter": {
    iconName: "air-filter",
    label: "에어 필터"
  },
  "oil-filter": {
    iconName: "oil-filter",
    label: "오일 필터"
  }
} as const;

export type ServiceItemType =
  | "washer"
  | "coolant"
  | "wiper"
  | "aircon-filter"
  | "air-filter"
  | "oil-filter";

export interface ServiceItemProps extends HTMLAttributes<HTMLDivElement> {
  serviceType?: ServiceItemType;
}

export function ServiceItem({
  serviceType = "washer",
  className,
  ...rest
}: ServiceItemProps) {
  const item = SERVICE_ITEM_CONFIG[serviceType] as {
    iconName: VehicleIconName;
    label: string;
  };

  return (
    <div
      {...rest}
      className={cx("ds-service-item", className)}
      data-service-type={serviceType}
    >
      <div className="ds-service-item__icon-wrap">
        <Icon className="ds-service-item__icon" name={item.iconName} size={24} />
      </div>
      <span className="ds-service-item__label">{item.label}</span>
    </div>
  );
}
