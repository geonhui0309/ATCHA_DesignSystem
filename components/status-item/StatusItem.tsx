import type { HTMLAttributes } from "react";

import { statusWarningAsset } from "../shared/assets";
import { cx } from "../shared/foundation";
import "./status-item.css";

export const defaultStatusItemIcon = statusWarningAsset;

export interface StatusItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  iconSrc?: string;
}

export function StatusItem({
  title = "엔진 경고등",
  description = "연료 필터 혹은 연료 공급장치에 누유시 점등",
  iconSrc = defaultStatusItemIcon,
  className,
  ...rest
}: StatusItemProps) {
  return (
    <div {...rest} className={cx("ds-status-item", className)}>
      <img className="ds-status-item__icon" src={iconSrc} alt="" />
      <div className="ds-status-item__content">
        <span className="ds-status-item__title">{title}</span>
        <span className="ds-status-item__description">{description}</span>
      </div>
    </div>
  );
}
