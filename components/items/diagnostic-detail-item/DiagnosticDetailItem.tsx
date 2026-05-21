import type { HTMLAttributes } from "react";

import { statusWarningAsset } from "../../shared/assets";
import { cx } from "../../shared/foundation";
import "./diagnostic-detail-item.css";

export const defaultDiagnosticDetailItemIcon = statusWarningAsset;

export interface DiagnosticDetailItemProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  iconSrc?: string;
}

export function DiagnosticDetailItem({
  title = "엔진 경고등",
  description = "연료 필터 혹은 연료 공급장치에 누유시 점등",
  iconSrc = defaultDiagnosticDetailItemIcon,
  className,
  ...rest
}: DiagnosticDetailItemProps) {
  return (
    <div {...rest} className={cx("ds-diagnostic-detail-item", className)}>
      <img className="ds-diagnostic-detail-item__icon" src={iconSrc} alt="" />
      <div className="ds-diagnostic-detail-item__content">
        <span className="ds-diagnostic-detail-item__title">{title}</span>
        <span className="ds-diagnostic-detail-item__description">{description}</span>
      </div>
    </div>
  );
}
